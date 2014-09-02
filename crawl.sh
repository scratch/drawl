#!/bin/bash
# crawl.sh -- Find URLs which are Drupal sites.
#
# Usage: ./crawl.sh <hosting csv file>
#
# Invariant: 
#   1. The first field of hosting CSV should be the  URL to crawl.
#   2. Expects a file called webhosting.csv that has list of 
#      hosting providers, one per line.
#
#



# HostingProviderInfo: use dig cmd (much faster) to see if service 
#     provider matches, else take the slower traceroute option.
#
#
function HostingProviderInfo() {
    host=`echo $1 | sed -e 's/http:\/\///; s/\/.*//; s/www\.//'`
    printf "Traceroute on: %s \n" $host
    dig $host > /tmp/xx
    grep -iw --only-matching -m 1 -f  webhosting.csv  /tmp/xx
    if [ $? != 0 ]
    then
	traceroute -m 16 $host > /tmp/xx
	grep -iw --only-matching -m 1 -f  webhosting.csv  /tmp/xx
    fi

    return $?
}


# main()
for i in `cat $1 | cut -d, -f1`  # parse CSV file and get the first field
do
    # test
    #num=`cat xx |grep -i drupal | wc -l`
    #num=`curl -sIL drupal.org |grep -i drupal | wc -l`

    printf "%s, " $i
    curl -sL $i -D /tmp/header.log > /tmp/full.html

    # TODO: 
    # Function IsDrupalSiteRule(hdr,fullHTML);
    hdrhasdrupal=`grep -i drupal /tmp/header.log | wc -l`
    if (( $hdrhasdrupal > 0 ))
    then
	isDrupal='Drupal Site\n'
	printf "Drupal site\n"
	HostingProviderInfo $i
    else
	#printf "possibly other site ..."
	numdrupaldirs=`grep "sites.default" /tmp/full.html | wc -l`
	if (( $numdrupaldirs > 0 ))
	then
	    printf "Contains Drupal Dir structures; Drupal site\n"
	    isDrupal='drupal site'
	    HostingProviderInfo $i
	else
	    printf "non-drupal site\n"
	    isDrupal='NOT Drupal'
	    HostingProviderInfo $i
	fi
    fi
done

