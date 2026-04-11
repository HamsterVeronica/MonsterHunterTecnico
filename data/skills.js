const SKILLS_DB = [
  {
    "id": 1,
    "name": "Antidraco",
    "kind": "armor",
    "ranks": [
      {
        "level": 1,
        "description": "Resistencia al draco +6."
      },
      {
        "level": 2,
        "description": "Resistencia al draco +12."
      },
      {
        "level": 3,
        "description": "Resistencia a draco +20. Defensa +10."
      }
    ]
  },
  {
    "id": 2,
    "name": "Disparo abanico/potente",
    "kind": "weapon",
    "ranks": [
      {
        "level": 1,
        "description": "Aumenta un poco la potencia de la munición y flechas indicados."
      }
    ]
  },
  {
    "id": 3,
    "name": "Ojo crítico",
    "kind": "weapon",
    "ranks": [
      {
        "level": 1,
        "description": "Afinidad +4 %."
      },
      {
        "level": 2,
        "description": "Afinidad +8 %."
      },
      {
        "level": 3,
        "description": "Afinidad +12 %."
      },
      {
        "level": 4,
        "description": "Afinidad +16 %."
      },
      {
        "level": 5,
        "description": "Afinidad +20 %."
      }
    ]
  },
  {
    "id": 4,
    "name": "Protección de Guardián",
    "kind": "group",
    "ranks": [
      {
        "level": 1,
        "description": "Cuando estés en las Ruinas de Wyveria, reduce el daño elemental y único."
      }
    ]
  },
  {
    "id": 5,
    "name": "Añade nitro",
    "kind": "weapon",
    "ranks": [
      {
        "level": 1,
        "description": "Permite aplicar viales de nitro."
      }
    ]
  },
  {
    "id": 6,
    "name": "Disparo normal",
    "kind": "weapon",
    "ranks": [
      {
        "level": 1,
        "description": "Aumenta un poco la potencia de la munición y flechas indicados."
      }
    ]
  },
  {
    "id": 7,
    "name": "Mutación rápida",
    "kind": "weapon",
    "ranks": [
      {
        "level": 1,
        "description": "Velocidad +10 %."
      },
      {
        "level": 2,
        "description": "Velocidad +20 %. Potencia de ataque con mutación +10 %."
      },
      {
        "level": 3,
        "description": "Velocidad +30 %. Potencia de ataque con mutación +20 %."
      }
    ]
  },
  {
    "id": 8,
    "name": "Pena inmediata",
    "kind": "weapon",
    "ranks": [
      {
        "level": 1,
        "description": "Los ataques al desenfundar causan una pequeña cantidad de daño por aturdimiento y ganan +3 de ataque."
      },
      {
        "level": 2,
        "description": "Los ataques al desenfundar causan una cantidad mediana de daño por aturdimiento y ganan +5 de ataque."
      },
      {
        "level": 3,
        "description": "Los ataques al desenfundar causan una gran cantidad de daño por aturdimiento y ganan +7 de ataque."
      }
    ]
  },
  {
    "id": 9,
    "name": "Ataque paralizante",
    "kind": "weapon",
    "ranks": [
      {
        "level": 1,
        "description": "Acumulación de parálisis +5 %. Bonus +10."
      },
      {
        "level": 2,
        "description": "Acumulación de parálisis +10 %. Bonus +20."
      },
      {
        "level": 3,
        "description": "Acumulación de parálisis +20 %. Bonus +50."
      }
    ]
  },
  {
    "id": 10,
    "name": "Favor del señor",
    "kind": "group",
    "ranks": [
      {
        "level": 1,
        "description": "Potencia el ataque un tiempo al usar efectos tales como efectos de melodías que afecten a compañeros cercanos."
      }
    ]
  },
  {
    "id": 11,
    "name": "Afán de Anjanath Fulgúreo",
    "kind": "set",
    "ranks": [
      {
        "level": 1,
        "description": "Da una barra de resistencia adicional."
      },
      {
        "level": 2,
        "description": "Da una barra de resistencia larga adicional."
      }
    ]
  },
  {
    "id": 12,
    "name": "Ataque venenoso",
    "kind": "weapon",
    "ranks": [
      {
        "level": 1,
        "description": "Acumulación de veneno +5 %. Bonus +10."
      },
      {
        "level": 2,
        "description": "Acumulación de veneno +10 %. Bonus +20."
      },
      {
        "level": 3,
        "description": "Acumulación de veneno +20 %. Bonus +50."
      }
    ]
  },
  {
    "id": 13,
    "name": "Coalescencia",
    "kind": "armor",
    "ranks": [
      {
        "level": 1,
        "description": "Mientras esté activo, aumenta un poco el ataque elemental y la intensidad de los estados alterados que infliges."
      },
      {
        "level": 2,
        "description": "Mientras esté activo, aumenta el ataque elemental y la intensidad de los estados alterados que infliges."
      },
      {
        "level": 3,
        "description": "Mientras esté activo, aumenta mucho el ataque elemental y la intensidad de los estados alterados que infliges."
      }
    ]
  },
  {
    "id": 14,
    "name": "Constitución",
    "kind": "armor",
    "ranks": [
      {
        "level": 1,
        "description": "Reduce el consumo fijo de resistencia en un 10 %."
      },
      {
        "level": 2,
        "description": "Reduce el consumo fijo de resistencia en un 20 %."
      },
      {
        "level": 3,
        "description": "Reduce el consumo fijo de resistencia en un 30 %."
      },
      {
        "level": 4,
        "description": "Reduce el consumo fijo de resistencia en un 40 %."
      },
      {
        "level": 5,
        "description": "Reduce el consumo fijo de resistencia en un 50 %."
      }
    ]
  },
  {
    "id": 15,
    "name": "Duración de objetos",
    "kind": "armor",
    "ranks": [
      {
        "level": 1,
        "description": "Duración del efecto de objetos +10 %."
      },
      {
        "level": 2,
        "description": "Duración del efecto de objetos +25 %."
      },
      {
        "level": 3,
        "description": "Duración del efecto de objetos +50 %."
      }
    ]
  },
  {
    "id": 16,
    "name": "Escudo",
    "kind": "weapon",
    "ranks": [
      {
        "level": 1,
        "description": "Reduce el daño recibido en un 10 %, y en un 20 % adicional si se dan ciertas condiciones."
      },
      {
        "level": 2,
        "description": "Reduce el daño recibido en un 20 %, y en un 30 % adicional si se dan ciertas condiciones."
      },
      {
        "level": 3,
        "description": "Reduce el daño recibido en un 30 %, y en un 50 % adicional si se dan ciertas condiciones."
      }
    ]
  },
  {
    "id": 17,
    "name": "Capas de escamas",
    "kind": "group",
    "ranks": [
      {
        "level": 1,
        "description": "Reduce temporalmente el consumo de resistencia cuando la salud esté al 40% o menos."
      }
    ]
  },
  {
    "id": 18,
    "name": "Antivirus",
    "kind": "armor",
    "ranks": [
      {
        "level": 1,
        "description": "Al contraer la cólera, acelera un poco el consumo de la barra de infección. Afinidad +3 % si te curas."
      },
      {
        "level": 2,
        "description": "Al contraer la cólera, acelera el consumo de la barra de infección. Afinidad +6 % si te curas."
      },
      {
        "level": 3,
        "description": "Al contraer la cólera, acelera mucho el consumo de la barra de infección. Afinidad +10 % si te curas."
      }
    ]
  },
  {
    "id": 19,
    "name": "Cuero flexible",
    "kind": "group",
    "ranks": [
      {
        "level": 1,
        "description": "Aumenta la velocidad de recolección y protege contra los empujes mientras recolectas o despiezas."
      }
    ]
  },
  {
    "id": 20,
    "name": "Sabiduría impartida",
    "kind": "group",
    "ranks": [
      {
        "level": 1,
        "description": "Aumenta la probabilidad de encontrar puntos de recolección de recursos raros."
      }
    ]
  },
  {
    "id": 21,
    "name": "Veneno extendido",
    "kind": "weapon",
    "ranks": [
      {
        "level": 1,
        "description": "Prolonga un 20 % la duración del veneno que inflijas."
      }
    ]
  },
  {
    "id": 22,
    "name": "Bonus críticos",
    "kind": "weapon",
    "ranks": [
      {
        "level": 1,
        "description": "Los críticos infligen un 28 % más de daño que un ataque normal."
      },
      {
        "level": 2,
        "description": "Los críticos infligen un 31 % más de daño que un ataque normal."
      },
      {
        "level": 3,
        "description": "Los críticos infligen un 34 % más de daño que un ataque normal."
      },
      {
        "level": 4,
        "description": "Los críticos infligen un 37 % más de daño que un ataque normal."
      },
      {
        "level": 5,
        "description": "Los críticos infligen un 40 % más de daño que un ataque normal."
      }
    ]
  },
  {
    "id": 23,
    "name": "Andanada rápida",
    "kind": "weapon",
    "ranks": [
      {
        "level": 1,
        "description": "Potencia de andanadas +5 %."
      }
    ]
  },
  {
    "id": 24,
    "name": "Maestro de cargas",
    "kind": "weapon",
    "ranks": [
      {
        "level": 1,
        "description": "Aumenta un poco el ataque elemental y los efectos de estado para los ataques cargados."
      },
      {
        "level": 2,
        "description": "Aumenta el ataque elemental y los efectos de estado para los ataques cargados."
      },
      {
        "level": 3,
        "description": "Aumenta mucho el ataque elemental y los efectos de estado para los ataques cargados."
      }
    ]
  },
  {
    "id": 25,
    "name": "Energía de Xu Wu",
    "kind": "set",
    "ranks": [
      {
        "level": 1,
        "description": "Ataque +15 temporalmente tras haber comido un filete al punto o similares."
      },
      {
        "level": 2,
        "description": "Ataque +30 temporalmente tras haber comido un filete al punto o similares."
      }
    ]
  },
  {
    "id": 26,
    "name": "Salud de Arkveld Guardián",
    "kind": "set",
    "ranks": [
      {
        "level": 1,
        "description": "Restablece bastante salud cuando rematas la herida de un monstruo grande."
      },
      {
        "level": 2,
        "description": "Restablece salud cuando rematas la herida de un monstruo grande."
      }
    ]
  },
  {
    "id": 27,
    "name": "Pulso de Guardián",
    "kind": "group",
    "ranks": [
      {
        "level": 1,
        "description": "Aumenta la velocidad de recuperación de resistencia y la parte roja de la barra cuando estás cerca de petrowylact."
      }
    ]
  },
  {
    "id": 28,
    "name": "Mejora de salto",
    "kind": "armor",
    "ranks": [
      {
        "level": 1,
        "description": "Activa el efecto de la habilidad del mismo nombre."
      }
    ]
  },
  {
    "id": 29,
    "name": "As de la cornamusa",
    "kind": "weapon",
    "ranks": [
      {
        "level": 1,
        "description": "Prolonga la duración de efectos de melodías y aumenta la probabilidad de curar más con las melodías curativas."
      },
      {
        "level": 2,
        "description": "Prolonga mucho la duración de los efectos de melodía."
      }
    ]
  },
  {
    "id": 30,
    "name": "Recuperación",
    "kind": "armor",
    "ranks": [
      {
        "level": 1,
        "description": "Bonifica un poco la recuperación."
      },
      {
        "level": 2,
        "description": "Bonifica bastante la recuperación."
      },
      {
        "level": 3,
        "description": "Bonifica mucho la recuperación."
      }
    ]
  },
  {
    "id": 31,
    "name": "Recuperación rápida",
    "kind": "armor",
    "ranks": [
      {
        "level": 1,
        "description": "Duplica la velocidad a la que se cura la parte de daño recuperable."
      },
      {
        "level": 2,
        "description": "Triplica la velocidad a la que se cura la parte de daño recuperable."
      },
      {
        "level": 3,
        "description": "Cuadruplica la velocidad a la que se cura la parte de daño recuperable."
      }
    ]
  },
  {
    "id": 32,
    "name": "Envainado veloz",
    "kind": "armor",
    "ranks": [
      {
        "level": 1,
        "description": "Aumenta un poco la velocidad al envainar."
      },
      {
        "level": 2,
        "description": "Aumenta la velocidad al envainar."
      },
      {
        "level": 3,
        "description": "Aumenta mucho la velocidad al envainar."
      }
    ]
  },
  {
    "id": 33,
    "name": "Hambre de Arkveld",
    "kind": "set",
    "ranks": [
      {
        "level": 1,
        "description": "Regenera pequeñas cantidades de salud si atacas continuamente a un monstruo. La salud ganada depende del arma."
      },
      {
        "level": 2,
        "description": "Regenera tu salud mientras atacas continuamente a un monstruo. La salud ganada depende del arma."
      }
    ]
  },
  {
    "id": 34,
    "name": "Oración de floradanza",
    "kind": "set",
    "ranks": [
      {
        "level": 1,
        "description": "Durante la floradanza, añade objetos especiales a las recompensas de misión. (Sin efecto si te unes a media misión)."
      },
      {
        "level": 2,
        "description": "Durante la floradanza, añade objetos especiales para las recompensas de misión y aumenta bastante el ataque y la defensa."
      }
    ]
  },
  {
    "id": 35,
    "name": "Antiviento",
    "kind": "armor",
    "ranks": [
      {
        "level": 1,
        "description": "Anula las ráfagas de viento menores y reduce a la mitad el efecto de las ráfagas mayores."
      },
      {
        "level": 2,
        "description": "Anula las ráfagas de viento menores y mayores, y reduce a la mitad el efecto de las ráfagas de dragón."
      },
      {
        "level": 3,
        "description": "Anula todos los tipos de ráfagas de viento."
      }
    ]
  },
  {
    "id": 36,
    "name": "As del aturdimiento",
    "kind": "weapon",
    "ranks": [
      {
        "level": 1,
        "description": "Posibilidad de aturdir +20 %."
      },
      {
        "level": 2,
        "description": "Posibilidad de aturdir +30 %."
      },
      {
        "level": 3,
        "description": "Posibilidad de aturdir +40 %."
      }
    ]
  },
  {
    "id": 37,
    "name": "Bombardero",
    "kind": "armor",
    "ranks": [
      {
        "level": 1,
        "description": "Potencia explosiva +10 %."
      },
      {
        "level": 2,
        "description": "Potencia explosiva +20 %."
      },
      {
        "level": 3,
        "description": "Potencia explosiva +30 %."
      }
    ]
  },
  {
    "id": 38,
    "name": "Desuello",
    "kind": "armor",
    "ranks": [
      {
        "level": 1,
        "description": "Hace que sea un poco más fácil infligir heridas. También inflige daño no elemental adicional."
      },
      {
        "level": 2,
        "description": "Hace que sea bastante más fácil infligir heridas. También inflige un poco más de daño no elemental adicional."
      },
      {
        "level": 3,
        "description": "Hace que sea más fácil infligir heridas. También inflige bastante más daño no elemental adicional."
      },
      {
        "level": 4,
        "description": "Hace que sea mucho más fácil infligir heridas. También inflige más daño no elemental adicional."
      },
      {
        "level": 5,
        "description": "Hace que sea bastante más fácil infligir heridas. También inflige más daño no elemental adicional."
      }
    ]
  },
  {
    "id": 39,
    "name": "Filo alisado",
    "kind": "weapon",
    "ranks": [
      {
        "level": 1,
        "description": "Afinidad +3 % con mojado y +7 % con plaga de burbujas."
      },
      {
        "level": 2,
        "description": "Afinidad +6 % con mojado y +14 % con plaga de burbujas."
      },
      {
        "level": 3,
        "description": "Afinidad +9 % con mojado y +21 % con plaga de burbujas."
      }
    ]
  },
  {
    "id": 40,
    "name": "Ataque de nitro",
    "kind": "weapon",
    "ranks": [
      {
        "level": 1,
        "description": "Acumulación de nitro +5 %. Bonus +10."
      },
      {
        "level": 2,
        "description": "Acumulación de nitro +10 %. Bonus +20."
      },
      {
        "level": 3,
        "description": "Acumulación de nitro +20 %. Bonus +50."
      }
    ]
  },
  {
    "id": 41,
    "name": "Ataque de draco",
    "kind": "weapon",
    "ranks": [
      {
        "level": 1,
        "description": "Ataque de draco +40."
      },
      {
        "level": 2,
        "description": "Ataque de draco +10 %. Bonus +50."
      },
      {
        "level": 3,
        "description": "Ataque de draco +20 %. Bonus +60."
      }
    ]
  },
  {
    "id": 42,
    "name": "Experto en trepar",
    "kind": "armor",
    "ranks": [
      {
        "level": 1,
        "description": "Reduce el gasto de resistencia mientras trepas un 50 %."
      }
    ]
  },
  {
    "id": 43,
    "name": "Corredor de fondo",
    "kind": "armor",
    "ranks": [
      {
        "level": 1,
        "description": "Reduce el consumo gradual de resistencia en un 15 %."
      },
      {
        "level": 2,
        "description": "Reduce el consumo gradual de resistencia en un 30 %."
      },
      {
        "level": 3,
        "description": "Reduce el consumo gradual de resistencia en un 50 %."
      }
    ]
  },
  {
    "id": 44,
    "name": "Añade parálisis",
    "kind": "weapon",
    "ranks": [
      {
        "level": 1,
        "description": "Permite aplicar viales paralizantes."
      }
    ]
  },
  {
    "id": 45,
    "name": "Amortiguador",
    "kind": "armor",
    "ranks": [
      {
        "level": 1,
        "description": "Activa el efecto de la habilidad del mismo nombre."
      }
    ]
  },
  {
    "id": 46,
    "name": "Antitemblores",
    "kind": "armor",
    "ranks": [
      {
        "level": 1,
        "description": "Anula los temblores de tierra muy leves y reduce a la mitad los efectos de los temblores de tierra leves."
      },
      {
        "level": 2,
        "description": "Anula hasta los temblores de tierra leves y reduce mucho el efecto de los temblores mayores."
      },
      {
        "level": 3,
        "description": "Anula todos los temblores de tierra."
      }
    ]
  },
  {
    "id": 47,
    "name": "Artillería",
    "kind": "weapon",
    "ranks": [
      {
        "level": 1,
        "description": "Potencia bastante cada ataque y la velocidad de disparo del fuego de wyvern. Disparo de fuego +30."
      },
      {
        "level": 2,
        "description": "Potencia cada ataque y la velocidad de disparo del fuego de wyvern. Disparo de fuego +60."
      },
      {
        "level": 3,
        "description": "Potencia mucho cada ataque y la velocidad de disparo del fuego de wyvern. Disparo de fuego +90."
      }
    ]
  },
  {
    "id": 48,
    "name": "Experto en supervivencia",
    "kind": "armor",
    "ranks": [
      {
        "level": 1,
        "description": "Restablece 50 de salud."
      },
      {
        "level": 2,
        "description": "Restablece 80 de salud."
      },
      {
        "level": 3,
        "description": "Restablece 100 de salud."
      }
    ]
  },
  {
    "id": 49,
    "name": "Antiplagas",
    "kind": "armor",
    "ranks": [
      {
        "level": 1,
        "description": "Reduce la duración de todas las plagas elementales un 50 %."
      },
      {
        "level": 2,
        "description": "Reduce la duración de todas las plagas elementales un 75 %."
      },
      {
        "level": 3,
        "description": "Anula todas las plagas elementales."
      }
    ]
  },
  {
    "id": 50,
    "name": "Ataque de fuego",
    "kind": "weapon",
    "ranks": [
      {
        "level": 1,
        "description": "Ataque de fuego +40."
      },
      {
        "level": 2,
        "description": "Ataque de fuego +10 %. Bonus +50."
      },
      {
        "level": 3,
        "description": "Ataque de fuego +20 %. Bonus +60."
      }
    ]
  },
  {
    "id": 51,
    "name": "Pulso de Zoh Shia",
    "kind": "set",
    "ranks": [
      {
        "level": 1,
        "description": "Permite que la barra de salud se regenere lentamente hasta el máximo, aunque no tenga una parte en rojo."
      },
      {
        "level": 2,
        "description": "Permite que la barra de salud se regenere hasta el máximo, aunque no tenga una parte en rojo."
      }
    ]
  },
  {
    "id": 52,
    "name": "Micología",
    "kind": "armor",
    "ranks": [
      {
        "level": 1,
        "description": "Permite digerir setas azules y hongos."
      },
      {
        "level": 2,
        "description": "Además de lo anterior, permite digerir nitrosetas y paralisetas."
      },
      {
        "level": 3,
        "description": "Además de lo anterior, permite digerir mandrágora, mancha del diablo y setas excitantes."
      }
    ]
  },
  {
    "id": 53,
    "name": "Balística",
    "kind": "weapon",
    "ranks": [
      {
        "level": 1,
        "description": "Aumenta un poco el alcance."
      },
      {
        "level": 2,
        "description": "Aumenta el alcance."
      },
      {
        "level": 3,
        "description": "Amplía mucho el rango crítico, y aumenta la potencia de los ataques dentro del rango crítico."
      }
    ]
  },
  {
    "id": 54,
    "name": "Protección de Gravios",
    "kind": "set",
    "ranks": [
      {
        "level": 1,
        "description": "Reduce el daño que recibes un 20 % cuando tienes la salud al completo."
      },
      {
        "level": 2,
        "description": "Reduce el daño que recibes un 35 % cuando tienes la salud al completo."
      }
    ]
  },
  {
    "id": 55,
    "name": "Antihedor",
    "kind": "armor",
    "ranks": [
      {
        "level": 1,
        "description": "Reduce la duración del hedor un 50 %."
      },
      {
        "level": 2,
        "description": "Protege contra el hedor."
      }
    ]
  },
  {
    "id": 56,
    "name": "Poder de Mizutsune",
    "kind": "set",
    "ranks": [
      {
        "level": 1,
        "description": "Evita la plaga de burbujas mayor, y te da plaga de burbujas menor tras esquivar varias veces."
      },
      {
        "level": 2,
        "description": "Además de los efectos anteriores, mejora las esquivas mientras te afecte una plaga de burbujas menor."
      }
    ]
  },
  {
    "id": 57,
    "name": "Punto débil",
    "kind": "armor",
    "ranks": [
      {
        "level": 1,
        "description": "Los ataques en puntos débiles ganan afinidad +5 %, más un 3 % adicional sobre heridas."
      },
      {
        "level": 2,
        "description": "Los ataques en puntos débiles ganan afinidad +10 %, más un 5 % adicional sobre heridas."
      },
      {
        "level": 3,
        "description": "Los ataques en puntos débiles ganan afinidad +15 %, más un 10 % adicional sobre heridas."
      },
      {
        "level": 4,
        "description": "Los ataques en puntos débiles tienen afinidad +20 %, más un 15 % adicional sobre heridas."
      },
      {
        "level": 5,
        "description": "Los ataques en puntos débiles tienen afinidad +30 %, más un 20 % adicional sobre heridas."
      }
    ]
  },
  {
    "id": 58,
    "name": "Aguante",
    "kind": "armor",
    "ranks": [
      {
        "level": 1,
        "description": "Velocidad de recuperación de resistencia +10 %."
      },
      {
        "level": 2,
        "description": "Velocidad de recuperación de resistencia +30 %."
      },
      {
        "level": 3,
        "description": "Velocidad de recuperación de resistencia +50 %."
      }
    ]
  },
  {
    "id": 59,
    "name": "Bloqueo mejorado",
    "kind": "weapon",
    "ranks": [
      {
        "level": 1,
        "description": "Reduce muy ligeramente el impacto de los ataques. Disminuye el consumo de resistencia en un 15 %."
      },
      {
        "level": 2,
        "description": "Reduce el impacto de los ataques. Disminuye el consumo de resistencia en un 30 %."
      },
      {
        "level": 3,
        "description": "Reduce mucho el impacto de los ataques. Disminuye el consumo de resistencia en un 50 %."
      }
    ]
  },
  {
    "id": 60,
    "name": "Carga veloz",
    "kind": "weapon",
    "ranks": [
      {
        "level": 1,
        "description": "Aumenta un poco la velocidad de carga del medidor y reduce el tiempo de carga en un 5 %."
      },
      {
        "level": 2,
        "description": "Aumenta bastante la velocidad de carga del medidor y reduce el tiempo de carga en un 10 %."
      },
      {
        "level": 3,
        "description": "Aumenta la velocidad de carga del medidor y reduce el tiempo de carga en un 15 %."
      }
    ]
  },
  {
    "id": 61,
    "name": "Mejora al deslumbrar",
    "kind": "armor",
    "ranks": [
      {
        "level": 1,
        "description": "Mejora la efectividad de los ataques y objetos que produzcan destellos."
      }
    ]
  },
  {
    "id": 62,
    "name": "Rebelión de Jin Dahaad",
    "kind": "set",
    "ranks": [
      {
        "level": 1,
        "description": "Aumenta el ataque tras recuperarte de los estados enmarañado, plaga de escarcha, inmovilización o un forcejeo."
      },
      {
        "level": 2,
        "description": "Aumenta mucho el ataque tras recuperarte de los estados enmarañado, plaga de escarcha, inmovilización o un forcejeo."
      }
    ]
  },
  {
    "id": 63,
    "name": "Movilidad por agua/fango",
    "kind": "armor",
    "ranks": [
      {
        "level": 1,
        "description": "Anula el efecto de corrientes fangosas y la ralentización por agua/fango. Reduce la ralentización por aceite de hueso."
      },
      {
        "level": 2,
        "description": "Además de lo anterior, también anula los efectos de las olas."
      }
    ]
  },
  {
    "id": 64,
    "name": "Antisueño",
    "kind": "armor",
    "ranks": [
      {
        "level": 1,
        "description": "Reduce la duración del sueño un 30 %."
      },
      {
        "level": 2,
        "description": "Reduce la duración del sueño un 60 %."
      },
      {
        "level": 3,
        "description": "Protege contra el sueño."
      }
    ]
  },
  {
    "id": 65,
    "name": "Añade fatiga",
    "kind": "weapon",
    "ranks": [
      {
        "level": 1,
        "description": "Permite aplicar viales de fatiga."
      }
    ]
  },
  {
    "id": 66,
    "name": "Bloqueo agresivo",
    "kind": "weapon",
    "ranks": [
      {
        "level": 1,
        "description": "Ataque +5 % mientras esté activo."
      },
      {
        "level": 2,
        "description": "Ataque +10 % mientras esté activo."
      },
      {
        "level": 3,
        "description": "Ataque +15 % mientras esté activo."
      }
    ]
  },
  {
    "id": 67,
    "name": "Emboscada",
    "kind": "armor",
    "ranks": [
      {
        "level": 1,
        "description": "Ataque +5 % mientras esté activo."
      },
      {
        "level": 2,
        "description": "Ataque +10 % mientras esté activo."
      },
      {
        "level": 3,
        "description": "Ataque +15 % mientras esté activo."
      }
    ]
  },
  {
    "id": 68,
    "name": "Estado crítico",
    "kind": "weapon",
    "ranks": [
      {
        "level": 1,
        "description": "Aumenta un poco los efectos de estados alterados cuando son resultado de un crítico."
      },
      {
        "level": 2,
        "description": "Aumenta el efecto de los estados alterados cuando infliges un golpe crítico."
      },
      {
        "level": 3,
        "description": "Aumenta mucho el efecto de los estados alterados cuando infliges un golpe crítico."
      }
    ]
  },
  {
    "id": 69,
    "name": "Bonus tiro especial",
    "kind": "weapon",
    "ranks": [
      {
        "level": 1,
        "description": "Aumenta bastante la potencia de la munición y flechas indicados."
      },
      {
        "level": 2,
        "description": "Aumenta la potencia de la munición y flechas especificados."
      }
    ]
  },
  {
    "id": 70,
    "name": "Poder Doshaguma",
    "kind": "set",
    "ranks": [
      {
        "level": 1,
        "description": "Potencia el ataque +10 por un tiempo tras un forcejeo o tras un ataque interceptor con éxito."
      },
      {
        "level": 2,
        "description": "Potencia el ataque +25 por un tiempo tras un forcejeo o tras un ataque interceptor con éxito."
      }
    ]
  },
  {
    "id": 71,
    "name": "Fulgor de Rathalos",
    "kind": "set",
    "ranks": [
      {
        "level": 1,
        "description": "Da cierta probabilidad de infligir daño adicional de fuego al conectar un golpe."
      },
      {
        "level": 2,
        "description": "Aumenta el daño de fuego adicional al conectar un golpe."
      }
    ]
  },
  {
    "id": 72,
    "name": "Bonus de ataque",
    "kind": "weapon",
    "ranks": [
      {
        "level": 1,
        "description": "Ataque +3."
      },
      {
        "level": 2,
        "description": "Ataque +5."
      },
      {
        "level": 3,
        "description": "Ataque +7."
      },
      {
        "level": 4,
        "description": "Ataque +2 %. Bonus +8."
      },
      {
        "level": 5,
        "description": "Ataque +4 %. Bonus +9."
      }
    ]
  },
  {
    "id": 73,
    "name": "Favor de la gloria",
    "kind": "group",
    "ranks": [
      {
        "level": 1,
        "description": "Aumenta las recompensas por objetivos de misión. (No sirve si accedes a una misión a medias)."
      }
    ]
  },
  {
    "id": 74,
    "name": "Espíritu festivo",
    "kind": "group",
    "ranks": [
      {
        "level": 1,
        "description": "Permite despiezar una vez más de lo normal a los monstruos que abatas. (No aplicable si la misión ya ha empezado)."
      }
    ]
  },
  {
    "id": 75,
    "name": "Irrupción",
    "kind": "armor",
    "ranks": [
      {
        "level": 1,
        "description": "Ataque +6 contra monstruos grandes afectados por veneno o parálisis."
      },
      {
        "level": 2,
        "description": "Ataque +8 y afinidad +5 % contra monstruos grandes afectados por veneno o parálisis."
      },
      {
        "level": 3,
        "description": "Ataque +10 y afinidad +10 % contra monstruos grandes afectados por veneno o parálisis."
      },
      {
        "level": 4,
        "description": "Ataque +12 y afinidad +15 % contra monstruos grandes afectados por veneno o parálisis."
      },
      {
        "level": 5,
        "description": "Ataque +15 y afinidad +20 % contra monstruos grandes afectados por veneno o parálisis."
      }
    ]
  },
  {
    "id": 76,
    "name": "Experto en salto",
    "kind": "armor",
    "ranks": [
      {
        "level": 1,
        "description": "Anula los empujes mientras saltas."
      }
    ]
  },
  {
    "id": 77,
    "name": "Intervalo de evasión",
    "kind": "armor",
    "ranks": [
      {
        "level": 1,
        "description": "Alarga muy ligeramente el momento de invulnerabilidad al esquivar."
      },
      {
        "level": 2,
        "description": "Alarga un poco el momento de invulnerabilidad al esquivar."
      },
      {
        "level": 3,
        "description": "Prolonga el momento de invulnerabilidad al esquivar."
      },
      {
        "level": 4,
        "description": "Alarga mucho el momento de invulnerabilidad al esquivar."
      },
      {
        "level": 5,
        "description": "Alarga muchísimo el momento de invulnerabilidad al esquivar."
      }
    ]
  },
  {
    "id": 78,
    "name": "Ataque de sueño",
    "kind": "weapon",
    "ranks": [
      {
        "level": 1,
        "description": "Acumulación de sueño +5 %. Bonus +10."
      },
      {
        "level": 2,
        "description": "Acumulación de sueño +10 %. Bonus +20."
      },
      {
        "level": 3,
        "description": "Acumulación de sueño +20 %. Bonus +50."
      }
    ]
  },
  {
    "id": 79,
    "name": "Añade sueño",
    "kind": "weapon",
    "ranks": [
      {
        "level": 1,
        "description": "Permite aplicar viales de sueño."
      }
    ]
  },
  {
    "id": 80,
    "name": "Antirrugidos",
    "kind": "armor",
    "ranks": [
      {
        "level": 1,
        "description": "Reduce el efecto de los rugidos más débiles."
      },
      {
        "level": 2,
        "description": "Anula el efecto de los rugidos más débiles y reduce el efecto de los rugidos fuertes."
      },
      {
        "level": 3,
        "description": "Anula el efecto de los rugidos, tanto débiles como fuertes."
      }
    ]
  },
  {
    "id": 81,
    "name": "Venganza",
    "kind": "armor",
    "ranks": [
      {
        "level": 1,
        "description": "Ataque +10 mientras esté activo."
      },
      {
        "level": 2,
        "description": "Ataque +15 mientras esté activo. Prolonga bastante la duración del efecto."
      },
      {
        "level": 3,
        "description": "Ataque +25 mientras esté activo. Prolonga la duración del efecto."
      }
    ]
  },
  {
    "id": 82,
    "name": "Elemento crítico",
    "kind": "weapon",
    "ranks": [
      {
        "level": 1,
        "description": "Aumenta un poco el daño elemental mientras está activo."
      },
      {
        "level": 2,
        "description": "Aumenta el daño elemental mientras está activo."
      },
      {
        "level": 3,
        "description": "Aumenta mucho el daño elemental mientras está activo."
      }
    ]
  },
  {
    "id": 83,
    "name": "Más carga",
    "kind": "weapon",
    "ranks": [
      {
        "level": 1,
        "description": "Activa el efecto de la habilidad del mismo nombre."
      }
    ]
  },
  {
    "id": 84,
    "name": "Antiagua",
    "kind": "armor",
    "ranks": [
      {
        "level": 1,
        "description": "Resistencia al agua +6."
      },
      {
        "level": 2,
        "description": "Resistencia al agua +12."
      },
      {
        "level": 3,
        "description": "Resistencia al agua +20. Defensa +10."
      }
    ]
  },
  {
    "id": 85,
    "name": "Impacto mejorado",
    "kind": "weapon",
    "ranks": [
      {
        "level": 1,
        "description": "Inflige +5 % de daño cuando la barra de afilado esté en amarillo o peor."
      },
      {
        "level": 2,
        "description": "Inflige +10 % de daño cuando la barra de afilado esté en amarillo o peor."
      },
      {
        "level": 3,
        "description": "Inflige +10 % de daño cuando la barra de afilado esté en verde o peor."
      }
    ]
  },
  {
    "id": 86,
    "name": "Bonus ataque en salto",
    "kind": "weapon",
    "ranks": [
      {
        "level": 1,
        "description": "Ataque en salto +10 %."
      }
    ]
  },
  {
    "id": 87,
    "name": "Heroicidad",
    "kind": "armor",
    "ranks": [
      {
        "level": 1,
        "description": "Defensa +50 mientras esté activo."
      },
      {
        "level": 2,
        "description": "Ataque +5 % y defensa +50 mientras esté activo."
      },
      {
        "level": 3,
        "description": "Ataque +5 % y defensa +100 mientras esté activo."
      },
      {
        "level": 4,
        "description": "Ataque +10 % y defensa +100 mientras esté activo."
      },
      {
        "level": 5,
        "description": "Ataque +30 %. Se pierden las mejoras de defensa de los niveles previos mientras esté activo."
      }
    ]
  },
  {
    "id": 88,
    "name": "Adaptabilidad",
    "kind": "armor",
    "ranks": [
      {
        "level": 1,
        "description": "Anula los efectos del calor y el frío."
      },
      {
        "level": 2,
        "description": "Anula el daño ambiental."
      }
    ]
  },
  {
    "id": 89,
    "name": "Cuero mantecoso",
    "kind": "group",
    "ranks": [
      {
        "level": 1,
        "description": "Aumenta temporalmente tu afinidad cuando se desliza por el terreno."
      }
    ]
  },
  {
    "id": 90,
    "name": "Experto en herramientas",
    "kind": "armor",
    "ranks": [
      {
        "level": 1,
        "description": "Reduce el tiempo de recarga un 10 %."
      },
      {
        "level": 2,
        "description": "Reduce el tiempo de recarga un 20 %."
      },
      {
        "level": 3,
        "description": "Reduce el tiempo de recarga un 30 %."
      },
      {
        "level": 4,
        "description": "Reduce el tiempo de recarga un 40 %."
      },
      {
        "level": 5,
        "description": "Reduce el tiempo de recarga un 50 %."
      }
    ]
  },
  {
    "id": 91,
    "name": "Ataque de agua",
    "kind": "weapon",
    "ranks": [
      {
        "level": 1,
        "description": "Ataque de agua +40."
      },
      {
        "level": 2,
        "description": "Ataque de agua +10 %. Bonus +50."
      },
      {
        "level": 3,
        "description": "Ataque de agua +20 %. Bonus +60."
      }
    ]
  },
  {
    "id": 92,
    "name": "Antiparálisis",
    "kind": "armor",
    "ranks": [
      {
        "level": 1,
        "description": "Reduce la duración de la parálisis un 30 %."
      },
      {
        "level": 2,
        "description": "Reduce la duración de la parálisis un 60 %."
      },
      {
        "level": 3,
        "description": "Protege contra la parálisis."
      }
    ]
  },
  {
    "id": 93,
    "name": "Voltaje de Rey Dau",
    "kind": "set",
    "ranks": [
      {
        "level": 1,
        "description": "Prolonga bastante el tiempo de activación de la habilidad \"poder latente\"."
      },
      {
        "level": 2,
        "description": "Prolonga el tiempo de activación de la habilidad \"poder latente\"."
      }
    ]
  },
  {
    "id": 94,
    "name": "Disparo perforante",
    "kind": "weapon",
    "ranks": [
      {
        "level": 1,
        "description": "Aumenta un poco la potencia de la munición y flechas indicados."
      }
    ]
  },
  {
    "id": 95,
    "name": "Ráfaga",
    "kind": "armor",
    "ranks": [
      {
        "level": 1,
        "description": "El primer golpe potencia un poco el ataque y el daño elemental. Al 5.º impacto, la bonificación es mayor."
      },
      {
        "level": 2,
        "description": "Si conectas 5 golpes seguidos, ganas bastantes más bonificaciones."
      },
      {
        "level": 3,
        "description": "Si conectas 5 golpes seguidos, ganas muchas más bonificaciones."
      },
      {
        "level": 4,
        "description": "Golpea 5 veces seguidas para bonus aún más elevados."
      },
      {
        "level": 5,
        "description": "Golpea 5 veces seguidas para bonus muy elevados."
      }
    ]
  },
  {
    "id": 96,
    "name": "Torrente de llamas blancas",
    "kind": "weapon",
    "ranks": [
      {
        "level": 1,
        "description": "Activa el efecto de la habilidad. (No acumulable si se usa con abrasador, pero añade daño de fuego adicional)."
      }
    ]
  },
  {
    "id": 97,
    "name": "Pelaje atractivo",
    "kind": "group",
    "ranks": [
      {
        "level": 1,
        "description": "Llamarás más la atención al atacar a un monstruo."
      }
    ]
  },
  {
    "id": 98,
    "name": "Geología",
    "kind": "armor",
    "ranks": [
      {
        "level": 1,
        "description": "Consigues un objeto adicional al recolectar en pilas de huesos."
      },
      {
        "level": 2,
        "description": "Consigues un objeto adicional al recolectar objetos especiales."
      },
      {
        "level": 3,
        "description": "Consigues un objeto adicional al recolectar en afloramientos mineros."
      }
    ]
  },
  {
    "id": 99,
    "name": "Poder máximo",
    "kind": "armor",
    "ranks": [
      {
        "level": 1,
        "description": "Afinidad +10 % mientras esté activo."
      },
      {
        "level": 2,
        "description": "Afinidad +20 % mientras esté activo."
      },
      {
        "level": 3,
        "description": "Afinidad +30 % mientras esté activo."
      }
    ]
  },
  {
    "id": 100,
    "name": "Ingesta rápida",
    "kind": "armor",
    "ranks": [
      {
        "level": 1,
        "description": "Aumenta bastante la velocidad al comer."
      },
      {
        "level": 2,
        "description": "Aumenta la velocidad al comer."
      },
      {
        "level": 3,
        "description": "Aumenta mucho la velocidad al comer."
      }
    ]
  },
  {
    "id": 101,
    "name": "Antihielo",
    "kind": "armor",
    "ranks": [
      {
        "level": 1,
        "description": "Resistencia al hielo +6."
      },
      {
        "level": 2,
        "description": "Resistencia al hielo +12."
      },
      {
        "level": 3,
        "description": "Resistencia al hielo +20. Defensa +10."
      }
    ]
  },
  {
    "id": 102,
    "name": "Distancia evasiva",
    "kind": "armor",
    "ranks": [
      {
        "level": 1,
        "description": "Aumenta un poco la distancia a la que esquivas."
      },
      {
        "level": 2,
        "description": "Aumenta la distancia a la que esquivas."
      },
      {
        "level": 3,
        "description": "Aumenta mucho la distancia a la que esquivas."
      }
    ]
  },
  {
    "id": 103,
    "name": "Desenfunde crítico",
    "kind": "weapon",
    "ranks": [
      {
        "level": 1,
        "description": "Afinidad +50 %."
      },
      {
        "level": 2,
        "description": "Afinidad +75 %."
      },
      {
        "level": 3,
        "description": "Afinidad +100 %."
      }
    ]
  },
  {
    "id": 104,
    "name": "Carga prolongada",
    "kind": "weapon",
    "ranks": [
      {
        "level": 1,
        "description": "Aumenta bastante la duración de las bonificaciones de las armas."
      },
      {
        "level": 2,
        "description": "Aumenta la duración de las bonificaciones de las armas."
      },
      {
        "level": 3,
        "description": "Aumenta mucho la duración de las bonificaciones de las armas."
      }
    ]
  },
  {
    "id": 105,
    "name": "Antiaturdimiento",
    "kind": "armor",
    "ranks": [
      {
        "level": 1,
        "description": "Reduce la duración del aturdimiento un 30 %."
      },
      {
        "level": 2,
        "description": "Reduce la duración del aturdimiento un 60 %."
      },
      {
        "level": 3,
        "description": "Protege contra el aturdimiento."
      }
    ]
  },
  {
    "id": 106,
    "name": "Tiranía de Gore Magala",
    "kind": "set",
    "ranks": [
      {
        "level": 1,
        "description": "Te infecta con la cólera al enfrentarte a monstruos grandes."
      },
      {
        "level": 2,
        "description": "Te infecta con cólera y potencia el ataque al enfrentarte a monstruos grandes. El ataque aumenta tras recuperarte."
      }
    ]
  },
  {
    "id": 107,
    "name": "Espíritu de Blangonga",
    "kind": "set",
    "ranks": [
      {
        "level": 1,
        "description": "El gesto ¡hacia la victoria! mejora bastante por un tiempo el ataque de aliados cercanos (sobre todo camaradas/cazadores de apoyo)."
      },
      {
        "level": 2,
        "description": "El gesto ¡hacia la victoria! mejora por un tiempo el ataque de aliados cercanos (esp. camaradas y cazadores de apoyo)."
      }
    ]
  },
  {
    "id": 108,
    "name": "Firmeza",
    "kind": "armor",
    "ranks": [
      {
        "level": 1,
        "description": "Protege contra los empujes."
      },
      {
        "level": 2,
        "description": "Protege contra los empujes. Los golpes que normalmente te derribarían solo te empujarán."
      },
      {
        "level": 3,
        "description": "Protege contra los empujes y contra los derribos."
      }
    ]
  },
  {
    "id": 109,
    "name": "Cargar arma",
    "kind": "weapon",
    "ranks": [
      {
        "level": 1,
        "description": "Aumenta la velocidad de recarga de munición y viales."
      },
      {
        "level": 2,
        "description": "Acelera la recarga de munición/viales. Lanza pistola: Capacidad de carga +1. Hacha carg.: Máx. 5 viales (barra amarilla)."
      }
    ]
  },
  {
    "id": 110,
    "name": "Antinitro",
    "kind": "armor",
    "ranks": [
      {
        "level": 1,
        "description": "Ralentiza la plaga de nitro y reduce el daño por nitro."
      },
      {
        "level": 2,
        "description": "Ralentiza mucho la plaga de nitro y reduce mucho el daño por nitro."
      },
      {
        "level": 3,
        "description": "Protege contra la plaga de nitro."
      }
    ]
  },
  {
    "id": 111,
    "name": "Comida gratis",
    "kind": "armor",
    "ranks": [
      {
        "level": 1,
        "description": "Probabilidad de activación del 10 %."
      },
      {
        "level": 2,
        "description": "Probabilidad de activación del 25 %."
      },
      {
        "level": 3,
        "description": "Probabilidad de activación del 45 %."
      }
    ]
  },
  {
    "id": 112,
    "name": "Botánica",
    "kind": "armor",
    "ranks": [
      {
        "level": 1,
        "description": "Cada vez que extraes hierbas consigues una adicional."
      },
      {
        "level": 2,
        "description": "Consigues un objeto adicional al recolectar frutos, nueces o semillas."
      },
      {
        "level": 3,
        "description": "Consigues un objeto adicional al recolectar insectos consumibles."
      },
      {
        "level": 4,
        "description": "Consigues un objeto adicional al recolectar setas consumibles."
      }
    ]
  },
  {
    "id": 113,
    "name": "Efecto área",
    "kind": "armor",
    "ranks": [
      {
        "level": 1,
        "description": "Los objetos que utilices afectan a los aliados cercanos con un 33 % de eficacia."
      },
      {
        "level": 2,
        "description": "Los objetos que utilices afectan a los aliados en un radio mayor con un 33 % de eficacia."
      },
      {
        "level": 3,
        "description": "Los objetos que utilices afectan a los aliados en un radio mayor con un 66 % de eficacia."
      },
      {
        "level": 4,
        "description": "Los objetos que utilices afectan a los aliados en un radio mucho más amplio con un 66 % de eficacia."
      },
      {
        "level": 5,
        "description": "Los objetos que utilices afectan a los aliados en un radio mucho más amplio con total eficacia."
      }
    ]
  },
  {
    "id": 114,
    "name": "Entomología",
    "kind": "armor",
    "ranks": [
      {
        "level": 1,
        "description": "Activa el efecto de la habilidad del mismo nombre."
      }
    ]
  },
  {
    "id": 115,
    "name": "Potencia de Odogaron Ébano",
    "kind": "set",
    "ranks": [
      {
        "level": 1,
        "description": "Prolonga la duración de la habilidad \"ráfaga\" y da ataque +8 mientras \"ráfaga\" esté activa."
      },
      {
        "level": 2,
        "description": "Prolonga más la duración de la habilidad \"ráfaga\" y da ataque +18 mientras \"ráfaga\" esté activa."
      }
    ]
  },
  {
    "id": 116,
    "name": "Añade veneno",
    "kind": "weapon",
    "ranks": [
      {
        "level": 1,
        "description": "Permite aplicar viales de veneno."
      }
    ]
  },
  {
    "id": 117,
    "name": "Filo de cuchilla",
    "kind": "weapon",
    "ranks": [
      {
        "level": 1,
        "description": "Da una probabilidad del 10 % de no perder afilado."
      },
      {
        "level": 2,
        "description": "Da una probabilidad del 25 % de no perder afilado."
      },
      {
        "level": 3,
        "description": "Da una probabilidad del 50 % de no perder afilado."
      }
    ]
  },
  {
    "id": 118,
    "name": "Bonus de defensa",
    "kind": "armor",
    "ranks": [
      {
        "level": 1,
        "description": "Defensa +5."
      },
      {
        "level": 2,
        "description": "Defensa +10."
      },
      {
        "level": 3,
        "description": "Defensa +5 %. Bonus: +10."
      },
      {
        "level": 4,
        "description": "Defensa +5 %. Bonus +20. Resistencias elementales +3."
      },
      {
        "level": 5,
        "description": "Defensa +8 %. Bonus +20. Resistencias elementales +3."
      },
      {
        "level": 6,
        "description": "Defensa +8 %. Bonus +35. Resistencias elementales +5."
      },
      {
        "level": 7,
        "description": "Defensa +10 %. Bonus +35. Resistencias elementales +5."
      }
    ]
  },
  {
    "id": 119,
    "name": "Artesanía",
    "kind": "weapon",
    "ranks": [
      {
        "level": 1,
        "description": "Afilado del arma +10."
      },
      {
        "level": 2,
        "description": "Afilado del arma +20."
      },
      {
        "level": 3,
        "description": "Afilado del arma +30."
      },
      {
        "level": 4,
        "description": "Afilado del arma +40."
      },
      {
        "level": 5,
        "description": "Afilado del arma +50."
      }
    ]
  },
  {
    "id": 120,
    "name": "Subida de adrenalina",
    "kind": "armor",
    "ranks": [
      {
        "level": 1,
        "description": "Ataque +10 mientras esté activo."
      },
      {
        "level": 2,
        "description": "Ataque +15 mientras esté activo."
      },
      {
        "level": 3,
        "description": "Ataque +20 mientras esté activo."
      },
      {
        "level": 4,
        "description": "Ataque +25 mientras esté activo."
      },
      {
        "level": 5,
        "description": "Ataque +30 mientras esté activo."
      }
    ]
  },
  {
    "id": 121,
    "name": "Ataque de hielo",
    "kind": "weapon",
    "ranks": [
      {
        "level": 1,
        "description": "Ataque de hielo +40."
      },
      {
        "level": 2,
        "description": "Ataque de hielo +10 %. Bonus +50."
      },
      {
        "level": 3,
        "description": "Ataque de hielo +20 %. Bonus +60."
      }
    ]
  },
  {
    "id": 122,
    "name": "Bendición divina",
    "kind": "armor",
    "ranks": [
      {
        "level": 1,
        "description": "Reduce el daño recibido un 15 % mientras esté activo."
      },
      {
        "level": 2,
        "description": "Reduce el daño recibido un 30 % mientras esté activo."
      },
      {
        "level": 3,
        "description": "Reduce el daño recibido un 50 % mientras esté activo."
      }
    ]
  },
  {
    "id": 123,
    "name": "Resentimiento",
    "kind": "armor",
    "ranks": [
      {
        "level": 1,
        "description": "Ataque +5 mientras esté activo."
      },
      {
        "level": 2,
        "description": "Ataque +10 mientras esté activo."
      },
      {
        "level": 3,
        "description": "Ataque +15 mientras esté activo."
      },
      {
        "level": 4,
        "description": "Ataque +20 mientras esté activo."
      },
      {
        "level": 5,
        "description": "Ataque +25 mientras esté activo."
      }
    ]
  },
  {
    "id": 124,
    "name": "Toque maestro",
    "kind": "weapon",
    "ranks": [
      {
        "level": 1,
        "description": "Probabilidad de no perder afilado +80 % mientras esté activo."
      }
    ]
  },
  {
    "id": 125,
    "name": "Antifuego",
    "kind": "armor",
    "ranks": [
      {
        "level": 1,
        "description": "Resistencia al fuego +6."
      },
      {
        "level": 2,
        "description": "Resistencia al fuego +12."
      },
      {
        "level": 3,
        "description": "Resistencia al fuego +20. Defensa +10."
      }
    ]
  },
  {
    "id": 126,
    "name": "Afilado rápido",
    "kind": "weapon",
    "ranks": [
      {
        "level": 1,
        "description": "Hace el proceso de afilado un ciclo más corto."
      },
      {
        "level": 2,
        "description": "Hace el proceso de afilado dos ciclos más corto."
      }
    ]
  },
  {
    "id": 127,
    "name": "Ataque de rayo",
    "kind": "weapon",
    "ranks": [
      {
        "level": 1,
        "description": "Ataque de rayo +40."
      },
      {
        "level": 2,
        "description": "Ataque de rayo +10 %. Bonus +50."
      },
      {
        "level": 3,
        "description": "Ataque de rayo +20 %. Bonus +60."
      }
    ]
  },
  {
    "id": 128,
    "name": "Antiveneno",
    "kind": "armor",
    "ranks": [
      {
        "level": 1,
        "description": "Reduce el número de pulsaciones de daño que sufres por veneno."
      },
      {
        "level": 2,
        "description": "Reduce en gran medida el número de pulsaciones de daño que sufres por veneno."
      },
      {
        "level": 3,
        "description": "Protege contra el veneno."
      }
    ]
  },
  {
    "id": 129,
    "name": "Rompepartes",
    "kind": "armor",
    "ranks": [
      {
        "level": 1,
        "description": "Aumenta en un 10 % el daño infligido al atacar partes de los monstruos o cumplir con ciertas condiciones."
      },
      {
        "level": 2,
        "description": "Aumenta en un 20 % el daño infligido al atacar partes de los monstruos o cumplir con ciertas condiciones."
      },
      {
        "level": 3,
        "description": "Aumenta en un 30 % el daño infligido al atacar partes de los monstruos o cumplir con ciertas condiciones."
      }
    ]
  },
  {
    "id": 130,
    "name": "Intimidador",
    "kind": "armor",
    "ranks": [
      {
        "level": 1,
        "description": "Disuade a los monstruos de atacarte, incluso si te han visto."
      },
      {
        "level": 2,
        "description": "Disuade mucho a los monstruos de atacarte, incluso si te han visto."
      },
      {
        "level": 3,
        "description": "Evita que los monstruos te ataquen, incluso si te han visto."
      }
    ]
  },
  {
    "id": 131,
    "name": "Alma del amo",
    "kind": "group",
    "ranks": [
      {
        "level": 1,
        "description": "Aumenta el ataque y reduce la defensa, pero te permite sobrevivir a un golpe letal. Después aumenta la defensa y resistencia."
      }
    ]
  },
  {
    "id": 132,
    "name": "Maestría con escamas",
    "kind": "group",
    "ranks": [
      {
        "level": 1,
        "description": "Es más sencillo montar monstruos y herirlos mientras estás sobre ellos."
      }
    ]
  },
  {
    "id": 133,
    "name": "Absorción elemental",
    "kind": "armor",
    "ranks": [
      {
        "level": 1,
        "description": "Mientras esté activo, aumenta un poco el ataque elemental y da resistencia +4 al elemento que ha activado la habilidad."
      },
      {
        "level": 2,
        "description": "Mientras esté activo, aumenta bastante el ataque elemental y da resistencia +6 al elemento que ha activado la habilidad."
      },
      {
        "level": 3,
        "description": "Mientras esté activo, da +8 a las resistencias elementales especificadas y aumenta el ataque elemental."
      }
    ]
  },
  {
    "id": 134,
    "name": "Acabado protector",
    "kind": "weapon",
    "ranks": [
      {
        "level": 1,
        "description": "No pierdes afilado durante 30 segundos tras activarse."
      },
      {
        "level": 2,
        "description": "No pierdes afilado durante 60 segundos tras activarse."
      },
      {
        "level": 3,
        "description": "No pierdes afilado durante 90 segundos tras activarse."
      }
    ]
  },
  {
    "id": 135,
    "name": "Piel de hierro",
    "kind": "armor",
    "ranks": [
      {
        "level": 1,
        "description": "Reduce la duración de defensa reducida un 50 %."
      },
      {
        "level": 2,
        "description": "Reduce la duración de defensa reducida un 75 %."
      },
      {
        "level": 3,
        "description": "Protege contra la defensa reducida."
      }
    ]
  },
  {
    "id": 136,
    "name": "Ojo mental",
    "kind": "weapon",
    "ranks": [
      {
        "level": 1,
        "description": "50 % de probabilidad de evitar que tus ataques reboten. (Potencia +10 % a objetivos duros)."
      },
      {
        "level": 2,
        "description": "100 % de probabilidad de evitar que tus ataques reboten. (Potencia +15 % a objetivos duros)."
      },
      {
        "level": 3,
        "description": "100 % de probabilidad de evitar que tus ataques reboten. (Potencia +30 % a objetivos duros)."
      }
    ]
  },
  {
    "id": 137,
    "name": "Disparo tétrada",
    "kind": "weapon",
    "ranks": [
      {
        "level": 1,
        "description": "Aumenta un poco la potencia de ataque y la afinidad de la munición si se cumplen ciertas condiciones."
      },
      {
        "level": 2,
        "description": "Aumenta bastante la potencia de ataque y la afinidad de la munición si se cumplen ciertas condiciones."
      },
      {
        "level": 3,
        "description": "Aumenta la potencia de ataque y la afinidad de la munición si se cumplen ciertas condiciones."
      }
    ]
  },
  {
    "id": 138,
    "name": "Automejora",
    "kind": "armor",
    "ranks": [
      {
        "level": 1,
        "description": "Activa el efecto de la habilidad del mismo nombre."
      }
    ]
  },
  {
    "id": 139,
    "name": "Camuflaje de neopteron",
    "kind": "group",
    "ranks": [
      {
        "level": 1,
        "description": "Aumenta la velocidad de movimiento al agacharte y hace que sea más fácil evitar que los monstruos grandes te detecten."
      }
    ]
  },
  {
    "id": 140,
    "name": "Primer disparo",
    "kind": "weapon",
    "ranks": [
      {
        "level": 1,
        "description": "Aumenta bastante la velocidad de recarga de la ballesta y la potencia de la munición bajo ciertas condiciones."
      },
      {
        "level": 2,
        "description": "Aumenta la velocidad de recarga de la ballesta y la potencia de la munición bajo ciertas condiciones."
      },
      {
        "level": 3,
        "description": "Aumenta mucho la velocidad de recarga de la ballesta y la potencia de la munición bajo ciertas condiciones."
      }
    ]
  },
  {
    "id": 141,
    "name": "Agotador",
    "kind": "weapon",
    "ranks": [
      {
        "level": 1,
        "description": "Posibilidad de agotar +20 %."
      },
      {
        "level": 2,
        "description": "Posibilidad de agotar +30 %."
      },
      {
        "level": 3,
        "description": "Posibilidad de agotar +40 %."
      }
    ]
  },
  {
    "id": 142,
    "name": "Poder latente",
    "kind": "armor",
    "ranks": [
      {
        "level": 1,
        "description": "Mientras esté activo, da un +10 % a la afinidad y reduce el gasto de resistencia un 30 %."
      },
      {
        "level": 2,
        "description": "Mientras esté activo, da un +20 % a la afinidad y reduce el gasto de resistencia un 30 %."
      },
      {
        "level": 3,
        "description": "Mientras esté activo, da un +30 % a la afinidad y reduce el gasto de resistencia un 50 %."
      },
      {
        "level": 4,
        "description": "Mientras esté activo, da un +40 % a la afinidad y reduce el gasto de resistencia un 50 %."
      },
      {
        "level": 5,
        "description": "Mientras esté activo, da un +50 % a la afinidad y reduce el gasto de resistencia un 50 %."
      }
    ]
  },
  {
    "id": 143,
    "name": "Autosuficiente",
    "kind": "armor",
    "ranks": [
      {
        "level": 1,
        "description": "Mejora las habilidades de pesca, parrilla y transporte."
      }
    ]
  },
  {
    "id": 144,
    "name": "Instigación",
    "kind": "armor",
    "ranks": [
      {
        "level": 1,
        "description": "Ataque +4 y afinidad +3 % mientras esté activo."
      },
      {
        "level": 2,
        "description": "Ataque +8 y afinidad +5 % mientras esté activo."
      },
      {
        "level": 3,
        "description": "Ataque +12 y afinidad +7 % mientras esté activo."
      },
      {
        "level": 4,
        "description": "Ataque +16 y afinidad +10 % mientras esté activo."
      },
      {
        "level": 5,
        "description": "Ataque +20 y afinidad +15 % mientras esté activo."
      }
    ]
  },
  {
    "id": 145,
    "name": "Mejora de camarada",
    "kind": "armor",
    "ranks": [
      {
        "level": 1,
        "description": "Aumenta la defensa y el ataque de tu camarada +5 %."
      },
      {
        "level": 2,
        "description": "Aumenta la defensa y el ataque de tu camarada +10 %."
      },
      {
        "level": 3,
        "description": "Aumenta la defensa y el ataque de tu camarada +15 %."
      },
      {
        "level": 4,
        "description": "Aumenta la defensa y el ataque de tu camarada +20 %."
      },
      {
        "level": 5,
        "description": "Aumenta la defensa y el ataque de tu camarada +25 %."
      }
    ]
  },
  {
    "id": 146,
    "name": "Antisangrado",
    "kind": "armor",
    "ranks": [
      {
        "level": 1,
        "description": "Reduce el daño recibido al sufrir sangrados."
      },
      {
        "level": 2,
        "description": "Reduce mucho el daño recibido al sufrir sangrados."
      },
      {
        "level": 3,
        "description": "Protege contra el sangrado."
      }
    ]
  },
  {
    "id": 147,
    "name": "Antiinmovilización",
    "kind": "armor",
    "ranks": [
      {
        "level": 1,
        "description": "Permite que te recuperes rápidamente del estado enmarañado y la plaga de escarcha."
      },
      {
        "level": 2,
        "description": "Permite que te recuperes muy rápidamente del estado enmarañado y la plaga de escarcha."
      },
      {
        "level": 3,
        "description": "Protege contra el estado enmarañado y la plaga de escarcha."
      }
    ]
  },
  {
    "id": 148,
    "name": "Alerta de Neopteron",
    "kind": "group",
    "ranks": [
      {
        "level": 1,
        "description": "Aumenta la cantidad de miel que obtienes de los puntos de recolección."
      }
    ]
  },
  {
    "id": 149,
    "name": "Sublevación de Nu Udra",
    "kind": "set",
    "ranks": [
      {
        "level": 1,
        "description": "Inflige bastante daño adicional mientras esté activa la habilidad \"resentimiento\"."
      },
      {
        "level": 2,
        "description": "Inflige daño adicional mientras esté activa la habilidad \"resentimiento\"."
      }
    ]
  },
  {
    "id": 150,
    "name": "Pelaje fortalecedor",
    "kind": "group",
    "ranks": [
      {
        "level": 1,
        "description": "Aumenta ataque y defensa tras desmayarte en una misión. (Puede usarse dos veces.)"
      }
    ]
  },
  {
    "id": 151,
    "name": "Antihambre",
    "kind": "armor",
    "ranks": [
      {
        "level": 1,
        "description": "Prolonga un 50 % el tiempo que tarda en reducirse el tamaño de la barra de resistencia."
      },
      {
        "level": 2,
        "description": "Prolonga un 100 % el tiempo que tarda en reducirse el tamaño de la barra de resistencia."
      },
      {
        "level": 3,
        "description": "Impide que se reduzca el tamaño de tu barra de resistencia."
      }
    ]
  },
  {
    "id": 152,
    "name": "Convierte elemento",
    "kind": "armor",
    "ranks": [
      {
        "level": 1,
        "description": "Inflige daño adicional por draco si causas suficiente daño mientras esté activo, y potencia un poco los ataques de draco."
      },
      {
        "level": 2,
        "description": "Aumenta el daño de draco adicional y potencia el ataque de draco."
      },
      {
        "level": 3,
        "description": "Aumenta más el daño de draco adicional y potencia mucho el ataque de draco."
      }
    ]
  },
  {
    "id": 153,
    "name": "Cobertura de Uth Duna",
    "kind": "set",
    "ranks": [
      {
        "level": 1,
        "description": "Potencia la defensa durante un tiempo cuando usas una herramienta especializada."
      },
      {
        "level": 2,
        "description": "Potencia mucho la defensa y la resistencia durante un tiempo cuando usas una herramienta especializada."
      }
    ]
  },
  {
    "id": 154,
    "name": "Plena forma",
    "kind": "armor",
    "ranks": [
      {
        "level": 1,
        "description": "Ataque +3 mientras esté activo."
      },
      {
        "level": 2,
        "description": "Ataque +6 mientras esté activo."
      },
      {
        "level": 3,
        "description": "Ataque +10 mientras esté activo."
      },
      {
        "level": 4,
        "description": "Ataque +15 mientras esté activo."
      },
      {
        "level": 5,
        "description": "Ataque +20 mientras esté activo."
      }
    ]
  },
  {
    "id": 155,
    "name": "Ira del señor",
    "kind": "group",
    "ranks": [
      {
        "level": 1,
        "description": "Potencia el ataque cuando estás bajo el efecto de estados alterados."
      }
    ]
  },
  {
    "id": 156,
    "name": "Antirrayo",
    "kind": "armor",
    "ranks": [
      {
        "level": 1,
        "description": "Resistencia al rayo +6."
      },
      {
        "level": 2,
        "description": "Resistencia al rayo +12."
      },
      {
        "level": 3,
        "description": "Resistencia al rayo +20. Defensa +10."
      }
    ]
  },
  {
    "id": 157,
    "name": "Maestro del puño",
    "kind": "group",
    "ranks": [
      {
        "level": 1,
        "description": "Aumenta el poder de los ataques especiales: Los Drive Impact lanzan ataques interceptores. Aumenta más el poder de ataques interceptores."
      }
    ]
  },
  {
    "id": 158,
    "name": "Onigiri",
    "kind": "armor",
    "ranks": [
      {
        "level": 1,
        "description": "Activa el efecto de la habilidad del mismo nombre."
      }
    ]
  },
  {
    "id": 159,
    "name": "Maicera rebosante",
    "kind": "weapon",
    "ranks": [
      {
        "level": 1,
        "description": "Activa el efecto de la habilidad del mismo nombre."
      }
    ]
  },
  {
    "id": 160,
    "name": "Carga de filoescama",
    "kind": "weapon",
    "ranks": [
      {
        "level": 1,
        "description": "Activa el efecto de la habilidad del mismo nombre."
      }
    ]
  },
  {
    "id": 161,
    "name": "Oración de chisparranda",
    "kind": "set",
    "ranks": [
      {
        "level": 1,
        "description": "Durante la chisparranda, añade objetos especiales a las recompensas de misión. (Sin efecto si te unes a media misión)."
      },
      {
        "level": 2,
        "description": "Durante la chisparranda, añade objetos especiales a las recompensas de misión y aumenta mucho el ataque y la defensa."
      }
    ]
  },
  {
    "id": 162,
    "name": "Furia de leviatán",
    "kind": "set",
    "ranks": [
      {
        "level": 1,
        "description": "Aumenta temporalmente la afinidad e inflige daño por rayo adicional al acumularlo. (Excepto algunos ataques)."
      },
      {
        "level": 2,
        "description": "Aumenta aún más el daño por rayo adicional y prolonga bastante el aumento de afinidad."
      }
    ]
  },
  {
    "id": 163,
    "name": "Afilado de filoescama",
    "kind": "weapon",
    "ranks": [
      {
        "level": 1,
        "description": "Activa el efecto de la habilidad del mismo nombre."
      }
    ]
  },
  {
    "id": 164,
    "name": "Piedra de poder",
    "kind": "weapon",
    "ranks": [
      {
        "level": 1,
        "description": "Extraer minerales especialmente raros aumenta bastante el ataque. (El aumento del ataque tiene un límite máximo)."
      }
    ]
  },
  {
    "id": 165,
    "name": "Convierte antirrayo",
    "kind": "weapon",
    "ranks": [
      {
        "level": 1,
        "description": "Activa el efecto de la habilidad del mismo nombre."
      }
    ]
  },
  {
    "id": 166,
    "name": "Recarga en esquiva",
    "kind": "weapon",
    "ranks": [
      {
        "level": 1,
        "description": "Activa el efecto de la habilidad del mismo nombre."
      }
    ]
  },
  {
    "id": 167,
    "name": "Tenacidad de Seregios",
    "kind": "set",
    "ranks": [
      {
        "level": 1,
        "description": "Prolonga la subida de adrenalina. Si está activa y se activa de nuevo, prolonga el efecto una vez más."
      },
      {
        "level": 2,
        "description": "Además, si se activa de nuevo mientras la habilidad está activa, mejora aún más el ataque."
      }
    ]
  },
  {
    "id": 168,
    "name": "Lado oscuro",
    "kind": "weapon",
    "ranks": [
      {
        "level": 1,
        "description": "Activa la habilidad del mismo nombre. (Activarla requiere enfriamiento, pero puede causar daño a uno mismo)."
      }
    ]
  },
  {
    "id": 169,
    "name": "Escudo sintético",
    "kind": "weapon",
    "ranks": [
      {
        "level": 1,
        "description": "Activa el efecto de la habilidad del mismo nombre."
      }
    ]
  },
  {
    "id": 170,
    "name": "Oración del Sueñiencanto",
    "kind": "set",
    "ranks": [
      {
        "level": 1,
        "description": "Durante el sueñiencanto, añade objetos especiales a las recompensas de misión. (Sin efecto si te unes a mitad de misión)."
      },
      {
        "level": 2,
        "description": "Durante el sueñiencanto, añade objetos especiales a las recompensas de misión y mejora mucho el ataque y la defensa."
      }
    ]
  },
  {
    "id": 171,
    "name": "Maestro de la parrilla",
    "kind": "weapon",
    "ranks": [
      {
        "level": 1,
        "description": "Activa el efecto de la habilidad del mismo nombre."
      }
    ]
  },
  {
    "id": 172,
    "name": "Alma del caballero oscuro",
    "kind": "set",
    "ranks": [
      {
        "level": 1,
        "description": "Tener daño recuperable potencia el ataque elemental y algunos de los tajos cargados de nv. 3 de la gran espada."
      },
      {
        "level": 2,
        "description": "Te permite realizar la acción especial: la noche más oscura."
      }
    ]
  },
  {
    "id": 173,
    "name": "Resonancia Omega",
    "kind": "set",
    "ranks": [
      {
        "level": 1,
        "description": "(Al inicio de misión) Alterna entre resonancia local/remota. Si cumples los requisitos, mejora el ataque o afinidad."
      },
      {
        "level": 2,
        "description": "Aumenta el efecto de \"resonancia I\" y el efecto de la habilidad de arma \"escudo sintético\", o el efecto de \"sinergia\"."
      }
    ]
  },
  {
    "id": 174,
    "name": "Sinergia",
    "kind": "weapon",
    "ranks": [
      {
        "level": 1,
        "description": "Activa el efecto de la habilidad del mismo nombre."
      }
    ]
  },
  {
    "id": 178,
    "name": "Gogmapocalipsis",
    "kind": "set",
    "ranks": [
      {
        "level": 1,
        "description": "Aumenta el ataque elemental cuando los monstruos grandes se enfurecen."
      },
      {
        "level": 2,
        "description": "El efecto de nivel I aumenta y tú obtienes una barrera de daño temporal. (La barrera se reactiva tras la recarga)."
      }
    ]
  },
  {
    "id": 179,
    "name": "Ladrón gato",
    "kind": "weapon",
    "ranks": [
      {
        "level": 1,
        "description": "Activa el efecto de la habilidad."
      }
    ]
  },
  {
    "id": 180,
    "name": "Oración de iluminario",
    "kind": "set",
    "ranks": [
      {
        "level": 1,
        "description": "Durante el iluminario, agrega objetos especiales a las recompensas de misión. (Sin efecto si te unes a mitad)."
      },
      {
        "level": 2,
        "description": "Durante el iluminario, agrega objetos especiales a las recompensas de misión y mejora mucho el ataque y la defensa."
      }
    ]
  },
  {
    "id": 181,
    "name": "Convertir antiagua",
    "kind": "weapon",
    "ranks": [
      {
        "level": 1,
        "description": "Activa el efecto de la habilidad."
      }
    ]
  },
  {
    "id": 182,
    "name": "Reflejo destrozado",
    "kind": "weapon",
    "ranks": [
      {
        "level": 1,
        "description": "Activa el efecto de la habilidad del mismo nombre."
      }
    ]
  }
];
