# Paulo Nuin Oct 2020

import json
import queries
import time
import urllib.parse
from intermine.webservice import Service

query_title = {
    'query_01': 'All live genes',
    'query_02': 'All pseudogenes',
    'query_03': 'All unccloned genes',
    'query_04': 'All cloned genes (minus pseudogenes)	',
    'query_05': 'All protein coding genes',
    'query_06': 'All non-coding genes',
}

section = {
        'query_01': 'section_01',
        'query_02': 'section_01',
        'query_03': 'section_01',
        'query_04': 'section_01',
        'query_05': 'section_01',
        'query_06': 'section_01'
}
xml = {

'query_01': """<query name="" model="genomic" view="Gene.primaryIdentifier Gene.secondaryIdentifier Gene.symbol" longDescription="" sortOrder="Gene.primaryIdentifier asc">   <constraint path="Gene.organism.name" op="=" value="Caenorhabditis elegans"/> </query>""",
'query_02': """<query name="" model="genomic" view="Gene.primaryIdentifier Gene.secondaryIdentifier Gene.symbol" longDescription="" sortOrder="Gene.primaryIdentifier asc" constraintLogic="A and B">   <constraint path="Gene.organism.name" code="A" op="=" value="Caenorhabditis elegans"/>   <constraint path="Gene.biotype" code="B" op="=" value="SO:0000336"/> </query>""",
'query_03': """<query name="" model="genomic" view="Gene.primaryIdentifier Gene.secondaryIdentifier Gene.symbol" longDescription="" sortOrder="Gene.primaryIdentifier asc" constraintLogic="A and B">   <constraint path="Gene.organism.name" code="A" op="=" value="Caenorhabditis elegans"/>   <constraint path="Gene.secondaryIdentifier" code="B" op="IS NULL"/> </query>""",
'query_04': """<query name="" model="genomic" view="Gene.primaryIdentifier Gene.secondaryIdentifier Gene.symbol" longDescription="" sortOrder="Gene.primaryIdentifier asc" constraintLogic="A and B">   <constraint path="Gene.organism.name" code="A" op="=" value="Caenorhabditis elegans"/>   <constraint path="Gene.biotype" code="B" op="!=" value="SO:0000336"/> </query>""",
'query_05': """<query name="" model="genomic" view="Gene.primaryIdentifier Gene.secondaryIdentifier Gene.symbol" longDescription="" sortOrder="Gene.primaryIdentifier asc" constraintLogic="A and B">   <constraint path="Gene.organism.name" code="A" op="=" value="Caenorhabditis elegans"/>   <constraint path="Gene.CDSs" code="B" op="IS NOT NULL"/> </query>""",
'query_06': """<query name="" model="genomic" view="Gene.primaryIdentifier Gene.secondaryIdentifier Gene.symbol" longDescription="" sortOrder="Gene.primaryIdentifier asc" constraintLogic="A and B and C">   <constraint path="Gene.organism.name" code="A" op="=" value="Caenorhabditis elegans"/>   <constraint path="Gene.CDSs" code="B" op="IS NULL"/>   <constraint path="Gene.biotype" code="C" op="!=" value="SO:0000336"/> </query>""",
}

# %3Cquery%20model%3D%22genomic%22%20view%3D%22RNAi.primaryIdentifier%20RNAi.inhibitsGene.primaryIdentifier%20RNAi.inhibitsGene.secondaryIdentifier%20RNAi.inhibitsGene.symbol%20RNAi.organism.name%20RNAi.strain.primaryIdentifier%22%20sortOrder%3D%22RNAi.primaryIdentifier%20ASC%22%20name%3D%22rnai_phenotype%22%20%3E%0A%20%20%3Cjoin%20path%3D%22RNAi.organism%22%20style%3D%22OUTER%22%2F%3E%0A%20%20%3Cjoin%20path%3D%22RNAi.strain%22%20style%3D%22OUTER%22%2F%3E%0A%20%20%3Cconstraint%20path%3D%22RNAi.phenotype_not_observed.identifier%22%20op%3D%22%3D%22%20value%3D%22WBPhenotype%3A0000535%22%20code%3D%22A%22%20%2F%3E%0A%3C%2Fquery%3E%0A&trail=%7Cquery&method=xml
def run_queries():
    service = Service('http://intermine.wormbase.org/tools/wormmine/service')

    for x in dir(queries):
        item = getattr(queries, x)
        if callable(item):
            if not item.__name__ in ['assert_result', 'Service', 'assert_greater', 'save_txt_file']:
                time.sleep(1)
                yield x, item()



if __name__ == '__main__':

    prepend = 'http://intermine.wormbase.org/tools/wormmine/loadQuery.do?skipBuilder=true&query='
    append = '%0A&trail=%7Cquery&method=xml'

    print('Running')
    all_queries = run_queries()
    results = {}
    for q in all_queries:
        print(q)
        qurl = urllib.parse.quote(xml[q[0]])
        results[q[0]] = {'value': q[1], 'title': query_title[q[0]], 'section': section[q[0]], 'url': prepend + qurl + append}

    print(results)
    output_json = open('../results.json', 'w')
    json.dump(results, output_json)
    output_json.close()

