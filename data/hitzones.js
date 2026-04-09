// Datos de hitzones extraídos de monstruos-html/
// Columnas: corte, impacto, proyectil, fuego, agua, rayo, hielo, dragon, aturdido
// Variantes por parte: normal, herida, punto_debil
const HITZONES = {
  "ajarakan": {
    "Head": {
      "normal": {
        "corte": 50,
        "impacto": 50,
        "proyectil": 45,
        "fuego": 0,
        "agua": 20,
        "rayo": 5,
        "hielo": 15,
        "dragon": 10,
        "aturdido": 100
      },
      "herida": {
        "corte": 80,
        "impacto": 82,
        "proyectil": 80,
        "fuego": 0,
        "agua": 25,
        "rayo": 10,
        "hielo": 20,
        "dragon": 15,
        "aturdido": 100
      }
    },
    "Right Foreleg": {
      "normal": {
        "corte": 65,
        "impacto": 65,
        "proyectil": 60,
        "fuego": 0,
        "agua": 25,
        "rayo": 5,
        "hielo": 15,
        "dragon": 10,
        "aturdido": 0
      },
      "herida": {
        "corte": 70,
        "impacto": 68,
        "proyectil": 70,
        "fuego": 0,
        "agua": 25,
        "rayo": 10,
        "hielo": 20,
        "dragon": 15,
        "aturdido": 0
      },
      "punto_debil": {
        "corte": 90,
        "impacto": 90,
        "proyectil": 90,
        "fuego": 0,
        "agua": 25,
        "rayo": 10,
        "hielo": 20,
        "dragon": 15,
        "aturdido": 0
      }
    },
    "Left Foreleg": {
      "normal": {
        "corte": 65,
        "impacto": 65,
        "proyectil": 60,
        "fuego": 0,
        "agua": 25,
        "rayo": 5,
        "hielo": 15,
        "dragon": 10,
        "aturdido": 0
      },
      "herida": {
        "corte": 70,
        "impacto": 68,
        "proyectil": 70,
        "fuego": 0,
        "agua": 25,
        "rayo": 10,
        "hielo": 20,
        "dragon": 15,
        "aturdido": 0
      },
      "punto_debil": {
        "corte": 90,
        "impacto": 90,
        "proyectil": 90,
        "fuego": 0,
        "agua": 25,
        "rayo": 10,
        "hielo": 20,
        "dragon": 15,
        "aturdido": 0
      }
    },
    "Right Hind Leg": {
      "normal": {
        "corte": 25,
        "impacto": 25,
        "proyectil": 20,
        "fuego": 0,
        "agua": 15,
        "rayo": 5,
        "hielo": 10,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 70,
        "impacto": 68,
        "proyectil": 70,
        "fuego": 0,
        "agua": 25,
        "rayo": 10,
        "hielo": 20,
        "dragon": 15,
        "aturdido": 0
      }
    },
    "Left Hind Leg": {
      "normal": {
        "corte": 25,
        "impacto": 25,
        "proyectil": 20,
        "fuego": 0,
        "agua": 15,
        "rayo": 5,
        "hielo": 10,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 70,
        "impacto": 68,
        "proyectil": 70,
        "fuego": 0,
        "agua": 25,
        "rayo": 10,
        "hielo": 20,
        "dragon": 15,
        "aturdido": 0
      }
    },
    "Tail Tip": {
      "normal": {
        "corte": 45,
        "impacto": 45,
        "proyectil": 45,
        "fuego": 0,
        "agua": 20,
        "rayo": 5,
        "hielo": 15,
        "dragon": 10,
        "aturdido": 0
      },
      "herida": {
        "corte": 70,
        "impacto": 68,
        "proyectil": 70,
        "fuego": 0,
        "agua": 25,
        "rayo": 10,
        "hielo": 20,
        "dragon": 15,
        "aturdido": 0
      }
    },
    "Tail": {
      "normal": {
        "corte": 40,
        "impacto": 40,
        "proyectil": 35,
        "fuego": 0,
        "agua": 15,
        "rayo": 5,
        "hielo": 10,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 70,
        "impacto": 68,
        "proyectil": 70,
        "fuego": 0,
        "agua": 25,
        "rayo": 10,
        "hielo": 20,
        "dragon": 15,
        "aturdido": 0
      }
    },
    "Back": {
      "normal": {
        "corte": 30,
        "impacto": 30,
        "proyectil": 25,
        "fuego": 0,
        "agua": 20,
        "rayo": 5,
        "hielo": 15,
        "dragon": 10,
        "aturdido": 0
      },
      "herida": {
        "corte": 70,
        "impacto": 68,
        "proyectil": 70,
        "fuego": 0,
        "agua": 25,
        "rayo": 10,
        "hielo": 20,
        "dragon": 15,
        "aturdido": 0
      }
    },
    "Belly": {
      "normal": {
        "corte": 45,
        "impacto": 45,
        "proyectil": 45,
        "fuego": 0,
        "agua": 15,
        "rayo": 5,
        "hielo": 10,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 70,
        "impacto": 68,
        "proyectil": 70,
        "fuego": 0,
        "agua": 25,
        "rayo": 10,
        "hielo": 20,
        "dragon": 15,
        "aturdido": 0
      }
    }
  },
  "arkveld": {
    "Head": {
      "normal": {
        "corte": 45,
        "impacto": 48,
        "proyectil": 45,
        "fuego": 5,
        "agua": 5,
        "rayo": 5,
        "hielo": 5,
        "dragon": 5,
        "aturdido": 100
      },
      "herida": {
        "corte": 45,
        "impacto": 48,
        "proyectil": 45,
        "fuego": 5,
        "agua": 5,
        "rayo": 5,
        "hielo": 5,
        "dragon": 5,
        "aturdido": 100
      }
    },
    "Torso": {
      "normal": {
        "corte": 28,
        "impacto": 30,
        "proyectil": 20,
        "fuego": 1,
        "agua": 1,
        "rayo": 1,
        "hielo": 1,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 60,
        "impacto": 62,
        "proyectil": 65,
        "fuego": 5,
        "agua": 5,
        "rayo": 10,
        "hielo": 5,
        "dragon": 15,
        "aturdido": 0
      }
    },
    "Left Leg": {
      "normal": {
        "corte": 26,
        "impacto": 25,
        "proyectil": 20,
        "fuego": 2,
        "agua": 2,
        "rayo": 2,
        "hielo": 2,
        "dragon": 4,
        "aturdido": 0
      },
      "herida": {
        "corte": 60,
        "impacto": 62,
        "proyectil": 65,
        "fuego": 5,
        "agua": 5,
        "rayo": 10,
        "hielo": 5,
        "dragon": 15,
        "aturdido": 0
      }
    },
    "Right Leg": {
      "normal": {
        "corte": 26,
        "impacto": 25,
        "proyectil": 20,
        "fuego": 2,
        "agua": 2,
        "rayo": 2,
        "hielo": 2,
        "dragon": 4,
        "aturdido": 0
      },
      "herida": {
        "corte": 60,
        "impacto": 62,
        "proyectil": 65,
        "fuego": 5,
        "agua": 5,
        "rayo": 10,
        "hielo": 5,
        "dragon": 15,
        "aturdido": 0
      }
    },
    "Tail": {
      "normal": {
        "corte": 45,
        "impacto": 40,
        "proyectil": 42,
        "fuego": 5,
        "agua": 5,
        "rayo": 5,
        "hielo": 5,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 60,
        "impacto": 62,
        "proyectil": 65,
        "fuego": 5,
        "agua": 5,
        "rayo": 10,
        "hielo": 5,
        "dragon": 15,
        "aturdido": 0
      }
    },
    "Left Wing": {
      "normal": {
        "corte": 42,
        "impacto": 40,
        "proyectil": 38,
        "fuego": 2,
        "agua": 2,
        "rayo": 2,
        "hielo": 2,
        "dragon": 4,
        "aturdido": 0
      },
      "herida": {
        "corte": 60,
        "impacto": 62,
        "proyectil": 65,
        "fuego": 5,
        "agua": 5,
        "rayo": 10,
        "hielo": 5,
        "dragon": 15,
        "aturdido": 0
      }
    },
    "Right Wing": {
      "normal": {
        "corte": 42,
        "impacto": 40,
        "proyectil": 38,
        "fuego": 2,
        "agua": 2,
        "rayo": 2,
        "hielo": 2,
        "dragon": 4,
        "aturdido": 0
      },
      "herida": {
        "corte": 60,
        "impacto": 62,
        "proyectil": 65,
        "fuego": 5,
        "agua": 5,
        "rayo": 10,
        "hielo": 5,
        "dragon": 15,
        "aturdido": 0
      }
    },
    "Left Chainblade": {
      "normal": {
        "corte": 52,
        "impacto": 52,
        "proyectil": 48,
        "fuego": 20,
        "agua": 20,
        "rayo": 20,
        "hielo": 20,
        "dragon": 25,
        "aturdido": 0
      },
      "herida": {
        "corte": 70,
        "impacto": 70,
        "proyectil": 68,
        "fuego": 30,
        "agua": 30,
        "rayo": 30,
        "hielo": 30,
        "dragon": 38,
        "aturdido": 0
      },
      "punto_debil": {
        "corte": 52,
        "impacto": 52,
        "proyectil": 48,
        "fuego": 20,
        "agua": 20,
        "rayo": 20,
        "hielo": 20,
        "dragon": 25,
        "aturdido": 0
      }
    },
    "Right Chainblade": {
      "normal": {
        "corte": 52,
        "impacto": 52,
        "proyectil": 48,
        "fuego": 20,
        "agua": 20,
        "rayo": 20,
        "hielo": 20,
        "dragon": 25,
        "aturdido": 0
      },
      "herida": {
        "corte": 70,
        "impacto": 70,
        "proyectil": 68,
        "fuego": 30,
        "agua": 30,
        "rayo": 30,
        "hielo": 30,
        "dragon": 38,
        "aturdido": 0
      },
      "punto_debil": {
        "corte": 52,
        "impacto": 52,
        "proyectil": 48,
        "fuego": 20,
        "agua": 20,
        "rayo": 20,
        "hielo": 20,
        "dragon": 25,
        "aturdido": 0
      }
    }
  },
  "balahara": {
    "Head": {
      "normal": {
        "corte": 50,
        "impacto": 60,
        "proyectil": 45,
        "fuego": 10,
        "agua": 0,
        "rayo": 20,
        "hielo": 5,
        "dragon": 5,
        "aturdido": 100
      },
      "herida": {
        "corte": 70,
        "impacto": 70,
        "proyectil": 75,
        "fuego": 10,
        "agua": 0,
        "rayo": 20,
        "hielo": 5,
        "dragon": 5,
        "aturdido": 100
      }
    },
    "Neck": {
      "normal": {
        "corte": 50,
        "impacto": 60,
        "proyectil": 45,
        "fuego": 10,
        "agua": 0,
        "rayo": 20,
        "hielo": 5,
        "dragon": 5,
        "aturdido": 100
      },
      "herida": {
        "corte": 60,
        "impacto": 60,
        "proyectil": 55,
        "fuego": 10,
        "agua": 0,
        "rayo": 20,
        "hielo": 5,
        "dragon": 5,
        "aturdido": 0
      }
    },
    "Torso": {
      "normal": {
        "corte": 38,
        "impacto": 40,
        "proyectil": 30,
        "fuego": 5,
        "agua": 0,
        "rayo": 15,
        "hielo": 5,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 60,
        "impacto": 60,
        "proyectil": 55,
        "fuego": 10,
        "agua": 0,
        "rayo": 20,
        "hielo": 5,
        "dragon": 5,
        "aturdido": 0
      }
    },
    "Right Foreleg": {
      "normal": {
        "corte": 42,
        "impacto": 40,
        "proyectil": 25,
        "fuego": 5,
        "agua": 0,
        "rayo": 15,
        "hielo": 5,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 60,
        "impacto": 60,
        "proyectil": 55,
        "fuego": 10,
        "agua": 0,
        "rayo": 20,
        "hielo": 5,
        "dragon": 5,
        "aturdido": 0
      }
    },
    "Left Foreleg": {
      "normal": {
        "corte": 42,
        "impacto": 40,
        "proyectil": 25,
        "fuego": 5,
        "agua": 0,
        "rayo": 15,
        "hielo": 5,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 60,
        "impacto": 60,
        "proyectil": 55,
        "fuego": 10,
        "agua": 0,
        "rayo": 20,
        "hielo": 5,
        "dragon": 5,
        "aturdido": 0
      }
    },
    "Right Hind Leg": {
      "normal": {
        "corte": 35,
        "impacto": 38,
        "proyectil": 25,
        "fuego": 5,
        "agua": 0,
        "rayo": 15,
        "hielo": 5,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 60,
        "impacto": 60,
        "proyectil": 55,
        "fuego": 10,
        "agua": 0,
        "rayo": 20,
        "hielo": 5,
        "dragon": 5,
        "aturdido": 0
      }
    },
    "Left Hind Leg": {
      "normal": {
        "corte": 35,
        "impacto": 38,
        "proyectil": 25,
        "fuego": 5,
        "agua": 0,
        "rayo": 15,
        "hielo": 5,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 60,
        "impacto": 60,
        "proyectil": 55,
        "fuego": 10,
        "agua": 0,
        "rayo": 20,
        "hielo": 5,
        "dragon": 5,
        "aturdido": 0
      }
    },
    "Tail": {
      "normal": {
        "corte": 55,
        "impacto": 45,
        "proyectil": 45,
        "fuego": 10,
        "agua": 0,
        "rayo": 15,
        "hielo": 5,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 60,
        "impacto": 60,
        "proyectil": 55,
        "fuego": 10,
        "agua": 0,
        "rayo": 20,
        "hielo": 5,
        "dragon": 5,
        "aturdido": 0
      }
    }
  },
  "blangonga": {
    "Head": {
      "normal": {
        "corte": 70,
        "impacto": 70,
        "proyectil": 60,
        "fuego": 30,
        "agua": 5,
        "rayo": 15,
        "hielo": 0,
        "dragon": 0,
        "aturdido": 100
      },
      "herida": {
        "corte": 75,
        "impacto": 75,
        "proyectil": 70,
        "fuego": 30,
        "agua": 5,
        "rayo": 15,
        "hielo": 0,
        "dragon": 0,
        "aturdido": 100
      }
    },
    "Torso": {
      "normal": {
        "corte": 45,
        "impacto": 50,
        "proyectil": 40,
        "fuego": 20,
        "agua": 5,
        "rayo": 15,
        "hielo": 0,
        "dragon": 0,
        "aturdido": 0
      },
      "herida": {
        "corte": 60,
        "impacto": 60,
        "proyectil": 55,
        "fuego": 30,
        "agua": 5,
        "rayo": 15,
        "hielo": 0,
        "dragon": 0,
        "aturdido": 0
      },
      "punto_debil": {
        "corte": 80,
        "impacto": 80,
        "proyectil": 80,
        "fuego": 30,
        "agua": 5,
        "rayo": 15,
        "hielo": 0,
        "dragon": 0,
        "aturdido": 0
      }
    },
    "Left Foreleg": {
      "normal": {
        "corte": 45,
        "impacto": 40,
        "proyectil": 30,
        "fuego": 15,
        "agua": 5,
        "rayo": 15,
        "hielo": 0,
        "dragon": 0,
        "aturdido": 0
      },
      "herida": {
        "corte": 60,
        "impacto": 60,
        "proyectil": 55,
        "fuego": 30,
        "agua": 5,
        "rayo": 15,
        "hielo": 0,
        "dragon": 0,
        "aturdido": 0
      }
    },
    "Right Foreleg": {
      "normal": {
        "corte": 45,
        "impacto": 40,
        "proyectil": 30,
        "fuego": 15,
        "agua": 5,
        "rayo": 15,
        "hielo": 0,
        "dragon": 0,
        "aturdido": 0
      },
      "herida": {
        "corte": 60,
        "impacto": 60,
        "proyectil": 55,
        "fuego": 30,
        "agua": 5,
        "rayo": 15,
        "hielo": 0,
        "dragon": 0,
        "aturdido": 0
      }
    },
    "Left Hind Leg": {
      "normal": {
        "corte": 45,
        "impacto": 40,
        "proyectil": 30,
        "fuego": 15,
        "agua": 5,
        "rayo": 15,
        "hielo": 0,
        "dragon": 0,
        "aturdido": 0
      },
      "herida": {
        "corte": 60,
        "impacto": 60,
        "proyectil": 55,
        "fuego": 30,
        "agua": 5,
        "rayo": 15,
        "hielo": 0,
        "dragon": 0,
        "aturdido": 0
      }
    },
    "Right Hind Leg": {
      "normal": {
        "corte": 45,
        "impacto": 40,
        "proyectil": 30,
        "fuego": 15,
        "agua": 5,
        "rayo": 15,
        "hielo": 0,
        "dragon": 0,
        "aturdido": 0
      },
      "herida": {
        "corte": 60,
        "impacto": 60,
        "proyectil": 55,
        "fuego": 30,
        "agua": 5,
        "rayo": 15,
        "hielo": 0,
        "dragon": 0,
        "aturdido": 0
      }
    },
    "Tail": {
      "normal": {
        "corte": 50,
        "impacto": 40,
        "proyectil": 25,
        "fuego": 15,
        "agua": 5,
        "rayo": 15,
        "hielo": 0,
        "dragon": 0,
        "aturdido": 0
      },
      "herida": {
        "corte": 60,
        "impacto": 60,
        "proyectil": 55,
        "fuego": 30,
        "agua": 5,
        "rayo": 15,
        "hielo": 0,
        "dragon": 0,
        "aturdido": 0
      }
    }
  },
  "chatacabra": {
    "Head": {
      "normal": {
        "corte": 60,
        "impacto": 65,
        "proyectil": 60,
        "fuego": 10,
        "agua": 5,
        "rayo": 25,
        "hielo": 10,
        "dragon": 0,
        "aturdido": 100
      },
      "herida": {
        "corte": 75,
        "impacto": 75,
        "proyectil": 75,
        "fuego": 10,
        "agua": 5,
        "rayo": 30,
        "hielo": 15,
        "dragon": 0,
        "aturdido": 100
      },
      "punto_debil": {
        "corte": 90,
        "impacto": 90,
        "proyectil": 95,
        "fuego": 10,
        "agua": 5,
        "rayo": 30,
        "hielo": 15,
        "dragon": 0,
        "aturdido": 0
      }
    },
    "Torso": {
      "normal": {
        "corte": 45,
        "impacto": 45,
        "proyectil": 45,
        "fuego": 10,
        "agua": 5,
        "rayo": 20,
        "hielo": 15,
        "dragon": 0,
        "aturdido": 0
      },
      "herida": {
        "corte": 65,
        "impacto": 65,
        "proyectil": 65,
        "fuego": 10,
        "agua": 5,
        "rayo": 30,
        "hielo": 15,
        "dragon": 0,
        "aturdido": 0
      }
    },
    "Left Foreleg": {
      "normal": {
        "corte": 55,
        "impacto": 70,
        "proyectil": 55,
        "fuego": 0,
        "agua": 5,
        "rayo": 15,
        "hielo": 10,
        "dragon": 0,
        "aturdido": 0
      },
      "herida": {
        "corte": 80,
        "impacto": 80,
        "proyectil": 80,
        "fuego": 0,
        "agua": 0,
        "rayo": 15,
        "hielo": 10,
        "dragon": 0,
        "aturdido": 0
      }
    },
    "Right Foreleg": {
      "normal": {
        "corte": 55,
        "impacto": 70,
        "proyectil": 55,
        "fuego": 0,
        "agua": 5,
        "rayo": 15,
        "hielo": 10,
        "dragon": 0,
        "aturdido": 0
      },
      "herida": {
        "corte": 80,
        "impacto": 80,
        "proyectil": 80,
        "fuego": 0,
        "agua": 0,
        "rayo": 15,
        "hielo": 10,
        "dragon": 0,
        "aturdido": 0
      }
    },
    "Left Hind Leg": {
      "normal": {
        "corte": 45,
        "impacto": 45,
        "proyectil": 45,
        "fuego": 0,
        "agua": 0,
        "rayo": 20,
        "hielo": 15,
        "dragon": 0,
        "aturdido": 0
      },
      "herida": {
        "corte": 65,
        "impacto": 65,
        "proyectil": 65,
        "fuego": 10,
        "agua": 5,
        "rayo": 30,
        "hielo": 15,
        "dragon": 0,
        "aturdido": 0
      }
    },
    "Right Hind Leg": {
      "normal": {
        "corte": 45,
        "impacto": 45,
        "proyectil": 45,
        "fuego": 0,
        "agua": 0,
        "rayo": 20,
        "hielo": 15,
        "dragon": 0,
        "aturdido": 0
      },
      "herida": {
        "corte": 65,
        "impacto": 65,
        "proyectil": 65,
        "fuego": 10,
        "agua": 5,
        "rayo": 30,
        "hielo": 15,
        "dragon": 0,
        "aturdido": 0
      }
    },
    "Rear": {
      "normal": {
        "corte": 50,
        "impacto": 50,
        "proyectil": 55,
        "fuego": 10,
        "agua": 5,
        "rayo": 20,
        "hielo": 15,
        "dragon": 0,
        "aturdido": 0
      },
      "herida": {
        "corte": 65,
        "impacto": 65,
        "proyectil": 65,
        "fuego": 10,
        "agua": 5,
        "rayo": 30,
        "hielo": 15,
        "dragon": 0,
        "aturdido": 0
      }
    },
    "Tongue": {
      "normal": {
        "corte": 85,
        "impacto": 85,
        "proyectil": 90,
        "fuego": 10,
        "agua": 5,
        "rayo": 25,
        "hielo": 15,
        "dragon": 0,
        "aturdido": 100
      }
    }
  },
  "congalala": {
    "Head": {
      "normal": {
        "corte": 65,
        "impacto": 70,
        "proyectil": 60,
        "fuego": 25,
        "agua": 10,
        "rayo": 10,
        "hielo": 15,
        "dragon": 5,
        "aturdido": 100
      },
      "herida": {
        "corte": 75,
        "impacto": 80,
        "proyectil": 70,
        "fuego": 25,
        "agua": 10,
        "rayo": 10,
        "hielo": 15,
        "dragon": 5,
        "aturdido": 100
      }
    },
    "Torso": {
      "normal": {
        "corte": 35,
        "impacto": 35,
        "proyectil": 35,
        "fuego": 10,
        "agua": 5,
        "rayo": 5,
        "hielo": 10,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 55,
        "impacto": 55,
        "proyectil": 55,
        "fuego": 25,
        "agua": 10,
        "rayo": 10,
        "hielo": 15,
        "dragon": 5,
        "aturdido": 0
      },
      "punto_debil": {
        "corte": 80,
        "impacto": 80,
        "proyectil": 90,
        "fuego": 25,
        "agua": 10,
        "rayo": 10,
        "hielo": 15,
        "dragon": 5,
        "aturdido": 0
      }
    },
    "Left Foreleg": {
      "normal": {
        "corte": 45,
        "impacto": 45,
        "proyectil": 45,
        "fuego": 15,
        "agua": 10,
        "rayo": 10,
        "hielo": 15,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 55,
        "impacto": 55,
        "proyectil": 55,
        "fuego": 25,
        "agua": 10,
        "rayo": 10,
        "hielo": 15,
        "dragon": 5,
        "aturdido": 0
      }
    },
    "Right Foreleg": {
      "normal": {
        "corte": 45,
        "impacto": 45,
        "proyectil": 45,
        "fuego": 15,
        "agua": 10,
        "rayo": 10,
        "hielo": 15,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 55,
        "impacto": 55,
        "proyectil": 55,
        "fuego": 25,
        "agua": 10,
        "rayo": 10,
        "hielo": 15,
        "dragon": 5,
        "aturdido": 0
      }
    },
    "Left Hind Leg": {
      "normal": {
        "corte": 35,
        "impacto": 35,
        "proyectil": 35,
        "fuego": 15,
        "agua": 10,
        "rayo": 10,
        "hielo": 15,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 55,
        "impacto": 55,
        "proyectil": 55,
        "fuego": 25,
        "agua": 10,
        "rayo": 10,
        "hielo": 15,
        "dragon": 5,
        "aturdido": 0
      }
    },
    "Right Hind Leg": {
      "normal": {
        "corte": 35,
        "impacto": 35,
        "proyectil": 35,
        "fuego": 15,
        "agua": 10,
        "rayo": 10,
        "hielo": 15,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 55,
        "impacto": 55,
        "proyectil": 55,
        "fuego": 25,
        "agua": 10,
        "rayo": 10,
        "hielo": 15,
        "dragon": 5,
        "aturdido": 0
      }
    },
    "Tail": {
      "normal": {
        "corte": 45,
        "impacto": 45,
        "proyectil": 45,
        "fuego": 15,
        "agua": 10,
        "rayo": 10,
        "hielo": 15,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 55,
        "impacto": 55,
        "proyectil": 55,
        "fuego": 25,
        "agua": 10,
        "rayo": 10,
        "hielo": 15,
        "dragon": 5,
        "aturdido": 0
      }
    }
  },
  "doshaguma": {
    "Head": {
      "normal": {
        "corte": 48,
        "impacto": 54,
        "proyectil": 45,
        "fuego": 20,
        "agua": 10,
        "rayo": 20,
        "hielo": 10,
        "dragon": 5,
        "aturdido": 100
      },
      "herida": {
        "corte": 65,
        "impacto": 65,
        "proyectil": 55,
        "fuego": 25,
        "agua": 10,
        "rayo": 20,
        "hielo": 15,
        "dragon": 5,
        "aturdido": 100
      }
    },
    "Torso": {
      "normal": {
        "corte": 38,
        "impacto": 40,
        "proyectil": 25,
        "fuego": 20,
        "agua": 5,
        "rayo": 15,
        "hielo": 5,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 52,
        "impacto": 52,
        "proyectil": 50,
        "fuego": 20,
        "agua": 10,
        "rayo": 15,
        "hielo": 15,
        "dragon": 5,
        "aturdido": 0
      },
      "punto_debil": {
        "corte": 80,
        "impacto": 80,
        "proyectil": 70,
        "fuego": 20,
        "agua": 5,
        "rayo": 15,
        "hielo": 5,
        "dragon": 0,
        "aturdido": 0
      }
    },
    "Right Foreleg": {
      "normal": {
        "corte": 47,
        "impacto": 45,
        "proyectil": 40,
        "fuego": 15,
        "agua": 5,
        "rayo": 5,
        "hielo": 5,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 52,
        "impacto": 52,
        "proyectil": 50,
        "fuego": 20,
        "agua": 10,
        "rayo": 15,
        "hielo": 15,
        "dragon": 5,
        "aturdido": 0
      }
    },
    "Left Foreleg": {
      "normal": {
        "corte": 47,
        "impacto": 45,
        "proyectil": 40,
        "fuego": 15,
        "agua": 5,
        "rayo": 5,
        "hielo": 5,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 52,
        "impacto": 52,
        "proyectil": 50,
        "fuego": 20,
        "agua": 10,
        "rayo": 15,
        "hielo": 15,
        "dragon": 5,
        "aturdido": 0
      }
    },
    "Right Hind Leg": {
      "normal": {
        "corte": 40,
        "impacto": 30,
        "proyectil": 35,
        "fuego": 15,
        "agua": 5,
        "rayo": 10,
        "hielo": 5,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 52,
        "impacto": 52,
        "proyectil": 50,
        "fuego": 20,
        "agua": 10,
        "rayo": 15,
        "hielo": 15,
        "dragon": 5,
        "aturdido": 0
      }
    },
    "Left Hind Leg": {
      "normal": {
        "corte": 40,
        "impacto": 30,
        "proyectil": 35,
        "fuego": 15,
        "agua": 5,
        "rayo": 10,
        "hielo": 5,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 52,
        "impacto": 52,
        "proyectil": 50,
        "fuego": 20,
        "agua": 10,
        "rayo": 15,
        "hielo": 15,
        "dragon": 5,
        "aturdido": 0
      }
    },
    "Tail Hair": {
      "normal": {
        "corte": 38,
        "impacto": 35,
        "proyectil": 25,
        "fuego": 10,
        "agua": 5,
        "rayo": 5,
        "hielo": 5,
        "dragon": 0,
        "aturdido": 0
      },
      "herida": {
        "corte": 52,
        "impacto": 52,
        "proyectil": 50,
        "fuego": 20,
        "agua": 10,
        "rayo": 15,
        "hielo": 15,
        "dragon": 5,
        "aturdido": 0
      }
    }
  },
  "gogmazios": {
    "Head": {
      "normal": {
        "corte": 75,
        "impacto": 75,
        "proyectil": 50,
        "fuego": 20,
        "agua": 0,
        "rayo": 5,
        "hielo": 0,
        "dragon": 65,
        "aturdido": 0
      },
      "herida": {
        "corte": 45,
        "impacto": 45,
        "proyectil": 36,
        "fuego": 15,
        "agua": 0,
        "rayo": 0,
        "hielo": 0,
        "dragon": 5,
        "aturdido": 100
      },
      "punto_debil": {
        "corte": 65,
        "impacto": 65,
        "proyectil": 60,
        "fuego": 20,
        "agua": 0,
        "rayo": 5,
        "hielo": 0,
        "dragon": 55,
        "aturdido": 100
      }
    },
    "Back": {
      "normal": {
        "corte": 75,
        "impacto": 75,
        "proyectil": 50,
        "fuego": 20,
        "agua": 0,
        "rayo": 5,
        "hielo": 0,
        "dragon": 65,
        "aturdido": 0
      },
      "herida": {
        "corte": 45,
        "impacto": 45,
        "proyectil": 36,
        "fuego": 15,
        "agua": 0,
        "rayo": 0,
        "hielo": 0,
        "dragon": 5,
        "aturdido": 0
      },
      "punto_debil": {
        "corte": 65,
        "impacto": 65,
        "proyectil": 60,
        "fuego": 20,
        "agua": 0,
        "rayo": 5,
        "hielo": 0,
        "dragon": 55,
        "aturdido": 0
      }
    },
    "Left Wingarm": {
      "normal": {
        "corte": 75,
        "impacto": 75,
        "proyectil": 50,
        "fuego": 20,
        "agua": 0,
        "rayo": 5,
        "hielo": 0,
        "dragon": 65,
        "aturdido": 0
      },
      "herida": {
        "corte": 45,
        "impacto": 45,
        "proyectil": 36,
        "fuego": 15,
        "agua": 0,
        "rayo": 0,
        "hielo": 0,
        "dragon": 5,
        "aturdido": 0
      },
      "punto_debil": {
        "corte": 65,
        "impacto": 65,
        "proyectil": 60,
        "fuego": 20,
        "agua": 0,
        "rayo": 5,
        "hielo": 0,
        "dragon": 55,
        "aturdido": 0
      }
    },
    "Right Wingarm": {
      "normal": {
        "corte": 75,
        "impacto": 75,
        "proyectil": 50,
        "fuego": 20,
        "agua": 0,
        "rayo": 5,
        "hielo": 0,
        "dragon": 65,
        "aturdido": 0
      },
      "herida": {
        "corte": 45,
        "impacto": 45,
        "proyectil": 36,
        "fuego": 15,
        "agua": 0,
        "rayo": 0,
        "hielo": 0,
        "dragon": 5,
        "aturdido": 0
      },
      "punto_debil": {
        "corte": 65,
        "impacto": 65,
        "proyectil": 60,
        "fuego": 20,
        "agua": 0,
        "rayo": 5,
        "hielo": 0,
        "dragon": 55,
        "aturdido": 0
      }
    },
    "Chest": {
      "normal": {
        "corte": 75,
        "impacto": 75,
        "proyectil": 50,
        "fuego": 20,
        "agua": 0,
        "rayo": 5,
        "hielo": 0,
        "dragon": 65,
        "aturdido": 0
      },
      "herida": {
        "corte": 45,
        "impacto": 45,
        "proyectil": 36,
        "fuego": 15,
        "agua": 0,
        "rayo": 0,
        "hielo": 0,
        "dragon": 5,
        "aturdido": 0
      }
    },
    "Left Foreleg": {
      "normal": {
        "corte": 75,
        "impacto": 75,
        "proyectil": 50,
        "fuego": 20,
        "agua": 0,
        "rayo": 5,
        "hielo": 0,
        "dragon": 65,
        "aturdido": 0
      },
      "herida": {
        "corte": 45,
        "impacto": 45,
        "proyectil": 36,
        "fuego": 15,
        "agua": 0,
        "rayo": 0,
        "hielo": 0,
        "dragon": 5,
        "aturdido": 0
      }
    },
    "Right Foreleg": {
      "normal": {
        "corte": 75,
        "impacto": 75,
        "proyectil": 50,
        "fuego": 20,
        "agua": 0,
        "rayo": 5,
        "hielo": 0,
        "dragon": 65,
        "aturdido": 0
      },
      "herida": {
        "corte": 45,
        "impacto": 45,
        "proyectil": 36,
        "fuego": 15,
        "agua": 0,
        "rayo": 0,
        "hielo": 0,
        "dragon": 5,
        "aturdido": 0
      }
    },
    "Belly": {
      "normal": {
        "corte": 75,
        "impacto": 75,
        "proyectil": 50,
        "fuego": 20,
        "agua": 0,
        "rayo": 5,
        "hielo": 0,
        "dragon": 65,
        "aturdido": 0
      },
      "herida": {
        "corte": 45,
        "impacto": 45,
        "proyectil": 36,
        "fuego": 15,
        "agua": 0,
        "rayo": 0,
        "hielo": 0,
        "dragon": 5,
        "aturdido": 0
      }
    },
    "Left Hind Leg": {
      "normal": {
        "corte": 75,
        "impacto": 75,
        "proyectil": 50,
        "fuego": 20,
        "agua": 0,
        "rayo": 5,
        "hielo": 0,
        "dragon": 65,
        "aturdido": 0
      },
      "herida": {
        "corte": 45,
        "impacto": 45,
        "proyectil": 36,
        "fuego": 15,
        "agua": 0,
        "rayo": 0,
        "hielo": 0,
        "dragon": 5,
        "aturdido": 0
      }
    },
    "Right Hind Leg": {
      "normal": {
        "corte": 75,
        "impacto": 75,
        "proyectil": 50,
        "fuego": 20,
        "agua": 0,
        "rayo": 5,
        "hielo": 0,
        "dragon": 65,
        "aturdido": 0
      },
      "herida": {
        "corte": 45,
        "impacto": 45,
        "proyectil": 36,
        "fuego": 15,
        "agua": 0,
        "rayo": 0,
        "hielo": 0,
        "dragon": 5,
        "aturdido": 0
      }
    },
    "Tail": {
      "normal": {
        "corte": 75,
        "impacto": 75,
        "proyectil": 50,
        "fuego": 20,
        "agua": 0,
        "rayo": 5,
        "hielo": 0,
        "dragon": 65,
        "aturdido": 0
      },
      "herida": {
        "corte": 45,
        "impacto": 45,
        "proyectil": 36,
        "fuego": 15,
        "agua": 0,
        "rayo": 0,
        "hielo": 0,
        "dragon": 5,
        "aturdido": 0
      }
    },
    "Tail Tip": {
      "normal": {
        "corte": 75,
        "impacto": 75,
        "proyectil": 50,
        "fuego": 20,
        "agua": 0,
        "rayo": 5,
        "hielo": 0,
        "dragon": 65,
        "aturdido": 0
      }
    }
  },
  "gore-magala": {
    "Head": {
      "normal": {
        "corte": 65,
        "impacto": 55,
        "proyectil": 45,
        "fuego": 15,
        "agua": 0,
        "rayo": 15,
        "hielo": 5,
        "dragon": 15,
        "aturdido": 100
      },
      "herida": {
        "corte": 75,
        "impacto": 70,
        "proyectil": 50,
        "fuego": 15,
        "agua": 0,
        "rayo": 15,
        "hielo": 5,
        "dragon": 15,
        "aturdido": 100
      },
      "punto_debil": {
        "corte": 75,
        "impacto": 70,
        "proyectil": 50,
        "fuego": 15,
        "agua": 0,
        "rayo": 15,
        "hielo": 5,
        "dragon": 15,
        "aturdido": 0
      }
    },
    "Antenna": {
      "normal": {
        "corte": 75,
        "impacto": 70,
        "proyectil": 50,
        "fuego": 20,
        "agua": 0,
        "rayo": 10,
        "hielo": 5,
        "dragon": 25,
        "aturdido": 100
      },
      "herida": {
        "corte": 80,
        "impacto": 70,
        "proyectil": 50,
        "fuego": 20,
        "agua": 0,
        "rayo": 10,
        "hielo": 5,
        "dragon": 25,
        "aturdido": 100
      }
    },
    "Right Wingarm": {
      "normal": {
        "corte": 60,
        "impacto": 55,
        "proyectil": 45,
        "fuego": 20,
        "agua": 0,
        "rayo": 15,
        "hielo": 5,
        "dragon": 10,
        "aturdido": 0
      },
      "herida": {
        "corte": 65,
        "impacto": 70,
        "proyectil": 50,
        "fuego": 20,
        "agua": 0,
        "rayo": 15,
        "hielo": 5,
        "dragon": 10,
        "aturdido": 0
      }
    },
    "Left Wingarm": {
      "normal": {
        "corte": 60,
        "impacto": 55,
        "proyectil": 45,
        "fuego": 20,
        "agua": 0,
        "rayo": 15,
        "hielo": 5,
        "dragon": 10,
        "aturdido": 0
      },
      "herida": {
        "corte": 65,
        "impacto": 70,
        "proyectil": 50,
        "fuego": 20,
        "agua": 0,
        "rayo": 15,
        "hielo": 5,
        "dragon": 10,
        "aturdido": 0
      }
    },
    "Right Foreleg": {
      "normal": {
        "corte": 42,
        "impacto": 42,
        "proyectil": 25,
        "fuego": 10,
        "agua": 0,
        "rayo": 5,
        "hielo": 5,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 65,
        "impacto": 70,
        "proyectil": 50,
        "fuego": 20,
        "agua": 0,
        "rayo": 15,
        "hielo": 5,
        "dragon": 10,
        "aturdido": 0
      }
    },
    "Left Foreleg": {
      "normal": {
        "corte": 42,
        "impacto": 42,
        "proyectil": 25,
        "fuego": 10,
        "agua": 0,
        "rayo": 5,
        "hielo": 5,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 65,
        "impacto": 70,
        "proyectil": 50,
        "fuego": 20,
        "agua": 0,
        "rayo": 15,
        "hielo": 5,
        "dragon": 10,
        "aturdido": 0
      }
    },
    "Tail": {
      "normal": {
        "corte": 38,
        "impacto": 38,
        "proyectil": 25,
        "fuego": 10,
        "agua": 0,
        "rayo": 10,
        "hielo": 5,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 65,
        "impacto": 70,
        "proyectil": 50,
        "fuego": 20,
        "agua": 0,
        "rayo": 15,
        "hielo": 5,
        "dragon": 10,
        "aturdido": 0
      }
    },
    "Right Hind Leg": {
      "normal": {
        "corte": 38,
        "impacto": 38,
        "proyectil": 35,
        "fuego": 10,
        "agua": 0,
        "rayo": 5,
        "hielo": 5,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 65,
        "impacto": 70,
        "proyectil": 50,
        "fuego": 20,
        "agua": 0,
        "rayo": 15,
        "hielo": 5,
        "dragon": 10,
        "aturdido": 0
      }
    },
    "Left Hind Leg": {
      "normal": {
        "corte": 38,
        "impacto": 38,
        "proyectil": 35,
        "fuego": 10,
        "agua": 0,
        "rayo": 5,
        "hielo": 5,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 65,
        "impacto": 70,
        "proyectil": 50,
        "fuego": 20,
        "agua": 0,
        "rayo": 15,
        "hielo": 5,
        "dragon": 10,
        "aturdido": 0
      }
    },
    "Torso": {
      "normal": {
        "corte": 25,
        "impacto": 25,
        "proyectil": 20,
        "fuego": 10,
        "agua": 0,
        "rayo": 5,
        "hielo": 5,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 65,
        "impacto": 70,
        "proyectil": 50,
        "fuego": 20,
        "agua": 0,
        "rayo": 15,
        "hielo": 5,
        "dragon": 10,
        "aturdido": 0
      }
    },
    "Neck": {
      "normal": {
        "corte": 45,
        "impacto": 45,
        "proyectil": 25,
        "fuego": 15,
        "agua": 0,
        "rayo": 10,
        "hielo": 5,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 65,
        "impacto": 70,
        "proyectil": 50,
        "fuego": 20,
        "agua": 0,
        "rayo": 15,
        "hielo": 5,
        "dragon": 10,
        "aturdido": 0
      }
    },
    "Right Wing": {
      "normal": {
        "corte": 26,
        "impacto": 26,
        "proyectil": 15,
        "fuego": 15,
        "agua": 0,
        "rayo": 10,
        "hielo": 5,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 65,
        "impacto": 70,
        "proyectil": 50,
        "fuego": 20,
        "agua": 0,
        "rayo": 15,
        "hielo": 5,
        "dragon": 10,
        "aturdido": 0
      }
    },
    "Left Wing": {
      "normal": {
        "corte": 26,
        "impacto": 26,
        "proyectil": 15,
        "fuego": 15,
        "agua": 0,
        "rayo": 10,
        "hielo": 5,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 65,
        "impacto": 70,
        "proyectil": 50,
        "fuego": 20,
        "agua": 0,
        "rayo": 15,
        "hielo": 5,
        "dragon": 10,
        "aturdido": 0
      }
    }
  },
  "gravios": {
    "Head": {
      "normal": {
        "corte": 25,
        "impacto": 35,
        "proyectil": 25,
        "fuego": 0,
        "agua": 15,
        "rayo": 5,
        "hielo": 5,
        "dragon": 30,
        "aturdido": 100
      },
      "herida": {
        "corte": 80,
        "impacto": 82,
        "proyectil": 80,
        "fuego": 0,
        "agua": 35,
        "rayo": 15,
        "hielo": 15,
        "dragon": 25,
        "aturdido": 100
      }
    },
    "Neck": {
      "normal": {
        "corte": 25,
        "impacto": 30,
        "proyectil": 20,
        "fuego": 0,
        "agua": 30,
        "rayo": 5,
        "hielo": 10,
        "dragon": 20,
        "aturdido": 0
      },
      "herida": {
        "corte": 70,
        "impacto": 70,
        "proyectil": 70,
        "fuego": 0,
        "agua": 35,
        "rayo": 15,
        "hielo": 15,
        "dragon": 35,
        "aturdido": 0
      }
    },
    "Belly": {
      "normal": {
        "corte": 70,
        "impacto": 70,
        "proyectil": 60,
        "fuego": 15,
        "agua": 45,
        "rayo": 5,
        "hielo": 15,
        "dragon": 40,
        "aturdido": 0
      },
      "herida": {
        "corte": 70,
        "impacto": 70,
        "proyectil": 70,
        "fuego": 0,
        "agua": 35,
        "rayo": 15,
        "hielo": 15,
        "dragon": 35,
        "aturdido": 0
      }
    },
    "Back": {
      "normal": {
        "corte": 45,
        "impacto": 45,
        "proyectil": 40,
        "fuego": 5,
        "agua": 35,
        "rayo": 5,
        "hielo": 10,
        "dragon": 15,
        "aturdido": 0
      },
      "herida": {
        "corte": 70,
        "impacto": 70,
        "proyectil": 70,
        "fuego": 0,
        "agua": 35,
        "rayo": 15,
        "hielo": 15,
        "dragon": 35,
        "aturdido": 0
      }
    },
    "Tail": {
      "normal": {
        "corte": 25,
        "impacto": 30,
        "proyectil": 20,
        "fuego": 0,
        "agua": 30,
        "rayo": 5,
        "hielo": 10,
        "dragon": 20,
        "aturdido": 0
      },
      "herida": {
        "corte": 70,
        "impacto": 70,
        "proyectil": 70,
        "fuego": 0,
        "agua": 35,
        "rayo": 15,
        "hielo": 15,
        "dragon": 35,
        "aturdido": 0
      }
    },
    "Left Leg": {
      "normal": {
        "corte": 30,
        "impacto": 30,
        "proyectil": 25,
        "fuego": 0,
        "agua": 30,
        "rayo": 5,
        "hielo": 5,
        "dragon": 10,
        "aturdido": 0
      },
      "herida": {
        "corte": 70,
        "impacto": 70,
        "proyectil": 70,
        "fuego": 0,
        "agua": 35,
        "rayo": 15,
        "hielo": 15,
        "dragon": 35,
        "aturdido": 0
      }
    },
    "Right Leg": {
      "normal": {
        "corte": 30,
        "impacto": 30,
        "proyectil": 25,
        "fuego": 0,
        "agua": 30,
        "rayo": 5,
        "hielo": 5,
        "dragon": 10,
        "aturdido": 0
      },
      "herida": {
        "corte": 70,
        "impacto": 70,
        "proyectil": 70,
        "fuego": 0,
        "agua": 35,
        "rayo": 15,
        "hielo": 15,
        "dragon": 35,
        "aturdido": 0
      }
    },
    "Left Wing": {
      "normal": {
        "corte": 35,
        "impacto": 35,
        "proyectil": 26,
        "fuego": 0,
        "agua": 20,
        "rayo": 5,
        "hielo": 5,
        "dragon": 15,
        "aturdido": 0
      },
      "herida": {
        "corte": 70,
        "impacto": 70,
        "proyectil": 70,
        "fuego": 0,
        "agua": 35,
        "rayo": 15,
        "hielo": 15,
        "dragon": 35,
        "aturdido": 0
      }
    },
    "Right Wing": {
      "normal": {
        "corte": 35,
        "impacto": 35,
        "proyectil": 26,
        "fuego": 0,
        "agua": 20,
        "rayo": 5,
        "hielo": 5,
        "dragon": 15,
        "aturdido": 0
      },
      "herida": {
        "corte": 70,
        "impacto": 70,
        "proyectil": 70,
        "fuego": 0,
        "agua": 35,
        "rayo": 15,
        "hielo": 15,
        "dragon": 35,
        "aturdido": 0
      }
    }
  },
  "guardian-arkveld": {
    "Head": {
      "normal": {
        "corte": 45,
        "impacto": 48,
        "proyectil": 45,
        "fuego": 5,
        "agua": 5,
        "rayo": 5,
        "hielo": 5,
        "dragon": 5,
        "aturdido": 100
      },
      "herida": {
        "corte": 45,
        "impacto": 48,
        "proyectil": 45,
        "fuego": 5,
        "agua": 5,
        "rayo": 5,
        "hielo": 5,
        "dragon": 5,
        "aturdido": 100
      }
    },
    "Torso": {
      "normal": {
        "corte": 28,
        "impacto": 30,
        "proyectil": 20,
        "fuego": 1,
        "agua": 1,
        "rayo": 1,
        "hielo": 1,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 60,
        "impacto": 62,
        "proyectil": 65,
        "fuego": 5,
        "agua": 5,
        "rayo": 10,
        "hielo": 5,
        "dragon": 15,
        "aturdido": 0
      }
    },
    "Left Leg": {
      "normal": {
        "corte": 26,
        "impacto": 25,
        "proyectil": 20,
        "fuego": 2,
        "agua": 2,
        "rayo": 2,
        "hielo": 2,
        "dragon": 4,
        "aturdido": 0
      },
      "herida": {
        "corte": 60,
        "impacto": 62,
        "proyectil": 65,
        "fuego": 5,
        "agua": 5,
        "rayo": 10,
        "hielo": 5,
        "dragon": 15,
        "aturdido": 0
      }
    },
    "Right Leg": {
      "normal": {
        "corte": 26,
        "impacto": 25,
        "proyectil": 20,
        "fuego": 2,
        "agua": 2,
        "rayo": 2,
        "hielo": 2,
        "dragon": 4,
        "aturdido": 0
      },
      "herida": {
        "corte": 60,
        "impacto": 62,
        "proyectil": 65,
        "fuego": 5,
        "agua": 5,
        "rayo": 10,
        "hielo": 5,
        "dragon": 15,
        "aturdido": 0
      }
    },
    "Tail": {
      "normal": {
        "corte": 45,
        "impacto": 40,
        "proyectil": 42,
        "fuego": 5,
        "agua": 5,
        "rayo": 5,
        "hielo": 5,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 60,
        "impacto": 62,
        "proyectil": 65,
        "fuego": 5,
        "agua": 5,
        "rayo": 10,
        "hielo": 5,
        "dragon": 15,
        "aturdido": 0
      }
    },
    "Left Wing": {
      "normal": {
        "corte": 42,
        "impacto": 40,
        "proyectil": 38,
        "fuego": 2,
        "agua": 2,
        "rayo": 2,
        "hielo": 2,
        "dragon": 4,
        "aturdido": 0
      },
      "herida": {
        "corte": 60,
        "impacto": 62,
        "proyectil": 65,
        "fuego": 5,
        "agua": 5,
        "rayo": 10,
        "hielo": 5,
        "dragon": 15,
        "aturdido": 0
      }
    },
    "Right Wing": {
      "normal": {
        "corte": 42,
        "impacto": 40,
        "proyectil": 38,
        "fuego": 2,
        "agua": 2,
        "rayo": 2,
        "hielo": 2,
        "dragon": 4,
        "aturdido": 0
      },
      "herida": {
        "corte": 60,
        "impacto": 62,
        "proyectil": 65,
        "fuego": 5,
        "agua": 5,
        "rayo": 10,
        "hielo": 5,
        "dragon": 15,
        "aturdido": 0
      }
    },
    "Left Chainblade": {
      "normal": {
        "corte": 52,
        "impacto": 52,
        "proyectil": 48,
        "fuego": 20,
        "agua": 20,
        "rayo": 20,
        "hielo": 20,
        "dragon": 25,
        "aturdido": 0
      },
      "herida": {
        "corte": 70,
        "impacto": 70,
        "proyectil": 68,
        "fuego": 30,
        "agua": 30,
        "rayo": 30,
        "hielo": 30,
        "dragon": 38,
        "aturdido": 0
      },
      "punto_debil": {
        "corte": 52,
        "impacto": 52,
        "proyectil": 48,
        "fuego": 20,
        "agua": 20,
        "rayo": 20,
        "hielo": 20,
        "dragon": 25,
        "aturdido": 0
      }
    },
    "Right Chainblade": {
      "normal": {
        "corte": 52,
        "impacto": 52,
        "proyectil": 48,
        "fuego": 20,
        "agua": 20,
        "rayo": 20,
        "hielo": 20,
        "dragon": 25,
        "aturdido": 0
      },
      "herida": {
        "corte": 70,
        "impacto": 70,
        "proyectil": 68,
        "fuego": 30,
        "agua": 30,
        "rayo": 30,
        "hielo": 30,
        "dragon": 38,
        "aturdido": 0
      },
      "punto_debil": {
        "corte": 52,
        "impacto": 52,
        "proyectil": 48,
        "fuego": 20,
        "agua": 20,
        "rayo": 20,
        "hielo": 20,
        "dragon": 25,
        "aturdido": 0
      }
    }
  },
  "guardian-doshaguma": {
    "Head": {
      "normal": {
        "corte": 55,
        "impacto": 60,
        "proyectil": 45,
        "fuego": 25,
        "agua": 5,
        "rayo": 20,
        "hielo": 15,
        "dragon": 5,
        "aturdido": 100
      },
      "herida": {
        "corte": 70,
        "impacto": 75,
        "proyectil": 65,
        "fuego": 25,
        "agua": 5,
        "rayo": 15,
        "hielo": 10,
        "dragon": 30,
        "aturdido": 100
      }
    },
    "Torso": {
      "normal": {
        "corte": 38,
        "impacto": 38,
        "proyectil": 25,
        "fuego": 25,
        "agua": 5,
        "rayo": 15,
        "hielo": 10,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 65,
        "impacto": 65,
        "proyectil": 65,
        "fuego": 25,
        "agua": 5,
        "rayo": 15,
        "hielo": 10,
        "dragon": 30,
        "aturdido": 0
      }
    },
    "Right Foreleg": {
      "normal": {
        "corte": 60,
        "impacto": 60,
        "proyectil": 65,
        "fuego": 20,
        "agua": 5,
        "rayo": 5,
        "hielo": 20,
        "dragon": 30,
        "aturdido": 0
      },
      "herida": {
        "corte": 65,
        "impacto": 65,
        "proyectil": 65,
        "fuego": 25,
        "agua": 5,
        "rayo": 15,
        "hielo": 10,
        "dragon": 30,
        "aturdido": 0
      },
      "punto_debil": {
        "corte": 100,
        "impacto": 100,
        "proyectil": 100,
        "fuego": 25,
        "agua": 5,
        "rayo": 15,
        "hielo": 10,
        "dragon": 30,
        "aturdido": 0
      }
    },
    "Left Foreleg": {
      "normal": {
        "corte": 60,
        "impacto": 60,
        "proyectil": 65,
        "fuego": 20,
        "agua": 5,
        "rayo": 5,
        "hielo": 20,
        "dragon": 30,
        "aturdido": 0
      },
      "herida": {
        "corte": 65,
        "impacto": 65,
        "proyectil": 65,
        "fuego": 25,
        "agua": 5,
        "rayo": 15,
        "hielo": 10,
        "dragon": 30,
        "aturdido": 0
      },
      "punto_debil": {
        "corte": 100,
        "impacto": 100,
        "proyectil": 100,
        "fuego": 25,
        "agua": 5,
        "rayo": 15,
        "hielo": 10,
        "dragon": 30,
        "aturdido": 0
      }
    },
    "Right Hind Leg": {
      "normal": {
        "corte": 40,
        "impacto": 35,
        "proyectil": 35,
        "fuego": 10,
        "agua": 5,
        "rayo": 15,
        "hielo": 20,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 65,
        "impacto": 65,
        "proyectil": 65,
        "fuego": 25,
        "agua": 5,
        "rayo": 15,
        "hielo": 10,
        "dragon": 30,
        "aturdido": 0
      }
    },
    "Left Hind Leg": {
      "normal": {
        "corte": 40,
        "impacto": 35,
        "proyectil": 35,
        "fuego": 10,
        "agua": 5,
        "rayo": 10,
        "hielo": 20,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 65,
        "impacto": 65,
        "proyectil": 65,
        "fuego": 25,
        "agua": 5,
        "rayo": 15,
        "hielo": 10,
        "dragon": 30,
        "aturdido": 0
      }
    },
    "Tail Hair": {
      "normal": {
        "corte": 35,
        "impacto": 35,
        "proyectil": 25,
        "fuego": 10,
        "agua": 5,
        "rayo": 10,
        "hielo": 20,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 65,
        "impacto": 65,
        "proyectil": 65,
        "fuego": 25,
        "agua": 5,
        "rayo": 15,
        "hielo": 10,
        "dragon": 30,
        "aturdido": 0
      }
    }
  },
  "guardian-ebony-odoragon": {
    "Head": {
      "normal": {
        "corte": 60,
        "impacto": 65,
        "proyectil": 55,
        "fuego": 20,
        "agua": 30,
        "rayo": 20,
        "hielo": 20,
        "dragon": 5,
        "aturdido": 100
      },
      "herida": {
        "corte": 70,
        "impacto": 70,
        "proyectil": 62,
        "fuego": 25,
        "agua": 40,
        "rayo": 25,
        "hielo": 25,
        "dragon": 30,
        "aturdido": 100
      }
    },
    "Neck": {
      "normal": {
        "corte": 25,
        "impacto": 35,
        "proyectil": 30,
        "fuego": 15,
        "agua": 25,
        "rayo": 15,
        "hielo": 15,
        "dragon": 5,
        "aturdido": 100
      },
      "herida": {
        "corte": 60,
        "impacto": 60,
        "proyectil": 60,
        "fuego": 15,
        "agua": 25,
        "rayo": 15,
        "hielo": 15,
        "dragon": 30,
        "aturdido": 0
      }
    },
    "Back": {
      "normal": {
        "corte": 30,
        "impacto": 25,
        "proyectil": 20,
        "fuego": 10,
        "agua": 20,
        "rayo": 10,
        "hielo": 10,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 60,
        "impacto": 60,
        "proyectil": 60,
        "fuego": 15,
        "agua": 25,
        "rayo": 15,
        "hielo": 15,
        "dragon": 30,
        "aturdido": 0
      }
    },
    "Torso": {
      "normal": {
        "corte": 30,
        "impacto": 25,
        "proyectil": 20,
        "fuego": 10,
        "agua": 20,
        "rayo": 10,
        "hielo": 10,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 60,
        "impacto": 60,
        "proyectil": 60,
        "fuego": 15,
        "agua": 25,
        "rayo": 15,
        "hielo": 15,
        "dragon": 30,
        "aturdido": 0
      }
    },
    "Left Foreleg": {
      "normal": {
        "corte": 45,
        "impacto": 45,
        "proyectil": 40,
        "fuego": 10,
        "agua": 25,
        "rayo": 10,
        "hielo": 10,
        "dragon": 30,
        "aturdido": 0
      },
      "herida": {
        "corte": 60,
        "impacto": 60,
        "proyectil": 60,
        "fuego": 15,
        "agua": 25,
        "rayo": 15,
        "hielo": 15,
        "dragon": 30,
        "aturdido": 0
      },
      "punto_debil": {
        "corte": 100,
        "impacto": 100,
        "proyectil": 100,
        "fuego": 15,
        "agua": 25,
        "rayo": 15,
        "hielo": 15,
        "dragon": 30,
        "aturdido": 0
      }
    },
    "Right Foreleg": {
      "normal": {
        "corte": 45,
        "impacto": 45,
        "proyectil": 40,
        "fuego": 10,
        "agua": 25,
        "rayo": 10,
        "hielo": 10,
        "dragon": 30,
        "aturdido": 0
      },
      "herida": {
        "corte": 60,
        "impacto": 60,
        "proyectil": 60,
        "fuego": 15,
        "agua": 25,
        "rayo": 15,
        "hielo": 15,
        "dragon": 30,
        "aturdido": 0
      },
      "punto_debil": {
        "corte": 100,
        "impacto": 100,
        "proyectil": 100,
        "fuego": 15,
        "agua": 25,
        "rayo": 15,
        "hielo": 15,
        "dragon": 30,
        "aturdido": 0
      }
    },
    "Left Hind Leg": {
      "normal": {
        "corte": 50,
        "impacto": 50,
        "proyectil": 40,
        "fuego": 10,
        "agua": 25,
        "rayo": 10,
        "hielo": 10,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 60,
        "impacto": 60,
        "proyectil": 60,
        "fuego": 15,
        "agua": 25,
        "rayo": 15,
        "hielo": 15,
        "dragon": 30,
        "aturdido": 0
      }
    },
    "Right Hind Leg": {
      "normal": {
        "corte": 50,
        "impacto": 50,
        "proyectil": 40,
        "fuego": 10,
        "agua": 25,
        "rayo": 10,
        "hielo": 10,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 60,
        "impacto": 60,
        "proyectil": 60,
        "fuego": 15,
        "agua": 25,
        "rayo": 15,
        "hielo": 15,
        "dragon": 30,
        "aturdido": 0
      }
    },
    "Tail": {
      "normal": {
        "corte": 50,
        "impacto": 45,
        "proyectil": 45,
        "fuego": 10,
        "agua": 20,
        "rayo": 10,
        "hielo": 10,
        "dragon": 30,
        "aturdido": 0
      },
      "herida": {
        "corte": 60,
        "impacto": 60,
        "proyectil": 60,
        "fuego": 15,
        "agua": 25,
        "rayo": 15,
        "hielo": 15,
        "dragon": 30,
        "aturdido": 0
      },
      "punto_debil": {
        "corte": 100,
        "impacto": 100,
        "proyectil": 100,
        "fuego": 15,
        "agua": 25,
        "rayo": 15,
        "hielo": 15,
        "dragon": 30,
        "aturdido": 0
      }
    },
    "Tail Tip": {
      "normal": {
        "corte": 50,
        "impacto": 45,
        "proyectil": 45,
        "fuego": 10,
        "agua": 20,
        "rayo": 10,
        "hielo": 10,
        "dragon": 30,
        "aturdido": 0
      },
      "herida": {
        "corte": 60,
        "impacto": 60,
        "proyectil": 60,
        "fuego": 15,
        "agua": 25,
        "rayo": 15,
        "hielo": 15,
        "dragon": 30,
        "aturdido": 0
      }
    }
  },
  "guardian-fulgur-anjanath": {
    "Head": {
      "normal": {
        "corte": 55,
        "impacto": 55,
        "proyectil": 45,
        "fuego": 10,
        "agua": 30,
        "rayo": 0,
        "hielo": 20,
        "dragon": 30,
        "aturdido": 100
      },
      "herida": {
        "corte": 70,
        "impacto": 70,
        "proyectil": 65,
        "fuego": 10,
        "agua": 20,
        "rayo": 0,
        "hielo": 30,
        "dragon": 30,
        "aturdido": 100
      },
      "punto_debil": {
        "corte": 100,
        "impacto": 100,
        "proyectil": 100,
        "fuego": 10,
        "agua": 20,
        "rayo": 0,
        "hielo": 30,
        "dragon": 30,
        "aturdido": 0
      }
    },
    "Nose": {
      "normal": {
        "corte": 65,
        "impacto": 60,
        "proyectil": 55,
        "fuego": 15,
        "agua": 40,
        "rayo": 0,
        "hielo": 25,
        "dragon": 30,
        "aturdido": 100
      },
      "herida": {
        "corte": 60,
        "impacto": 60,
        "proyectil": 55,
        "fuego": 10,
        "agua": 20,
        "rayo": 0,
        "hielo": 25,
        "dragon": 25,
        "aturdido": 0
      }
    },
    "Neck": {
      "normal": {
        "corte": 26,
        "impacto": 26,
        "proyectil": 10,
        "fuego": 5,
        "agua": 25,
        "rayo": 0,
        "hielo": 20,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 60,
        "impacto": 60,
        "proyectil": 55,
        "fuego": 10,
        "agua": 20,
        "rayo": 0,
        "hielo": 25,
        "dragon": 25,
        "aturdido": 0
      }
    },
    "Torso": {
      "normal": {
        "corte": 26,
        "impacto": 26,
        "proyectil": 40,
        "fuego": 5,
        "agua": 20,
        "rayo": 0,
        "hielo": 15,
        "dragon": 0,
        "aturdido": 0
      },
      "herida": {
        "corte": 60,
        "impacto": 60,
        "proyectil": 55,
        "fuego": 10,
        "agua": 20,
        "rayo": 0,
        "hielo": 25,
        "dragon": 25,
        "aturdido": 0
      }
    },
    "Left Wing": {
      "normal": {
        "corte": 55,
        "impacto": 40,
        "proyectil": 50,
        "fuego": 15,
        "agua": 40,
        "rayo": 0,
        "hielo": 25,
        "dragon": 10,
        "aturdido": 0
      },
      "herida": {
        "corte": 60,
        "impacto": 60,
        "proyectil": 55,
        "fuego": 10,
        "agua": 20,
        "rayo": 0,
        "hielo": 25,
        "dragon": 25,
        "aturdido": 0
      }
    },
    "Right Wing": {
      "normal": {
        "corte": 55,
        "impacto": 40,
        "proyectil": 50,
        "fuego": 15,
        "agua": 40,
        "rayo": 0,
        "hielo": 25,
        "dragon": 10,
        "aturdido": 0
      },
      "herida": {
        "corte": 60,
        "impacto": 60,
        "proyectil": 55,
        "fuego": 10,
        "agua": 20,
        "rayo": 0,
        "hielo": 25,
        "dragon": 25,
        "aturdido": 0
      }
    },
    "Left Leg": {
      "normal": {
        "corte": 45,
        "impacto": 45,
        "proyectil": 50,
        "fuego": 5,
        "agua": 20,
        "rayo": 0,
        "hielo": 20,
        "dragon": 0,
        "aturdido": 0
      },
      "herida": {
        "corte": 60,
        "impacto": 60,
        "proyectil": 55,
        "fuego": 10,
        "agua": 20,
        "rayo": 0,
        "hielo": 25,
        "dragon": 25,
        "aturdido": 0
      }
    },
    "Right Leg": {
      "normal": {
        "corte": 45,
        "impacto": 45,
        "proyectil": 50,
        "fuego": 5,
        "agua": 20,
        "rayo": 0,
        "hielo": 20,
        "dragon": 0,
        "aturdido": 0
      },
      "herida": {
        "corte": 60,
        "impacto": 60,
        "proyectil": 55,
        "fuego": 10,
        "agua": 20,
        "rayo": 0,
        "hielo": 25,
        "dragon": 25,
        "aturdido": 0
      }
    },
    "Tail": {
      "normal": {
        "corte": 60,
        "impacto": 60,
        "proyectil": 75,
        "fuego": 10,
        "agua": 20,
        "rayo": 0,
        "hielo": 20,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 60,
        "impacto": 60,
        "proyectil": 55,
        "fuego": 10,
        "agua": 20,
        "rayo": 0,
        "hielo": 25,
        "dragon": 25,
        "aturdido": 0
      }
    }
  },
  "guardian-rathalos": {
    "Head": {
      "normal": {
        "corte": 65,
        "impacto": 70,
        "proyectil": 55,
        "fuego": 0,
        "agua": 10,
        "rayo": 15,
        "hielo": 10,
        "dragon": 25,
        "aturdido": 100
      },
      "herida": {
        "corte": 65,
        "impacto": 70,
        "proyectil": 55,
        "fuego": 0,
        "agua": 10,
        "rayo": 15,
        "hielo": 10,
        "dragon": 25,
        "aturdido": 100
      }
    },
    "Neck": {
      "normal": {
        "corte": 35,
        "impacto": 40,
        "proyectil": 30,
        "fuego": 0,
        "agua": 5,
        "rayo": 10,
        "hielo": 5,
        "dragon": 20,
        "aturdido": 0
      },
      "herida": {
        "corte": 65,
        "impacto": 55,
        "proyectil": 55,
        "fuego": 0,
        "agua": 15,
        "rayo": 20,
        "hielo": 15,
        "dragon": 30,
        "aturdido": 0
      }
    },
    "Torso": {
      "normal": {
        "corte": 25,
        "impacto": 25,
        "proyectil": 20,
        "fuego": 0,
        "agua": 5,
        "rayo": 10,
        "hielo": 5,
        "dragon": 20,
        "aturdido": 0
      },
      "herida": {
        "corte": 65,
        "impacto": 55,
        "proyectil": 55,
        "fuego": 0,
        "agua": 15,
        "rayo": 20,
        "hielo": 15,
        "dragon": 30,
        "aturdido": 0
      }
    },
    "Left Wing": {
      "normal": {
        "corte": 40,
        "impacto": 40,
        "proyectil": 30,
        "fuego": 0,
        "agua": 10,
        "rayo": 15,
        "hielo": 10,
        "dragon": 25,
        "aturdido": 0
      },
      "herida": {
        "corte": 65,
        "impacto": 55,
        "proyectil": 55,
        "fuego": 0,
        "agua": 15,
        "rayo": 20,
        "hielo": 15,
        "dragon": 30,
        "aturdido": 0
      }
    },
    "Right Wing": {
      "normal": {
        "corte": 40,
        "impacto": 40,
        "proyectil": 30,
        "fuego": 0,
        "agua": 10,
        "rayo": 15,
        "hielo": 10,
        "dragon": 25,
        "aturdido": 0
      },
      "herida": {
        "corte": 65,
        "impacto": 55,
        "proyectil": 55,
        "fuego": 0,
        "agua": 15,
        "rayo": 20,
        "hielo": 15,
        "dragon": 30,
        "aturdido": 0
      }
    },
    "Left Leg": {
      "normal": {
        "corte": 60,
        "impacto": 50,
        "proyectil": 50,
        "fuego": 0,
        "agua": 15,
        "rayo": 20,
        "hielo": 15,
        "dragon": 30,
        "aturdido": 0
      },
      "herida": {
        "corte": 65,
        "impacto": 55,
        "proyectil": 55,
        "fuego": 0,
        "agua": 15,
        "rayo": 20,
        "hielo": 15,
        "dragon": 30,
        "aturdido": 0
      }
    },
    "Right Leg": {
      "normal": {
        "corte": 60,
        "impacto": 50,
        "proyectil": 50,
        "fuego": 0,
        "agua": 15,
        "rayo": 20,
        "hielo": 15,
        "dragon": 30,
        "aturdido": 0
      },
      "herida": {
        "corte": 65,
        "impacto": 55,
        "proyectil": 55,
        "fuego": 0,
        "agua": 15,
        "rayo": 20,
        "hielo": 15,
        "dragon": 30,
        "aturdido": 0
      }
    },
    "Tail": {
      "normal": {
        "corte": 35,
        "impacto": 35,
        "proyectil": 30,
        "fuego": 0,
        "agua": 0,
        "rayo": 5,
        "hielo": 0,
        "dragon": 15,
        "aturdido": 0
      },
      "herida": {
        "corte": 65,
        "impacto": 55,
        "proyectil": 55,
        "fuego": 0,
        "agua": 15,
        "rayo": 20,
        "hielo": 15,
        "dragon": 30,
        "aturdido": 0
      }
    }
  },
  "gypceros": {
    "Head": {
      "normal": {
        "corte": 45,
        "impacto": 55,
        "proyectil": 45,
        "fuego": 30,
        "agua": 10,
        "rayo": 0,
        "hielo": 20,
        "dragon": 10,
        "aturdido": 100
      },
      "herida": {
        "corte": 60,
        "impacto": 70,
        "proyectil": 55,
        "fuego": 30,
        "agua": 10,
        "rayo": 0,
        "hielo": 20,
        "dragon": 10,
        "aturdido": 100
      },
      "punto_debil": {
        "corte": 70,
        "impacto": 70,
        "proyectil": 70,
        "fuego": 30,
        "agua": 10,
        "rayo": 0,
        "hielo": 20,
        "dragon": 10,
        "aturdido": 0
      }
    },
    "Neck": {
      "normal": {
        "corte": 50,
        "impacto": 25,
        "proyectil": 40,
        "fuego": 20,
        "agua": 5,
        "rayo": 0,
        "hielo": 10,
        "dragon": 10,
        "aturdido": 0
      }
    },
    "Torso": {
      "normal": {
        "corte": 45,
        "impacto": 30,
        "proyectil": 20,
        "fuego": 20,
        "agua": 5,
        "rayo": 0,
        "hielo": 10,
        "dragon": 10,
        "aturdido": 0
      },
      "herida": {
        "corte": 55,
        "impacto": 55,
        "proyectil": 45,
        "fuego": 10,
        "agua": 10,
        "rayo": 0,
        "hielo": 10,
        "dragon": 10,
        "aturdido": 0
      }
    },
    "Left Leg": {
      "normal": {
        "corte": 25,
        "impacto": 25,
        "proyectil": 30,
        "fuego": 10,
        "agua": 5,
        "rayo": 0,
        "hielo": 10,
        "dragon": 10,
        "aturdido": 0
      },
      "herida": {
        "corte": 55,
        "impacto": 55,
        "proyectil": 45,
        "fuego": 10,
        "agua": 10,
        "rayo": 0,
        "hielo": 10,
        "dragon": 10,
        "aturdido": 0
      }
    },
    "Right Leg": {
      "normal": {
        "corte": 25,
        "impacto": 25,
        "proyectil": 30,
        "fuego": 10,
        "agua": 5,
        "rayo": 0,
        "hielo": 10,
        "dragon": 10,
        "aturdido": 0
      },
      "herida": {
        "corte": 55,
        "impacto": 55,
        "proyectil": 45,
        "fuego": 10,
        "agua": 10,
        "rayo": 0,
        "hielo": 10,
        "dragon": 10,
        "aturdido": 0
      }
    },
    "Tail": {
      "normal": {
        "corte": 70,
        "impacto": 40,
        "proyectil": 80,
        "fuego": 20,
        "agua": 5,
        "rayo": 0,
        "hielo": 10,
        "dragon": 10,
        "aturdido": 0
      },
      "herida": {
        "corte": 80,
        "impacto": 60,
        "proyectil": 90,
        "fuego": 20,
        "agua": 15,
        "rayo": 0,
        "hielo": 20,
        "dragon": 10,
        "aturdido": 0
      }
    },
    "Left Wing": {
      "normal": {
        "corte": 42,
        "impacto": 30,
        "proyectil": 30,
        "fuego": 20,
        "agua": 10,
        "rayo": 0,
        "hielo": 20,
        "dragon": 10,
        "aturdido": 0
      },
      "herida": {
        "corte": 55,
        "impacto": 55,
        "proyectil": 45,
        "fuego": 10,
        "agua": 10,
        "rayo": 0,
        "hielo": 10,
        "dragon": 10,
        "aturdido": 0
      }
    },
    "Right Wing": {
      "normal": {
        "corte": 42,
        "impacto": 30,
        "proyectil": 30,
        "fuego": 20,
        "agua": 10,
        "rayo": 0,
        "hielo": 20,
        "dragon": 10,
        "aturdido": 0
      },
      "herida": {
        "corte": 55,
        "impacto": 55,
        "proyectil": 45,
        "fuego": 10,
        "agua": 10,
        "rayo": 0,
        "hielo": 10,
        "dragon": 10,
        "aturdido": 0
      }
    }
  },
  "hirabami": {
    "Head": {
      "normal": {
        "corte": 55,
        "impacto": 70,
        "proyectil": 45,
        "fuego": 20,
        "agua": 10,
        "rayo": 20,
        "hielo": 0,
        "dragon": 10,
        "aturdido": 100
      },
      "herida": {
        "corte": 75,
        "impacto": 80,
        "proyectil": 70,
        "fuego": 20,
        "agua": 10,
        "rayo": 10,
        "hielo": 0,
        "dragon": 10,
        "aturdido": 100
      }
    },
    "Neck": {
      "normal": {
        "corte": 55,
        "impacto": 70,
        "proyectil": 45,
        "fuego": 20,
        "agua": 10,
        "rayo": 20,
        "hielo": 0,
        "dragon": 10,
        "aturdido": 100
      },
      "herida": {
        "corte": 65,
        "impacto": 65,
        "proyectil": 60,
        "fuego": 20,
        "agua": 5,
        "rayo": 10,
        "hielo": 0,
        "dragon": 0,
        "aturdido": 0
      }
    },
    "Torso": {
      "normal": {
        "corte": 40,
        "impacto": 35,
        "proyectil": 30,
        "fuego": 10,
        "agua": 5,
        "rayo": 10,
        "hielo": 0,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 65,
        "impacto": 65,
        "proyectil": 60,
        "fuego": 20,
        "agua": 5,
        "rayo": 10,
        "hielo": 0,
        "dragon": 0,
        "aturdido": 0
      }
    },
    "Right Foreleg": {
      "normal": {
        "corte": 45,
        "impacto": 45,
        "proyectil": 40,
        "fuego": 10,
        "agua": 5,
        "rayo": 10,
        "hielo": 0,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 65,
        "impacto": 65,
        "proyectil": 60,
        "fuego": 20,
        "agua": 5,
        "rayo": 10,
        "hielo": 0,
        "dragon": 0,
        "aturdido": 0
      }
    },
    "Left Foreleg": {
      "normal": {
        "corte": 45,
        "impacto": 45,
        "proyectil": 40,
        "fuego": 10,
        "agua": 5,
        "rayo": 10,
        "hielo": 0,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 65,
        "impacto": 65,
        "proyectil": 60,
        "fuego": 20,
        "agua": 5,
        "rayo": 10,
        "hielo": 0,
        "dragon": 0,
        "aturdido": 0
      }
    },
    "Right Hind Leg": {
      "normal": {
        "corte": 45,
        "impacto": 45,
        "proyectil": 40,
        "fuego": 10,
        "agua": 5,
        "rayo": 10,
        "hielo": 0,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 65,
        "impacto": 65,
        "proyectil": 60,
        "fuego": 20,
        "agua": 5,
        "rayo": 10,
        "hielo": 0,
        "dragon": 0,
        "aturdido": 0
      }
    },
    "Left Hind Leg": {
      "normal": {
        "corte": 45,
        "impacto": 45,
        "proyectil": 40,
        "fuego": 10,
        "agua": 5,
        "rayo": 10,
        "hielo": 0,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 65,
        "impacto": 65,
        "proyectil": 60,
        "fuego": 20,
        "agua": 5,
        "rayo": 10,
        "hielo": 0,
        "dragon": 0,
        "aturdido": 0
      }
    },
    "Tail": {
      "normal": {
        "corte": 50,
        "impacto": 45,
        "proyectil": 45,
        "fuego": 20,
        "agua": 5,
        "rayo": 10,
        "hielo": 0,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 65,
        "impacto": 65,
        "proyectil": 60,
        "fuego": 20,
        "agua": 5,
        "rayo": 10,
        "hielo": 0,
        "dragon": 0,
        "aturdido": 0
      }
    }
  },
  "jin-dahaad": {
    "Head": {
      "normal": {
        "corte": 65,
        "impacto": 65,
        "proyectil": 45,
        "fuego": 20,
        "agua": 5,
        "rayo": 5,
        "hielo": 0,
        "dragon": 5,
        "aturdido": 100
      },
      "herida": {
        "corte": 75,
        "impacto": 75,
        "proyectil": 50,
        "fuego": 25,
        "agua": 5,
        "rayo": 5,
        "hielo": 0,
        "dragon": 5,
        "aturdido": 100
      },
      "punto_debil": {
        "corte": 75,
        "impacto": 75,
        "proyectil": 50,
        "fuego": 20,
        "agua": 5,
        "rayo": 5,
        "hielo": 0,
        "dragon": 5,
        "aturdido": 0
      }
    },
    "Neck": {
      "normal": {
        "corte": 60,
        "impacto": 60,
        "proyectil": 45,
        "fuego": 10,
        "agua": 5,
        "rayo": 5,
        "hielo": 0,
        "dragon": 5,
        "aturdido": 100
      },
      "herida": {
        "corte": 75,
        "impacto": 75,
        "proyectil": 50,
        "fuego": 25,
        "agua": 5,
        "rayo": 5,
        "hielo": 0,
        "dragon": 5,
        "aturdido": 100
      }
    },
    "Torso": {
      "normal": {
        "corte": 30,
        "impacto": 30,
        "proyectil": 20,
        "fuego": 5,
        "agua": 5,
        "rayo": 5,
        "hielo": 0,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 55,
        "impacto": 55,
        "proyectil": 45,
        "fuego": 10,
        "agua": 5,
        "rayo": 5,
        "hielo": 0,
        "dragon": 5,
        "aturdido": 0
      }
    },
    "Right Foreleg": {
      "normal": {
        "corte": 45,
        "impacto": 45,
        "proyectil": 30,
        "fuego": 15,
        "agua": 5,
        "rayo": 5,
        "hielo": 0,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 55,
        "impacto": 55,
        "proyectil": 45,
        "fuego": 10,
        "agua": 5,
        "rayo": 5,
        "hielo": 0,
        "dragon": 5,
        "aturdido": 0
      }
    },
    "Left Foreleg": {
      "normal": {
        "corte": 45,
        "impacto": 45,
        "proyectil": 30,
        "fuego": 15,
        "agua": 5,
        "rayo": 5,
        "hielo": 0,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 55,
        "impacto": 55,
        "proyectil": 45,
        "fuego": 10,
        "agua": 5,
        "rayo": 5,
        "hielo": 0,
        "dragon": 5,
        "aturdido": 0
      }
    },
    "Right Hind Leg": {
      "normal": {
        "corte": 45,
        "impacto": 45,
        "proyectil": 30,
        "fuego": 15,
        "agua": 5,
        "rayo": 5,
        "hielo": 0,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 55,
        "impacto": 55,
        "proyectil": 45,
        "fuego": 10,
        "agua": 5,
        "rayo": 5,
        "hielo": 0,
        "dragon": 5,
        "aturdido": 0
      }
    },
    "Left Hind Leg": {
      "normal": {
        "corte": 45,
        "impacto": 45,
        "proyectil": 30,
        "fuego": 15,
        "agua": 5,
        "rayo": 5,
        "hielo": 0,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 55,
        "impacto": 55,
        "proyectil": 45,
        "fuego": 10,
        "agua": 5,
        "rayo": 5,
        "hielo": 0,
        "dragon": 5,
        "aturdido": 0
      }
    },
    "Tail": {
      "normal": {
        "corte": 55,
        "impacto": 55,
        "proyectil": 45,
        "fuego": 10,
        "agua": 5,
        "rayo": 5,
        "hielo": 0,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 60,
        "impacto": 60,
        "proyectil": 50,
        "fuego": 15,
        "agua": 5,
        "rayo": 5,
        "hielo": 0,
        "dragon": 5,
        "aturdido": 0
      },
      "punto_debil": {
        "corte": 95,
        "impacto": 95,
        "proyectil": 50,
        "fuego": 20,
        "agua": 5,
        "rayo": 5,
        "hielo": 0,
        "dragon": 5,
        "aturdido": 0
      }
    },
    "Abdominal Iceplate": {
      "normal": {
        "corte": 75,
        "impacto": 75,
        "proyectil": 45,
        "fuego": 10,
        "agua": 5,
        "rayo": 5,
        "hielo": 0,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 85,
        "impacto": 85,
        "proyectil": 50,
        "fuego": 25,
        "agua": 5,
        "rayo": 5,
        "hielo": 0,
        "dragon": 5,
        "aturdido": 0
      },
      "punto_debil": {
        "corte": 95,
        "impacto": 95,
        "proyectil": 50,
        "fuego": 20,
        "agua": 5,
        "rayo": 5,
        "hielo": 0,
        "dragon": 5,
        "aturdido": 0
      }
    },
    "Lg. Iceplate (Hidden)": {
      "normal": {
        "corte": 1,
        "impacto": 1,
        "proyectil": 1,
        "fuego": 0,
        "agua": 0,
        "rayo": 0,
        "hielo": 0,
        "dragon": 0,
        "aturdido": 0
      }
    },
    "Lg. Iceplate (Exposed)": {
      "normal": {
        "corte": 75,
        "impacto": 75,
        "proyectil": 45,
        "fuego": 10,
        "agua": 5,
        "rayo": 5,
        "hielo": 0,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 85,
        "impacto": 85,
        "proyectil": 50,
        "fuego": 25,
        "agua": 5,
        "rayo": 5,
        "hielo": 0,
        "dragon": 5,
        "aturdido": 0
      },
      "punto_debil": {
        "corte": 95,
        "impacto": 95,
        "proyectil": 50,
        "fuego": 20,
        "agua": 5,
        "rayo": 5,
        "hielo": 0,
        "dragon": 5,
        "aturdido": 0
      }
    }
  },
  "lagiacrus": {
    "Head": {
      "normal": {
        "corte": 45,
        "impacto": 45,
        "proyectil": 45,
        "fuego": 15,
        "agua": 0,
        "rayo": 0,
        "hielo": 10,
        "dragon": 10,
        "aturdido": 100
      },
      "herida": {
        "corte": 70,
        "impacto": 70,
        "proyectil": 60,
        "fuego": 25,
        "agua": 0,
        "rayo": 0,
        "hielo": 15,
        "dragon": 15,
        "aturdido": 100
      },
      "punto_debil": {
        "corte": 45,
        "impacto": 45,
        "proyectil": 45,
        "fuego": 15,
        "agua": 0,
        "rayo": 0,
        "hielo": 10,
        "dragon": 10,
        "aturdido": 100
      }
    },
    "Neck": {
      "normal": {
        "corte": 24,
        "impacto": 38,
        "proyectil": 15,
        "fuego": 10,
        "agua": 0,
        "rayo": 0,
        "hielo": 5,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 60,
        "impacto": 60,
        "proyectil": 60,
        "fuego": 25,
        "agua": 0,
        "rayo": 0,
        "hielo": 15,
        "dragon": 15,
        "aturdido": 0
      }
    },
    "Chest": {
      "normal": {
        "corte": 55,
        "impacto": 45,
        "proyectil": 35,
        "fuego": 10,
        "agua": 0,
        "rayo": 0,
        "hielo": 10,
        "dragon": 10,
        "aturdido": 0
      },
      "herida": {
        "corte": 60,
        "impacto": 60,
        "proyectil": 60,
        "fuego": 25,
        "agua": 0,
        "rayo": 0,
        "hielo": 15,
        "dragon": 15,
        "aturdido": 0
      }
    },
    "Back": {
      "normal": {
        "corte": 45,
        "impacto": 45,
        "proyectil": 15,
        "fuego": 25,
        "agua": 0,
        "rayo": 0,
        "hielo": 15,
        "dragon": 15,
        "aturdido": 0
      },
      "herida": {
        "corte": 60,
        "impacto": 60,
        "proyectil": 60,
        "fuego": 25,
        "agua": 0,
        "rayo": 0,
        "hielo": 15,
        "dragon": 15,
        "aturdido": 0
      },
      "punto_debil": {
        "corte": 70,
        "impacto": 70,
        "proyectil": 70,
        "fuego": 25,
        "agua": 0,
        "rayo": 0,
        "hielo": 15,
        "dragon": 15,
        "aturdido": 0
      }
    },
    "Torso": {
      "normal": {
        "corte": 25,
        "impacto": 25,
        "proyectil": 20,
        "fuego": 5,
        "agua": 0,
        "rayo": 0,
        "hielo": 5,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 60,
        "impacto": 60,
        "proyectil": 60,
        "fuego": 25,
        "agua": 0,
        "rayo": 0,
        "hielo": 15,
        "dragon": 15,
        "aturdido": 0
      }
    },
    "Foreleg": {
      "normal": {
        "corte": 25,
        "impacto": 25,
        "proyectil": 10,
        "fuego": 10,
        "agua": 0,
        "rayo": 0,
        "hielo": 5,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 60,
        "impacto": 60,
        "proyectil": 60,
        "fuego": 25,
        "agua": 0,
        "rayo": 0,
        "hielo": 15,
        "dragon": 15,
        "aturdido": 0
      }
    },
    "Hind Leg": {
      "normal": {
        "corte": 38,
        "impacto": 38,
        "proyectil": 30,
        "fuego": 10,
        "agua": 0,
        "rayo": 0,
        "hielo": 5,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 60,
        "impacto": 60,
        "proyectil": 60,
        "fuego": 25,
        "agua": 0,
        "rayo": 0,
        "hielo": 15,
        "dragon": 15,
        "aturdido": 0
      }
    },
    "Tail": {
      "normal": {
        "corte": 30,
        "impacto": 35,
        "proyectil": 20,
        "fuego": 20,
        "agua": 0,
        "rayo": 0,
        "hielo": 10,
        "dragon": 10,
        "aturdido": 0
      },
      "herida": {
        "corte": 60,
        "impacto": 60,
        "proyectil": 60,
        "fuego": 25,
        "agua": 0,
        "rayo": 0,
        "hielo": 15,
        "dragon": 15,
        "aturdido": 0
      }
    }
  },
  "lala-barina": {
    "Head": {
      "normal": {
        "corte": 55,
        "impacto": 60,
        "proyectil": 50,
        "fuego": 20,
        "agua": 0,
        "rayo": 10,
        "hielo": 5,
        "dragon": 0,
        "aturdido": 100
      },
      "herida": {
        "corte": 70,
        "impacto": 70,
        "proyectil": 65,
        "fuego": 20,
        "agua": 0,
        "rayo": 10,
        "hielo": 5,
        "dragon": 0,
        "aturdido": 100
      }
    },
    "Torso": {
      "normal": {
        "corte": 40,
        "impacto": 40,
        "proyectil": 30,
        "fuego": 15,
        "agua": 0,
        "rayo": 10,
        "hielo": 5,
        "dragon": 0,
        "aturdido": 0
      },
      "herida": {
        "corte": 65,
        "impacto": 65,
        "proyectil": 60,
        "fuego": 20,
        "agua": 0,
        "rayo": 10,
        "hielo": 5,
        "dragon": 0,
        "aturdido": 0
      }
    },
    "Tail": {
      "normal": {
        "corte": 60,
        "impacto": 60,
        "proyectil": 50,
        "fuego": 25,
        "agua": 0,
        "rayo": 10,
        "hielo": 5,
        "dragon": 0,
        "aturdido": 0
      },
      "herida": {
        "corte": 65,
        "impacto": 65,
        "proyectil": 60,
        "fuego": 20,
        "agua": 0,
        "rayo": 10,
        "hielo": 5,
        "dragon": 0,
        "aturdido": 0
      },
      "punto_debil": {
        "corte": 90,
        "impacto": 90,
        "proyectil": 90,
        "fuego": 25,
        "agua": 0,
        "rayo": 10,
        "hielo": 5,
        "dragon": 0,
        "aturdido": 0
      }
    },
    "Left Claw": {
      "normal": {
        "corte": 45,
        "impacto": 45,
        "proyectil": 40,
        "fuego": 15,
        "agua": 0,
        "rayo": 10,
        "hielo": 5,
        "dragon": 0,
        "aturdido": 0
      },
      "herida": {
        "corte": 65,
        "impacto": 65,
        "proyectil": 60,
        "fuego": 20,
        "agua": 0,
        "rayo": 10,
        "hielo": 5,
        "dragon": 0,
        "aturdido": 0
      }
    },
    "Right Claw": {
      "normal": {
        "corte": 45,
        "impacto": 45,
        "proyectil": 40,
        "fuego": 15,
        "agua": 0,
        "rayo": 10,
        "hielo": 5,
        "dragon": 0,
        "aturdido": 0
      },
      "herida": {
        "corte": 65,
        "impacto": 65,
        "proyectil": 60,
        "fuego": 20,
        "agua": 0,
        "rayo": 10,
        "hielo": 5,
        "dragon": 0,
        "aturdido": 0
      }
    },
    "Left Foreleg": {
      "normal": {
        "corte": 45,
        "impacto": 45,
        "proyectil": 35,
        "fuego": 15,
        "agua": 0,
        "rayo": 10,
        "hielo": 5,
        "dragon": 0,
        "aturdido": 0
      },
      "herida": {
        "corte": 65,
        "impacto": 65,
        "proyectil": 60,
        "fuego": 20,
        "agua": 0,
        "rayo": 10,
        "hielo": 5,
        "dragon": 0,
        "aturdido": 0
      }
    },
    "Right Foreleg": {
      "normal": {
        "corte": 45,
        "impacto": 45,
        "proyectil": 35,
        "fuego": 15,
        "agua": 0,
        "rayo": 10,
        "hielo": 5,
        "dragon": 0,
        "aturdido": 0
      },
      "herida": {
        "corte": 65,
        "impacto": 65,
        "proyectil": 60,
        "fuego": 20,
        "agua": 0,
        "rayo": 10,
        "hielo": 5,
        "dragon": 0,
        "aturdido": 0
      }
    },
    "Left Hind Leg": {
      "normal": {
        "corte": 45,
        "impacto": 45,
        "proyectil": 35,
        "fuego": 15,
        "agua": 0,
        "rayo": 10,
        "hielo": 5,
        "dragon": 0,
        "aturdido": 0
      },
      "herida": {
        "corte": 65,
        "impacto": 65,
        "proyectil": 60,
        "fuego": 20,
        "agua": 0,
        "rayo": 10,
        "hielo": 5,
        "dragon": 0,
        "aturdido": 0
      }
    },
    "Right Hind Leg": {
      "normal": {
        "corte": 45,
        "impacto": 45,
        "proyectil": 35,
        "fuego": 15,
        "agua": 0,
        "rayo": 10,
        "hielo": 5,
        "dragon": 0,
        "aturdido": 0
      },
      "herida": {
        "corte": 65,
        "impacto": 65,
        "proyectil": 60,
        "fuego": 20,
        "agua": 0,
        "rayo": 10,
        "hielo": 5,
        "dragon": 0,
        "aturdido": 0
      }
    },
    "Petals": {
      "normal": {
        "corte": 60,
        "impacto": 60,
        "proyectil": 50,
        "fuego": 25,
        "agua": 0,
        "rayo": 10,
        "hielo": 5,
        "dragon": 0,
        "aturdido": 0
      },
      "herida": {
        "corte": 65,
        "impacto": 65,
        "proyectil": 60,
        "fuego": 20,
        "agua": 0,
        "rayo": 10,
        "hielo": 5,
        "dragon": 0,
        "aturdido": 0
      }
    }
  },
  "mitzutsune": {
    "Head": {
      "normal": {
        "corte": 68,
        "impacto": 68,
        "proyectil": 48,
        "fuego": 10,
        "agua": 0,
        "rayo": 15,
        "hielo": 5,
        "dragon": 10,
        "aturdido": 100
      },
      "herida": {
        "corte": 70,
        "impacto": 70,
        "proyectil": 60,
        "fuego": 10,
        "agua": 0,
        "rayo": 15,
        "hielo": 10,
        "dragon": 10,
        "aturdido": 100
      }
    },
    "Left Leg": {
      "normal": {
        "corte": 45,
        "impacto": 45,
        "proyectil": 20,
        "fuego": 10,
        "agua": 0,
        "rayo": 15,
        "hielo": 5,
        "dragon": 10,
        "aturdido": 0
      },
      "herida": {
        "corte": 50,
        "impacto": 50,
        "proyectil": 50,
        "fuego": 10,
        "agua": 0,
        "rayo": 30,
        "hielo": 20,
        "dragon": 30,
        "aturdido": 0
      }
    },
    "Left Claw": {
      "normal": {
        "corte": 45,
        "impacto": 45,
        "proyectil": 20,
        "fuego": 10,
        "agua": 0,
        "rayo": 15,
        "hielo": 5,
        "dragon": 10,
        "aturdido": 0
      },
      "herida": {
        "corte": 50,
        "impacto": 50,
        "proyectil": 50,
        "fuego": 10,
        "agua": 0,
        "rayo": 30,
        "hielo": 20,
        "dragon": 30,
        "aturdido": 0
      }
    },
    "Right Leg": {
      "normal": {
        "corte": 45,
        "impacto": 45,
        "proyectil": 20,
        "fuego": 10,
        "agua": 0,
        "rayo": 15,
        "hielo": 5,
        "dragon": 10,
        "aturdido": 0
      },
      "herida": {
        "corte": 50,
        "impacto": 50,
        "proyectil": 50,
        "fuego": 10,
        "agua": 0,
        "rayo": 30,
        "hielo": 20,
        "dragon": 30,
        "aturdido": 0
      }
    },
    "Right Claw": {
      "normal": {
        "corte": 45,
        "impacto": 45,
        "proyectil": 20,
        "fuego": 10,
        "agua": 0,
        "rayo": 15,
        "hielo": 5,
        "dragon": 10,
        "aturdido": 0
      },
      "herida": {
        "corte": 50,
        "impacto": 50,
        "proyectil": 50,
        "fuego": 10,
        "agua": 0,
        "rayo": 30,
        "hielo": 20,
        "dragon": 30,
        "aturdido": 0
      }
    },
    "Left Hind Leg": {
      "normal": {
        "corte": 38,
        "impacto": 38,
        "proyectil": 25,
        "fuego": 5,
        "agua": 0,
        "rayo": 10,
        "hielo": 5,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 50,
        "impacto": 50,
        "proyectil": 50,
        "fuego": 10,
        "agua": 0,
        "rayo": 30,
        "hielo": 20,
        "dragon": 30,
        "aturdido": 0
      }
    },
    "Right Hind Leg": {
      "normal": {
        "corte": 38,
        "impacto": 38,
        "proyectil": 25,
        "fuego": 5,
        "agua": 0,
        "rayo": 10,
        "hielo": 5,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 50,
        "impacto": 50,
        "proyectil": 50,
        "fuego": 10,
        "agua": 0,
        "rayo": 30,
        "hielo": 20,
        "dragon": 30,
        "aturdido": 0
      }
    },
    "Torso": {
      "normal": {
        "corte": 25,
        "impacto": 25,
        "proyectil": 20,
        "fuego": 5,
        "agua": 0,
        "rayo": 10,
        "hielo": 5,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 50,
        "impacto": 50,
        "proyectil": 50,
        "fuego": 10,
        "agua": 0,
        "rayo": 30,
        "hielo": 20,
        "dragon": 30,
        "aturdido": 0
      }
    },
    "Tail": {
      "normal": {
        "corte": 43,
        "impacto": 33,
        "proyectil": 40,
        "fuego": 5,
        "agua": 0,
        "rayo": 10,
        "hielo": 5,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 50,
        "impacto": 50,
        "proyectil": 50,
        "fuego": 10,
        "agua": 0,
        "rayo": 30,
        "hielo": 20,
        "dragon": 30,
        "aturdido": 0
      }
    },
    "Dorsal Fin": {
      "normal": {
        "corte": 43,
        "impacto": 43,
        "proyectil": 45,
        "fuego": 8,
        "agua": 0,
        "rayo": 15,
        "hielo": 5,
        "dragon": 10,
        "aturdido": 0
      },
      "herida": {
        "corte": 50,
        "impacto": 50,
        "proyectil": 50,
        "fuego": 10,
        "agua": 0,
        "rayo": 30,
        "hielo": 20,
        "dragon": 30,
        "aturdido": 0
      }
    }
  },
  "nerscylla": {
    "Head": {
      "normal": {
        "corte": 50,
        "impacto": 50,
        "proyectil": 50,
        "fuego": 5,
        "agua": 0,
        "rayo": 10,
        "hielo": 5,
        "dragon": 0,
        "aturdido": 100
      },
      "herida": {
        "corte": 75,
        "impacto": 75,
        "proyectil": 75,
        "fuego": 25,
        "agua": 0,
        "rayo": 15,
        "hielo": 15,
        "dragon": 0,
        "aturdido": 100
      }
    },
    "Torso": {
      "normal": {
        "corte": 36,
        "impacto": 36,
        "proyectil": 40,
        "fuego": 5,
        "agua": 0,
        "rayo": 25,
        "hielo": 5,
        "dragon": 0,
        "aturdido": 0
      },
      "herida": {
        "corte": 55,
        "impacto": 55,
        "proyectil": 45,
        "fuego": 25,
        "agua": 0,
        "rayo": 25,
        "hielo": 15,
        "dragon": 0,
        "aturdido": 0
      }
    },
    "Belly": {
      "normal": {
        "corte": 45,
        "impacto": 45,
        "proyectil": 45,
        "fuego": 5,
        "agua": 0,
        "rayo": 20,
        "hielo": 5,
        "dragon": 0,
        "aturdido": 0
      },
      "herida": {
        "corte": 55,
        "impacto": 55,
        "proyectil": 45,
        "fuego": 25,
        "agua": 0,
        "rayo": 25,
        "hielo": 15,
        "dragon": 0,
        "aturdido": 0
      }
    },
    "Left Claw": {
      "normal": {
        "corte": 30,
        "impacto": 30,
        "proyectil": 30,
        "fuego": 5,
        "agua": 0,
        "rayo": 10,
        "hielo": 5,
        "dragon": 0,
        "aturdido": 0
      },
      "herida": {
        "corte": 55,
        "impacto": 55,
        "proyectil": 45,
        "fuego": 25,
        "agua": 0,
        "rayo": 25,
        "hielo": 15,
        "dragon": 0,
        "aturdido": 0
      }
    },
    "Right Claw": {
      "normal": {
        "corte": 30,
        "impacto": 30,
        "proyectil": 30,
        "fuego": 5,
        "agua": 0,
        "rayo": 10,
        "hielo": 5,
        "dragon": 0,
        "aturdido": 0
      },
      "herida": {
        "corte": 55,
        "impacto": 55,
        "proyectil": 45,
        "fuego": 25,
        "agua": 0,
        "rayo": 25,
        "hielo": 15,
        "dragon": 0,
        "aturdido": 0
      }
    },
    "Left Foreleg": {
      "normal": {
        "corte": 35,
        "impacto": 35,
        "proyectil": 25,
        "fuego": 5,
        "agua": 0,
        "rayo": 10,
        "hielo": 5,
        "dragon": 0,
        "aturdido": 0
      },
      "herida": {
        "corte": 55,
        "impacto": 55,
        "proyectil": 45,
        "fuego": 25,
        "agua": 0,
        "rayo": 25,
        "hielo": 15,
        "dragon": 0,
        "aturdido": 0
      }
    },
    "Right Foreleg": {
      "normal": {
        "corte": 35,
        "impacto": 35,
        "proyectil": 25,
        "fuego": 5,
        "agua": 0,
        "rayo": 10,
        "hielo": 5,
        "dragon": 0,
        "aturdido": 0
      },
      "herida": {
        "corte": 55,
        "impacto": 55,
        "proyectil": 45,
        "fuego": 25,
        "agua": 0,
        "rayo": 25,
        "hielo": 15,
        "dragon": 0,
        "aturdido": 0
      }
    },
    "Mantle": {
      "normal": {
        "corte": 45,
        "impacto": 45,
        "proyectil": 25,
        "fuego": 5,
        "agua": 0,
        "rayo": 10,
        "hielo": 5,
        "dragon": 0,
        "aturdido": 0
      },
      "herida": {
        "corte": 55,
        "impacto": 55,
        "proyectil": 45,
        "fuego": 25,
        "agua": 0,
        "rayo": 25,
        "hielo": 15,
        "dragon": 0,
        "aturdido": 0
      }
    },
    "Left Hind Leg": {
      "normal": {
        "corte": 45,
        "impacto": 45,
        "proyectil": 35,
        "fuego": 5,
        "agua": 0,
        "rayo": 10,
        "hielo": 5,
        "dragon": 0,
        "aturdido": 0
      },
      "herida": {
        "corte": 55,
        "impacto": 55,
        "proyectil": 45,
        "fuego": 25,
        "agua": 0,
        "rayo": 25,
        "hielo": 15,
        "dragon": 0,
        "aturdido": 0
      }
    },
    "Right Hind Leg": {
      "normal": {
        "corte": 45,
        "impacto": 45,
        "proyectil": 35,
        "fuego": 5,
        "agua": 0,
        "rayo": 10,
        "hielo": 5,
        "dragon": 0,
        "aturdido": 0
      },
      "herida": {
        "corte": 55,
        "impacto": 55,
        "proyectil": 45,
        "fuego": 25,
        "agua": 0,
        "rayo": 25,
        "hielo": 15,
        "dragon": 0,
        "aturdido": 0
      }
    },
    "Stinger": {
      "normal": {
        "corte": 30,
        "impacto": 30,
        "proyectil": 30,
        "fuego": 5,
        "agua": 0,
        "rayo": 35,
        "hielo": 5,
        "dragon": 0,
        "aturdido": 0
      },
      "herida": {
        "corte": 55,
        "impacto": 55,
        "proyectil": 45,
        "fuego": 25,
        "agua": 0,
        "rayo": 25,
        "hielo": 15,
        "dragon": 0,
        "aturdido": 0
      }
    }
  },
  "nu-udra": {
    "Head": {
      "normal": {
        "corte": 65,
        "impacto": 70,
        "proyectil": 48,
        "fuego": 0,
        "agua": 20,
        "rayo": 5,
        "hielo": 5,
        "dragon": 10,
        "aturdido": 100
      },
      "herida": {
        "corte": 80,
        "impacto": 85,
        "proyectil": 60,
        "fuego": 0,
        "agua": 25,
        "rayo": 10,
        "hielo": 5,
        "dragon": 10,
        "aturdido": 100
      }
    },
    "Tentacle": {
      "normal": {
        "corte": 35,
        "impacto": 40,
        "proyectil": 30,
        "fuego": 0,
        "agua": 20,
        "rayo": 5,
        "hielo": 5,
        "dragon": 10,
        "aturdido": 0
      }
    },
    "Membrane": {
      "normal": {
        "corte": 35,
        "impacto": 40,
        "proyectil": 30,
        "fuego": 0,
        "agua": 20,
        "rayo": 5,
        "hielo": 5,
        "dragon": 10,
        "aturdido": 0
      },
      "herida": {
        "corte": 65,
        "impacto": 75,
        "proyectil": 58,
        "fuego": 0,
        "agua": 25,
        "rayo": 10,
        "hielo": 5,
        "dragon": 10,
        "aturdido": 0
      }
    },
    "Torso": {
      "normal": {
        "corte": 48,
        "impacto": 53,
        "proyectil": 35,
        "fuego": 0,
        "agua": 20,
        "rayo": 5,
        "hielo": 5,
        "dragon": 10,
        "aturdido": 0
      },
      "herida": {
        "corte": 65,
        "impacto": 75,
        "proyectil": 58,
        "fuego": 0,
        "agua": 25,
        "rayo": 10,
        "hielo": 5,
        "dragon": 10,
        "aturdido": 0
      }
    },
    "Front Left Arm": {
      "normal": {
        "corte": 48,
        "impacto": 45,
        "proyectil": 45,
        "fuego": 0,
        "agua": 20,
        "rayo": 5,
        "hielo": 5,
        "dragon": 10,
        "aturdido": 0
      },
      "herida": {
        "corte": 65,
        "impacto": 75,
        "proyectil": 58,
        "fuego": 0,
        "agua": 25,
        "rayo": 10,
        "hielo": 5,
        "dragon": 10,
        "aturdido": 0
      }
    },
    "Front Right Arm": {
      "normal": {
        "corte": 48,
        "impacto": 45,
        "proyectil": 45,
        "fuego": 0,
        "agua": 20,
        "rayo": 5,
        "hielo": 5,
        "dragon": 10,
        "aturdido": 0
      },
      "herida": {
        "corte": 65,
        "impacto": 75,
        "proyectil": 58,
        "fuego": 0,
        "agua": 25,
        "rayo": 10,
        "hielo": 5,
        "dragon": 10,
        "aturdido": 0
      }
    },
    "Middle Left Arm": {
      "normal": {
        "corte": 48,
        "impacto": 45,
        "proyectil": 45,
        "fuego": 0,
        "agua": 20,
        "rayo": 5,
        "hielo": 5,
        "dragon": 10,
        "aturdido": 0
      },
      "herida": {
        "corte": 65,
        "impacto": 75,
        "proyectil": 58,
        "fuego": 0,
        "agua": 25,
        "rayo": 10,
        "hielo": 5,
        "dragon": 10,
        "aturdido": 0
      }
    },
    "Middle Right Arm": {
      "normal": {
        "corte": 48,
        "impacto": 45,
        "proyectil": 45,
        "fuego": 0,
        "agua": 20,
        "rayo": 5,
        "hielo": 5,
        "dragon": 10,
        "aturdido": 0
      },
      "herida": {
        "corte": 65,
        "impacto": 75,
        "proyectil": 58,
        "fuego": 0,
        "agua": 25,
        "rayo": 10,
        "hielo": 5,
        "dragon": 10,
        "aturdido": 0
      }
    },
    "Rear Left Arm": {
      "normal": {
        "corte": 48,
        "impacto": 45,
        "proyectil": 45,
        "fuego": 0,
        "agua": 20,
        "rayo": 5,
        "hielo": 5,
        "dragon": 10,
        "aturdido": 0
      },
      "herida": {
        "corte": 65,
        "impacto": 75,
        "proyectil": 58,
        "fuego": 0,
        "agua": 25,
        "rayo": 10,
        "hielo": 5,
        "dragon": 10,
        "aturdido": 0
      }
    },
    "Rear Right Arm": {
      "normal": {
        "corte": 48,
        "impacto": 45,
        "proyectil": 45,
        "fuego": 0,
        "agua": 20,
        "rayo": 5,
        "hielo": 5,
        "dragon": 10,
        "aturdido": 0
      },
      "herida": {
        "corte": 65,
        "impacto": 75,
        "proyectil": 58,
        "fuego": 0,
        "agua": 25,
        "rayo": 10,
        "hielo": 5,
        "dragon": 10,
        "aturdido": 0
      }
    },
    "Mouth": {
      "normal": {
        "corte": 80,
        "impacto": 80,
        "proyectil": 80,
        "fuego": 0,
        "agua": 20,
        "rayo": 5,
        "hielo": 5,
        "dragon": 10,
        "aturdido": 100
      }
    }
  },
  "omega-planetes": {
    "Head": {
      "normal": {
        "corte": 40,
        "impacto": 45,
        "proyectil": 40,
        "fuego": 0,
        "agua": 10,
        "rayo": 25,
        "hielo": 5,
        "dragon": 20,
        "aturdido": 100
      },
      "herida": {
        "corte": 50,
        "impacto": 55,
        "proyectil": 50,
        "fuego": 0,
        "agua": 10,
        "rayo": 25,
        "hielo": 5,
        "dragon": 20,
        "aturdido": 100
      },
      "punto_debil": {
        "corte": 55,
        "impacto": 60,
        "proyectil": 55,
        "fuego": 0,
        "agua": 10,
        "rayo": 25,
        "hielo": 5,
        "dragon": 20,
        "aturdido": 100
      }
    },
    "Left Foreleg": {
      "normal": {
        "corte": 28,
        "impacto": 40,
        "proyectil": 35,
        "fuego": 0,
        "agua": 5,
        "rayo": 15,
        "hielo": 5,
        "dragon": 10,
        "aturdido": 0
      },
      "herida": {
        "corte": 65,
        "impacto": 70,
        "proyectil": 65,
        "fuego": 0,
        "agua": 5,
        "rayo": 15,
        "hielo": 5,
        "dragon": 10,
        "aturdido": 0
      },
      "punto_debil": {
        "corte": 45,
        "impacto": 70,
        "proyectil": 65,
        "fuego": 0,
        "agua": 5,
        "rayo": 15,
        "hielo": 5,
        "dragon": 10,
        "aturdido": 0
      }
    },
    "Right Foreleg": {
      "normal": {
        "corte": 28,
        "impacto": 40,
        "proyectil": 35,
        "fuego": 0,
        "agua": 5,
        "rayo": 15,
        "hielo": 5,
        "dragon": 10,
        "aturdido": 0
      },
      "herida": {
        "corte": 65,
        "impacto": 70,
        "proyectil": 65,
        "fuego": 0,
        "agua": 5,
        "rayo": 15,
        "hielo": 5,
        "dragon": 10,
        "aturdido": 0
      },
      "punto_debil": {
        "corte": 45,
        "impacto": 70,
        "proyectil": 65,
        "fuego": 0,
        "agua": 5,
        "rayo": 15,
        "hielo": 5,
        "dragon": 10,
        "aturdido": 0
      }
    },
    "Left Hind Leg": {
      "normal": {
        "corte": 35,
        "impacto": 28,
        "proyectil": 28,
        "fuego": 0,
        "agua": 5,
        "rayo": 15,
        "hielo": 5,
        "dragon": 10,
        "aturdido": 0
      },
      "herida": {
        "corte": 65,
        "impacto": 70,
        "proyectil": 65,
        "fuego": 0,
        "agua": 5,
        "rayo": 15,
        "hielo": 5,
        "dragon": 10,
        "aturdido": 0
      },
      "punto_debil": {
        "corte": 65,
        "impacto": 45,
        "proyectil": 45,
        "fuego": 0,
        "agua": 5,
        "rayo": 15,
        "hielo": 5,
        "dragon": 10,
        "aturdido": 0
      }
    },
    "Right Hind Leg": {
      "normal": {
        "corte": 35,
        "impacto": 28,
        "proyectil": 28,
        "fuego": 0,
        "agua": 5,
        "rayo": 15,
        "hielo": 5,
        "dragon": 10,
        "aturdido": 0
      },
      "herida": {
        "corte": 65,
        "impacto": 70,
        "proyectil": 65,
        "fuego": 0,
        "agua": 5,
        "rayo": 15,
        "hielo": 5,
        "dragon": 10,
        "aturdido": 0
      },
      "punto_debil": {
        "corte": 65,
        "impacto": 45,
        "proyectil": 45,
        "fuego": 0,
        "agua": 5,
        "rayo": 15,
        "hielo": 5,
        "dragon": 10,
        "aturdido": 0
      }
    },
    "Torso": {
      "normal": {
        "corte": 10,
        "impacto": 10,
        "proyectil": 5,
        "fuego": 0,
        "agua": 5,
        "rayo": 5,
        "hielo": 0,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 65,
        "impacto": 70,
        "proyectil": 65,
        "fuego": 0,
        "agua": 5,
        "rayo": 15,
        "hielo": 5,
        "dragon": 10,
        "aturdido": 0
      }
    },
    "Rear Power Unit": {
      "normal": {
        "corte": 40,
        "impacto": 65,
        "proyectil": 5,
        "fuego": 0,
        "agua": 5,
        "rayo": 10,
        "hielo": 5,
        "dragon": 20,
        "aturdido": 30
      },
      "herida": {
        "corte": 80,
        "impacto": 100,
        "proyectil": 20,
        "fuego": 0,
        "agua": 5,
        "rayo": 15,
        "hielo": 5,
        "dragon": 30,
        "aturdido": 30
      }
    },
    "Back": {
      "normal": {
        "corte": 30,
        "impacto": 20,
        "proyectil": 20,
        "fuego": 0,
        "agua": 5,
        "rayo": 20,
        "hielo": 5,
        "dragon": 15,
        "aturdido": 0
      },
      "herida": {
        "corte": 65,
        "impacto": 70,
        "proyectil": 65,
        "fuego": 0,
        "agua": 5,
        "rayo": 15,
        "hielo": 5,
        "dragon": 10,
        "aturdido": 0
      }
    }
  },
  "quematrice": {
    "Head": {
      "normal": {
        "corte": 60,
        "impacto": 65,
        "proyectil": 60,
        "fuego": 0,
        "agua": 20,
        "rayo": 5,
        "hielo": 10,
        "dragon": 5,
        "aturdido": 100
      },
      "herida": {
        "corte": 75,
        "impacto": 75,
        "proyectil": 75,
        "fuego": 0,
        "agua": 30,
        "rayo": 15,
        "hielo": 20,
        "dragon": 5,
        "aturdido": 100
      },
      "punto_debil": {
        "corte": 80,
        "impacto": 80,
        "proyectil": 70,
        "fuego": 0,
        "agua": 20,
        "rayo": 5,
        "hielo": 10,
        "dragon": 5,
        "aturdido": 0
      }
    },
    "Torso": {
      "normal": {
        "corte": 40,
        "impacto": 40,
        "proyectil": 30,
        "fuego": 0,
        "agua": 15,
        "rayo": 5,
        "hielo": 5,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 65,
        "impacto": 65,
        "proyectil": 65,
        "fuego": 0,
        "agua": 25,
        "rayo": 15,
        "hielo": 15,
        "dragon": 5,
        "aturdido": 0
      }
    },
    "Tail": {
      "normal": {
        "corte": 65,
        "impacto": 60,
        "proyectil": 60,
        "fuego": 0,
        "agua": 25,
        "rayo": 5,
        "hielo": 10,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 65,
        "impacto": 65,
        "proyectil": 65,
        "fuego": 0,
        "agua": 25,
        "rayo": 15,
        "hielo": 15,
        "dragon": 5,
        "aturdido": 0
      }
    },
    "Right Foreleg": {
      "normal": {
        "corte": 40,
        "impacto": 35,
        "proyectil": 35,
        "fuego": 0,
        "agua": 15,
        "rayo": 5,
        "hielo": 5,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 65,
        "impacto": 65,
        "proyectil": 65,
        "fuego": 0,
        "agua": 25,
        "rayo": 15,
        "hielo": 15,
        "dragon": 5,
        "aturdido": 0
      }
    },
    "Left Foreleg": {
      "normal": {
        "corte": 40,
        "impacto": 35,
        "proyectil": 35,
        "fuego": 0,
        "agua": 15,
        "rayo": 5,
        "hielo": 5,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 65,
        "impacto": 65,
        "proyectil": 65,
        "fuego": 0,
        "agua": 25,
        "rayo": 15,
        "hielo": 15,
        "dragon": 5,
        "aturdido": 0
      }
    },
    "Right Hind Leg": {
      "normal": {
        "corte": 40,
        "impacto": 35,
        "proyectil": 35,
        "fuego": 0,
        "agua": 15,
        "rayo": 5,
        "hielo": 5,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 65,
        "impacto": 65,
        "proyectil": 65,
        "fuego": 0,
        "agua": 25,
        "rayo": 15,
        "hielo": 15,
        "dragon": 5,
        "aturdido": 0
      }
    },
    "Left Hind Leg": {
      "normal": {
        "corte": 40,
        "impacto": 35,
        "proyectil": 35,
        "fuego": 0,
        "agua": 15,
        "rayo": 5,
        "hielo": 5,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 65,
        "impacto": 65,
        "proyectil": 65,
        "fuego": 0,
        "agua": 25,
        "rayo": 15,
        "hielo": 15,
        "dragon": 5,
        "aturdido": 0
      }
    }
  },
  "rathalos": {
    "Head": {
      "normal": {
        "corte": 65,
        "impacto": 70,
        "proyectil": 60,
        "fuego": 0,
        "agua": 15,
        "rayo": 20,
        "hielo": 15,
        "dragon": 30,
        "aturdido": 100
      },
      "herida": {
        "corte": 70,
        "impacto": 75,
        "proyectil": 65,
        "fuego": 0,
        "agua": 15,
        "rayo": 20,
        "hielo": 15,
        "dragon": 30,
        "aturdido": 100
      }
    },
    "Neck": {
      "normal": {
        "corte": 35,
        "impacto": 40,
        "proyectil": 30,
        "fuego": 0,
        "agua": 5,
        "rayo": 10,
        "hielo": 5,
        "dragon": 20,
        "aturdido": 0
      },
      "herida": {
        "corte": 60,
        "impacto": 55,
        "proyectil": 50,
        "fuego": 0,
        "agua": 15,
        "rayo": 20,
        "hielo": 15,
        "dragon": 30,
        "aturdido": 0
      }
    },
    "Torso": {
      "normal": {
        "corte": 25,
        "impacto": 25,
        "proyectil": 20,
        "fuego": 0,
        "agua": 5,
        "rayo": 10,
        "hielo": 5,
        "dragon": 20,
        "aturdido": 0
      },
      "herida": {
        "corte": 60,
        "impacto": 55,
        "proyectil": 50,
        "fuego": 0,
        "agua": 15,
        "rayo": 20,
        "hielo": 15,
        "dragon": 30,
        "aturdido": 0
      }
    },
    "Left Wing": {
      "normal": {
        "corte": 55,
        "impacto": 50,
        "proyectil": 40,
        "fuego": 0,
        "agua": 10,
        "rayo": 15,
        "hielo": 10,
        "dragon": 25,
        "aturdido": 0
      },
      "herida": {
        "corte": 60,
        "impacto": 55,
        "proyectil": 50,
        "fuego": 0,
        "agua": 15,
        "rayo": 20,
        "hielo": 15,
        "dragon": 30,
        "aturdido": 0
      }
    },
    "Right Wing": {
      "normal": {
        "corte": 55,
        "impacto": 50,
        "proyectil": 40,
        "fuego": 0,
        "agua": 10,
        "rayo": 15,
        "hielo": 10,
        "dragon": 25,
        "aturdido": 0
      },
      "herida": {
        "corte": 60,
        "impacto": 55,
        "proyectil": 50,
        "fuego": 0,
        "agua": 15,
        "rayo": 20,
        "hielo": 15,
        "dragon": 30,
        "aturdido": 0
      }
    },
    "Left Leg": {
      "normal": {
        "corte": 45,
        "impacto": 45,
        "proyectil": 30,
        "fuego": 0,
        "agua": 0,
        "rayo": 5,
        "hielo": 0,
        "dragon": 15,
        "aturdido": 0
      },
      "herida": {
        "corte": 60,
        "impacto": 55,
        "proyectil": 50,
        "fuego": 0,
        "agua": 15,
        "rayo": 20,
        "hielo": 15,
        "dragon": 30,
        "aturdido": 0
      }
    },
    "Right Leg": {
      "normal": {
        "corte": 45,
        "impacto": 45,
        "proyectil": 30,
        "fuego": 0,
        "agua": 0,
        "rayo": 5,
        "hielo": 0,
        "dragon": 15,
        "aturdido": 0
      },
      "herida": {
        "corte": 60,
        "impacto": 55,
        "proyectil": 50,
        "fuego": 0,
        "agua": 15,
        "rayo": 20,
        "hielo": 15,
        "dragon": 30,
        "aturdido": 0
      }
    },
    "Tail": {
      "normal": {
        "corte": 45,
        "impacto": 40,
        "proyectil": 35,
        "fuego": 0,
        "agua": 5,
        "rayo": 10,
        "hielo": 5,
        "dragon": 20,
        "aturdido": 0
      },
      "herida": {
        "corte": 60,
        "impacto": 55,
        "proyectil": 50,
        "fuego": 0,
        "agua": 15,
        "rayo": 20,
        "hielo": 15,
        "dragon": 30,
        "aturdido": 0
      }
    }
  },
  "rathian": {
    "Head": {
      "normal": {
        "corte": 70,
        "impacto": 75,
        "proyectil": 65,
        "fuego": 0,
        "agua": 15,
        "rayo": 20,
        "hielo": 15,
        "dragon": 30,
        "aturdido": 100
      },
      "herida": {
        "corte": 80,
        "impacto": 82,
        "proyectil": 70,
        "fuego": 0,
        "agua": 15,
        "rayo": 20,
        "hielo": 15,
        "dragon": 30,
        "aturdido": 100
      }
    },
    "Torso": {
      "normal": {
        "corte": 35,
        "impacto": 30,
        "proyectil": 25,
        "fuego": 0,
        "agua": 5,
        "rayo": 10,
        "hielo": 5,
        "dragon": 20,
        "aturdido": 0
      },
      "herida": {
        "corte": 50,
        "impacto": 50,
        "proyectil": 50,
        "fuego": 0,
        "agua": 10,
        "rayo": 15,
        "hielo": 10,
        "dragon": 20,
        "aturdido": 0
      }
    },
    "Left Leg": {
      "normal": {
        "corte": 40,
        "impacto": 40,
        "proyectil": 35,
        "fuego": 0,
        "agua": 0,
        "rayo": 5,
        "hielo": 0,
        "dragon": 15,
        "aturdido": 0
      },
      "herida": {
        "corte": 50,
        "impacto": 50,
        "proyectil": 50,
        "fuego": 0,
        "agua": 10,
        "rayo": 15,
        "hielo": 10,
        "dragon": 20,
        "aturdido": 0
      }
    },
    "Right Leg": {
      "normal": {
        "corte": 40,
        "impacto": 40,
        "proyectil": 35,
        "fuego": 0,
        "agua": 0,
        "rayo": 5,
        "hielo": 0,
        "dragon": 15,
        "aturdido": 0
      },
      "herida": {
        "corte": 50,
        "impacto": 50,
        "proyectil": 50,
        "fuego": 0,
        "agua": 10,
        "rayo": 15,
        "hielo": 10,
        "dragon": 20,
        "aturdido": 0
      }
    },
    "Tail": {
      "normal": {
        "corte": 45,
        "impacto": 40,
        "proyectil": 35,
        "fuego": 0,
        "agua": 5,
        "rayo": 10,
        "hielo": 5,
        "dragon": 20,
        "aturdido": 0
      },
      "herida": {
        "corte": 50,
        "impacto": 50,
        "proyectil": 50,
        "fuego": 0,
        "agua": 10,
        "rayo": 15,
        "hielo": 10,
        "dragon": 20,
        "aturdido": 0
      }
    },
    "Left Wing": {
      "normal": {
        "corte": 55,
        "impacto": 50,
        "proyectil": 45,
        "fuego": 0,
        "agua": 10,
        "rayo": 15,
        "hielo": 10,
        "dragon": 25,
        "aturdido": 0
      },
      "herida": {
        "corte": 60,
        "impacto": 66,
        "proyectil": 50,
        "fuego": 0,
        "agua": 10,
        "rayo": 15,
        "hielo": 10,
        "dragon": 25,
        "aturdido": 0
      }
    },
    "Right Wing": {
      "normal": {
        "corte": 55,
        "impacto": 50,
        "proyectil": 45,
        "fuego": 0,
        "agua": 10,
        "rayo": 15,
        "hielo": 10,
        "dragon": 25,
        "aturdido": 0
      },
      "herida": {
        "corte": 60,
        "impacto": 66,
        "proyectil": 50,
        "fuego": 0,
        "agua": 10,
        "rayo": 15,
        "hielo": 10,
        "dragon": 25,
        "aturdido": 0
      }
    }
  },
  "rey-dau": {
    "Head": {
      "normal": {
        "corte": 60,
        "impacto": 65,
        "proyectil": 50,
        "fuego": 5,
        "agua": 15,
        "rayo": 0,
        "hielo": 20,
        "dragon": 5,
        "aturdido": 100
      },
      "herida": {
        "corte": 70,
        "impacto": 75,
        "proyectil": 60,
        "fuego": 5,
        "agua": 20,
        "rayo": 0,
        "hielo": 25,
        "dragon": 5,
        "aturdido": 100
      },
      "punto_debil": {
        "corte": 80,
        "impacto": 80,
        "proyectil": 70,
        "fuego": 5,
        "agua": 20,
        "rayo": 0,
        "hielo": 25,
        "dragon": 5,
        "aturdido": 0
      }
    },
    "Torso": {
      "normal": {
        "corte": 30,
        "impacto": 30,
        "proyectil": 25,
        "fuego": 5,
        "agua": 5,
        "rayo": 0,
        "hielo": 5,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 65,
        "impacto": 65,
        "proyectil": 55,
        "fuego": 5,
        "agua": 10,
        "rayo": 0,
        "hielo": 15,
        "dragon": 5,
        "aturdido": 0
      }
    },
    "Left Leg": {
      "normal": {
        "corte": 37,
        "impacto": 37,
        "proyectil": 33,
        "fuego": 5,
        "agua": 5,
        "rayo": 0,
        "hielo": 5,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 65,
        "impacto": 65,
        "proyectil": 55,
        "fuego": 5,
        "agua": 10,
        "rayo": 0,
        "hielo": 15,
        "dragon": 5,
        "aturdido": 0
      }
    },
    "Right Leg": {
      "normal": {
        "corte": 37,
        "impacto": 37,
        "proyectil": 33,
        "fuego": 5,
        "agua": 5,
        "rayo": 0,
        "hielo": 5,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 65,
        "impacto": 65,
        "proyectil": 55,
        "fuego": 5,
        "agua": 10,
        "rayo": 0,
        "hielo": 15,
        "dragon": 5,
        "aturdido": 0
      }
    },
    "Tail": {
      "normal": {
        "corte": 45,
        "impacto": 40,
        "proyectil": 45,
        "fuego": 5,
        "agua": 5,
        "rayo": 0,
        "hielo": 10,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 65,
        "impacto": 65,
        "proyectil": 55,
        "fuego": 5,
        "agua": 10,
        "rayo": 0,
        "hielo": 15,
        "dragon": 5,
        "aturdido": 0
      }
    },
    "Left Wing": {
      "normal": {
        "corte": 45,
        "impacto": 50,
        "proyectil": 45,
        "fuego": 5,
        "agua": 10,
        "rayo": 0,
        "hielo": 15,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 65,
        "impacto": 65,
        "proyectil": 55,
        "fuego": 5,
        "agua": 10,
        "rayo": 0,
        "hielo": 15,
        "dragon": 5,
        "aturdido": 0
      }
    },
    "Right Wing": {
      "normal": {
        "corte": 45,
        "impacto": 50,
        "proyectil": 45,
        "fuego": 5,
        "agua": 10,
        "rayo": 0,
        "hielo": 15,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 65,
        "impacto": 65,
        "proyectil": 55,
        "fuego": 5,
        "agua": 10,
        "rayo": 0,
        "hielo": 15,
        "dragon": 5,
        "aturdido": 0
      }
    }
  },
  "rompopolo": {
    "Head": {
      "normal": {
        "corte": 45,
        "impacto": 45,
        "proyectil": 45,
        "fuego": 10,
        "agua": 20,
        "rayo": 10,
        "hielo": 10,
        "dragon": 5,
        "aturdido": 100
      },
      "herida": {
        "corte": 70,
        "impacto": 75,
        "proyectil": 70,
        "fuego": 10,
        "agua": 25,
        "rayo": 10,
        "hielo": 10,
        "dragon": 5,
        "aturdido": 100
      },
      "punto_debil": {
        "corte": 80,
        "impacto": 80,
        "proyectil": 90,
        "fuego": 10,
        "agua": 20,
        "rayo": 10,
        "hielo": 10,
        "dragon": 5,
        "aturdido": 0
      }
    },
    "Torso": {
      "normal": {
        "corte": 35,
        "impacto": 35,
        "proyectil": 35,
        "fuego": 5,
        "agua": 15,
        "rayo": 5,
        "hielo": 5,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 50,
        "impacto": 50,
        "proyectil": 50,
        "fuego": 10,
        "agua": 20,
        "rayo": 10,
        "hielo": 10,
        "dragon": 5,
        "aturdido": 0
      }
    },
    "Back": {
      "normal": {
        "corte": 45,
        "impacto": 45,
        "proyectil": 45,
        "fuego": 10,
        "agua": 20,
        "rayo": 10,
        "hielo": 10,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 70,
        "impacto": 70,
        "proyectil": 70,
        "fuego": 10,
        "agua": 25,
        "rayo": 10,
        "hielo": 10,
        "dragon": 5,
        "aturdido": 0
      }
    },
    "Left Foreleg": {
      "normal": {
        "corte": 40,
        "impacto": 40,
        "proyectil": 40,
        "fuego": 5,
        "agua": 15,
        "rayo": 5,
        "hielo": 5,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 50,
        "impacto": 50,
        "proyectil": 50,
        "fuego": 10,
        "agua": 20,
        "rayo": 10,
        "hielo": 10,
        "dragon": 5,
        "aturdido": 0
      }
    },
    "Right Foreleg": {
      "normal": {
        "corte": 40,
        "impacto": 40,
        "proyectil": 40,
        "fuego": 5,
        "agua": 15,
        "rayo": 5,
        "hielo": 5,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 50,
        "impacto": 50,
        "proyectil": 50,
        "fuego": 10,
        "agua": 20,
        "rayo": 10,
        "hielo": 10,
        "dragon": 5,
        "aturdido": 0
      }
    },
    "Left Hind Leg": {
      "normal": {
        "corte": 33,
        "impacto": 33,
        "proyectil": 33,
        "fuego": 5,
        "agua": 15,
        "rayo": 5,
        "hielo": 5,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 50,
        "impacto": 50,
        "proyectil": 50,
        "fuego": 10,
        "agua": 20,
        "rayo": 10,
        "hielo": 10,
        "dragon": 5,
        "aturdido": 0
      }
    },
    "Right Hind Leg": {
      "normal": {
        "corte": 33,
        "impacto": 33,
        "proyectil": 33,
        "fuego": 5,
        "agua": 15,
        "rayo": 5,
        "hielo": 5,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 50,
        "impacto": 50,
        "proyectil": 50,
        "fuego": 10,
        "agua": 20,
        "rayo": 10,
        "hielo": 10,
        "dragon": 5,
        "aturdido": 0
      }
    },
    "Tail": {
      "normal": {
        "corte": 45,
        "impacto": 45,
        "proyectil": 45,
        "fuego": 10,
        "agua": 20,
        "rayo": 10,
        "hielo": 10,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 70,
        "impacto": 70,
        "proyectil": 70,
        "fuego": 10,
        "agua": 25,
        "rayo": 10,
        "hielo": 10,
        "dragon": 5,
        "aturdido": 0
      }
    }
  },
  "seregios": {
    "Head": {
      "normal": {
        "corte": 45,
        "impacto": 55,
        "proyectil": 40,
        "fuego": 0,
        "agua": 5,
        "rayo": 15,
        "hielo": 10,
        "dragon": 5,
        "aturdido": 100
      },
      "herida": {
        "corte": 50,
        "impacto": 60,
        "proyectil": 50,
        "fuego": 0,
        "agua": 15,
        "rayo": 30,
        "hielo": 20,
        "dragon": 10,
        "aturdido": 100
      }
    },
    "Neck": {
      "normal": {
        "corte": 35,
        "impacto": 40,
        "proyectil": 30,
        "fuego": 0,
        "agua": 5,
        "rayo": 10,
        "hielo": 5,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 50,
        "impacto": 45,
        "proyectil": 45,
        "fuego": 0,
        "agua": 5,
        "rayo": 15,
        "hielo": 10,
        "dragon": 0,
        "aturdido": 0
      }
    },
    "Torso": {
      "normal": {
        "corte": 35,
        "impacto": 35,
        "proyectil": 10,
        "fuego": 0,
        "agua": 5,
        "rayo": 5,
        "hielo": 5,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 60,
        "impacto": 55,
        "proyectil": 55,
        "fuego": 0,
        "agua": 10,
        "rayo": 30,
        "hielo": 20,
        "dragon": 10,
        "aturdido": 0
      }
    },
    "Left Leg": {
      "normal": {
        "corte": 50,
        "impacto": 45,
        "proyectil": 45,
        "fuego": 0,
        "agua": 10,
        "rayo": 20,
        "hielo": 15,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 60,
        "impacto": 55,
        "proyectil": 55,
        "fuego": 0,
        "agua": 10,
        "rayo": 30,
        "hielo": 20,
        "dragon": 10,
        "aturdido": 0
      },
      "punto_debil": {
        "corte": 70,
        "impacto": 85,
        "proyectil": 70,
        "fuego": 0,
        "agua": 15,
        "rayo": 30,
        "hielo": 20,
        "dragon": 10,
        "aturdido": 0
      }
    },
    "Right Leg": {
      "normal": {
        "corte": 50,
        "impacto": 45,
        "proyectil": 45,
        "fuego": 0,
        "agua": 10,
        "rayo": 20,
        "hielo": 15,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 60,
        "impacto": 55,
        "proyectil": 55,
        "fuego": 0,
        "agua": 10,
        "rayo": 30,
        "hielo": 20,
        "dragon": 10,
        "aturdido": 0
      },
      "punto_debil": {
        "corte": 70,
        "impacto": 85,
        "proyectil": 70,
        "fuego": 0,
        "agua": 15,
        "rayo": 30,
        "hielo": 20,
        "dragon": 10,
        "aturdido": 0
      }
    },
    "Left Wing": {
      "normal": {
        "corte": 30,
        "impacto": 30,
        "proyectil": 15,
        "fuego": 0,
        "agua": 5,
        "rayo": 10,
        "hielo": 5,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 60,
        "impacto": 55,
        "proyectil": 55,
        "fuego": 0,
        "agua": 10,
        "rayo": 30,
        "hielo": 20,
        "dragon": 10,
        "aturdido": 0
      }
    },
    "Right Wing": {
      "normal": {
        "corte": 30,
        "impacto": 30,
        "proyectil": 15,
        "fuego": 0,
        "agua": 5,
        "rayo": 10,
        "hielo": 5,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 60,
        "impacto": 55,
        "proyectil": 55,
        "fuego": 0,
        "agua": 10,
        "rayo": 30,
        "hielo": 20,
        "dragon": 10,
        "aturdido": 0
      }
    },
    "Tail": {
      "normal": {
        "corte": 40,
        "impacto": 35,
        "proyectil": 45,
        "fuego": 0,
        "agua": 5,
        "rayo": 15,
        "hielo": 10,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 60,
        "impacto": 55,
        "proyectil": 55,
        "fuego": 0,
        "agua": 10,
        "rayo": 30,
        "hielo": 20,
        "dragon": 10,
        "aturdido": 0
      }
    }
  },
  "uth-duna": {
    "Head": {
      "normal": {
        "corte": 40,
        "impacto": 60,
        "proyectil": 50,
        "fuego": 10,
        "agua": 0,
        "rayo": 20,
        "hielo": 5,
        "dragon": 5,
        "aturdido": 100
      },
      "herida": {
        "corte": 88,
        "impacto": 90,
        "proyectil": 88,
        "fuego": 15,
        "agua": 0,
        "rayo": 25,
        "hielo": 5,
        "dragon": 5,
        "aturdido": 100
      },
      "punto_debil": {
        "corte": 90,
        "impacto": 90,
        "proyectil": 86,
        "fuego": 15,
        "agua": 0,
        "rayo": 25,
        "hielo": 5,
        "dragon": 5,
        "aturdido": 0
      }
    },
    "Torso": {
      "normal": {
        "corte": 50,
        "impacto": 45,
        "proyectil": 35,
        "fuego": 5,
        "agua": 0,
        "rayo": 10,
        "hielo": 5,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 80,
        "impacto": 80,
        "proyectil": 80,
        "fuego": 15,
        "agua": 0,
        "rayo": 25,
        "hielo": 5,
        "dragon": 5,
        "aturdido": 0
      }
    },
    "Right Foreleg": {
      "normal": {
        "corte": 65,
        "impacto": 65,
        "proyectil": 40,
        "fuego": 10,
        "agua": 0,
        "rayo": 15,
        "hielo": 5,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 80,
        "impacto": 80,
        "proyectil": 80,
        "fuego": 15,
        "agua": 0,
        "rayo": 25,
        "hielo": 5,
        "dragon": 5,
        "aturdido": 0
      }
    },
    "Left Foreleg": {
      "normal": {
        "corte": 65,
        "impacto": 65,
        "proyectil": 40,
        "fuego": 10,
        "agua": 0,
        "rayo": 15,
        "hielo": 5,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 80,
        "impacto": 80,
        "proyectil": 80,
        "fuego": 15,
        "agua": 0,
        "rayo": 25,
        "hielo": 5,
        "dragon": 5,
        "aturdido": 0
      }
    },
    "Right Hind Leg": {
      "normal": {
        "corte": 55,
        "impacto": 55,
        "proyectil": 35,
        "fuego": 10,
        "agua": 0,
        "rayo": 15,
        "hielo": 5,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 80,
        "impacto": 80,
        "proyectil": 80,
        "fuego": 15,
        "agua": 0,
        "rayo": 25,
        "hielo": 5,
        "dragon": 5,
        "aturdido": 0
      }
    },
    "Left Hind Leg": {
      "normal": {
        "corte": 55,
        "impacto": 55,
        "proyectil": 35,
        "fuego": 10,
        "agua": 0,
        "rayo": 15,
        "hielo": 5,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 80,
        "impacto": 80,
        "proyectil": 80,
        "fuego": 15,
        "agua": 0,
        "rayo": 25,
        "hielo": 5,
        "dragon": 5,
        "aturdido": 0
      }
    },
    "Tail": {
      "normal": {
        "corte": 45,
        "impacto": 45,
        "proyectil": 40,
        "fuego": 5,
        "agua": 0,
        "rayo": 5,
        "hielo": 5,
        "dragon": 5,
        "aturdido": 0
      },
      "herida": {
        "corte": 80,
        "impacto": 80,
        "proyectil": 80,
        "fuego": 15,
        "agua": 0,
        "rayo": 25,
        "hielo": 5,
        "dragon": 5,
        "aturdido": 0
      }
    },
    "Veil: Head (Right)": {
      "normal": {
        "corte": 90,
        "impacto": 75,
        "proyectil": 35,
        "fuego": 0,
        "agua": 0,
        "rayo": 20,
        "hielo": 0,
        "dragon": 0,
        "aturdido": 0
      }
    },
    "Veil: Head (Left)": {
      "normal": {
        "corte": 90,
        "impacto": 75,
        "proyectil": 35,
        "fuego": 0,
        "agua": 0,
        "rayo": 20,
        "hielo": 0,
        "dragon": 0,
        "aturdido": 0
      }
    },
    "Veil: Torso (Right)": {
      "normal": {
        "corte": 90,
        "impacto": 75,
        "proyectil": 35,
        "fuego": 0,
        "agua": 0,
        "rayo": 20,
        "hielo": 0,
        "dragon": 0,
        "aturdido": 0
      }
    },
    "Veil: Torso (Left)": {
      "normal": {
        "corte": 90,
        "impacto": 75,
        "proyectil": 35,
        "fuego": 0,
        "agua": 0,
        "rayo": 20,
        "hielo": 0,
        "dragon": 0,
        "aturdido": 0
      }
    },
    "Veil: Foreleg (Right)": {
      "normal": {
        "corte": 90,
        "impacto": 75,
        "proyectil": 35,
        "fuego": 0,
        "agua": 0,
        "rayo": 20,
        "hielo": 0,
        "dragon": 0,
        "aturdido": 0
      }
    },
    "Veil: Foreleg (Left)": {
      "normal": {
        "corte": 90,
        "impacto": 75,
        "proyectil": 35,
        "fuego": 0,
        "agua": 0,
        "rayo": 20,
        "hielo": 0,
        "dragon": 0,
        "aturdido": 0
      }
    },
    "Veil: Tail (Right)": {
      "normal": {
        "corte": 90,
        "impacto": 75,
        "proyectil": 35,
        "fuego": 0,
        "agua": 0,
        "rayo": 20,
        "hielo": 0,
        "dragon": 0,
        "aturdido": 0
      }
    },
    "Veil: Tail (Middle)": {
      "normal": {
        "corte": 90,
        "impacto": 75,
        "proyectil": 35,
        "fuego": 0,
        "agua": 0,
        "rayo": 20,
        "hielo": 0,
        "dragon": 0,
        "aturdido": 0
      }
    },
    "Veil: Tail (Left)": {
      "normal": {
        "corte": 90,
        "impacto": 75,
        "proyectil": 35,
        "fuego": 0,
        "agua": 0,
        "rayo": 20,
        "hielo": 0,
        "dragon": 0,
        "aturdido": 0
      }
    }
  },
  "xu-wu": {
    "Head": {
      "normal": {
        "corte": 70,
        "impacto": 65,
        "proyectil": 50,
        "fuego": 5,
        "agua": 3,
        "rayo": 5,
        "hielo": 25,
        "dragon": 0,
        "aturdido": 100
      },
      "herida": {
        "corte": 80,
        "impacto": 80,
        "proyectil": 60,
        "fuego": 5,
        "agua": 3,
        "rayo": 5,
        "hielo": 30,
        "dragon": 0,
        "aturdido": 100
      }
    },
    "Tentacle": {
      "normal": {
        "corte": 30,
        "impacto": 50,
        "proyectil": 20,
        "fuego": 10,
        "agua": 5,
        "rayo": 10,
        "hielo": 30,
        "dragon": 0,
        "aturdido": 0
      },
      "herida": {
        "corte": 60,
        "impacto": 60,
        "proyectil": 55,
        "fuego": 5,
        "agua": 3,
        "rayo": 5,
        "hielo": 30,
        "dragon": 0,
        "aturdido": 0
      }
    },
    "Membrane": {
      "normal": {
        "corte": 30,
        "impacto": 50,
        "proyectil": 20,
        "fuego": 10,
        "agua": 5,
        "rayo": 10,
        "hielo": 30,
        "dragon": 0,
        "aturdido": 0
      },
      "herida": {
        "corte": 60,
        "impacto": 60,
        "proyectil": 55,
        "fuego": 5,
        "agua": 3,
        "rayo": 5,
        "hielo": 30,
        "dragon": 0,
        "aturdido": 0
      }
    },
    "Torso": {
      "normal": {
        "corte": 30,
        "impacto": 50,
        "proyectil": 20,
        "fuego": 10,
        "agua": 5,
        "rayo": 10,
        "hielo": 30,
        "dragon": 0,
        "aturdido": 0
      },
      "herida": {
        "corte": 60,
        "impacto": 60,
        "proyectil": 55,
        "fuego": 5,
        "agua": 3,
        "rayo": 5,
        "hielo": 30,
        "dragon": 0,
        "aturdido": 0
      }
    },
    "Front Left Arm": {
      "normal": {
        "corte": 50,
        "impacto": 45,
        "proyectil": 30,
        "fuego": 5,
        "agua": 3,
        "rayo": 5,
        "hielo": 25,
        "dragon": 0,
        "aturdido": 0
      },
      "herida": {
        "corte": 60,
        "impacto": 60,
        "proyectil": 55,
        "fuego": 5,
        "agua": 3,
        "rayo": 5,
        "hielo": 30,
        "dragon": 0,
        "aturdido": 0
      }
    },
    "Front Right Arm": {
      "normal": {
        "corte": 50,
        "impacto": 45,
        "proyectil": 30,
        "fuego": 5,
        "agua": 3,
        "rayo": 5,
        "hielo": 25,
        "dragon": 0,
        "aturdido": 0
      },
      "herida": {
        "corte": 60,
        "impacto": 60,
        "proyectil": 55,
        "fuego": 5,
        "agua": 3,
        "rayo": 5,
        "hielo": 30,
        "dragon": 0,
        "aturdido": 0
      }
    },
    "Middle Left Arm": {
      "normal": {
        "corte": 50,
        "impacto": 45,
        "proyectil": 30,
        "fuego": 5,
        "agua": 3,
        "rayo": 5,
        "hielo": 25,
        "dragon": 0,
        "aturdido": 0
      },
      "herida": {
        "corte": 60,
        "impacto": 60,
        "proyectil": 55,
        "fuego": 5,
        "agua": 3,
        "rayo": 5,
        "hielo": 30,
        "dragon": 0,
        "aturdido": 0
      }
    },
    "Middle Right Arm": {
      "normal": {
        "corte": 50,
        "impacto": 45,
        "proyectil": 30,
        "fuego": 5,
        "agua": 3,
        "rayo": 5,
        "hielo": 25,
        "dragon": 0,
        "aturdido": 0
      },
      "herida": {
        "corte": 60,
        "impacto": 60,
        "proyectil": 55,
        "fuego": 5,
        "agua": 3,
        "rayo": 5,
        "hielo": 30,
        "dragon": 0,
        "aturdido": 0
      }
    },
    "Rear Left Arm": {
      "normal": {
        "corte": 50,
        "impacto": 45,
        "proyectil": 30,
        "fuego": 5,
        "agua": 3,
        "rayo": 5,
        "hielo": 25,
        "dragon": 0,
        "aturdido": 0
      },
      "herida": {
        "corte": 60,
        "impacto": 60,
        "proyectil": 55,
        "fuego": 5,
        "agua": 3,
        "rayo": 5,
        "hielo": 30,
        "dragon": 0,
        "aturdido": 0
      }
    },
    "Rear Right Arm": {
      "normal": {
        "corte": 50,
        "impacto": 45,
        "proyectil": 30,
        "fuego": 5,
        "agua": 3,
        "rayo": 5,
        "hielo": 25,
        "dragon": 0,
        "aturdido": 0
      },
      "herida": {
        "corte": 60,
        "impacto": 60,
        "proyectil": 55,
        "fuego": 5,
        "agua": 3,
        "rayo": 5,
        "hielo": 30,
        "dragon": 0,
        "aturdido": 0
      }
    },
    "Mouth": {
      "normal": {
        "corte": 100,
        "impacto": 100,
        "proyectil": 70,
        "fuego": 15,
        "agua": 10,
        "rayo": 15,
        "hielo": 45,
        "dragon": 0,
        "aturdido": 0
      }
    }
  },
  "yian-kut-ku": {
    "Head": {
      "normal": {
        "corte": 56,
        "impacto": 75,
        "proyectil": 80,
        "fuego": 10,
        "agua": 15,
        "rayo": 20,
        "hielo": 30,
        "dragon": 0,
        "aturdido": 100
      },
      "herida": {
        "corte": 66,
        "impacto": 85,
        "proyectil": 90,
        "fuego": 10,
        "agua": 15,
        "rayo": 20,
        "hielo": 30,
        "dragon": 0,
        "aturdido": 100
      },
      "punto_debil": {
        "corte": 70,
        "impacto": 85,
        "proyectil": 90,
        "fuego": 10,
        "agua": 15,
        "rayo": 20,
        "hielo": 30,
        "dragon": 0,
        "aturdido": 0
      }
    },
    "Neck": {
      "normal": {
        "corte": 42,
        "impacto": 42,
        "proyectil": 45,
        "fuego": 10,
        "agua": 25,
        "rayo": 30,
        "hielo": 40,
        "dragon": 20,
        "aturdido": 0
      }
    },
    "Torso": {
      "normal": {
        "corte": 66,
        "impacto": 63,
        "proyectil": 60,
        "fuego": 5,
        "agua": 15,
        "rayo": 15,
        "hielo": 20,
        "dragon": 0,
        "aturdido": 0
      },
      "herida": {
        "corte": 76,
        "impacto": 73,
        "proyectil": 70,
        "fuego": 5,
        "agua": 15,
        "rayo": 15,
        "hielo": 20,
        "dragon": 0,
        "aturdido": 0
      }
    },
    "Tail": {
      "normal": {
        "corte": 60,
        "impacto": 56,
        "proyectil": 50,
        "fuego": 5,
        "agua": 15,
        "rayo": 15,
        "hielo": 20,
        "dragon": 0,
        "aturdido": 0
      },
      "herida": {
        "corte": 76,
        "impacto": 73,
        "proyectil": 70,
        "fuego": 5,
        "agua": 15,
        "rayo": 15,
        "hielo": 20,
        "dragon": 0,
        "aturdido": 0
      }
    },
    "Right Leg": {
      "normal": {
        "corte": 28,
        "impacto": 28,
        "proyectil": 30,
        "fuego": 5,
        "agua": 5,
        "rayo": 5,
        "hielo": 5,
        "dragon": 0,
        "aturdido": 0
      },
      "herida": {
        "corte": 76,
        "impacto": 73,
        "proyectil": 70,
        "fuego": 5,
        "agua": 15,
        "rayo": 15,
        "hielo": 20,
        "dragon": 0,
        "aturdido": 0
      }
    },
    "Left Leg": {
      "normal": {
        "corte": 28,
        "impacto": 28,
        "proyectil": 30,
        "fuego": 5,
        "agua": 5,
        "rayo": 5,
        "hielo": 5,
        "dragon": 0,
        "aturdido": 0
      },
      "herida": {
        "corte": 76,
        "impacto": 73,
        "proyectil": 70,
        "fuego": 5,
        "agua": 15,
        "rayo": 15,
        "hielo": 20,
        "dragon": 0,
        "aturdido": 0
      }
    },
    "Right Wing": {
      "normal": {
        "corte": 80,
        "impacto": 42,
        "proyectil": 70,
        "fuego": 5,
        "agua": 10,
        "rayo": 25,
        "hielo": 15,
        "dragon": 0,
        "aturdido": 0
      },
      "herida": {
        "corte": 90,
        "impacto": 52,
        "proyectil": 80,
        "fuego": 5,
        "agua": 10,
        "rayo": 25,
        "hielo": 15,
        "dragon": 0,
        "aturdido": 0
      }
    },
    "Left Wing": {
      "normal": {
        "corte": 80,
        "impacto": 42,
        "proyectil": 70,
        "fuego": 5,
        "agua": 10,
        "rayo": 25,
        "hielo": 15,
        "dragon": 0,
        "aturdido": 0
      },
      "herida": {
        "corte": 90,
        "impacto": 52,
        "proyectil": 80,
        "fuego": 5,
        "agua": 10,
        "rayo": 25,
        "hielo": 15,
        "dragon": 0,
        "aturdido": 0
      }
    }
  },
  "zoh-shia": {
    "Head (Crystalized)": {
      "normal": {
        "corte": 40,
        "impacto": 45,
        "proyectil": 45,
        "fuego": 10,
        "agua": 5,
        "rayo": 5,
        "hielo": 5,
        "dragon": 15,
        "aturdido": 100
      }
    },
    "L Wingarm (Crystalized)": {
      "normal": {
        "corte": 40,
        "impacto": 40,
        "proyectil": 10,
        "fuego": 10,
        "agua": 5,
        "rayo": 5,
        "hielo": 5,
        "dragon": 15,
        "aturdido": 0
      }
    },
    "R Wingarm (Crystalized)": {
      "normal": {
        "corte": 40,
        "impacto": 40,
        "proyectil": 10,
        "fuego": 10,
        "agua": 5,
        "rayo": 5,
        "hielo": 5,
        "dragon": 15,
        "aturdido": 0
      }
    },
    "Head": {
      "normal": {
        "corte": 60,
        "impacto": 65,
        "proyectil": 60,
        "fuego": 10,
        "agua": 5,
        "rayo": 5,
        "hielo": 5,
        "dragon": 20,
        "aturdido": 100
      },
      "herida": {
        "corte": 70,
        "impacto": 75,
        "proyectil": 70,
        "fuego": 10,
        "agua": 5,
        "rayo": 5,
        "hielo": 5,
        "dragon": 20,
        "aturdido": 100
      }
    },
    "Left Wingarm": {
      "normal": {
        "corte": 60,
        "impacto": 60,
        "proyectil": 50,
        "fuego": 5,
        "agua": 5,
        "rayo": 5,
        "hielo": 5,
        "dragon": 10,
        "aturdido": 0
      },
      "herida": {
        "corte": 90,
        "impacto": 90,
        "proyectil": 65,
        "fuego": 10,
        "agua": 5,
        "rayo": 5,
        "hielo": 5,
        "dragon": 20,
        "aturdido": 0
      },
      "punto_debil": {
        "corte": 100,
        "impacto": 100,
        "proyectil": 100,
        "fuego": 10,
        "agua": 5,
        "rayo": 5,
        "hielo": 5,
        "dragon": 20,
        "aturdido": 0
      }
    },
    "Right Wingarm": {
      "normal": {
        "corte": 60,
        "impacto": 60,
        "proyectil": 50,
        "fuego": 5,
        "agua": 5,
        "rayo": 5,
        "hielo": 5,
        "dragon": 10,
        "aturdido": 0
      },
      "herida": {
        "corte": 90,
        "impacto": 90,
        "proyectil": 65,
        "fuego": 10,
        "agua": 5,
        "rayo": 5,
        "hielo": 5,
        "dragon": 20,
        "aturdido": 0
      },
      "punto_debil": {
        "corte": 100,
        "impacto": 100,
        "proyectil": 100,
        "fuego": 10,
        "agua": 5,
        "rayo": 5,
        "hielo": 5,
        "dragon": 20,
        "aturdido": 0
      }
    },
    "Left Foreleg": {
      "normal": {
        "corte": 50,
        "impacto": 50,
        "proyectil": 50,
        "fuego": 15,
        "agua": 5,
        "rayo": 5,
        "hielo": 10,
        "dragon": 20,
        "aturdido": 0
      },
      "herida": {
        "corte": 60,
        "impacto": 60,
        "proyectil": 60,
        "fuego": 15,
        "agua": 5,
        "rayo": 5,
        "hielo": 10,
        "dragon": 30,
        "aturdido": 0
      }
    },
    "Right Foreleg": {
      "normal": {
        "corte": 50,
        "impacto": 50,
        "proyectil": 50,
        "fuego": 15,
        "agua": 5,
        "rayo": 5,
        "hielo": 10,
        "dragon": 20,
        "aturdido": 0
      },
      "herida": {
        "corte": 60,
        "impacto": 60,
        "proyectil": 60,
        "fuego": 15,
        "agua": 5,
        "rayo": 5,
        "hielo": 10,
        "dragon": 30,
        "aturdido": 0
      }
    },
    "Left Hind Leg": {
      "normal": {
        "corte": 40,
        "impacto": 40,
        "proyectil": 40,
        "fuego": 10,
        "agua": 5,
        "rayo": 5,
        "hielo": 5,
        "dragon": 20,
        "aturdido": 0
      },
      "herida": {
        "corte": 60,
        "impacto": 60,
        "proyectil": 60,
        "fuego": 15,
        "agua": 5,
        "rayo": 5,
        "hielo": 10,
        "dragon": 30,
        "aturdido": 0
      }
    },
    "Right Hind Leg": {
      "normal": {
        "corte": 40,
        "impacto": 40,
        "proyectil": 40,
        "fuego": 10,
        "agua": 5,
        "rayo": 5,
        "hielo": 5,
        "dragon": 20,
        "aturdido": 0
      },
      "herida": {
        "corte": 60,
        "impacto": 60,
        "proyectil": 60,
        "fuego": 15,
        "agua": 5,
        "rayo": 5,
        "hielo": 10,
        "dragon": 30,
        "aturdido": 0
      }
    },
    "Neck": {
      "normal": {
        "corte": 35,
        "impacto": 35,
        "proyectil": 45,
        "fuego": 15,
        "agua": 5,
        "rayo": 5,
        "hielo": 10,
        "dragon": 30,
        "aturdido": 0
      },
      "herida": {
        "corte": 60,
        "impacto": 60,
        "proyectil": 60,
        "fuego": 15,
        "agua": 5,
        "rayo": 5,
        "hielo": 10,
        "dragon": 30,
        "aturdido": 0
      }
    },
    "Torso": {
      "normal": {
        "corte": 30,
        "impacto": 30,
        "proyectil": 10,
        "fuego": 10,
        "agua": 5,
        "rayo": 5,
        "hielo": 5,
        "dragon": 20,
        "aturdido": 0
      },
      "herida": {
        "corte": 60,
        "impacto": 60,
        "proyectil": 60,
        "fuego": 15,
        "agua": 5,
        "rayo": 5,
        "hielo": 10,
        "dragon": 30,
        "aturdido": 0
      }
    },
    "Tail": {
      "normal": {
        "corte": 45,
        "impacto": 45,
        "proyectil": 45,
        "fuego": 10,
        "agua": 5,
        "rayo": 5,
        "hielo": 5,
        "dragon": 30,
        "aturdido": 0
      },
      "herida": {
        "corte": 60,
        "impacto": 60,
        "proyectil": 60,
        "fuego": 15,
        "agua": 5,
        "rayo": 5,
        "hielo": 10,
        "dragon": 30,
        "aturdido": 0
      }
    }
  }
};
