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


def query_07():

    query = service.new_query("Gene")
    query.add_view("primaryIdentifier", "secondaryIdentifier", "symbol")
    query.add_constraint("organism.name", "=", "Caenorhabditis elegans", code="A")
    query.add_constraint("biotype", "=", "SO:0001272", code="B")

    return len(query.rows())


def query_08():


    query = service.new_query("Gene")
    query.add_view("primaryIdentifier", "secondaryIdentifier", "symbol")
    query.add_constraint("organism.name", "=", "Caenorhabditis elegans", code="A")
    query.add_constraint("biotype", "=", "SO:0001637", code="B")

    return len(query.rows())


def query_09():

    query = service.new_query("Gene")
    query.add_view("primaryIdentifier", "secondaryIdentifier", "symbol")
    query.add_constraint("organism.name", "=", "Caenorhabditis elegans", code="A")
    query.add_constraint("biotype", "=", "SO:0001265", code="B")

    return len(query.rows())

def query_10():

    query = service.new_query("Gene")
    query.add_view("primaryIdentifier", "secondaryIdentifier", "symbol")
    query.add_constraint("organism.name", "=", "Caenorhabditis elegans", code="A")
    query.add_constraint("biotype", "=", "SO:0001638", code="B")

    return len(query.rows())

def query_11():

    query = service.new_query("Gene")
    query.add_view("primaryIdentifier", "secondaryIdentifier", "symbol")
    query.add_constraint("organism.name", "=", "Caenorhabditis elegans", code="A")
    query.add_constraint("biotype", "=", "SO:0001638", code="B")

    return len(query.rows())

def query_11():

    query = service.new_query("Gene")
    query.add_view("primaryIdentifier", "secondaryIdentifier", "symbol")
    query.add_constraint("organism.name", "=", "Caenorhabditis elegans", code="A")
    query.add_constraint("biotype", "=", "SO:0001267", code="B")

    return len(query.rows())






