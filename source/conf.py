# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information
from datetime import datetime
project = 'Mikhail Zaitsev'
copyright = f"{datetime.now().year} Mikhail Zaitsev"

author = 'Mikhail Zaitsev'
release = '0.1'
html_title = 'Mikhail Zaitsev'

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration

extensions = [
    "sphinx.ext.githubpages",
    'sphinx.ext.autosectionlabel'
]

autosectionlabel_prefix_document = True

templates_path = ['_templates']
exclude_patterns = []

language = 'en'
# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

html_theme = 'alabaster'
html_sidebars = {
    '**': [
        'about.html',
        'navigation.html',
        # 'searchbox.html',  # disable search
    ]
}


html_static_path = ['_static']
html_theme_options = {
    "description": "<b>Senior Python / Django </b> developer, <b>devOps</b> & <b>Tech team lead.</b>",
    'logo': 'images/logo.jpg',
    "logo_name": True,   # todo  seems not to work prepoerly
    "github_button": True,
    'github_user': 'pipoupiwam',
    'github_repo': 'cirriculum',
    "fixed_sidebar": True,
    "show_powered_by": False,
}

