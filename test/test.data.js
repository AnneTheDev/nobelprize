// Sample data set retrieved from http://masterdataapi.nobelprize.org/2.0/laureates.
const sampleData = {
    "laureates": [
        {
            "id": "745",
            "knownName": {
                "en": "A. Michael Spence",
                "se": "A. Michael Spence"
            },
            "givenName": {
                "en": "A. Michael",
                "se": "A. Michael"
            },
            "familyName": {
                "en": "Spence",
                "se": "Spence"
            },
            "fullName": {
                "en": "A. Michael Spence",
                "se": "A. Michael Spence"
            },
            "gender": "male",
            "birth": {
                "date": "1943-00-00",
                "place": {
                    "city": {
                        "en": "Montclair, NJ",
                        "no": "Montclair, NJ",
                        "se": "Montclair, NJ"
                    },
                    "country": {
                        "en": "USA",
                        "no": "USA",
                        "se": "USA"
                    },
                    "cityNow": {
                        "en": "Montclair, NJ",
                        "no": "Montclair, NJ",
                        "se": "Montclair, NJ"
                    },
                    "countryNow": {
                        "en": "USA",
                        "no": "USA",
                        "se": "USA"
                    },
                    "continent": {
                        "en": "North America"
                    },
                    "locationString": {
                        "en": "Montclair, NJ, USA",
                        "no": "Montclair, NJ, USA",
                        "se": "Montclair, NJ, USA"
                    }
                }
            },
            "links": {
                "rel": "laureate",
                "href": "http://masterdataapi.nobelprize.org/2/laureate/745",
                "action": "Get",
                "types": "application/json"
            },
            "nobelPrizes": [
                {
                    "awardYear": "2001",
                    "category": {
                        "en": "Economic Sciences",
                        "no": "Økonomi",
                        "se": "Ekonomi"
                    },
                    "categoryFullName": {
                        "en": "The Sveriges Riksbank Prize in Economic Sciences in Memory of Alfred Nobel",
                        "no": "Sveriges Riksbanks pris i økonomisk vitenskap til minne om Alfred Nobel",
                        "se": "Sveriges Riksbanks pris i ekonomisk vetenskap till Alfred Nobels minne"
                    },
                    "sortOrder": "2",
                    "portion": "1/3",
                    "dateAwarded": "2001-10-10",
                    "prizeStatus": "received",
                    "motivation": {
                        "en": "for their analyses of markets with asymmetric information",
                        "se": "för deras analys av marknader med assymetrisk informations"
                    },
                    "prizeAmount": 10000000,
                    "prizeAmountAdjusted": 12426230,
                    "affiliations": [
                        {
                            "name": {
                                "en": "Stanford University",
                                "no": "Stanford University",
                                "se": "Stanford University"
                            },
                            "nameNow": {
                                "en": "Stanford University"
                            },
                            "city": {
                                "en": "Stanford, CA",
                                "no": "Stanford, CA",
                                "se": "Stanford, CA"
                            },
                            "country": {
                                "en": "USA",
                                "no": "USA",
                                "se": "USA"
                            },
                            "cityNow": {
                                "en": "Stanford, CA",
                                "no": "Stanford, CA",
                                "se": "Stanford, CA"
                            },
                            "countryNow": {
                                "en": "USA",
                                "no": "USA",
                                "se": "USA"
                            },
                            "locationString": {
                                "en": "Stanford, CA, USA",
                                "no": "Stanford, CA, USA",
                                "se": "Stanford, CA, USA"
                            }
                        }
                    ],
                    "links": {
                        "rel": "nobelPrize",
                        "href": "https://masterdataapi.nobelprize.org/2/nobelPrize/eco/2001",
                        "action": "Get",
                        "types": "application/json"
                    }
                }
            ]
        },
        {
            "id": "102",
            "knownName": {
                "en": "Aage N. Bohr",
                "se": "Aage N. Bohr"
            },
            "givenName": {
                "en": "Aage N.",
                "se": "Aage N."
            },
            "familyName": {
                "en": "Bohr",
                "se": "Bohr"
            },
            "fullName": {
                "en": "Aage Niels Bohr",
                "se": "Aage Niels Bohr"
            },
            "gender": "male",
            "birth": {
                "date": "1922-06-19",
                "place": {
                    "city": {
                        "en": "Copenhagen",
                        "no": "København",
                        "se": "Köpenhamn"
                    },
                    "country": {
                        "en": "Denmark",
                        "no": "Danmark",
                        "se": "Danmark"
                    },
                    "cityNow": {
                        "en": "Copenhagen",
                        "no": "København",
                        "se": "Köpenhamn"
                    },
                    "countryNow": {
                        "en": "Denmark",
                        "no": "Danmark",
                        "se": "Danmark"
                    },
                    "continent": {
                        "en": "Europe"
                    },
                    "locationString": {
                        "en": "Copenhagen, Denmark",
                        "no": "København, Danmark",
                        "se": "Köpenhamn, Danmark"
                    }
                }
            },
            "death": {
                "date": "2009-09-08",
                "place": {
                    "city": {
                        "en": "Copenhagen",
                        "no": "København",
                        "se": "Köpenhamn"
                    },
                    "country": {
                        "en": "Denmark",
                        "no": "Danmark",
                        "se": "Danmark"
                    },
                    "cityNow": {
                        "en": "Copenhagen",
                        "no": "København",
                        "se": "Köpenhamn"
                    },
                    "countryNow": {
                        "en": "Denmark",
                        "no": "Danmark",
                        "se": "Danmark"
                    },
                    "continent": {
                        "en": "Europe"
                    },
                    "locationString": {
                        "en": "Copenhagen, Denmark",
                        "no": "København, Danmark",
                        "se": "Köpenhamn, Danmark"
                    }
                }
            },
            "links": {
                "rel": "laureate",
                "href": "http://masterdataapi.nobelprize.org/2/laureate/102",
                "action": "Get",
                "types": "application/json"
            },
            "nobelPrizes": [
                {
                    "awardYear": "1975",
                    "category": {
                        "en": "Physics",
                        "no": "Fysikk",
                        "se": "Fysik"
                    },
                    "categoryFullName": {
                        "en": "The Nobel Prize in Physics",
                        "no": "Nobelprisen i fysikk",
                        "se": "Nobelpriset i fysik"
                    },
                    "sortOrder": "1",
                    "portion": "1/3",
                    "dateAwarded": "1975-10-17",
                    "prizeStatus": "received",
                    "motivation": {
                        "en": "for the discovery of the connection between collective motion and particle motion in atomic nuclei and the development of the theory of the structure of the atomic nucleus based on this connection",
                        "se": "för upptäckten av sambandet mellan kollektiva rörelser och partikelrörelser i atomkärnor, samt den därpå baserade utvecklingen av teorien för atomkärnans struktur"
                    },
                    "prizeAmount": 630000,
                    "prizeAmountAdjusted": 3440490,
                    "affiliations": [
                        {
                            "name": {
                                "en": "Niels Bohr Institute",
                                "no": "Niels Bohr Institute",
                                "se": "Niels Bohr Institute"
                            },
                            "nameNow": {
                                "en": "Niels Bohr Institute"
                            },
                            "city": {
                                "en": "Copenhagen",
                                "no": "København",
                                "se": "Köpenhamn"
                            },
                            "country": {
                                "en": "Denmark",
                                "no": "Danmark",
                                "se": "Danmark"
                            },
                            "cityNow": {
                                "en": "Copenhagen",
                                "no": "København",
                                "se": "Köpenhamn"
                            },
                            "countryNow": {
                                "en": "Denmark",
                                "no": "Danmark",
                                "se": "Danmark"
                            },
                            "locationString": {
                                "en": "Copenhagen, Denmark",
                                "no": "København, Danmark",
                                "se": "Köpenhamn, Danmark"
                            }
                        }
                    ],
                    "links": {
                        "rel": "nobelPrize",
                        "href": "https://masterdataapi.nobelprize.org/2/nobelPrize/phy/1975",
                        "action": "Get",
                        "types": "application/json"
                    }
                }
            ]
        },
        {
            "id": "779",
            "knownName": {
                "en": "Aaron Ciechanover",
                "se": "Aaron Ciechanover"
            },
            "givenName": {
                "en": "Aaron",
                "se": "Aaron"
            },
            "familyName": {
                "en": "Ciechanover",
                "se": "Ciechanover"
            },
            "fullName": {
                "en": "Aaron Ciechanover",
                "se": "Aaron Ciechanover"
            },
            "gender": "male",
            "birth": {
                "date": "1947-10-01",
                "place": {
                    "city": {
                        "en": "Haifa",
                        "no": "Haifa",
                        "se": "Haifa"
                    },
                    "country": {
                        "en": "British Protectorate of Palestine",
                        "no": "British i Palestina",
                        "se": "British Protectorate of Palestine"
                    },
                    "cityNow": {
                        "en": "Haifa",
                        "no": "Haifa",
                        "se": "Haifa"
                    },
                    "countryNow": {
                        "en": "Israel",
                        "no": "Israel",
                        "se": "Israel"
                    },
                    "continent": {
                        "en": "Asia"
                    },
                    "locationString": {
                        "en": "Haifa, British Protectorate of Palestine (now Israel)",
                        "no": "Haifa, British i Palestina (nå Israel)",
                        "se": "Haifa, British Protectorate of Palestine (nu Israel)"
                    }
                }
            },
            "links": {
                "rel": "laureate",
                "href": "http://masterdataapi.nobelprize.org/2/laureate/779",
                "action": "Get",
                "types": "application/json"
            },
            "nobelPrizes": [
                {
                    "awardYear": "2004",
                    "category": {
                        "en": "Chemistry",
                        "no": "Kjemi",
                        "se": "Kemi"
                    },
                    "categoryFullName": {
                        "en": "The Nobel Prize in Chemistry",
                        "no": "Nobelprisen i kjemi",
                        "se": "Nobelpriset i kemi"
                    },
                    "sortOrder": "1",
                    "portion": "1/3",
                    "dateAwarded": "2004-10-06",
                    "prizeStatus": "received",
                    "motivation": {
                        "en": "for the discovery of ubiquitin-mediated protein degradation",
                        "se": "för upptäckten av ubiquitinmedierad proteinnedbrytning"
                    },
                    "prizeAmount": 10000000,
                    "prizeAmountAdjusted": 11888331,
                    "affiliations": [
                        {
                            "name": {
                                "en": "Technion - Israel Institute of Technology",
                                "no": "Technion - Israel Institute of Technology",
                                "se": "Technion - Israel Institute of Technology"
                            },
                            "nameNow": {
                                "en": "Technion - Israel Institute of Technology"
                            },
                            "city": {
                                "en": "Haifa",
                                "no": "Haifa",
                                "se": "Haifa"
                            },
                            "country": {
                                "en": "Israel",
                                "no": "Israel",
                                "se": "Israel"
                            },
                            "cityNow": {
                                "en": "Haifa",
                                "no": "Haifa",
                                "se": "Haifa"
                            },
                            "countryNow": {
                                "en": "Israel",
                                "no": "Israel",
                                "se": "Israel"
                            },
                            "locationString": {
                                "en": "Haifa, Israel",
                                "no": "Haifa, Israel",
                                "se": "Haifa, Israel"
                            }
                        }
                    ],
                    "links": {
                        "rel": "nobelPrize",
                        "href": "https://masterdataapi.nobelprize.org/2/nobelPrize/che/2004",
                        "action": "Get",
                        "types": "application/json"
                    }
                }
            ]
        },
        {
            "id": "259",
            "knownName": {
                "en": "Aaron Klug",
                "se": "Aaron Klug"
            },
            "givenName": {
                "en": "Aaron",
                "se": "Aaron"
            },
            "familyName": {
                "en": "Klug",
                "se": "Klug"
            },
            "fullName": {
                "en": "Aaron Klug",
                "se": "Aaron Klug"
            },
            "gender": "male",
            "birth": {
                "date": "1926-08-11",
                "place": {
                    "city": {
                        "en": "Zelvas",
                        "no": "Zelvas",
                        "se": "Zelvas"
                    },
                    "country": {
                        "en": "Lithuania",
                        "no": "Litauen",
                        "se": "Litauen"
                    },
                    "cityNow": {
                        "en": "Zelvas",
                        "no": "Zelvas",
                        "se": "Zelvas"
                    },
                    "countryNow": {
                        "en": "Lithuania",
                        "no": "Litauen",
                        "se": "Litauen"
                    },
                    "continent": {
                        "en": "Europe"
                    },
                    "locationString": {
                        "en": "Zelvas, Lithuania",
                        "no": "Zelvas, Litauen",
                        "se": "Zelvas, Litauen"
                    }
                }
            },
            "death": {
                "date": "2018-11-20",
                "place": {
                    "locationString": {
                        "en": "N/A",
                        "no": "N/A",
                        "se": "N/A"
                    }
                }
            },
            "links": {
                "rel": "laureate",
                "href": "http://masterdataapi.nobelprize.org/2/laureate/259",
                "action": "Get",
                "types": "application/json"
            },
            "nobelPrizes": [
                {
                    "awardYear": "1982",
                    "category": {
                        "en": "Chemistry",
                        "no": "Kjemi",
                        "se": "Kemi"
                    },
                    "categoryFullName": {
                        "en": "The Nobel Prize in Chemistry",
                        "no": "Nobelprisen i kjemi",
                        "se": "Nobelpriset i kemi"
                    },
                    "sortOrder": "1",
                    "portion": "1",
                    "dateAwarded": "1982-10-18",
                    "prizeStatus": "received",
                    "motivation": {
                        "en": "for his development of crystallographic electron microscopy and his structural elucidation of biologically important nucleic acid-protein complexes",
                        "se": "för hans utveckling av kristallografisk elektronmikroskopi och hans klarläggande av strukturen hos biologiskt viktiga nukleinsyra-proteinkomplex"
                    },
                    "prizeAmount": 1150000,
                    "prizeAmountAdjusted": 3135612,
                    "affiliations": [
                        {
                            "name": {
                                "en": "MRC Laboratory of Molecular Biology",
                                "no": "MRC Laboratory of Molecular Biology",
                                "se": "MRC Laboratory of Molecular Biology"
                            },
                            "nameNow": {
                                "en": "MRC Laboratory of Molecular Biology"
                            },
                            "city": {
                                "en": "Cambridge",
                                "no": "Cambridge",
                                "se": "Cambridge"
                            },
                            "country": {
                                "en": "United Kingdom",
                                "no": "Storbritannia",
                                "se": "Storbritannien"
                            },
                            "cityNow": {
                                "en": "Cambridge",
                                "no": "Cambridge",
                                "se": "Cambridge"
                            },
                            "countryNow": {
                                "en": "United Kingdom",
                                "no": "Storbritannia",
                                "se": "Storbritannien"
                            },
                            "locationString": {
                                "en": "Cambridge, United Kingdom",
                                "no": "Cambridge, Storbritannia",
                                "se": "Cambridge, Storbritannien"
                            }
                        }
                    ],
                    "links": {
                        "rel": "nobelPrize",
                        "href": "https://masterdataapi.nobelprize.org/2/nobelPrize/che/1982",
                        "action": "Get",
                        "types": "application/json"
                    }
                }
            ]
        },
        {
            "id": "114",
            "knownName": {
                "en": "Abdus Salam",
                "se": "Abdus Salam"
            },
            "givenName": {
                "en": "Abdus",
                "se": "Abdus"
            },
            "familyName": {
                "en": "Salam",
                "se": "Salam"
            },
            "fullName": {
                "en": "Abdus Salam",
                "se": "Abdus Salam"
            },
            "gender": "male",
            "birth": {
                "date": "1926-01-29",
                "place": {
                    "city": {
                        "en": "Jhang Maghiāna",
                        "no": "Jhang Maghiāna",
                        "se": "Jhang Maghiāna"
                    },
                    "country": {
                        "en": "India",
                        "no": "India",
                        "se": "Indien"
                    },
                    "cityNow": {
                        "en": "Jhang Maghiāna",
                        "no": "Jhang Maghiāna",
                        "se": "Jhang Maghiāna"
                    },
                    "countryNow": {
                        "en": "Pakistan",
                        "no": "Pakistan",
                        "se": "Pakistan"
                    },
                    "continent": {
                        "en": "Asia"
                    },
                    "locationString": {
                        "en": "Jhang Maghiāna, India (now Pakistan)",
                        "no": "Jhang Maghiāna, India (nå Pakistan)",
                        "se": "Jhang Maghiāna, Indien (nu Pakistan)"
                    }
                }
            },
            "death": {
                "date": "1996-11-21",
                "place": {
                    "city": {
                        "en": "Oxford",
                        "no": "Oxford",
                        "se": "Oxford"
                    },
                    "country": {
                        "en": "United Kingdom",
                        "no": "Storbritannia",
                        "se": "Storbritannien"
                    },
                    "cityNow": {
                        "en": "Oxford",
                        "no": "Oxford",
                        "se": "Oxford"
                    },
                    "countryNow": {
                        "en": "United Kingdom",
                        "no": "Storbritannia",
                        "se": "Storbritannien"
                    },
                    "continent": {
                        "en": "Europe"
                    },
                    "locationString": {
                        "en": "Oxford, United Kingdom",
                        "no": "Oxford, Storbritannia",
                        "se": "Oxford, Storbritannien"
                    }
                }
            },
            "links": {
                "rel": "laureate",
                "href": "http://masterdataapi.nobelprize.org/2/laureate/114",
                "action": "Get",
                "types": "application/json"
            },
            "nobelPrizes": [
                {
                    "awardYear": "1979",
                    "category": {
                        "en": "Physics",
                        "no": "Fysikk",
                        "se": "Fysik"
                    },
                    "categoryFullName": {
                        "en": "The Nobel Prize in Physics",
                        "no": "Nobelprisen i fysikk",
                        "se": "Nobelpriset i fysik"
                    },
                    "sortOrder": "2",
                    "portion": "1/3",
                    "dateAwarded": "1979-10-15",
                    "prizeStatus": "received",
                    "motivation": {
                        "en": "for their contributions to the theory of the unified weak and electromagnetic interaction between elementary particles, including, inter alia, the prediction of the weak neutral current",
                        "se": "för deras insatser inom teorin för förenad svag och elektromagnetisk växelverkan mellan elementar partiklar, innefattande bl.a. förutsägelsen av den svaga neutrala strömmen"
                    },
                    "prizeAmount": 800000,
                    "prizeAmountAdjusted": 3019920,
                    "affiliations": [
                        {
                            "name": {
                                "en": "International Centre for Theoretical Physics",
                                "no": "International Centre for Theoretical Physics",
                                "se": "International Centre for Theoretical Physics"
                            },
                            "nameNow": {
                                "en": "International Centre for Theoretical Physics"
                            },
                            "city": {
                                "en": "Trieste",
                                "no": "Trieste",
                                "se": "Trieste"
                            },
                            "country": {
                                "en": "Italy",
                                "no": "Italia",
                                "se": "Italien"
                            },
                            "cityNow": {
                                "en": "Trieste",
                                "no": "Trieste",
                                "se": "Trieste"
                            },
                            "countryNow": {
                                "en": "Italy",
                                "no": "Italia",
                                "se": "Italien"
                            },
                            "locationString": {
                                "en": "Trieste, Italy",
                                "no": "Trieste, Italia",
                                "se": "Trieste, Italien"
                            }
                        },
                        {
                            "name": {
                                "en": "Imperial College",
                                "no": "Imperial College",
                                "se": "Imperial College"
                            },
                            "nameNow": {
                                "en": "Imperial College"
                            },
                            "city": {
                                "en": "London",
                                "no": "London",
                                "se": "London"
                            },
                            "country": {
                                "en": "United Kingdom",
                                "no": "Storbritannia",
                                "se": "Storbritannien"
                            },
                            "cityNow": {
                                "en": "London",
                                "no": "London",
                                "se": "London"
                            },
                            "countryNow": {
                                "en": "United Kingdom",
                                "no": "Storbritannia",
                                "se": "Storbritannien"
                            },
                            "locationString": {
                                "en": "London, United Kingdom",
                                "no": "London, Storbritannia",
                                "se": "London, Storbritannien"
                            }
                        }
                    ],
                    "links": {
                        "rel": "nobelPrize",
                        "href": "https://masterdataapi.nobelprize.org/2/nobelPrize/phy/1979",
                        "action": "Get",
                        "types": "application/json"
                    }
                }
            ]
        },
        {
            "id": "982",
            "knownName": {
                "en": "Abhijit Banerjee",
                "se": "Abhijit Banerjee"
            },
            "givenName": {
                "en": "Abhijit",
                "se": "Abhijit"
            },
            "familyName": {
                "en": "Banerjee",
                "se": "Banerjee"
            },
            "fullName": {
                "en": "Abhijit Banerjee",
                "se": "Abhijit Banerjee"
            },
            "gender": "male",
            "birth": {
                "date": "1961-02-21",
                "place": {
                    "city": {
                        "en": "Mumbai",
                        "no": "Mumbai",
                        "se": "Mumbai"
                    },
                    "country": {
                        "en": "India",
                        "no": "India",
                        "se": "Indien"
                    },
                    "cityNow": {
                        "en": "Mumbai",
                        "no": "Mumbai",
                        "se": "Mumbai"
                    },
                    "countryNow": {
                        "en": "India",
                        "no": "India",
                        "se": "Indien"
                    },
                    "continent": {
                        "en": "Asia"
                    },
                    "locationString": {
                        "en": "Mumbai, India",
                        "no": "Mumbai, India",
                        "se": "Mumbai, Indien"
                    }
                }
            },
            "links": {
                "rel": "laureate",
                "href": "http://masterdataapi.nobelprize.org/2/laureate/982",
                "action": "Get",
                "types": "application/json"
            },
            "nobelPrizes": [
                {
                    "awardYear": "2019",
                    "category": {
                        "en": "Economic Sciences",
                        "no": "Økonomi",
                        "se": "Ekonomi"
                    },
                    "categoryFullName": {
                        "en": "The Sveriges Riksbank Prize in Economic Sciences in Memory of Alfred Nobel",
                        "no": "Sveriges Riksbanks pris i økonomisk vitenskap til minne om Alfred Nobel",
                        "se": "Sveriges Riksbanks pris i ekonomisk vetenskap till Alfred Nobels minne"
                    },
                    "sortOrder": "1",
                    "portion": "1/3",
                    "dateAwarded": "2019-10-14",
                    "prizeStatus": "received",
                    "motivation": {
                        "en": "for their experimental approach to alleviating global poverty",
                        "se": "för deras experimentella ansats för att mildra global fattigdom"
                    },
                    "prizeAmount": 9000000,
                    "prizeAmountAdjusted": 9096000,
                    "affiliations": [
                        {
                            "name": {
                                "en": "Massachusetts Institute of Technology (MIT)",
                                "no": "Massachusetts Institute of Technology (MIT)",
                                "se": "Massachusetts Institute of Technology (MIT)"
                            },
                            "nameNow": {
                                "en": "Massachusetts Institute of Technology (MIT)"
                            },
                            "city": {
                                "en": "Cambridge, MA",
                                "no": "Cambridge, MA",
                                "se": "Cambridge, MA"
                            },
                            "country": {
                                "en": "USA",
                                "no": "USA",
                                "se": "USA"
                            },
                            "cityNow": {
                                "en": "Cambridge, MA",
                                "no": "Cambridge, MA",
                                "se": "Cambridge, MA"
                            },
                            "countryNow": {
                                "en": "USA",
                                "no": "USA",
                                "se": "USA"
                            },
                            "locationString": {
                                "en": "Cambridge, MA, USA",
                                "no": "Cambridge, MA, USA",
                                "se": "Cambridge, MA, USA"
                            }
                        }
                    ],
                    "links": {
                        "rel": "nobelPrize",
                        "href": "https://masterdataapi.nobelprize.org/2/nobelPrize/eco/2019",
                        "action": "Get",
                        "types": "application/json"
                    }
                }
            ]
        },
        {
            "id": "981",
            "knownName": {
                "en": "Abiy Ahmed Ali",
                "se": "Abiy Ahmed Ali"
            },
            "givenName": {
                "en": "Abiy",
                "se": "Abiy"
            },
            "familyName": {
                "en": "Ahmed Ali",
                "se": "Ahmed Ali"
            },
            "fullName": {
                "en": "Abiy Ahmed Ali",
                "se": "Abiy Ahmed Ali"
            },
            "gender": "male",
            "birth": {
                "date": "1976-08-15",
                "place": {
                    "city": {
                        "en": "Beshasha",
                        "no": "Beshasha",
                        "se": "Beshasha"
                    },
                    "country": {
                        "en": "Ethiopia",
                        "no": "Etiopia",
                        "se": "Etiopien"
                    },
                    "cityNow": {
                        "en": "Beshasha",
                        "no": "Beshasha",
                        "se": "Beshasha"
                    },
                    "countryNow": {
                        "en": "Ethiopia",
                        "no": "Etiopia",
                        "se": "Etiopien"
                    },
                    "continent": {
                        "en": "Africa"
                    },
                    "locationString": {
                        "en": "Beshasha, Ethiopia",
                        "no": "Beshasha, Etiopia",
                        "se": "Beshasha, Etiopien"
                    }
                }
            },
            "links": {
                "rel": "laureate",
                "href": "http://masterdataapi.nobelprize.org/2/laureate/981",
                "action": "Get",
                "types": "application/json"
            },
            "nobelPrizes": [
                {
                    "awardYear": "2019",
                    "category": {
                        "en": "Peace",
                        "no": "Fred",
                        "se": "Fred"
                    },
                    "categoryFullName": {
                        "en": "The Nobel Peace Prize",
                        "no": "Nobels fredspris",
                        "se": "Nobels fredspris"
                    },
                    "sortOrder": "1",
                    "portion": "1",
                    "dateAwarded": "2019-10-11",
                    "prizeStatus": "received",
                    "motivation": {
                        "en": "for his efforts to achieve peace and international cooperation, and in particular for his decisive initiative to resolve the border conflict with neighbouring Eritrea",
                        "no": "for hans innsats for fred og mellomstatlig samarbeid, og da særlig for hans avgjørande initiativ for å løsa grensekonflikten med nabolandet Eritrea"
                    },
                    "prizeAmount": 9000000,
                    "prizeAmountAdjusted": 9096000,
                    "links": {
                        "rel": "nobelPrize",
                        "href": "https://masterdataapi.nobelprize.org/2/nobelPrize/pea/2019",
                        "action": "Get",
                        "types": "application/json"
                    }
                }
            ]
        },
        {
            "id": "843",
            "knownName": {
                "en": "Ada E. Yonath",
                "se": "Ada E. Yonath"
            },
            "givenName": {
                "en": "Ada E.",
                "se": "Ada E."
            },
            "familyName": {
                "en": "Yonath",
                "se": "Yonath"
            },
            "fullName": {
                "en": "Ada E. Yonath",
                "se": "Ada E. Yonath"
            },
            "gender": "female",
            "birth": {
                "date": "1939-06-22",
                "place": {
                    "city": {
                        "en": "Jerusalem",
                        "no": "Jerusalem",
                        "se": "Jerusalem"
                    },
                    "country": {
                        "en": "British Mandate of Palestine",
                        "no": "Palestinamandatet",
                        "se": "Brittiska Palestinamandatet"
                    },
                    "cityNow": {
                        "en": "Jerusalem",
                        "no": "Jerusalem",
                        "se": "Jerusalem"
                    },
                    "countryNow": {
                        "en": "Israel",
                        "no": "Israel",
                        "se": "Israel"
                    },
                    "continent": {
                        "en": "Asia"
                    },
                    "locationString": {
                        "en": "Jerusalem, British Mandate of Palestine (now Israel)",
                        "no": "Jerusalem, Palestinamandatet (nå Israel)",
                        "se": "Jerusalem, Brittiska Palestinamandatet (nu Israel)"
                    }
                }
            },
            "links": {
                "rel": "laureate",
                "href": "http://masterdataapi.nobelprize.org/2/laureate/843",
                "action": "Get",
                "types": "application/json"
            },
            "nobelPrizes": [
                {
                    "awardYear": "2009",
                    "category": {
                        "en": "Chemistry",
                        "no": "Kjemi",
                        "se": "Kemi"
                    },
                    "categoryFullName": {
                        "en": "The Nobel Prize in Chemistry",
                        "no": "Nobelprisen i kjemi",
                        "se": "Nobelpriset i kemi"
                    },
                    "sortOrder": "3",
                    "portion": "1/3",
                    "dateAwarded": "2009-10-07",
                    "prizeStatus": "received",
                    "motivation": {
                        "en": "for studies of the structure and function of the ribosome",
                        "se": "för studier av ribosomens struktur och funktion"
                    },
                    "prizeAmount": 10000000,
                    "prizeAmountAdjusted": 11075395,
                    "affiliations": [
                        {
                            "name": {
                                "en": "Weizmann Institute of Science",
                                "no": "Weizmann Institute of Science",
                                "se": "Weizmann Institute of Science"
                            },
                            "nameNow": {
                                "en": "Weizmann Institute of Science"
                            },
                            "city": {
                                "en": "Rehovot",
                                "no": "Rehovot",
                                "se": "Rehovot"
                            },
                            "country": {
                                "en": "Israel",
                                "no": "Israel",
                                "se": "Israel"
                            },
                            "cityNow": {
                                "en": "Rehovot",
                                "no": "Rehovot",
                                "se": "Rehovot"
                            },
                            "countryNow": {
                                "en": "Israel",
                                "no": "Israel",
                                "se": "Israel"
                            },
                            "locationString": {
                                "en": "Rehovot, Israel",
                                "no": "Rehovot, Israel",
                                "se": "Rehovot, Israel"
                            }
                        }
                    ],
                    "links": {
                        "rel": "nobelPrize",
                        "href": "https://masterdataapi.nobelprize.org/2/nobelPrize/che/2009",
                        "action": "Get",
                        "types": "application/json"
                    }
                }
            ]
        },
        {
            "id": "866",
            "knownName": {
                "en": "Adam G. Riess",
                "se": "Adam G. Riess"
            },
            "givenName": {
                "en": "Adam G.",
                "se": "Adam G."
            },
            "familyName": {
                "en": "Riess",
                "se": "Riess"
            },
            "fullName": {
                "en": "Adam G. Riess",
                "se": "Adam G. Riess"
            },
            "gender": "male",
            "birth": {
                "date": "1969-12-16",
                "place": {
                    "city": {
                        "en": "Washington, DC",
                        "no": "Washington, DC",
                        "se": "Washington, DC"
                    },
                    "country": {
                        "en": "USA",
                        "no": "USA",
                        "se": "USA"
                    },
                    "cityNow": {
                        "en": "Washington, DC",
                        "no": "Washington, DC",
                        "se": "Washington, DC"
                    },
                    "countryNow": {
                        "en": "USA",
                        "no": "USA",
                        "se": "USA"
                    },
                    "continent": {
                        "en": "North America"
                    },
                    "locationString": {
                        "en": "Washington, DC, USA",
                        "no": "Washington, DC, USA",
                        "se": "Washington, DC, USA"
                    }
                }
            },
            "links": {
                "rel": "laureate",
                "href": "http://masterdataapi.nobelprize.org/2/laureate/866",
                "action": "Get",
                "types": "application/json"
            },
            "nobelPrizes": [
                {
                    "awardYear": "2011",
                    "category": {
                        "en": "Physics",
                        "no": "Fysikk",
                        "se": "Fysik"
                    },
                    "categoryFullName": {
                        "en": "The Nobel Prize in Physics",
                        "no": "Nobelprisen i fysikk",
                        "se": "Nobelpriset i fysik"
                    },
                    "sortOrder": "3",
                    "portion": "1/4",
                    "dateAwarded": "2011-10-04",
                    "prizeStatus": "received",
                    "motivation": {
                        "en": "for the discovery of the accelerating expansion of the Universe through observations of distant supernovae",
                        "se": "för upptäckten av universums accelererande expansion genom observationer av avlägsna supernovor"
                    },
                    "prizeAmount": 10000000,
                    "prizeAmountAdjusted": 10658043,
                    "affiliations": [
                        {
                            "name": {
                                "en": "Johns Hopkins University",
                                "no": "Johns Hopkins University",
                                "se": "Johns Hopkins University"
                            },
                            "nameNow": {
                                "en": "Johns Hopkins University"
                            },
                            "city": {
                                "en": "Baltimore, MD",
                                "no": "Baltimore, MD",
                                "se": "Baltimore, MD"
                            },
                            "country": {
                                "en": "USA",
                                "no": "USA",
                                "se": "USA"
                            },
                            "cityNow": {
                                "en": "Baltimore, MD",
                                "no": "Baltimore, MD",
                                "se": "Baltimore, MD"
                            },
                            "countryNow": {
                                "en": "USA",
                                "no": "USA",
                                "se": "USA"
                            },
                            "locationString": {
                                "en": "Baltimore, MD, USA",
                                "no": "Baltimore, MD, USA",
                                "se": "Baltimore, MD, USA"
                            }
                        },
                        {
                            "name": {
                                "en": "Space Telescope Science Institute",
                                "no": "Space Telescope Science Institute",
                                "se": "Space Telescope Science Institute"
                            },
                            "nameNow": {
                                "en": "Space Telescope Science Institute"
                            },
                            "city": {
                                "en": "Baltimore, MD",
                                "no": "Baltimore, MD",
                                "se": "Baltimore, MD"
                            },
                            "country": {
                                "en": "USA",
                                "no": "USA",
                                "se": "USA"
                            },
                            "cityNow": {
                                "en": "Baltimore, MD",
                                "no": "Baltimore, MD",
                                "se": "Baltimore, MD"
                            },
                            "countryNow": {
                                "en": "USA",
                                "no": "USA",
                                "se": "USA"
                            },
                            "locationString": {
                                "en": "Baltimore, MD, USA",
                                "no": "Baltimore, MD, USA",
                                "se": "Baltimore, MD, USA"
                            }
                        }
                    ],
                    "links": {
                        "rel": "nobelPrize",
                        "href": "https://masterdataapi.nobelprize.org/2/nobelPrize/phy/2011",
                        "action": "Get",
                        "types": "application/json"
                    }
                }
            ]
        },
        {
            "id": "199",
            "knownName": {
                "en": "Adolf Butenandt",
                "se": "Adolf Butenandt"
            },
            "givenName": {
                "en": "Adolf",
                "se": "Adolf"
            },
            "familyName": {
                "en": "Butenandt",
                "se": "Butenandt"
            },
            "fullName": {
                "en": "Adolf Friedrich Johann Butenandt",
                "se": "Adolf Friedrich Johann Butenandt"
            },
            "gender": "male",
            "birth": {
                "date": "1903-03-24",
                "place": {
                    "city": {
                        "en": "Bremerhaven-Lehe",
                        "no": "Bremerhaven-Lehe",
                        "se": "Bremerhaven-Lehe"
                    },
                    "country": {
                        "en": "Germany",
                        "no": "Tyskland",
                        "se": "Tyskland"
                    },
                    "cityNow": {
                        "en": "Bremerhaven-Lehe",
                        "no": "Bremerhaven-Lehe",
                        "se": "Bremerhaven-Lehe"
                    },
                    "countryNow": {
                        "en": "Germany",
                        "no": "Tyskland",
                        "se": "Tyskland"
                    },
                    "continent": {
                        "en": "Europe"
                    },
                    "locationString": {
                        "en": "Bremerhaven-Lehe, Germany",
                        "no": "Bremerhaven-Lehe, Tyskland",
                        "se": "Bremerhaven-Lehe, Tyskland"
                    }
                }
            },
            "death": {
                "date": "1995-01-18",
                "place": {
                    "city": {
                        "en": "Munich",
                        "no": "München",
                        "se": "München"
                    },
                    "country": {
                        "en": "Germany",
                        "no": "Tyskland",
                        "se": "Tyskland"
                    },
                    "cityNow": {
                        "en": "Munich",
                        "no": "München",
                        "se": "München"
                    },
                    "countryNow": {
                        "en": "Germany",
                        "no": "Tyskland",
                        "se": "Tyskland"
                    },
                    "continent": {
                        "en": "Europe"
                    },
                    "locationString": {
                        "en": "Munich, Germany",
                        "no": "München, Tyskland",
                        "se": "München, Tyskland"
                    }
                }
            },
            "links": {
                "rel": "laureate",
                "href": "http://masterdataapi.nobelprize.org/2/laureate/199",
                "action": "Get",
                "types": "application/json"
            },
            "nobelPrizes": [
                {
                    "awardYear": "1939",
                    "category": {
                        "en": "Chemistry",
                        "no": "Kjemi",
                        "se": "Kemi"
                    },
                    "categoryFullName": {
                        "en": "The Nobel Prize in Chemistry",
                        "no": "Nobelprisen i kjemi",
                        "se": "Nobelpriset i kemi"
                    },
                    "sortOrder": "1",
                    "portion": "1/2",
                    "prizeStatus": "received",
                    "motivation": {
                        "en": "for his work on sex hormones",
                        "se": "för hans arbeten över sexualhormoner"
                    },
                    "prizeAmount": 148822,
                    "prizeAmountAdjusted": 4272995,
                    "affiliations": [
                        {
                            "name": {
                                "en": "Kaiser-Wilhelm-Institut (now Max-Planck-Institut) für Biochemie",
                                "no": "Kaiser-Wilhelm-Institut (now Max-Planck-Institut) für Biochemie",
                                "se": "Kaiser-Wilhelm-Institut (now Max-Planck-Institut) für Biochemie"
                            },
                            "nameNow": {
                                "en": "Kaiser-Wilhelm-Institut (now Max-Planck-Institut) für Biochemie"
                            },
                            "city": {
                                "en": "Berlin-Dahlem",
                                "no": "Berlin-Dahlem",
                                "se": "Berlin-Dahlem"
                            },
                            "country": {
                                "en": "Germany",
                                "no": "Tyskland",
                                "se": "Tyskland"
                            },
                            "cityNow": {
                                "en": "Berlin-Dahlem",
                                "no": "Berlin-Dahlem",
                                "se": "Berlin-Dahlem"
                            },
                            "countryNow": {
                                "en": "Germany",
                                "no": "Tyskland",
                                "se": "Tyskland"
                            },
                            "locationString": {
                                "en": "Berlin-Dahlem, Germany",
                                "no": "Berlin-Dahlem, Tyskland",
                                "se": "Berlin-Dahlem, Tyskland"
                            }
                        },
                        {
                            "name": {
                                "en": "Berlin University",
                                "no": "Berlin University",
                                "se": "Berlin University"
                            },
                            "nameNow": {
                                "en": "Berlin University"
                            },
                            "city": {
                                "en": "Berlin",
                                "no": "Berlin",
                                "se": "Berlin"
                            },
                            "country": {
                                "en": "Germany",
                                "no": "Tyskland",
                                "se": "Tyskland"
                            },
                            "cityNow": {
                                "en": "Berlin",
                                "no": "Berlin",
                                "se": "Berlin"
                            },
                            "countryNow": {
                                "en": "Germany",
                                "no": "Tyskland",
                                "se": "Tyskland"
                            },
                            "locationString": {
                                "en": "Berlin, Germany",
                                "no": "Berlin, Tyskland",
                                "se": "Berlin, Tyskland"
                            }
                        }
                    ],
                    "links": {
                        "rel": "nobelPrize",
                        "href": "https://masterdataapi.nobelprize.org/2/nobelPrize/che/1939",
                        "action": "Get",
                        "types": "application/json"
                    }
                }
            ]
        },
        {
            "id": "164",
            "knownName": {
                "en": "Adolf von Baeyer",
                "se": "Adolf von Baeyer"
            },
            "givenName": {
                "en": "Adolf",
                "se": "Adolf"
            },
            "familyName": {
                "en": "von Baeyer",
                "se": "von Baeyer"
            },
            "fullName": {
                "en": "Johann Friedrich Wilhelm Adolf von Baeyer",
                "se": "Johann Friedrich Wilhelm Adolf von Baeyer"
            },
            "gender": "male",
            "birth": {
                "date": "1835-10-31",
                "place": {
                    "city": {
                        "en": "Berlin",
                        "no": "Berlin",
                        "se": "Berlin"
                    },
                    "country": {
                        "en": "Prussia",
                        "no": "Preussen",
                        "se": "Preussen"
                    },
                    "cityNow": {
                        "en": "Berlin",
                        "no": "Berlin",
                        "se": "Berlin"
                    },
                    "countryNow": {
                        "en": "Germany",
                        "no": "Tyskland",
                        "se": "Tyskland"
                    },
                    "continent": {
                        "en": "Europe"
                    },
                    "locationString": {
                        "en": "Berlin, Prussia (now Germany)",
                        "no": "Berlin, Preussen (nå Tyskland)",
                        "se": "Berlin, Preussen (nu Tyskland)"
                    }
                }
            },
            "death": {
                "date": "1917-08-20",
                "place": {
                    "city": {
                        "en": "Starnberg",
                        "no": "Starnberg",
                        "se": "Starnberg"
                    },
                    "country": {
                        "en": "Germany",
                        "no": "Tyskland",
                        "se": "Tyskland"
                    },
                    "cityNow": {
                        "en": "Starnberg",
                        "no": "Starnberg",
                        "se": "Starnberg"
                    },
                    "countryNow": {
                        "en": "Germany",
                        "no": "Tyskland",
                        "se": "Tyskland"
                    },
                    "continent": {
                        "en": "Europe"
                    },
                    "locationString": {
                        "en": "Starnberg, Germany",
                        "no": "Starnberg, Tyskland",
                        "se": "Starnberg, Tyskland"
                    }
                }
            },
            "links": {
                "rel": "laureate",
                "href": "http://masterdataapi.nobelprize.org/2/laureate/164",
                "action": "Get",
                "types": "application/json"
            },
            "nobelPrizes": [
                {
                    "awardYear": "1905",
                    "category": {
                        "en": "Chemistry",
                        "no": "Kjemi",
                        "se": "Kemi"
                    },
                    "categoryFullName": {
                        "en": "The Nobel Prize in Chemistry",
                        "no": "Nobelprisen i kjemi",
                        "se": "Nobelpriset i kemi"
                    },
                    "sortOrder": "1",
                    "portion": "1",
                    "prizeStatus": "received",
                    "motivation": {
                        "en": "in recognition of his services in the advancement of organic chemistry and the chemical industry, through his work on organic dyes and hydroaromatic compounds",
                        "se": "såsom ett erkännande av den förtjänst han inlagt om den organiska kemiens och den kemiska industriens utveckling genom sina arbeten rörande organiska färgämnen och hydroaromatiska föreningar"
                    },
                    "prizeAmount": 138089,
                    "prizeAmountAdjusted": 7696431,
                    "affiliations": [
                        {
                            "name": {
                                "en": "Munich University",
                                "no": "Munich University",
                                "se": "Munich University"
                            },
                            "nameNow": {
                                "en": "Munich University"
                            },
                            "city": {
                                "en": "Munich",
                                "no": "München",
                                "se": "München"
                            },
                            "country": {
                                "en": "Germany",
                                "no": "Tyskland",
                                "se": "Tyskland"
                            },
                            "cityNow": {
                                "en": "Munich",
                                "no": "München",
                                "se": "München"
                            },
                            "countryNow": {
                                "en": "Germany",
                                "no": "Tyskland",
                                "se": "Tyskland"
                            },
                            "locationString": {
                                "en": "Munich, Germany",
                                "no": "München, Tyskland",
                                "se": "München, Tyskland"
                            }
                        }
                    ],
                    "links": {
                        "rel": "nobelPrize",
                        "href": "https://masterdataapi.nobelprize.org/2/nobelPrize/che/1905",
                        "action": "Get",
                        "types": "application/json"
                    }
                }
            ]
        },
        {
            "id": "185",
            "knownName": {
                "en": "Adolf Windaus",
                "se": "Adolf Windaus"
            },
            "givenName": {
                "en": "Adolf",
                "se": "Adolf"
            },
            "familyName": {
                "en": "Windaus",
                "se": "Windaus"
            },
            "fullName": {
                "en": "Adolf Otto Reinhold Windaus",
                "se": "Adolf Otto Reinhold Windaus"
            },
            "gender": "male",
            "birth": {
                "date": "1876-12-25",
                "place": {
                    "city": {
                        "en": "Berlin",
                        "no": "Berlin",
                        "se": "Berlin"
                    },
                    "country": {
                        "en": "Germany",
                        "no": "Tyskland",
                        "se": "Tyskland"
                    },
                    "cityNow": {
                        "en": "Berlin",
                        "no": "Berlin",
                        "se": "Berlin"
                    },
                    "countryNow": {
                        "en": "Germany",
                        "no": "Tyskland",
                        "se": "Tyskland"
                    },
                    "continent": {
                        "en": "Europe"
                    },
                    "locationString": {
                        "en": "Berlin, Germany",
                        "no": "Berlin, Tyskland",
                        "se": "Berlin, Tyskland"
                    }
                }
            },
            "death": {
                "date": "1959-06-09",
                "place": {
                    "city": {
                        "en": "Göttingen",
                        "no": "Göttingen",
                        "se": "Göttingen"
                    },
                    "country": {
                        "en": "West Germany",
                        "no": "Vest-Tyskland",
                        "se": "Västtyskland"
                    },
                    "cityNow": {
                        "en": "Göttingen",
                        "no": "Göttingen",
                        "se": "Göttingen"
                    },
                    "countryNow": {
                        "en": "Germany",
                        "no": "Tyskland",
                        "se": "Tyskland"
                    },
                    "continent": {
                        "en": "Europe"
                    },
                    "locationString": {
                        "en": "Göttingen, West Germany (now Germany)",
                        "no": "Göttingen, Vest-Tyskland (nå Tyskland)",
                        "se": "Göttingen, Västtyskland (nu Tyskland)"
                    }
                }
            },
            "links": {
                "rel": "laureate",
                "href": "http://masterdataapi.nobelprize.org/2/laureate/185",
                "action": "Get",
                "types": "application/json"
            },
            "nobelPrizes": [
                {
                    "awardYear": "1928",
                    "category": {
                        "en": "Chemistry",
                        "no": "Kjemi",
                        "se": "Kemi"
                    },
                    "categoryFullName": {
                        "en": "The Nobel Prize in Chemistry",
                        "no": "Nobelprisen i kjemi",
                        "se": "Nobelpriset i kemi"
                    },
                    "sortOrder": "1",
                    "portion": "1",
                    "prizeStatus": "received",
                    "motivation": {
                        "en": "for the services rendered through his research into the constitution of the sterols and their connection with the vitamins",
                        "se": "för hans förtjänster om utforskandet av sterinernas konstitution och deras samband med vitamingruppen"
                    },
                    "prizeAmount": 156939,
                    "prizeAmountAdjusted": 4506052,
                    "affiliations": [
                        {
                            "name": {
                                "en": "Goettingen University",
                                "no": "Goettingen University",
                                "se": "Goettingen University"
                            },
                            "nameNow": {
                                "en": "Goettingen University"
                            },
                            "city": {
                                "en": "Göttingen",
                                "no": "Göttingen",
                                "se": "Göttingen"
                            },
                            "country": {
                                "en": "Germany",
                                "no": "Tyskland",
                                "se": "Tyskland"
                            },
                            "cityNow": {
                                "en": "Göttingen",
                                "no": "Göttingen",
                                "se": "Göttingen"
                            },
                            "countryNow": {
                                "en": "Germany",
                                "no": "Tyskland",
                                "se": "Tyskland"
                            },
                            "locationString": {
                                "en": "Göttingen, Germany",
                                "no": "Göttingen, Tyskland",
                                "se": "Göttingen, Tyskland"
                            }
                        }
                    ],
                    "links": {
                        "rel": "nobelPrize",
                        "href": "https://masterdataapi.nobelprize.org/2/nobelPrize/che/1928",
                        "action": "Get",
                        "types": "application/json"
                    }
                }
            ]
        },
        {
            "id": "541",
            "knownName": {
                "en": "Adolfo Pérez Esquivel",
                "se": "Adolfo Pérez Esquivel"
            },
            "givenName": {
                "en": "Adolfo",
                "se": "Adolfo"
            },
            "familyName": {
                "en": "Pérez Esquivel",
                "se": "Pérez Esquivel"
            },
            "fullName": {
                "en": "Adolfo Pérez Esquivel",
                "se": "Adolfo Pérez Esquivel"
            },
            "gender": "male",
            "birth": {
                "date": "1931-11-26",
                "place": {
                    "city": {
                        "en": "Buenos Aires",
                        "no": "Buenos Aires",
                        "se": "Buenos Aires"
                    },
                    "country": {
                        "en": "Argentina",
                        "no": "Argentina",
                        "se": "Argentina"
                    },
                    "cityNow": {
                        "en": "Buenos Aires",
                        "no": "Buenos Aires",
                        "se": "Buenos Aires"
                    },
                    "countryNow": {
                        "en": "Argentina",
                        "no": "Argentina",
                        "se": "Argentina"
                    },
                    "continent": {
                        "en": "South America"
                    },
                    "locationString": {
                        "en": "Buenos Aires, Argentina",
                        "no": "Buenos Aires, Argentina",
                        "se": "Buenos Aires, Argentina"
                    }
                }
            },
            "links": {
                "rel": "laureate",
                "href": "http://masterdataapi.nobelprize.org/2/laureate/541",
                "action": "Get",
                "types": "application/json"
            },
            "nobelPrizes": [
                {
                    "awardYear": "1980",
                    "category": {
                        "en": "Peace",
                        "no": "Fred",
                        "se": "Fred"
                    },
                    "categoryFullName": {
                        "en": "The Nobel Peace Prize",
                        "no": "Nobels fredspris",
                        "se": "Nobels fredspris"
                    },
                    "sortOrder": "1",
                    "portion": "1",
                    "dateAwarded": "1980-10-27",
                    "prizeStatus": "received",
                    "motivation": {
                        "en": "for being a source of inspiration to repressed people, especially in Latin America",
                        "no": "for rollen som inspirator for undertrykte mennesker, særlig i Latin-Amerika"
                    },
                    "prizeAmount": 880000,
                    "prizeAmountAdjusted": 2920490,
                    "residences": [
                        {
                            "country": {
                                "en": "Argentina",
                                "no": "Argentina",
                                "se": "Argentina"
                            },
                            "countryNow": {
                                "en": "Argentina",
                                "no": "Argentina",
                                "se": "Argentina"
                            },
                            "locationString": {
                                "en": "Argentina",
                                "no": "Argentina",
                                "se": "Argentina"
                            }
                        }
                    ],
                    "links": {
                        "rel": "nobelPrize",
                        "href": "https://masterdataapi.nobelprize.org/2/nobelPrize/pea/1980",
                        "action": "Get",
                        "types": "application/json"
                    }
                }
            ]
        },
        {
            "id": "292",
            "knownName": {
                "en": "Ahmed Zewail",
                "se": "Ahmed Zewail"
            },
            "givenName": {
                "en": "Ahmed",
                "se": "Ahmed"
            },
            "familyName": {
                "en": "Zewail",
                "se": "Zewail"
            },
            "fullName": {
                "en": "Ahmed H. Zewail",
                "se": "Ahmed H. Zewail"
            },
            "gender": "male",
            "birth": {
                "date": "1946-02-26",
                "place": {
                    "city": {
                        "en": "Damanhur",
                        "no": "Damanhur",
                        "se": "Damanhur"
                    },
                    "country": {
                        "en": "Egypt",
                        "no": "Egypt",
                        "se": "Egypten"
                    },
                    "cityNow": {
                        "en": "Damanhur",
                        "no": "Damanhur",
                        "se": "Damanhur"
                    },
                    "countryNow": {
                        "en": "Egypt",
                        "no": "Egypt",
                        "se": "Egypten"
                    },
                    "continent": {
                        "en": "Africa"
                    },
                    "locationString": {
                        "en": "Damanhur, Egypt",
                        "no": "Damanhur, Egypt",
                        "se": "Damanhur, Egypten"
                    }
                }
            },
            "death": {
                "date": "2016-08-02",
                "place": {
                    "city": {
                        "en": "Pasadena, CA",
                        "no": "Pasadena, CA",
                        "se": "Pasadena, CA"
                    },
                    "country": {
                        "en": "USA",
                        "no": "USA",
                        "se": "USA"
                    },
                    "cityNow": {
                        "en": "Pasadena, CA",
                        "no": "Pasadena, CA",
                        "se": "Pasadena, CA"
                    },
                    "countryNow": {
                        "en": "USA",
                        "no": "USA",
                        "se": "USA"
                    },
                    "continent": {
                        "en": "North America"
                    },
                    "locationString": {
                        "en": "Pasadena, CA, USA",
                        "no": "Pasadena, CA, USA",
                        "se": "Pasadena, CA, USA"
                    }
                }
            },
            "links": {
                "rel": "laureate",
                "href": "http://masterdataapi.nobelprize.org/2/laureate/292",
                "action": "Get",
                "types": "application/json"
            },
            "nobelPrizes": [
                {
                    "awardYear": "1999",
                    "category": {
                        "en": "Chemistry",
                        "no": "Kjemi",
                        "se": "Kemi"
                    },
                    "categoryFullName": {
                        "en": "The Nobel Prize in Chemistry",
                        "no": "Nobelprisen i kjemi",
                        "se": "Nobelpriset i kemi"
                    },
                    "sortOrder": "1",
                    "portion": "1",
                    "dateAwarded": "1999-10-12",
                    "prizeStatus": "received",
                    "motivation": {
                        "en": "for his studies of the transition states of chemical reactions using femtosecond spectroscopy",
                        "se": "för hans studier av kemiska reaktioners övergångstillstånd med femtosekundspektroskopi"
                    },
                    "prizeAmount": 7900000,
                    "prizeAmountAdjusted": 10156377,
                    "affiliations": [
                        {
                            "name": {
                                "en": "California Institute of Technology (Caltech)",
                                "no": "California Institute of Technology (Caltech)",
                                "se": "California Institute of Technology (Caltech)"
                            },
                            "nameNow": {
                                "en": "California Institute of Technology (Caltech)"
                            },
                            "city": {
                                "en": "Pasadena, CA",
                                "no": "Pasadena, CA",
                                "se": "Pasadena, CA"
                            },
                            "country": {
                                "en": "USA",
                                "no": "USA",
                                "se": "USA"
                            },
                            "cityNow": {
                                "en": "Pasadena, CA",
                                "no": "Pasadena, CA",
                                "se": "Pasadena, CA"
                            },
                            "countryNow": {
                                "en": "USA",
                                "no": "USA",
                                "se": "USA"
                            },
                            "locationString": {
                                "en": "Pasadena, CA, USA",
                                "no": "Pasadena, CA, USA",
                                "se": "Pasadena, CA, USA"
                            }
                        }
                    ],
                    "links": {
                        "rel": "nobelPrize",
                        "href": "https://masterdataapi.nobelprize.org/2/nobelPrize/che/1999",
                        "action": "Get",
                        "types": "application/json"
                    }
                }
            ]
        },
        {
            "id": "853",
            "knownName": {
                "en": "Akira Suzuki",
                "se": "Akira Suzuki"
            },
            "givenName": {
                "en": "Akira",
                "se": "Akira"
            },
            "familyName": {
                "en": "Suzuki",
                "se": "Suzuki"
            },
            "fullName": {
                "en": "Akira Suzuki",
                "se": "Akira Suzuki"
            },
            "gender": "male",
            "birth": {
                "date": "1930-09-12",
                "place": {
                    "city": {
                        "en": "Mukawa",
                        "no": "Mukawa",
                        "se": "Mukawa"
                    },
                    "country": {
                        "en": "Japan",
                        "no": "Japan",
                        "se": "Japan"
                    },
                    "cityNow": {
                        "en": "Mukawa",
                        "no": "Mukawa",
                        "se": "Mukawa"
                    },
                    "countryNow": {
                        "en": "Japan",
                        "no": "Japan",
                        "se": "Japan"
                    },
                    "continent": {
                        "en": "Asia"
                    },
                    "locationString": {
                        "en": "Mukawa, Japan",
                        "no": "Mukawa, Japan",
                        "se": "Mukawa, Japan"
                    }
                }
            },
            "links": {
                "rel": "laureate",
                "href": "http://masterdataapi.nobelprize.org/2/laureate/853",
                "action": "Get",
                "types": "application/json"
            },
            "nobelPrizes": [
                {
                    "awardYear": "2010",
                    "category": {
                        "en": "Chemistry",
                        "no": "Kjemi",
                        "se": "Kemi"
                    },
                    "categoryFullName": {
                        "en": "The Nobel Prize in Chemistry",
                        "no": "Nobelprisen i kjemi",
                        "se": "Nobelpriset i kemi"
                    },
                    "sortOrder": "3",
                    "portion": "1/3",
                    "dateAwarded": "2010-10-06",
                    "prizeStatus": "received",
                    "motivation": {
                        "en": "for palladium-catalyzed cross couplings in organic synthesis",
                        "se": "för palladiumkatalyserade korskopplingar i organisk syntes"
                    },
                    "prizeAmount": 10000000,
                    "prizeAmountAdjusted": 10934795,
                    "affiliations": [
                        {
                            "name": {
                                "en": "Hokkaido University",
                                "no": "Hokkaido University",
                                "se": "Hokkaido University"
                            },
                            "nameNow": {
                                "en": "Hokkaido University"
                            },
                            "city": {
                                "en": "Sapporo",
                                "no": "Sapporo",
                                "se": "Sapporo"
                            },
                            "country": {
                                "en": "Japan",
                                "no": "Japan",
                                "se": "Japan"
                            },
                            "cityNow": {
                                "en": "Sapporo",
                                "no": "Sapporo",
                                "se": "Sapporo"
                            },
                            "countryNow": {
                                "en": "Japan",
                                "no": "Japan",
                                "se": "Japan"
                            },
                            "locationString": {
                                "en": "Sapporo, Japan",
                                "no": "Sapporo, Japan",
                                "se": "Sapporo, Japan"
                            }
                        }
                    ],
                    "links": {
                        "rel": "nobelPrize",
                        "href": "https://masterdataapi.nobelprize.org/2/nobelPrize/che/2010",
                        "action": "Get",
                        "types": "application/json"
                    }
                }
            ]
        },
        {
            "id": "978",
            "knownName": {
                "en": "Akira Yoshino",
                "se": "Akira Yoshino"
            },
            "givenName": {
                "en": "Akira",
                "se": "Akira"
            },
            "familyName": {
                "en": "Yoshino",
                "se": "Yoshino"
            },
            "fullName": {
                "en": "Akira Yoshino",
                "se": "Akira Yoshino"
            },
            "gender": "male",
            "birth": {
                "date": "1948-01-30",
                "place": {
                    "city": {
                        "en": "Suita"
                    },
                    "country": {
                        "en": "Japan",
                        "no": "Japan",
                        "se": "Japan"
                    },
                    "cityNow": {
                        "en": "Suita"
                    },
                    "countryNow": {
                        "en": "Japan",
                        "no": "Japan",
                        "se": "Japan"
                    },
                    "continent": {
                        "en": "Asia"
                    },
                    "locationString": {
                        "en": "Suita, Japan",
                        "no": "Japan",
                        "se": "Japan"
                    }
                }
            },
            "links": {
                "rel": "laureate",
                "href": "http://masterdataapi.nobelprize.org/2/laureate/978",
                "action": "Get",
                "types": "application/json"
            },
            "nobelPrizes": [
                {
                    "awardYear": "2019",
                    "category": {
                        "en": "Chemistry",
                        "no": "Kjemi",
                        "se": "Kemi"
                    },
                    "categoryFullName": {
                        "en": "The Nobel Prize in Chemistry",
                        "no": "Nobelprisen i kjemi",
                        "se": "Nobelpriset i kemi"
                    },
                    "sortOrder": "3",
                    "portion": "1/3",
                    "dateAwarded": "2019-10-09",
                    "prizeStatus": "received",
                    "motivation": {
                        "en": "for the development of lithium-ion batteries",
                        "se": "för utveckling av litiumjonbatterier"
                    },
                    "prizeAmount": 9000000,
                    "prizeAmountAdjusted": 9096000,
                    "affiliations": [
                        {
                            "name": {
                                "en": "Asahi Kasei Corporation",
                                "no": "Asahi Kasei Corporation",
                                "se": "Asahi Kasei Corporation"
                            },
                            "nameNow": {
                                "en": "Asahi Kasei Corporation"
                            },
                            "city": {
                                "en": "Tokyo",
                                "no": "Tokyo",
                                "se": "Tokyo"
                            },
                            "country": {
                                "en": "Japan",
                                "no": "Japan",
                                "se": "Japan"
                            },
                            "cityNow": {
                                "en": "Tokyo",
                                "no": "Tokyo",
                                "se": "Tokyo"
                            },
                            "countryNow": {
                                "en": "Japan",
                                "no": "Japan",
                                "se": "Japan"
                            },
                            "locationString": {
                                "en": "Tokyo, Japan",
                                "no": "Tokyo, Japan",
                                "se": "Tokyo, Japan"
                            }
                        },
                        {
                            "name": {
                                "en": "Meijo University",
                                "no": "Meijo University",
                                "se": "Meijo University"
                            },
                            "nameNow": {
                                "en": "Meijo University"
                            },
                            "city": {
                                "en": "Nagoya",
                                "no": "Nagoya",
                                "se": "Nagoya"
                            },
                            "country": {
                                "en": "Japan",
                                "no": "Japan",
                                "se": "Japan"
                            },
                            "cityNow": {
                                "en": "Nagoya",
                                "no": "Nagoya",
                                "se": "Nagoya"
                            },
                            "countryNow": {
                                "en": "Japan",
                                "no": "Japan",
                                "se": "Japan"
                            },
                            "locationString": {
                                "en": "Nagoya, Japan",
                                "no": "Nagoya, Japan",
                                "se": "Nagoya, Japan"
                            }
                        }
                    ],
                    "links": {
                        "rel": "nobelPrize",
                        "href": "https://masterdataapi.nobelprize.org/2/nobelPrize/che/2019",
                        "action": "Get",
                        "types": "application/json"
                    }
                }
            ]
        },
        {
            "id": "819",
            "knownName": {
                "en": "Al Gore",
                "se": "Al Gore"
            },
            "givenName": {
                "en": "Al",
                "se": "Al"
            },
            "familyName": {
                "en": "Gore",
                "se": "Gore"
            },
            "fullName": {
                "en": "Albert Arnold (Al) Gore Jr.",
                "se": "Albert Arnold (Al) Gore Jr."
            },
            "gender": "male",
            "birth": {
                "date": "1948-03-31",
                "place": {
                    "city": {
                        "en": "Washington, DC",
                        "no": "Washington, DC",
                        "se": "Washington, DC"
                    },
                    "country": {
                        "en": "USA",
                        "no": "USA",
                        "se": "USA"
                    },
                    "cityNow": {
                        "en": "Washington, DC",
                        "no": "Washington, DC",
                        "se": "Washington, DC"
                    },
                    "countryNow": {
                        "en": "USA",
                        "no": "USA",
                        "se": "USA"
                    },
                    "continent": {
                        "en": "North America"
                    },
                    "locationString": {
                        "en": "Washington, DC, USA",
                        "no": "Washington, DC, USA",
                        "se": "Washington, DC, USA"
                    }
                }
            },
            "links": {
                "rel": "laureate",
                "href": "http://masterdataapi.nobelprize.org/2/laureate/819",
                "action": "Get",
                "types": "application/json"
            },
            "nobelPrizes": [
                {
                    "awardYear": "2007",
                    "category": {
                        "en": "Peace",
                        "no": "Fred",
                        "se": "Fred"
                    },
                    "categoryFullName": {
                        "en": "The Nobel Peace Prize",
                        "no": "Nobels fredspris",
                        "se": "Nobels fredspris"
                    },
                    "sortOrder": "2",
                    "portion": "1/2",
                    "dateAwarded": "2007-10-12",
                    "prizeStatus": "received",
                    "motivation": {
                        "en": "for their efforts to build up and disseminate greater knowledge about man-made climate change, and to lay the foundations for the measures that are needed to counteract such change",
                        "no": "for deira innsats for å skape og spreie større kunnskap om menneskeskapte klimaendringar og for å leggje grunnlag for dei tiltaka som krevst for å motverke desse endringane"
                    },
                    "prizeAmount": 10000000,
                    "prizeAmountAdjusted": 11422544,
                    "residences": [
                        {
                            "country": {
                                "en": "USA",
                                "no": "USA",
                                "se": "USA"
                            },
                            "countryNow": {
                                "en": "USA",
                                "no": "USA",
                                "se": "USA"
                            },
                            "locationString": {
                                "en": "USA",
                                "no": "USA",
                                "se": "USA"
                            }
                        }
                    ],
                    "links": {
                        "rel": "nobelPrize",
                        "href": "https://masterdataapi.nobelprize.org/2/nobelPrize/pea/2007",
                        "action": "Get",
                        "types": "application/json"
                    }
                }
            ]
        },
        {
            "id": "729",
            "knownName": {
                "en": "Alan Heeger",
                "se": "Alan Heeger"
            },
            "givenName": {
                "en": "Alan",
                "se": "Alan"
            },
            "familyName": {
                "en": "Heeger",
                "se": "Heeger"
            },
            "fullName": {
                "en": "Alan J. Heeger",
                "se": "Alan J. Heeger"
            },
            "gender": "male",
            "birth": {
                "date": "1936-01-22",
                "place": {
                    "city": {
                        "en": "Sioux City, IA",
                        "no": "Sioux City, IA",
                        "se": "Sioux City, IA"
                    },
                    "country": {
                        "en": "USA",
                        "no": "USA",
                        "se": "USA"
                    },
                    "cityNow": {
                        "en": "Sioux City, IA",
                        "no": "Sioux City, IA",
                        "se": "Sioux City, IA"
                    },
                    "countryNow": {
                        "en": "USA",
                        "no": "USA",
                        "se": "USA"
                    },
                    "continent": {
                        "en": "North America"
                    },
                    "locationString": {
                        "en": "Sioux City, IA, USA",
                        "no": "Sioux City, IA, USA",
                        "se": "Sioux City, IA, USA"
                    }
                }
            },
            "links": {
                "rel": "laureate",
                "href": "http://masterdataapi.nobelprize.org/2/laureate/729",
                "action": "Get",
                "types": "application/json"
            },
            "nobelPrizes": [
                {
                    "awardYear": "2000",
                    "category": {
                        "en": "Chemistry",
                        "no": "Kjemi",
                        "se": "Kemi"
                    },
                    "categoryFullName": {
                        "en": "The Nobel Prize in Chemistry",
                        "no": "Nobelprisen i kjemi",
                        "se": "Nobelpriset i kemi"
                    },
                    "sortOrder": "1",
                    "portion": "1/3",
                    "dateAwarded": "2000-10-10",
                    "prizeStatus": "received",
                    "motivation": {
                        "en": "for the discovery and development of conductive polymers",
                        "se": "för upptäckten och utvecklandet av ledande polymerer"
                    },
                    "prizeAmount": 9000000,
                    "prizeAmountAdjusted": 11453996,
                    "affiliations": [
                        {
                            "name": {
                                "en": "University of California",
                                "no": "University of California",
                                "se": "University of California"
                            },
                            "nameNow": {
                                "en": "University of California"
                            },
                            "city": {
                                "en": "Santa Barbara, CA",
                                "no": "Santa Barbara, CA",
                                "se": "Santa Barbara, CA"
                            },
                            "country": {
                                "en": "USA",
                                "no": "USA",
                                "se": "USA"
                            },
                            "cityNow": {
                                "en": "Santa Barbara, CA",
                                "no": "Santa Barbara, CA",
                                "se": "Santa Barbara, CA"
                            },
                            "countryNow": {
                                "en": "USA",
                                "no": "USA",
                                "se": "USA"
                            },
                            "locationString": {
                                "en": "Santa Barbara, CA, USA",
                                "no": "Santa Barbara, CA, USA",
                                "se": "Santa Barbara, CA, USA"
                            }
                        }
                    ],
                    "links": {
                        "rel": "nobelPrize",
                        "href": "https://masterdataapi.nobelprize.org/2/nobelPrize/che/2000",
                        "action": "Get",
                        "types": "application/json"
                    }
                }
            ]
        },
        {
            "id": "376",
            "knownName": {
                "en": "Alan Hodgkin",
                "se": "Alan Hodgkin"
            },
            "givenName": {
                "en": "Alan",
                "se": "Alan"
            },
            "familyName": {
                "en": "Hodgkin",
                "se": "Hodgkin"
            },
            "fullName": {
                "en": "Alan Lloyd Hodgkin",
                "se": "Alan Lloyd Hodgkin"
            },
            "gender": "male",
            "birth": {
                "date": "1914-02-05",
                "place": {
                    "city": {
                        "en": "Banbury",
                        "no": "Banbury",
                        "se": "Banbury"
                    },
                    "country": {
                        "en": "United Kingdom",
                        "no": "Storbritannia",
                        "se": "Storbritannien"
                    },
                    "cityNow": {
                        "en": "Banbury",
                        "no": "Banbury",
                        "se": "Banbury"
                    },
                    "countryNow": {
                        "en": "United Kingdom",
                        "no": "Storbritannia",
                        "se": "Storbritannien"
                    },
                    "continent": {
                        "en": "Europe"
                    },
                    "locationString": {
                        "en": "Banbury, United Kingdom",
                        "no": "Banbury, Storbritannia",
                        "se": "Banbury, Storbritannien"
                    }
                }
            },
            "death": {
                "date": "1998-12-20",
                "place": {
                    "city": {
                        "en": "Cambridge",
                        "no": "Cambridge",
                        "se": "Cambridge"
                    },
                    "country": {
                        "en": "United Kingdom",
                        "no": "Storbritannia",
                        "se": "Storbritannien"
                    },
                    "cityNow": {
                        "en": "Cambridge",
                        "no": "Cambridge",
                        "se": "Cambridge"
                    },
                    "countryNow": {
                        "en": "United Kingdom",
                        "no": "Storbritannia",
                        "se": "Storbritannien"
                    },
                    "continent": {
                        "en": "Europe"
                    },
                    "locationString": {
                        "en": "Cambridge, United Kingdom",
                        "no": "Cambridge, Storbritannia",
                        "se": "Cambridge, Storbritannien"
                    }
                }
            },
            "links": {
                "rel": "laureate",
                "href": "http://masterdataapi.nobelprize.org/2/laureate/376",
                "action": "Get",
                "types": "application/json"
            },
            "nobelPrizes": [
                {
                    "awardYear": "1963",
                    "category": {
                        "en": "Physiology or Medicine",
                        "no": "Fysiologi eller medisin",
                        "se": "Fysiologi eller medicin"
                    },
                    "categoryFullName": {
                        "en": "The Nobel Prize in Physiology or Medicine",
                        "no": "Nobelprisen i fysiologi eller medisin",
                        "se": "Nobelpriset i fysiologi eller medicin"
                    },
                    "sortOrder": "2",
                    "portion": "1/3",
                    "prizeStatus": "received",
                    "motivation": {
                        "en": "for their discoveries concerning the ionic mechanisms involved in excitation and inhibition in the peripheral and central portions of the nerve cell membrane",
                        "se": "för deras upptäckter rörande jonmekanismerna vid retning och hämning i nervcellernas perifera och centrala membranavsnitt"
                    },
                    "prizeAmount": 265000,
                    "prizeAmountAdjusted": 2869571,
                    "affiliations": [
                        {
                            "name": {
                                "en": "University of Cambridge",
                                "no": "University of Cambridge",
                                "se": "University of Cambridge"
                            },
                            "nameNow": {
                                "en": "University of Cambridge"
                            },
                            "city": {
                                "en": "Cambridge",
                                "no": "Cambridge",
                                "se": "Cambridge"
                            },
                            "country": {
                                "en": "United Kingdom",
                                "no": "Storbritannia",
                                "se": "Storbritannien"
                            },
                            "cityNow": {
                                "en": "Cambridge",
                                "no": "Cambridge",
                                "se": "Cambridge"
                            },
                            "countryNow": {
                                "en": "United Kingdom",
                                "no": "Storbritannia",
                                "se": "Storbritannien"
                            },
                            "locationString": {
                                "en": "Cambridge, United Kingdom",
                                "no": "Cambridge, Storbritannia",
                                "se": "Cambridge, Storbritannien"
                            }
                        }
                    ],
                    "links": {
                        "rel": "nobelPrize",
                        "href": "https://masterdataapi.nobelprize.org/2/nobelPrize/med/1963",
                        "action": "Get",
                        "types": "application/json"
                    }
                }
            ]
        },
        {
            "id": "730",
            "knownName": {
                "en": "Alan MacDiarmid",
                "se": "Alan MacDiarmid"
            },
            "givenName": {
                "en": "Alan",
                "se": "Alan"
            },
            "familyName": {
                "en": "MacDiarmid",
                "se": "MacDiarmid"
            },
            "fullName": {
                "en": "Alan G. MacDiarmid",
                "se": "Alan G. MacDiarmid"
            },
            "gender": "male",
            "birth": {
                "date": "1927-04-14",
                "place": {
                    "city": {
                        "en": "Masterton",
                        "no": "Masterton",
                        "se": "Masterton"
                    },
                    "country": {
                        "en": "New Zealand",
                        "no": "New Zealand",
                        "se": "Nya Zeeland"
                    },
                    "cityNow": {
                        "en": "Masterton",
                        "no": "Masterton",
                        "se": "Masterton"
                    },
                    "countryNow": {
                        "en": "New Zealand",
                        "no": "New Zealand",
                        "se": "Nya Zeeland"
                    },
                    "continent": {
                        "en": "Oceania"
                    },
                    "locationString": {
                        "en": "Masterton, New Zealand",
                        "no": "Masterton, New Zealand",
                        "se": "Masterton, Nya Zeeland"
                    }
                }
            },
            "death": {
                "date": "2007-02-07",
                "place": {
                    "city": {
                        "en": "Drexel Hill, PA",
                        "no": "Drexel Hill, PA",
                        "se": "Drexel Hill, PA"
                    },
                    "country": {
                        "en": "USA",
                        "no": "USA",
                        "se": "USA"
                    },
                    "cityNow": {
                        "en": "Drexel Hill, PA",
                        "no": "Drexel Hill, PA",
                        "se": "Drexel Hill, PA"
                    },
                    "countryNow": {
                        "en": "USA",
                        "no": "USA",
                        "se": "USA"
                    },
                    "continent": {
                        "en": "North America"
                    },
                    "locationString": {
                        "en": "Drexel Hill, PA, USA",
                        "no": "Drexel Hill, PA, USA",
                        "se": "Drexel Hill, PA, USA"
                    }
                }
            },
            "links": {
                "rel": "laureate",
                "href": "http://masterdataapi.nobelprize.org/2/laureate/730",
                "action": "Get",
                "types": "application/json"
            },
            "nobelPrizes": [
                {
                    "awardYear": "2000",
                    "category": {
                        "en": "Chemistry",
                        "no": "Kjemi",
                        "se": "Kemi"
                    },
                    "categoryFullName": {
                        "en": "The Nobel Prize in Chemistry",
                        "no": "Nobelprisen i kjemi",
                        "se": "Nobelpriset i kemi"
                    },
                    "sortOrder": "2",
                    "portion": "1/3",
                    "dateAwarded": "2000-10-10",
                    "prizeStatus": "received",
                    "motivation": {
                        "en": "for the discovery and development of conductive polymers",
                        "se": "för upptäckten och utvecklandet av ledande polymerer"
                    },
                    "prizeAmount": 9000000,
                    "prizeAmountAdjusted": 11453996,
                    "affiliations": [
                        {
                            "name": {
                                "en": "University of Pennsylvania",
                                "no": "University of Pennsylvania",
                                "se": "University of Pennsylvania"
                            },
                            "nameNow": {
                                "en": "University of Pennsylvania"
                            },
                            "city": {
                                "en": "Philadelphia, PA",
                                "no": "Philadelphia, PA",
                                "se": "Philadelphia, PA"
                            },
                            "country": {
                                "en": "USA",
                                "no": "USA",
                                "se": "USA"
                            },
                            "cityNow": {
                                "en": "Philadelphia, PA",
                                "no": "Philadelphia, PA",
                                "se": "Philadelphia, PA"
                            },
                            "countryNow": {
                                "en": "USA",
                                "no": "USA",
                                "se": "USA"
                            },
                            "locationString": {
                                "en": "Philadelphia, PA, USA",
                                "no": "Philadelphia, PA, USA",
                                "se": "Philadelphia, PA, USA"
                            }
                        }
                    ],
                    "links": {
                        "rel": "nobelPrize",
                        "href": "https://masterdataapi.nobelprize.org/2/nobelPrize/che/2000",
                        "action": "Get",
                        "types": "application/json"
                    }
                }
            ]
        },
        {
            "id": "11",
            "knownName": {
                "en": "Albert A. Michelson",
                "se": "Albert A. Michelson"
            },
            "givenName": {
                "en": "Albert A.",
                "se": "Albert A."
            },
            "familyName": {
                "en": "Michelson",
                "se": "Michelson"
            },
            "fullName": {
                "en": "Albert Abraham Michelson",
                "se": "Albert Abraham Michelson"
            },
            "gender": "male",
            "birth": {
                "date": "1852-12-19",
                "place": {
                    "city": {
                        "en": "Strelno",
                        "no": "Strelno",
                        "se": "Strelno"
                    },
                    "country": {
                        "en": "Prussia",
                        "no": "Preussen",
                        "se": "Preussen"
                    },
                    "cityNow": {
                        "en": "Strzelno",
                        "no": "Strzelno",
                        "se": "Strzelno"
                    },
                    "countryNow": {
                        "en": "Poland",
                        "no": "Polen",
                        "se": "Polen"
                    },
                    "continent": {
                        "en": "Europe"
                    },
                    "locationString": {
                        "en": "Strelno, Prussia (now Strzelno, Poland)",
                        "no": "Strelno, Preussen (nå Strzelno, Polen)",
                        "se": "Strelno, Preussen (nu Strzelno, Polen)"
                    }
                }
            },
            "death": {
                "date": "1931-05-09",
                "place": {
                    "city": {
                        "en": "Pasadena, CA",
                        "no": "Pasadena, CA",
                        "se": "Pasadena, CA"
                    },
                    "country": {
                        "en": "USA",
                        "no": "USA",
                        "se": "USA"
                    },
                    "cityNow": {
                        "en": "Pasadena, CA",
                        "no": "Pasadena, CA",
                        "se": "Pasadena, CA"
                    },
                    "countryNow": {
                        "en": "USA",
                        "no": "USA",
                        "se": "USA"
                    },
                    "continent": {
                        "en": "North America"
                    },
                    "locationString": {
                        "en": "Pasadena, CA, USA",
                        "no": "Pasadena, CA, USA",
                        "se": "Pasadena, CA, USA"
                    }
                }
            },
            "links": {
                "rel": "laureate",
                "href": "http://masterdataapi.nobelprize.org/2/laureate/11",
                "action": "Get",
                "types": "application/json"
            },
            "nobelPrizes": [
                {
                    "awardYear": "1907",
                    "category": {
                        "en": "Physics",
                        "no": "Fysikk",
                        "se": "Fysik"
                    },
                    "categoryFullName": {
                        "en": "The Nobel Prize in Physics",
                        "no": "Nobelprisen i fysikk",
                        "se": "Nobelpriset i fysik"
                    },
                    "sortOrder": "1",
                    "portion": "1",
                    "prizeStatus": "received",
                    "motivation": {
                        "en": "for his optical precision instruments and the spectroscopic and metrological investigations carried out with their aid",
                        "se": "för hans optiska precisionsinstrument och hans därmed utförda spektroskopiska och metrologiska undersökningar"
                    },
                    "prizeAmount": 138796,
                    "prizeAmountAdjusted": 7108606,
                    "affiliations": [
                        {
                            "name": {
                                "en": "University of Chicago",
                                "no": "University of Chicago",
                                "se": "University of Chicago"
                            },
                            "nameNow": {
                                "en": "University of Chicago"
                            },
                            "city": {
                                "en": "Chicago, IL",
                                "no": "Chicago, IL",
                                "se": "Chicago, IL"
                            },
                            "country": {
                                "en": "USA",
                                "no": "USA",
                                "se": "USA"
                            },
                            "cityNow": {
                                "en": "Chicago, IL",
                                "no": "Chicago, IL",
                                "se": "Chicago, IL"
                            },
                            "countryNow": {
                                "en": "USA",
                                "no": "USA",
                                "se": "USA"
                            },
                            "locationString": {
                                "en": "Chicago, IL, USA",
                                "no": "Chicago, IL, USA",
                                "se": "Chicago, IL, USA"
                            }
                        }
                    ],
                    "links": {
                        "rel": "nobelPrize",
                        "href": "https://masterdataapi.nobelprize.org/2/nobelPrize/phy/1907",
                        "action": "Get",
                        "types": "application/json"
                    }
                }
            ]
        },
        {
            "id": "628",
            "knownName": {
                "en": "Albert Camus",
                "se": "Albert Camus"
            },
            "givenName": {
                "en": "Albert",
                "se": "Albert"
            },
            "familyName": {
                "en": "Camus",
                "se": "Camus"
            },
            "fullName": {
                "en": "Albert Camus",
                "se": "Albert Camus"
            },
            "gender": "male",
            "birth": {
                "date": "1913-11-07",
                "place": {
                    "city": {
                        "en": "Mondovi",
                        "no": "Mondovi",
                        "se": "Mondovi"
                    },
                    "country": {
                        "en": "French Algeria",
                        "no": "fransk Algerie",
                        "se": "Franska Algeriet"
                    },
                    "cityNow": {
                        "en": "Mondovi",
                        "no": "Mondovi",
                        "se": "Mondovi"
                    },
                    "countryNow": {
                        "en": "Algeria",
                        "no": "Algerie",
                        "se": "Algeriet"
                    },
                    "continent": {
                        "en": "Africa"
                    },
                    "locationString": {
                        "en": "Mondovi, French Algeria (now Algeria)",
                        "no": "Mondovi, fransk Algerie (nå Algerie)",
                        "se": "Mondovi, Franska Algeriet (nu Algeriet)"
                    }
                }
            },
            "death": {
                "date": "1960-01-04",
                "place": {
                    "city": {
                        "en": "Sens",
                        "no": "Sens",
                        "se": "Sens"
                    },
                    "country": {
                        "en": "France",
                        "no": "Frankrike",
                        "se": "Frankrike"
                    },
                    "cityNow": {
                        "en": "Sens",
                        "no": "Sens",
                        "se": "Sens"
                    },
                    "countryNow": {
                        "en": "France",
                        "no": "Frankrike",
                        "se": "Frankrike"
                    },
                    "continent": {
                        "en": "Europe"
                    },
                    "locationString": {
                        "en": "Sens, France",
                        "no": "Sens, Frankrike",
                        "se": "Sens, Frankrike"
                    }
                }
            },
            "links": {
                "rel": "laureate",
                "href": "http://masterdataapi.nobelprize.org/2/laureate/628",
                "action": "Get",
                "types": "application/json"
            },
            "nobelPrizes": [
                {
                    "awardYear": "1957",
                    "category": {
                        "en": "Literature",
                        "no": "Litteratur",
                        "se": "Litteratur"
                    },
                    "categoryFullName": {
                        "en": "The Nobel Prize in  Literature",
                        "no": "Nobelprisen i litteratur",
                        "se": "Nobelpriset i litteratur"
                    },
                    "sortOrder": "1",
                    "portion": "1",
                    "prizeStatus": "received",
                    "motivation": {
                        "en": "for his important literary production, which with clear-sighted earnestness illuminates the problems of the human conscience in our times",
                        "se": "för hans betydelsefulla författarskap, som med skarpsynt allvar belyser mänskliga samvetsproblem i vår tid"
                    },
                    "prizeAmount": 208629,
                    "prizeAmountAdjusted": 2726565,
                    "residences": [
                        {
                            "country": {
                                "en": "France",
                                "no": "Frankrike",
                                "se": "Frankrike"
                            },
                            "countryNow": {
                                "en": "France",
                                "no": "Frankrike",
                                "se": "Frankrike"
                            },
                            "locationString": {
                                "en": "France",
                                "no": "Frankrike",
                                "se": "Frankrike"
                            }
                        }
                    ],
                    "links": {
                        "rel": "nobelPrize",
                        "href": "https://masterdataapi.nobelprize.org/2/nobelPrize/lit/1957",
                        "action": "Get",
                        "types": "application/json"
                    }
                }
            ]
        },
        {
            "id": "403",
            "knownName": {
                "en": "Albert Claude",
                "se": "Albert Claude"
            },
            "givenName": {
                "en": "Albert",
                "se": "Albert"
            },
            "familyName": {
                "en": "Claude",
                "se": "Claude"
            },
            "fullName": {
                "en": "Albert Claude",
                "se": "Albert Claude"
            },
            "gender": "male",
            "birth": {
                "date": "1898-08-24",
                "place": {
                    "city": {
                        "en": "Longlier",
                        "no": "Longlier",
                        "se": "Longlier"
                    },
                    "country": {
                        "en": "Belgium",
                        "no": "Belgia",
                        "se": "Belgien"
                    },
                    "cityNow": {
                        "en": "Longlier",
                        "no": "Longlier",
                        "se": "Longlier"
                    },
                    "countryNow": {
                        "en": "Belgium",
                        "no": "Belgia",
                        "se": "Belgien"
                    },
                    "continent": {
                        "en": "Europe"
                    },
                    "locationString": {
                        "en": "Longlier, Belgium",
                        "no": "Longlier, Belgia",
                        "se": "Longlier, Belgien"
                    }
                }
            },
            "death": {
                "date": "1983-05-22",
                "place": {
                    "city": {
                        "en": "Brussels",
                        "no": "Brussel",
                        "se": "Bryssel"
                    },
                    "country": {
                        "en": "Belgium",
                        "no": "Belgia",
                        "se": "Belgien"
                    },
                    "cityNow": {
                        "en": "Brussels",
                        "no": "Brussel",
                        "se": "Bryssel"
                    },
                    "countryNow": {
                        "en": "Belgium",
                        "no": "Belgia",
                        "se": "Belgien"
                    },
                    "continent": {
                        "en": "Europe"
                    },
                    "locationString": {
                        "en": "Brussels, Belgium",
                        "no": "Brussel, Belgia",
                        "se": "Bryssel, Belgien"
                    }
                }
            },
            "links": {
                "rel": "laureate",
                "href": "http://masterdataapi.nobelprize.org/2/laureate/403",
                "action": "Get",
                "types": "application/json"
            },
            "nobelPrizes": [
                {
                    "awardYear": "1974",
                    "category": {
                        "en": "Physiology or Medicine",
                        "no": "Fysiologi eller medisin",
                        "se": "Fysiologi eller medicin"
                    },
                    "categoryFullName": {
                        "en": "The Nobel Prize in Physiology or Medicine",
                        "no": "Nobelprisen i fysiologi eller medisin",
                        "se": "Nobelpriset i fysiologi eller medicin"
                    },
                    "sortOrder": "1",
                    "portion": "1/3",
                    "prizeStatus": "received",
                    "motivation": {
                        "en": "for their discoveries concerning the structural and functional organization of the cell",
                        "se": "för deras upptäckter rörande cellens strukturella och funktionella organisation"
                    },
                    "prizeAmount": 550000,
                    "prizeAmountAdjusted": 3298259,
                    "affiliations": [
                        {
                            "name": {
                                "en": "Université Catholique de Louvain",
                                "no": "Université Catholique de Louvain",
                                "se": "Université Catholique de Louvain"
                            },
                            "nameNow": {
                                "en": "Université Catholique de Louvain"
                            },
                            "city": {
                                "en": "Louvain",
                                "no": "Louvain",
                                "se": "Louvain"
                            },
                            "country": {
                                "en": "Belgium",
                                "no": "Belgia",
                                "se": "Belgien"
                            },
                            "cityNow": {
                                "en": "Louvain",
                                "no": "Louvain",
                                "se": "Louvain"
                            },
                            "countryNow": {
                                "en": "Belgium",
                                "no": "Belgia",
                                "se": "Belgien"
                            },
                            "locationString": {
                                "en": "Louvain, Belgium",
                                "no": "Louvain, Belgia",
                                "se": "Louvain, Belgien"
                            }
                        }
                    ],
                    "links": {
                        "rel": "nobelPrize",
                        "href": "https://masterdataapi.nobelprize.org/2/nobelPrize/med/1974",
                        "action": "Get",
                        "types": "application/json"
                    }
                }
            ]
        },
        {
            "id": "26",
            "knownName": {
                "en": "Albert Einstein",
                "se": "Albert Einstein"
            },
            "givenName": {
                "en": "Albert",
                "se": "Albert"
            },
            "familyName": {
                "en": "Einstein",
                "se": "Einstein"
            },
            "fullName": {
                "en": "Albert Einstein",
                "se": "Albert Einstein"
            },
            "gender": "male",
            "birth": {
                "date": "1879-03-14",
                "place": {
                    "city": {
                        "en": "Ulm",
                        "no": "Ulm",
                        "se": "Ulm"
                    },
                    "country": {
                        "en": "Germany",
                        "no": "Tyskland",
                        "se": "Tyskland"
                    },
                    "cityNow": {
                        "en": "Ulm",
                        "no": "Ulm",
                        "se": "Ulm"
                    },
                    "countryNow": {
                        "en": "Germany",
                        "no": "Tyskland",
                        "se": "Tyskland"
                    },
                    "continent": {
                        "en": "Europe"
                    },
                    "locationString": {
                        "en": "Ulm, Germany",
                        "no": "Ulm, Tyskland",
                        "se": "Ulm, Tyskland"
                    }
                }
            },
            "death": {
                "date": "1955-04-18",
                "place": {
                    "city": {
                        "en": "Princeton, NJ",
                        "no": "Princeton, NJ",
                        "se": "Princeton, NJ"
                    },
                    "country": {
                        "en": "USA",
                        "no": "USA",
                        "se": "USA"
                    },
                    "cityNow": {
                        "en": "Princeton, NJ",
                        "no": "Princeton, NJ",
                        "se": "Princeton, NJ"
                    },
                    "countryNow": {
                        "en": "USA",
                        "no": "USA",
                        "se": "USA"
                    },
                    "continent": {
                        "en": "North America"
                    },
                    "locationString": {
                        "en": "Princeton, NJ, USA",
                        "no": "Princeton, NJ, USA",
                        "se": "Princeton, NJ, USA"
                    }
                }
            },
            "links": {
                "rel": "laureate",
                "href": "http://masterdataapi.nobelprize.org/2/laureate/26",
                "action": "Get",
                "types": "application/json"
            },
            "nobelPrizes": [
                {
                    "awardYear": "1921",
                    "category": {
                        "en": "Physics",
                        "no": "Fysikk",
                        "se": "Fysik"
                    },
                    "categoryFullName": {
                        "en": "The Nobel Prize in Physics",
                        "no": "Nobelprisen i fysikk",
                        "se": "Nobelpriset i fysik"
                    },
                    "sortOrder": "1",
                    "portion": "1",
                    "prizeStatus": "received",
                    "motivation": {
                        "en": "for his services to Theoretical Physics, and especially for his discovery of the law of the photoelectric effect",
                        "se": "för hans förtjänster om den teoretiska fysiken, särskilt hans upptäckt av lagen för den fotoelektriska effekten"
                    },
                    "prizeAmount": 121573,
                    "prizeAmountAdjusted": 2559787,
                    "affiliations": [
                        {
                            "name": {
                                "en": "Kaiser-Wilhelm-Institut (now Max-Planck-Institut) für Physik",
                                "no": "Kaiser-Wilhelm-Institut (now Max-Planck-Institut) für Physik",
                                "se": "Kaiser-Wilhelm-Institut (now Max-Planck-Institut) für Physik"
                            },
                            "nameNow": {
                                "en": "Kaiser-Wilhelm-Institut (now Max-Planck-Institut) für Physik"
                            },
                            "city": {
                                "en": "Berlin",
                                "no": "Berlin",
                                "se": "Berlin"
                            },
                            "country": {
                                "en": "Germany",
                                "no": "Tyskland",
                                "se": "Tyskland"
                            },
                            "cityNow": {
                                "en": "Berlin",
                                "no": "Berlin",
                                "se": "Berlin"
                            },
                            "countryNow": {
                                "en": "Germany",
                                "no": "Tyskland",
                                "se": "Tyskland"
                            },
                            "locationString": {
                                "en": "Berlin, Germany",
                                "no": "Berlin, Tyskland",
                                "se": "Berlin, Tyskland"
                            }
                        }
                    ],
                    "links": {
                        "rel": "nobelPrize",
                        "href": "https://masterdataapi.nobelprize.org/2/nobelPrize/phy/1921",
                        "action": "Get",
                        "types": "application/json"
                    }
                }
            ]
        },
        {
            "id": "814",
            "knownName": {
                "en": "Albert Fert",
                "se": "Albert Fert"
            },
            "givenName": {
                "en": "Albert",
                "se": "Albert"
            },
            "familyName": {
                "en": "Fert",
                "se": "Fert"
            },
            "fullName": {
                "en": "Albert Fert",
                "se": "Albert Fert"
            },
            "gender": "male",
            "birth": {
                "date": "1938-03-07",
                "place": {
                    "city": {
                        "en": "Carcassonne",
                        "no": "Carcassonne",
                        "se": "Carcassonne"
                    },
                    "country": {
                        "en": "France",
                        "no": "Frankrike",
                        "se": "Frankrike"
                    },
                    "cityNow": {
                        "en": "Carcassonne",
                        "no": "Carcassonne",
                        "se": "Carcassonne"
                    },
                    "countryNow": {
                        "en": "France",
                        "no": "Frankrike",
                        "se": "Frankrike"
                    },
                    "continent": {
                        "en": "Europe"
                    },
                    "locationString": {
                        "en": "Carcassonne, France",
                        "no": "Carcassonne, Frankrike",
                        "se": "Carcassonne, Frankrike"
                    }
                }
            },
            "links": {
                "rel": "laureate",
                "href": "http://masterdataapi.nobelprize.org/2/laureate/814",
                "action": "Get",
                "types": "application/json"
            },
            "nobelPrizes": [
                {
                    "awardYear": "2007",
                    "category": {
                        "en": "Physics",
                        "no": "Fysikk",
                        "se": "Fysik"
                    },
                    "categoryFullName": {
                        "en": "The Nobel Prize in Physics",
                        "no": "Nobelprisen i fysikk",
                        "se": "Nobelpriset i fysik"
                    },
                    "sortOrder": "1",
                    "portion": "1/2",
                    "dateAwarded": "2007-10-09",
                    "prizeStatus": "received",
                    "motivation": {
                        "en": "for the discovery of Giant Magnetoresistance",
                        "se": "för upptäckten av jättemagnetoresistans"
                    },
                    "prizeAmount": 10000000,
                    "prizeAmountAdjusted": 11422544,
                    "affiliations": [
                        {
                            "name": {
                                "en": "Universit&eacute; Paris-Sud",
                                "no": "Universit&eacute; Paris-Sud",
                                "se": "Universit&eacute; Paris-Sud"
                            },
                            "nameNow": {
                                "en": "Universit&eacute; Paris-Sud"
                            },
                            "city": {
                                "en": "Orsay",
                                "no": "Orsay",
                                "se": "Orsay"
                            },
                            "country": {
                                "en": "France",
                                "no": "Frankrike",
                                "se": "Frankrike"
                            },
                            "cityNow": {
                                "en": "Orsay",
                                "no": "Orsay",
                                "se": "Orsay"
                            },
                            "countryNow": {
                                "en": "France",
                                "no": "Frankrike",
                                "se": "Frankrike"
                            },
                            "locationString": {
                                "en": "Orsay, France",
                                "no": "Orsay, Frankrike",
                                "se": "Orsay, Frankrike"
                            }
                        },
                        {
                            "name": {
                                "en": "Unit&eacute; Mixte de Physique CNRS/THALES",
                                "no": "Unit&eacute; Mixte de Physique CNRS/THALES",
                                "se": "Unit&eacute; Mixte de Physique CNRS/THALES"
                            },
                            "nameNow": {
                                "en": "Unit&eacute; Mixte de Physique CNRS/THALES"
                            },
                            "city": {
                                "en": "Orsay",
                                "no": "Orsay",
                                "se": "Orsay"
                            },
                            "country": {
                                "en": "France",
                                "no": "Frankrike",
                                "se": "Frankrike"
                            },
                            "cityNow": {
                                "en": "Orsay",
                                "no": "Orsay",
                                "se": "Orsay"
                            },
                            "countryNow": {
                                "en": "France",
                                "no": "Frankrike",
                                "se": "Frankrike"
                            },
                            "locationString": {
                                "en": "Orsay, France",
                                "no": "Orsay, Frankrike",
                                "se": "Orsay, Frankrike"
                            }
                        }
                    ],
                    "links": {
                        "rel": "nobelPrize",
                        "href": "https://masterdataapi.nobelprize.org/2/nobelPrize/phy/2007",
                        "action": "Get",
                        "types": "application/json"
                    }
                }
            ]
        }
    ],
    "meta": {
        "offset": 0,
        "limit": 25,
        "count": 955
    },
    "links": {
        "first": "https://masterdataapi.nobelprize.org/2.0/laureates?offset=0&limit=25",
        "self": "https://masterdataapi.nobelprize.org/2.0/laureates?offset=0&limit=25",
        "next": "https://masterdataapi.nobelprize.org/2.0/laureates?offset=25&limit=25",
        "last": "https://masterdataapi.nobelprize.org/2.0/laureates?offset=950&limit=25"
    }
};

module.exports = JSON.stringify(sampleData);
