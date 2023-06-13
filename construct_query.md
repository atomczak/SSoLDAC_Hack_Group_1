PREFIX bsdd: <http://bsdd.buildingsmart.org/def#>
construct {
    ?parent bsdd:childClassification ?class.
    ?class bsdd:code ?classcode;
           bsdd:name ?classname;
           bsdd:classificationProperty ?prop.
    ?prop bsdd:code ?propcode;
          bsdd:name ?propname.
} WHERE {
    VALUES ?classification {
        <https://identifier.buildingsmart.org/uri/etim/etim-9.0/class/EG000030> <https://identifier.buildingsmart.org/uri/molio/cciconstruction-1.0/class/L-R__> <https://identifier.buildingsmart.org/uri/molio/cciconstruction-1.0/class/L-E__> <https://identifier.buildingsmart.org/uri/nbs/uniclass2015-1/class/Pr_70> <https://identifier.buildingsmart.org/uri/nbs/uniclass2015-1/class/Pr_25>
    }
    
        ?classification bsdd:childClassification* ?class 
        {
        optional { ?parent bsdd:childClassification ?class.}
            ?class bsdd:code ?classcode;
                   bsdd:name ?classname .
        }
        union {
            ?class bsdd:classificationProperty ?prop .
            ?prop bsdd:code ?propcode;
                  bsdd:name ?propname.
        }
    
}