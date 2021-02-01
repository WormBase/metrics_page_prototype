# Paulo Nuin Oct 2020

import json
import queries
import time
from intermine.webservice import Service

query_title = {
    'query_01': 'All C. elegans genes',
    'query_02': 'Protein coding genes',
    'query_03': 'All phenotypes',
    'query_04': 'All C. elegans strains',
    'query_05': 'All mutated alleles',
    'query_06': 'All GO terms',
    'query_07': 'C. elegans genes with GO annotation'
    'query_08': 'C. elegans polypeptide sequences'
}

section = {
        'query_01': 'section_01',
        'query_02': 'section_01',
        'query_03': 'section_02',
        'query_04': 'section_03',
        'query_05': 'section_04',
        'query_06': 'section_05',
        'query_07': 'section_05',
}


def run_queries():
    service = Service('http://intermine.wormbase.org/tools/wormmine/service')

    for x in dir(queries):
        item = getattr(queries, x)
        if callable(item):
            if not item.__name__ in ['assert_result', 'Service', 'assert_greater', 'save_txt_file']:
                time.sleep(1)
                yield x, item()



if __name__ == '__main__':

    print('Running')
    all_queries = run_queries()
    results = {}
    for q in all_queries:
        print(q)
        results[q[0]] = {'value': q[1], 'title': query_title[q[0]], 'section': section[q[0]]}

    print(results)
    output_json = open('../results.json', 'w')
    json.dump(results, output_json)
    output_json.close()

