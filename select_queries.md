PREFIX bsdd: <http://bsdd.buildingsmart.org/def#>
SELECT * {
  <https://identifier.buildingsmart.org/uri/molio/cciconstruction-1.0/class/L-E__> bsdd:childClassification* ?x .
    ?x bsdd:code ?code;
       bsdd:name ?name
}

PREFIX bsdd: <http://bsdd.buildingsmart.org/def#>
SELECT * {
  <https://identifier.buildingsmart.org/uri/nbs/uniclass2015-1/class/Pr_70> bsdd:childClassification* ?x .
    ?x bsdd:code ?code;
       bsdd:name ?name
} 

PREFIX bsdd: <http://bsdd.buildingsmart.org/def#>
SELECT * {
  <https://identifier.buildingsmart.org/uri/molio/cciconstruction-1.0/class/L-R__> bsdd:childClassification* ?x .
    ?x bsdd:code ?code;
       bsdd:name ?name
} 

PREFIX bsdd: <http://bsdd.buildingsmart.org/def#>
SELECT * {
  <https://identifier.buildingsmart.org/uri/nbs/uniclass2015-1/class/Pr_25> bsdd:childClassification* ?x .
    ?x bsdd:code ?code;
       bsdd:name ?name
} 

# full query

PREFIX bsdd: <http://bsdd.buildingsmart.org/def#>
SELECT * {
    {
        <https://identifier.buildingsmart.org/uri/molio/cciconstruction-1.0/class/L-R__> bsdd:childClassification* ?class 
        {
            ?class bsdd:code ?classcode;
                   bsdd:name ?classname .
        }
        union {
            ?class bsdd:classificationProperty ?prop .
            ?prop bsdd:code ?propcode;
                  bsdd:name ?propname.
        }
    }
    union {
        <https://identifier.buildingsmart.org/uri/molio/cciconstruction-1.0/class/L-E__> bsdd:childClassification* ?class 
        {
            ?class bsdd:code ?classcode;
                   bsdd:name ?classname .
        }
        union {
            ?class bsdd:classificationProperty ?prop .
            ?prop bsdd:code ?propcode;
                  bsdd:name ?propname.
        }
    }
    union {
        <https://identifier.buildingsmart.org/uri/nbs/uniclass2015-1/class/Pr_70> bsdd:childClassification* ?class 
        {
            ?class bsdd:code ?classcode;
                   bsdd:name ?classname .
        }
        union {
            ?class bsdd:classificationProperty ?prop .
            ?prop bsdd:code ?propcode;
                  bsdd:name ?propname.
        }
    }
    union {
        <https://identifier.buildingsmart.org/uri/nbs/uniclass2015-1/class/Pr_25> bsdd:childClassification* ?class 
        {
            ?class bsdd:code ?classcode;
                   bsdd:name ?classname .
        }
        union {
            ?class bsdd:classificationProperty ?prop .
            ?prop bsdd:code ?propcode;
                  bsdd:name ?propname.
        }
    }
    union {
        <https://identifier.buildingsmart.org/uri/etim/etim-9.0/class/EG000030> bsdd:childClassification* ?class 
        {
            ?class bsdd:code ?classcode;
                   bsdd:name ?classname .
        }
        union {
            ?class bsdd:classificationProperty ?prop .
            ?prop bsdd:code ?propcode;
                  bsdd:name ?propname.
        }
    }
}