# Paulo Nuin Oct 2020

from intermine.webservice import Service
service = Service("http://intermine.wormbase.org/tools/wormmine/service")

def query_01():
    """
    All live genes
    """

    query = service.new_query("Gene")
    query.add_view("primaryIdentifier", "secondaryIdentifier", "symbol")
    query.add_constraint("organism.name", "=", "Caenorhabditis elegans", code="A")


    return len(query.rows())

def query_02():
    """
    All pseudogenes
    """

    query = service.new_query("Gene")
    query.add_view("primaryIdentifier", "secondaryIdentifier", "symbol")
    query.add_constraint("organism.name", "=", "Caenorhabditis elegans", code="A")
    query.add_constraint("biotype", "=", "SO:0000336", code="B")

    return len(query.rows())

def query_03():
    """
    All uncloned genes
    """

    query = service.new_query("Gene")
    query.add_view("primaryIdentifier", "secondaryIdentifier", "symbol")
    query.add_constraint("organism.name", "=", "Caenorhabditis elegans", code="A")
    query.add_constraint("secondaryIdentifier", "IS NULL", code="B")

    return len(query.rows())

def query_04():
    """
    All cloned genes (minus pseudogenes)
    """

    query = service.new_query("Gene")
    query.add_view("primaryIdentifier", "secondaryIdentifier", "symbol")
    query.add_constraint("organism.name", "=", "Caenorhabditis elegans", code="A")
    query.add_constraint("biotype", "!=", "SO:0000336", code="B")

    return len(query.rows())


def query_05():
    """
    All protein coding genes
    """

    query = service.new_query("Gene")
    query.add_view("primaryIdentifier", "secondaryIdentifier", "symbol")
    query.add_constraint("organism.name", "=", "Caenorhabditis elegans", code="A")
    query.add_constraint("CDSs", "IS NOT NULL", code="B")

    return len(query.rows())

def query_06():
    """
    All non-coding genes
    """

    query = service.new_query("Gene")
    query.add_view("primaryIdentifier", "secondaryIdentifier", "symbol")
    query.add_constraint("organism.name", "=", "Caenorhabditis elegans", code="A")
    query.add_constraint("CDSs", "IS NULL", code="B")
    query.add_constraint("biotype", "!=", "SO:0000336", code="C")

    return len(query.rows())

# def query_07():
#
#     # C. elegans Genes with GO
#     query = service.new_query("Gene")
#     query.add_view("primaryIdentifier", "goAnnotation.qualifier")
#     query.add_constraint("primaryIdentifier", "IS NOT NULL", code = "A")
#     query.add_constraint("organism.species", "=", "elegans", code = "B")
#     query.outerjoin("goAnnotation")
#     print(query)
#
#     return len(query.rows())
#
#
# def query_08():
#
#
#     query.add_view("primaryIdentifier", "sequence.length")
#     query.add_constraint("organism.species", "=", "elegans", code="A")
#     print(query)
#
#     return len(query.rows())
#


