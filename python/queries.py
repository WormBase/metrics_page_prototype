# Paulo Nuin Oct 2020


from intermine.webservice import Service
service = Service("http://intermine.wormbase.org/tools/wormmine/service")

def query_01():
    """
    """

    # All c elegans genes
    query = service.new_query("Gene")
    query.add_view("primaryIdentifier", "organism.species")
    query.add_constraint("organism.species", "=", "elegans", code = "A")
    print(query)

    return len(query.rows())


def query_02():
    """
    """

    # All genes with proteins, have to filter on genes
    query = service.new_query("CDS")
    query.add_view(
        "gene.primaryIdentifier", "gene.secondaryIdentifier", "gene.symbol",
        "protein.primaryIdentifier", "protein.sequence.length"
    )
    query.add_constraint("organism.name", "=", "Caenorhabditis elegans", code = "C")
    print(query)

    return len(query.rows())

def query_03():
    """
    """

    # All types of phenotypes
    query = service.new_query("Phenotype")
    query.add_view("identifier", "name")
    print(query)

    return len(query.rows())

def query_04():
    """
    """

    # All C elegans strains
    query = service.new_query("Strain")
    query.add_view("primaryIdentifier", "species")
    query.add_constraint("species", "=", "Caenorhabditis elegans", code = "A")
    print(query)

    return len(query.rows())


def query_05():

    # All mutated alleles
    query = service.new_query("Allele")
    query.add_view("primaryIdentifier", "typeOfMutation")
    query.add_constraint("species", "=", "Caenorhabditis elegans", code = "A")
    query.add_constraint("typeOfMutation", "ONE OF", ["Deletion", "Insertion", "Substitution", "Tandem_duplication"], code = "B")
    print(query)

    return len(query.rows())

def query_06():

    # All GO terms
    query = service.new_query("GOTerm")
    query.add_view("identifier", "name")
    print(query)

    return len(query.rows())

def query_07():

    # C. elegans Genes with GO
    query = service.new_query("Gene")
    query.add_view("primaryIdentifier", "goAnnotation.qualifier")
    query.add_constraint("primaryIdentifier", "IS NOT NULL", code = "A")
    query.add_constraint("organism.species", "=", "elegans", code = "B")
    query.outerjoin("goAnnotation")
    print(query)

    return len(query.rows())


def query_08():


    query.add_view("primaryIdentifier", "sequence.length")
    query.add_constraint("organism.species", "=", "elegans", code="A")
    print(query)

    return len(query.rows())



