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
