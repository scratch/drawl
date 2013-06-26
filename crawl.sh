#!/bin/bash
# crawl.sh -- Find URLs which are Drupal sites.

# Invariant: The first field of CSV should be the
#            URL to crawl.
#
for i in `cat $1 | cut -d, -f1`
do
    # test
    #num=`cat xx |grep -i drupal | wc -l`
    #num=`curl -sIL drupal.org |grep -i drupal | wc -l`

    printf "Checking site: %s --  " $i
    curl -sL $i -D /tmp/header.log > /tmp/full.html

    hdrhasdrupal=`grep -i drupal /tmp/header.log | wc -l`
    if (( $hdrhasdrupal > 0 ))
    then
	echo "Drupal site"
    else
	printf "possily other site ..."
	numdrupaldirs=`grep "sites.default" /tmp/full.html | wc -l`
	if (( $numdrupaldirs > 0 ))
	then
	   printf "Contains Drupal Dir structures; Drupal site\n"
	else
	    printf " other site\n"
	fi
    fi
done
