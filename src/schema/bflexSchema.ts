import { CcdSchema } from '../schema';

export const BFLEX_SCHEMA: CcdSchema = {
  'BFLEX2010': {
    description: '– Input data . . . . . . . . . . . . . . . . . . . . . . . 171',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'SINTEF': {
    description: '- Structures and Concrete. Boru, M. E. (2021). Viv fatigue of dynamic power cables applied in oﬀshore wind',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'BONCON': {
    description: '. . . . . . . . . . . . . . . . . . . . . . . 22, 27',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'CLOAD': {
    description: '. . . . . . . . . . . . . . . . . . . . . . . . . 22, 28',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'CONSTR': {
    description: '. . . . . . . . . . . . . . . . . . . . . . . 22, 29',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'PDISP': {
    description: '. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 29',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'LOCAL': {
    description: '. . . . . . . . . . . . . . . . . . . . . . . . . 30, 31',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'GLOBAL': {
    description: '. . . . . . . . . . . . . . . . . . . . . . . 30, 32',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'CONEQ': {
    description: '. . . . . . . . . . . . . . . . . . . . . . . . .29, 31',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'LOCSL': {
    description: '. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 32 M',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'HISTCONEQ': {
    description: '. . . . . . . . . . . . . . . . . . . 29, 33',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'CONTINT': {
    description: '. . . . . . . . . . . . . . . . . . . . . . 22, 34',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'CONTROL': {
    description: '. . . . . . . . . . . . . . . . . . . . . .22, 37',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'STRESSFREE': {
    description: '. . . . . . . . . . . . . . . . . . . . . . 38 T',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'RESTART': {
    description: '. . . . . . . . . . . . . . . . . . . . . . . . . . 38',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'EIGEN': {
    description: '. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 38',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'AUTOSTART': {
    description: '. . . . . . . . . . . . . . . . . . . . . . 39 B',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'COSUPR': {
    description: '. . . . . . . . . . . . . . . . . . . . . . . .22, 41',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'COSURFPR': {
    description: '. . . . . . . . . . . . . . . . . . . . . . . . 22',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'CROSSGEOM': {
    description: '. . . . . . . . . . . . . . . . . . 22, 44 – BFLEX . . . . . . . . . . . . . . . . . . . . . . . . . . . 48 – BOX . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 45',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'PIPE': {
    description: '. . . . . . . . . . . . . . . . . . . . . . . . 45, 74, 96 R',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'BOX': {
    description: '. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .45',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'GENERAL': {
    description: '. . . . . . . . . . . . . . . . . . . . . . . . . 46',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'BFLEX': {
    description: '. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 48',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'CROSSECTION-': {
    description: 'BFLEX2010 Cross sectional input The format of the card is as follows:',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'DYNCONT': {
    description: '. . . . . . . . . . . . . . . . . . . . . 22, 67',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'DYNRES_': {
    description: '. . . . . . . . . . . . . . . . . . . . . .22, 68',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ELCON': {
    description: '. . . . . . . . . . . . . . . . . . . . . . . . . 22, 71',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ELDAMP': {
    description: '. . . . . . . . . . . . . . . . . . . . . . . 22, 79',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ELECC': {
    description: '. . . . . . . . . . . . . . . . . . . . . . . . . 22, 82 – BEAM . . . . . . . . . . . . . . . . . . . . . . . . . . . . 82 – RADIUS . . . . . . . . . . . . . . . . . . . . . . . . . . 85',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ELHIST': {
    description: '. . . . . . . . . . . . . . . . . . . . . . . . . . . . 88',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ELLOAD': {
    description: '. . . . . . . . . . . . . . . . . . . . . . . .22, 90',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ELMASS': {
    description: '. . . . . . . . . . . . . . . . . . . . . . . . 22, 91 – BEAM . . . . . . . . . . . . . . . . . . . . . . . . . . . . 80 – CONTACT . . . . . . . . . . . . . . . . . . . . . . . 80',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ELORIENT': {
    description: '. . . . . . . . . . . . . . . . . . . . . 22, 92',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ELPROP': {
    description: '. . . . . . . . . . . . . . . . . . . . . . . .22, 95',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '100': {
    description: '1 near4',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '101': {
    description: 'Tee-structure Templatestructure 2.28',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '102': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '105': {
    description: '2.20.7',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '106': {
    description: 'where Fy and Fz are the spring forces in the y- and z-directions, respectively. The mo- ment about the x-axis is calculated as Mx =mx',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '107': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '109': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '110': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '111': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '112': {
    description: 'WD: Dry mass (unit: ML−1).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '115': {
    description: 'be introduced in the lateral transverse direction. Optional. Default value: 0. (unit: FL−2).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ENVRES_': {
    description: '- Envelope results By the ENVRES cards, user select results for a given range of element or nodal nodes will be stored on the .raf ﬁle on a format that enable envelope results to be presented on',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '117': {
    description: '2.21',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '118': {
    description: '2.21.2',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'FATPROP': {
    description: '. . . . . . . . . . . . . . . . . . . . . 23, 119',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '119': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '120': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'GEOM': {
    description: '. . . . . . . . . . . . . . . . . . . . . . . . .23, 121',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '121': {
    description: '2.23',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'HEAD': {
    description: '. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 23',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '123': {
    description: '2.24',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'INISTR': {
    description: '. . . . . . . . . . . . . . . . . . . . . . . . 23, 123',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'MATERIAL': {
    description: '. . . . . . . . . . . . . . . . . . . .23, 124',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '124': {
    description: 'N times with element increment m. To summarise:',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'PIPE31': {
    description: ', HSHEAR353, 363, 364)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '126': {
    description: '• An isotropic dynamic model including static and dynamic friction coeﬃ- cients, user deﬁned elastic stiﬀness and a dynamic model describing the',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '364': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '127': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '129': {
    description: '0 0',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '131': {
    description: '.9 # #',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '132': {
    description: 'not the force. Consequently, the ﬁnal equilibrium state will not be inﬂuenced by the stiﬀness modiﬁcation. For cont152, the ﬁrst material point on the negative side is',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '133': {
    description: '2.26.7',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '135': {
    description: 'mm Number of wires - inner tensile',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '139': {
    description: 'For other contact element types, the local x-direction coincides with the current pipe axial direction, and the local y-direction is determined by the cross product of the',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '140': {
    description: '2.26.11',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '142': {
    description: 'thickness of the softest material at the interface. Then b is the wire width and cp is a penalty factor to avoid surface penetration. cp = 10 normally suﬃce, however,',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '143': {
    description: 'MU: Friction coeﬃcient. Default value: 0.135 Note that during manual modelling,',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '148': {
    description: 'no scaling with µFz is applied. Likewise, the x-rotation curve is to be deﬁned as',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '149': {
    description: '# name',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '150': {
    description: 'MPa Contact stiﬀness',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'MOVE_GROUP': {
    description: '. . . . . . . . . . . . . . . . . . . .23 move_group . . . . . . . . . . . . . . . . . . . . . . . 150 N',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'NOCOOR': {
    description: '. . . . . . . . . . . . . . . . . . . . . .23, 150',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'NODPROP': {
    description: '. . . . . . . . . . . . . . . . . . . . 23, 153',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '153': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'NOORIENT': {
    description: '. . . . . . . . . . . . . . . . . . . 23, 155',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '155': {
    description: '2.30',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'PELOAD': {
    description: '. . . . . . . . . . . . . . . . . . . . . . 23, 156',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '156': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'PILOAD': {
    description: '. . . . . . . . . . . . . . . . . . . . . . . 23, 157',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '157': {
    description: 'where: fz',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'REEL': {
    description: '. . . . . . . . . . . . . . . . . . . . . . . . . .23, 159',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '159': {
    description: 'sure 3. For all layers (element groups) surrounded by an internal pressure, both external',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'TABLE': {
    description: '. . . . . . . . . . . . . . . . . . . . . . . . . . . . 161',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '161': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'THIST': {
    description: '. . . . . . . . . . . . . . . . . . . . . . . . . 23, 163',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '163': {
    description: '2.35',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '164': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'TIMECO': {
    description: '. . . . . . . . . . . . . . . . . . . . . . 23, 165',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '165': {
    description: '# #',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'TLOAD': {
    description: '. . . . . . . . . . . . . . . . . . . . . . . .23, 166 V',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '166': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'VISRES': {
    description: '. . . . . . . . . . . . . . . . . . . . . . . .23, 167',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '167': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '170': {
    description: '3 Bflex2010post Report Generator',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '171': {
    description: '3.2 Input data',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'NOPLOT': {
    description: '. . . . . . . . . . . . . . . . . . . . . 171, 196',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'IPPLOT': {
    description: '. . . . . . . . . . . . . . . . . . . . . . . . . . . 172',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '172': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ELPLOT': {
    description: '. . . . . . . . . . . . . . . . . . . . . .173, 200',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '173': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'GNPLOT': {
    description: '. . . . . . . . . . . . . . . . . . . . . 176, 201',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '176': {
    description: '3.6',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'GLPLOT': {
    description: '. . . . . . . . . . . . . . . . . . . . . 177, 203',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '177': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'FAPLOT-': {
    description: 'Fatigue calculation The purpose of the FAPLOT option is to allow the user to perform fatigue damage calculation for all visual nodes in the structure and where the stress components xx, yy',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '180': {
    description: 'mm BS maximum diameter',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'NRPLOT-': {
    description: 'Nodal Reaction PLOTs The purpose of the NRPLOT option is to allow the user to sum the element forces acting on a certain node and follow this node as function of history. The total force is',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'RSPLOT': {
    description: '. . . . . . . . . . . . . . . . . . . . . . . . . . 182 S',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '182': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ENPLOT-': {
    description: 'ENvelope PLOTs The ENvelope PLOT format is:',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '183': {
    description: '3.11',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'BFPOST': {
    description: '. . . . . . . . . . . . . . . . . . . . . . . . . . 183',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'GRPLOT': {
    description: '. . . . . . . . . . . . . . . . . . . . . . . . . .184 H',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '184': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '186': {
    description: '4 Dynpostb Report Generator',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '187': {
    description: '4.2 Input data to Dynpostb',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'MXPLOT': {
    description: '1 0.3 1',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'DYNPLOT': {
    description: '- CHANGED - Optional parameter for several plots to',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '188': {
    description: '"screening_225_9" Typical result ﬁle:',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '189': {
    description: '5 Pflex Input Guide',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '192': {
    description: '6 Boundary input guide',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '194': {
    description: '7 Lifetime input guide',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '196': {
    description: '8 Bpost Report Generator',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'NOPLO2': {
    description: '. . . . . . . . . . . . . . . . . . . . . . . . . . 198',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '198': {
    description: '# # nodal plot',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '200': {
    description: '8.5',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '201': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '203': {
    description: '8.7',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '205': {
    description: '9 Examples',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '206': {
    description: 'Table 9.1: CROSS-SECTION PARAMETERS - 4 INCH RISER ID = 101.6 MM No',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '207': {
    description: '9.2.3 Modelling',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '208': {
    description: 'Table 9.3: ALTERNATIVE MODELLING PROCEDURES - 4 INCH RISER No',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '209': {
    description: 'Figure 9.1: Comparing σzz with respect to diﬀerent contact algorithm at internal pres- sure 20MPa',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '213': {
    description: '9.3 Stress behaviour of ﬂexible riser at the platform hang-oﬀ',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '214': {
    description: 'Table 9.4: INPUT PARAMETERS - SIMULATION OF FLEXIBLE RISER Parameter',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '215': {
    description: '(a) Stress distribution - helix model (b) Stress distribution - moment model',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '216': {
    description: '(a) Comparison of curvature distributions (b) Comparison of axial stress distributions',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '217': {
    description: '9.4.2 Input data',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '218': {
    description: 'The left end was ﬁxed in translation and torsion rotation whereas the right end was free to move in the horizontal direction and to rotate in torsion.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '219': {
    description: 'Figure 9.11: Components of stress The test and numerical results in terms of failure/no failure and end rotation are pre-',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '220': {
    description: '(a) End torsion rotation versus time (b) Stress versus time',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '222': {
    description: 'The midpoint centrenode was ﬁxed in all directions. Figure 9.15: RUC Model for tensile armour lateral buckling',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '227': {
    description: '10 Searching for Errors',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '228': {
    description: '11 Changelists',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'CHANGES': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '229': {
    description: '11.2 Changes in version 3.2.0',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '231': {
    description: '11.3 Changes in version 3.1.1',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '232': {
    description: '11.4 Changes in version 3.1.0',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '236': {
    description: '11.5 Changes in version 3.0.9',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '238': {
    description: 'Bibliography Berge, S., Engseth, A., Fylling, I., Larsen, C., Leira, B., Nygaard, I., and Olufsen, A.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '240': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'CROSSGEO': {
    description: 'of type BFLEX. . . . . . . . . . . . . . . . . . . . . . . 51',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '104': {
    description: 'Figure 2.25: Deﬁning maximum allowable incremental pipe contact point displacement by CONTPAR2=VALUE',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '108': {
    description: '.8 mm Pressure spiral area',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '128': {
    description: 'for reverse axial loading. Value can also be between 2.0-3.0, corresponding to values 0.0-1.0 in terms of hardening.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '160': {
    description: '11 6.5',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '210': {
    description: 'Poisson’s ratio 0.3',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '211': {
    description: 'Figure 9.4: Zoom of moment curvature obtained by alternative modelling procedures versus test data',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '212': {
    description: 'Figure 9.6: Zoom of the corresponding axial friction wire stress at outer ﬁbre in inner armour during one curvature cycle',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '221': {
    description: '(a) Pipe conﬁguration at the ﬁnal stage (b) Process of tensile armour buckling',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'RUC': {
    description: 'Model for tensile armour lateral buckling . . . . . . . . . . . .',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '223': {
    description: '(a) Bending stress versus time (b) Post buckling stress distribution',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'CROSS-SECTION': {
    description: 'BOUNDARY DATA Dummy for CTYPE=THER. 60',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ALTERNATIVE': {
    description: 'MODELLING PROCEDURES - 4 INCH RISER .',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'INPUT': {
    description: 'PARAMETERS - SIMULATION OF FLEXIBLE RISER . .',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'FLEXIBLE': {
    description: 'PIPE DATA . . . . . . . . . . . . . . . . . . . . . . . . .',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '224': {
    description: 'Table 9.5: FLEXIBLE PIPE DATA Part',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'TEST': {
    description: 'CONDITIONS . . . . . . . . . . . . . . . . . . . . . . . . . .',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '225': {
    description: 'Table 9.6: TEST CONDITIONS Case',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'NUMERICAL': {
    description: 'RESULTS VERSUS TEST RESULTS IN TERMS OF',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'FAILURE': {
    description: '/NO FAILURE . . . . . . . . . . . . . . . . . . . . . . . .',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '226': {
    description: 'Table 9.8: FLEXIBLE PIPE DATA Part',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '2010': {
    description: '. • Improve bflex with respect to feedback from existing users. The new computer program system is termed Bflex2010.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '2013': {
    description: '), (Dai et al., 2017), (Dai et al., 2020) and (Sævik, 2 14a). 11 1.2',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ASCII': {
    description: '. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 22',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'BFLEX2010POST': {
    description: '. . . . . . . . . . . . . . . . . 170 – BFPOST . . . . . . . . . . . . . . . . . . . . . . . . 183 – ELPLOT . . . . . . . . . . . . . . . . . . . . . . . . 173',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'PFLEX': {
    description: '. . . . . . . . . . . . . . . . . . . . . . . . . . . . 189',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'BOUNDARY': {
    description: '. . . . . . . . . . . . . . . . . . . . . . 192',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'LIFETIME': {
    description: '. . . . . . . . . . . . . . . . . . . . . . . . 194',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'BPOST': {
    description: '. . . . . . . . . . . . . . . . . . . . . . . . . . . .196 – ELPLOT . . . . . . . . . . . . . . . . . . . . . . . . 200 – General . . . . . . . . . . . . . . . . . . . . . . . . . . 196',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'EXAMPLE': {
    description: ': # name',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '1992': {
    description: ') and supported by the oil industry through several industry and joint industry projects until now. The latest developments ﬁnalized in 2019 were related to enabling lateral buckling calculations of deep water risers.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ITCODE0': {
    description: 'and ITCODE1, see Eq. (2.3) and Section 2.20.14. These models are linked to the PIPE52 beam element and the HSHEAR352 sandwhich beam element. In both cases, the axisymmetric stresses and layer contact pressures are found by applying the',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ITCODE31': {
    description: 'mcm and ITCODE1 sbm models, leading to improved accuracy in fatigue prediction, see (Sævik, 2011). Then in order to enable more ﬂexible modelling features, Bflex2010 was developed,',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'FLEXCROSS': {
    description: '. . . . . . . . . . . . . . . . . . . . . . . 53',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'HSHEAR363': {
    description: '3D ﬂexible',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'HCONT473': {
    description: 'considers contact between HSHEAR353 and HSHEAR363 or HSHEAR364, however, also including their respective centreline axial and torsion motions in the rel- ative displacement and friction. The element allows for arbitrary large displacement',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'TACT': {
    description: 'in addition to the desired material properties, see Section 2.20.12, Section 21 2.20.13, Section 2.20.11, Section 2.26.2, Section 2.26.1 and Section 2.26.12.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'FRICONTACT': {
    description: '. . . . . . . . . . . . . . . . . . . . 140',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'SHEAR2HELIX': {
    description: '. . . . . . . . . . . . . . . . . . . 111',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'CODE0': {
    description: 'as referred to above. Both old (default) or new friction models are avail- able.Linked to the FLEXCROSS automatic ﬂexible pipe modelling. • Repated Unit Cell (RUC) modelling based on ITCODE1 as referred to above.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'CROSS': {
    description: 'automatic ﬂexible pipe modelling. • Repated Unit Cell (RUC) modelling based on combining HSHEAR364 and HCONT464 elements for cylindric layers and pressure spirals/tapes.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'HEAR353': {
    description: 'with HCONT463 or HCONT453 to establish sbm model for tensile armour layers. Both old (default) and new friction model are available. Linked to the 353FLEXCROSS automatic ﬂexible pipe modelling. For lateral buckling',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'HCONT453': {
    description: '3D Armour-',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'SHEARHELIX': {
    description: '. . . . . . . . . . . . . . . . . . . . .110',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'HCONT454': {
    description: '3D Armour-',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'HEAR364': {
    description: 'or HSHEAR363 with HCONT464 for cylindric layers and pressure spi- rals/tapes. Then combining HSHEAR353 with HCONT463 or HCONT453 for helix layers. Several friction models are available. If sideways contact are deemed',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'CROSSECTION': {
    description: '. . . . . . . . . . . . . . . . 22, 52 – 353FLEXCROSS. . . . . . . . . . . . . . . . . .57 – BENDSTIFF. . . . . . . . . . . . . . . . . . . . . .61',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ENVRES_E': {
    description: '. . . . . . . . . . . . . . . . . . . 23, 118',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ENVRES_N': {
    description: '. . . . . . . . . . . . . . . . . . . 23, 117',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ENVRES_I': {
    description: '. . . . . . . . . . . . . . . . . . . . 23, 118',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'TYPE': {
    description: ': The analysis type which may be STATIC or DYNAMIC .',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'NODID': {
    description: ': Node ID number j. RO: Outer radius at node j (unit: L).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'DOF': {
    description: 'eps-unit sigma-unit',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'MASTERNODE': {
    description: ': Master node number at which the applied boundary condition is re- ferred. Only for SPECIAL.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'XANG': {
    description: ': Tait–Bryan angle around local x axis, applied to deﬁne the orientation of the applied boundary condition measured relative to the local system of the master node. Only for SPECIAL (unit: rad).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'YANG': {
    description: ': Tait–Bryan angle around local y axis, applied to deﬁne the orientation of the applied boundary condition measured relative to the local system of the master node. Only for SPECIAL (unit: rad).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ZANG': {
    description: ': Tait–Bryan angle around local z axis, applied to deﬁne the orientation of the applied boundary condition measured relative to the local system of the master node. Only for SPECIAL (unit: rad).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'NODINC': {
    description: ': Nodal increment.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'REPEAT': {
    description: '4 4 2.26',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'HIST': {
    description: ': Load history number.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'DIR': {
    description: 'has value',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'NODE': {
    description: ': id of node. X:',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'LOAD': {
    description: ': Load for ﬁrst element.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'NODE2': {
    description: ': Last node ID',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'LOAD2': {
    description: ': Load for last element. Linear load interpolation is applied for the intermediate elements. If the REPEAT command is introduced then the previous sequence of load generation',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '3001': {
    description: '0 0',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'CTYPE': {
    description: ': Cross-section layer type identiﬁer (character string of length 4). In addition to the same layer types for FLEXCROSS, a TAPE representation is allowed for',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'PDTYPE': {
    description: ': Type of contraint equation. Allowed types are:',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'DISPVAL': {
    description: ': Prescribed displacement value (unit: L for dof 1-3, R for dof 4-6). The dispacement value is multiplied with the time dependent load factor',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'HISTNO': {
    description: ': History id, specifying the time dependent load pattern. See Section 2.35.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '1041': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'SLNOD': {
    description: ': Node id of the prescribed (slave) node.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'SLDOF': {
    description: ': Slave dof number. 34',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'MNOD1': {
    description: ': id for the master node.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'MDOF1': {
    description: ': Master dof number. C1:',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'SLAVEINC': {
    description: ': Nodal increment for slave.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'MASTINC': {
    description: ': Nodal increment for master(s).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '1001': {
    description: 'Dof 1 Maxima Statistics',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'PDTYP': {
    description: ': Type of constraint, can have values LOCAL or GLOBAL.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'THIST0': {
    description: ': Time history number for C0, refering to the deﬁnition of the time dependent load factor, see Section 2.35.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'MNOD': {
    description: ': id for the master node.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'MDOF': {
    description: ': Master dof number. C1:',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'THIST1': {
    description: ': Time history number for C1, refering to the deﬁnition of the time dependent load factor, see Section 2.35.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'IGAP': {
    description: ': Control parameter used to control contact element features depending on con- tact element type. For cont164 the appropriate values are IGAP ≥0 or IGAP < 0. If IGAP ≥0',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'GRPNAME': {
    description: ': Name of the contact element group.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'MASTERNAME': {
    description: ': Name of the master element group. 35',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'SLAVENAMEI': {
    description: ': Name of the slave element group or the name of a contact surface, see the COSURFPR command. If the element type of the contact element group is sea150, then the master group shall have the same name as the sea group, and',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'IS1': {
    description: ': First slave element in contact range. Dummy for hcont and cont152 elements.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ISN': {
    description: ': Last slave element in contact range. Dummy for hcont and cont152 elements. Search for contact is carried out between IS1 and ISN. TX: Time at which the contact elements are to be activated in the local x direction.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'MAXIT': {
    description: ': Maximum number of iterations. Must be given if STEPTYPE is given.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '501': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '600': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '1000': {
    description: '1e5',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '10000': {
    description: '1 50',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '341': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '441': {
    description: '1 -1',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '241': {
    description: 'D',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'NDIM': {
    description: ': Dimension of analysis: 3 : 3-dimensional.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ISOLVR': {
    description: '=1. The number of accepted eigenvalues and the relative error for each eigenvalue are printed to the log ﬁle. The maximum number of eigenvalue iterations is for the time being set',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'NPOINT': {
    description: ': Number of integration points around the cross section. This is used both for the pipe non-linear material elements and for the visual model meshing.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'IPRINT': {
    description: ': Print parameter One or two digits can be applied to set print of model infor- mation to output ﬁle (.bof), and print of timestep and iterations to log ﬁle (.blf) and print to screen. In particular print of time and iteration information can be',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'CONR': {
    description: ': Convergence radius. Recommended value is 10−5–10−7. Overrules the global convergence radius from the CONTROL card in Section 2.6. Must be given if',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'GAC': {
    description: ': Acceleration of gravity (unit: LT−2) 38',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ISTRES': {
    description: ': Start procedure parameter which may have the following values: STRESS-',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'FREE': {
    description: ', RESTART, EIGEN or AUTOSTART. STRESSFREE means that the ini- tial conﬁguration is stressfree. RESTART means restart from a previous analysis.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'IRESTP': {
    description: ': Load step at which the eigenvalues are wanted.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'NEVAL': {
    description: ': Number of eigenvalues wanted. If a negative number is given, the eigenvalues are animated from irestp on the raf ﬁle',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'IN1PIP': {
    description: ': The ﬁrst pipe element ID number at the start of the catenary.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'RAMPLE': {
    description: ': Vessel ramp length (unit: L).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'IN2PIP': {
    description: ': The last pipe element ID number at the vessel end.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'INCPIP': {
    description: ': The node increment along the element segment (normally 1).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'NROLLS': {
    description: ': Number of roller stations along stinger.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ICATEN': {
    description: ': Catenary parameter.. 2 :',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'IVSNOD': {
    description: ': Vessel pipe node id (if relevant), i.e. the pipe node where the pipe is termi- nated in the tensioner. In order to move associated vessel model nodes the same',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'DEPAN': {
    description: ': Vessel departure angle (unit: R).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'FREEB': {
    description: ': Vessel freeboard (unit L). See Fig. 2.7',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'RAMPAN': {
    description: ': Vessel ramp angle (unit: L).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'STIRAD': {
    description: ': Vessel stinger radius R (unit: L).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'KPTDP0': {
    description: '−L Figure 2.6: Position of pipe in free span analysis (ICATEN = 0). Figure 2.7: Vessel deﬁnition.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'SEABDGRP': {
    description: ': Name of seabed element group.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'STINGERGRP': {
    description: ': Name of stinger contact element group (may be NONE for e.g. J-lay).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'VESSELGRP': {
    description: ': Name of vessel group (may be NONE). This parameter is used to iden- tify whether there is a vessel and which elements that are used to represent the',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '440': {
    description: '1 1',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'MLINEID': {
    description: ': Material ID of the route line, i.e. the center line if several lines are given.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'KP1': {
    description: ': Starting point of material properties (KP value).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'KP2': {
    description: ': End point of material properties (KP value).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'MNAME': {
    description: ': Material name.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '60000': {
    description: 'soil1 2.8',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'CONAME': {
    description: ': Name of contact surface.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'COFILE': {
    description: ': Name of the ascii dataﬁle containing the seabed geometry description.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'NLINES': {
    description: ': Number of seabed lines in contact surface ﬁle. Must be an odd number 1,3,5 etc. A positive number of lines means that the data is on the standard format in Section 2.8.1.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'KP0': {
    description: ': KP-value for 1. point in contact surface dataﬁle, i.e. the KP-value for the ﬁrst data line in COFILE.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'XSTART': {
    description: ', YSTART and ANGSTART parameters.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'YSTART': {
    description: ': y-coordinate at start of contact surface relative to the global coordinate system (unit: L).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ANGSTART': {
    description: ': Angular position angle θ, see Fig. 2.28(unit: R).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'MLINEIDN': {
    description: ': Material ID of additional seabed lines. To be able to apply several seabed lines, they must also be deﬁned in the contact surface ﬁle.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'IDLINE': {
    description: ': Optional. A number between 1 and NLINE, specifying that this seabed line is the only one to be used. The ﬁrst seabed line is the center line coinciding with the route line, and any succeeding',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'NAME': {
    description: ': Name of the table.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'NINTER': {
    description: ': Number of intervals within the segment.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'CURVCODE': {
    description: ': Curve code, given as a character string which may have the following 47',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'INTERFACE': {
    description: ': The local interface number. Interface numbers higher than 1 are used to describe holes in a geometry.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '0': {
    description: '2e8 2e8 0.2',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '360': {
    description: '1 #',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'CCURVE': {
    description: ': Curve code, given as a character string of length 2. The legal options are: S :',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ICODE': {
    description: '̸= 1 The stress inside the cross sectional area is not calculated. Transverse curvature parameter The transverse curvature parameter is used to avoid zero stiﬀness in the transverse direction (TRCURP). The default value is',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'MYPIPENAME': {
    description: ': Name of BFLEX2010 cross sectional geometry.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '353FLEXCROSS': {
    description: '. . . . . . . . . . . . . . . . . . . .57 A',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'BENDSTIFF': {
    description: '. . . . . . . . . . . . . . . . . . . . . . . .61',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'NLBENDSTIFF': {
    description: '. . . . . . . . . . . . . . . . . . . . 62',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'BENDSTIFF-BEND': {
    description: '. . . . . . . . . . . . . . . . 61',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'NLBENDSTIFF-BEND': {
    description: '. . . . . . . . . . . . . 62',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ENDFAC': {
    description: ': end shear spring stiﬀness factor for element type HSHEAR352. By setting a negative value, all elements will have the same friction spring characteristis. The',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'EL1GRP': {
    description: ': This is a text string to be speciﬁed either as LAY1-LAY2-ELGRPNAME1-',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'CFATFL': {
    description: 'AREA IT',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'IFRIC': {
    description: ': friction stress control parameter: 0 :',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'DISFAC': {
    description: ': Maximum relative displacement in shear spring (last point on shear spring material curve, see old Bﬂex).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'FORFAC': {
    description: ': Maximum non dimensional force (last point on shear spring material curve, see old Bﬂex).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'GEOFAC': {
    description: ': Scaling factor for the geometric stiﬀness. A value greater than 1.0 can be applied to stabilize the pipe-bellmouth interaction behaviour. Optional, default',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'HSHEAR352': {
    description: '3D ﬂexible',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'TIMEINI': {
    description: 'ILAINT ILAEXT IELBFL FIMOD CONTDEN NLAYGRP',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ITCODE': {
    description: '= 32 with reference to Section 2.10.1, however, making use of KSHEAR as the value of k in Eq. (2.6). Care should be taken with respect to not selecting a too low KSTICK as noted above.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ILAEXT': {
    description: ': The interface number (outside outer layer = number of layers) where external pressure is applied.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'IELBFL': {
    description: ': Element where BOUNDARY/PFLEX model is located (dummy as per now as the BOUNDARY/PFLEX functionality only exist for FLEXCROSS, see Sec-',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'FIMOD': {
    description: ': Angle position of BOUNDARY model (dummy as per now as the BOUND-',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'CONTDEN': {
    description: ': Density of content',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'NELGR': {
    description: ': Number of element groups related to core and tension armour layers',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'EL2GRP': {
    description: ': Name of element group 2. Representing tensile armour layer 1. Either a',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'PIPE52': {
    description: '3D ﬂexible',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ELNGRP': {
    description: ': Name of element group N representing tensile armour layer N.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'CARC': {
    description: '5.0e-3 steel_316',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'THER': {
    description: '6.0e-3 rubber',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ZETA': {
    description: '6.4e-3 steel_110',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'SPIR': {
    description: ': Pressure spiral',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'THET': {
    description: ': Theta type pressure spiral',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'TCLI': {
    description: ': Clip used together with theta',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'CCLI': {
    description: ': C-clip',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'TENS': {
    description: '2.0e-3 steel_190',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'MATNAME': {
    description: ': For the contact element cont126: Name of contact surface. See the',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'FRIC': {
    description: 'LAYANG',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'LAYANGLE': {
    description: ': Lay angle (unit: deg).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'RNUM': {
    description: 'TEMP NLMAT CCODE',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'TEMP': {
    description: ': element temperature (unit: oC)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'NLMAT': {
    description: ': Non-linear material curve name.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'CCODE': {
    description: '̸=MANUAL. (Unit: L4).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'AREA': {
    description: ': Cross section area of tendon. Dummy for CTYPE=THER, and if CCODE̸=MANUAL. (Unit: L2).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'INY': {
    description: 'IKS WIDTH 61',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'IKS': {
    description: ': Inertia moment about weak axis of tendon. Dummy for CTYPE=THER, and if',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'WIDTH': {
    description: ': Width of tendon. Dummy for CTYPE=THER, and if CCODE=MANUAL. (Unit: L).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'PRLOC': {
    description: ': The local pressure on the inside of the layer. Optional and requires that',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'NLAYER': {
    description: '. (Unit: FL−2) Note: If NLMAT̸=NONE, material type for this group must be ELASTOPLASTIC. Note: If CCODE=MANUAL the remaining cross-section parameters must be speciﬁed',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'DATA': {
    description: 'group, the program will calculate the cross-section data based on the boundary curve given. The remaining data are therefore dummy in this case. Note: The contents of the ﬁle CFATFL are described in Section 2.10.7.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ILAINT': {
    description: ': The interface number (inside inner layer = 1) where internal pressure is applied',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ARY': {
    description: '/PFLEX functionality only exist for FLEXCROSS, see Section 2.10.1) (unit: deg)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'NLAYGRP': {
    description: ': Number of layer element groups applied to describe the cross-section',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ELGRPNAME2': {
    description: 'or LAY1-LAY2-ELGRPNAME1. LAY1 and LAY2 refers to the cross-section layer number starting from the inside. If one elgrpname reference is given it must refer to a structural element group (either hshear353 for the ten-',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ELGROUPNAME1': {
    description: 'is a contact element group, this will be taken from the next layer. In the opposite case this will be taken from the current layer. The layer numbering starts from the inside (LAY1=1=normally carcass) For the pressure',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'TAPE': {
    description: '1.0e-3 glass_fil',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '1-1-': {
    description: 'carcass',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '3-3-': {
    description: 'zeta',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '2-4-': {
    description: 'seal-contactseal',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '5-5-': {
    description: 'interlayercontact1-tensile1',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '6-6-': {
    description: 'strutape-tapeinwardcontact',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '7-7-': {
    description: 'interlayercontact2-tensile2',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '8-8-': {
    description: 'outersheath',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '9-9-': {
    description: 'bucklingtape # # CTYPE',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '87': {
    description: '1 0.0 none',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'MANUAL': {
    description: ': Time stepping is carried out as normal, but given MAXIT overrules the one given in the CONTROL card.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'NONE': {
    description: ': usual',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '-38': {
    description: '6 Antiwear',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'FLEXT': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '38': {
    description: '65 0.0 none',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '88': {
    description: '0 0.0 none',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '83': {
    description: '1 0.0 none',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'MYTAPE': {
    description: 'NONE 0.00',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'NBNOD': {
    description: ': Local node number in the bending stiﬀener deﬁnition. 63',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'NODEID': {
    description: 'Group name 1 Group name 2',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'RKS': {
    description: ': External wrapping fraction η (Range: 0-1). Hence the hydrodynamic diameter that will be applied to calculate drag and mass forces will be: D = (1 −η)Dop +',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'NOTH': {
    description: ': Number of integration segments in thickness direction.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'MATIN': {
    description: ': Material name for inside bending stiﬀener',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'MATOUT': {
    description: ': Material name for outside bending stiﬀener 2.10.7',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'NUSMOD': {
    description: 'NFDPO1 R1',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'SIGUTS': {
    description: ': Ultimate stress for mean stress correction (unit: F/L2) Then a number of NFDPO lines on the format:',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'NFDPO1': {
    description: 'The number of points in the fatigue S-N diagram for longitudinal failure mode. R1 The R-ratio deﬁned as σmin/σmax for the S-N-diagram for all values of IGERB',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'IGERB1': {
    description: 'Method for taking the mean stress into account for longitudinal failure mode. = 0 No mean stress is taken into account. Stress range calculated considering longitudinal stress range for tensile armour, von Mises for pressure armour.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'INTCO1': {
    description: 'Method for interpolation in S-N diagram: = 1 Both stress and N in log scale. = 2 Stress in linear scale, N in log scale.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'SCF1': {
    description: 'Stress concentration factor longitudinal failure mode.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'NFDPO2': {
    description: 'R2',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'IGERB2': {
    description: 'Method for taking the mean stress into account for transverse failure mode as deﬁned for IGERB2 above.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'INTCO2': {
    description: 'Method for interpolation in S-N diagram: = 1 Both stress and N in log scale. = 2 Stress in linear scale, N in log scale.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'SCF2': {
    description: 'Stress concentration factor transverse failure mode. 66',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'SCFMAX': {
    description: 'Stress concentration factor to be used for the mean axial stress (unit: -).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'SCFMBY': {
    description: 'Stress concentration factor to be used for the mean normal curvature stress (unit: -).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'SCFMBZ': {
    description: 'Stress concentration factor to be used for the mean transverse curvature stress (unit: -).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'SCFDAX': {
    description: 'Stress concentration factor to be used for the dynamic axial stress (unit: -).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'SCFDBY': {
    description: 'Stress concentration factor to be used for the dynamic normal curvature stress (unit: -).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'SCFDBZ': {
    description: 'Stress concentration factor to be used for the dynamic transverse curvature stress (unit: -). By specifying the last 6 parameters the SCF1 and SCF2 parameters will be overruled.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'POINT': {
    description: ': The point number =1- .... Number of points.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'SRANGE': {
    description: ': Stress range (in increasing order), starting with the minimum threshold value (unit: F/L2)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'NCYFAL': {
    description: 'Corresponding number of cycles to failure. Comment: Only numeric values in the fatigue data ﬁle.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'IBERGB1': {
    description: 'INTCO1 SCR1',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'IBERGB2': {
    description: 'INTCO2 SCR2 SIGUTS 2 2',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '400': {
    description: '12 14.1',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '1030': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '1170': {
    description: '.645142 7.00E+04 2.11',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'MSTAT': {
    description: ': Parameter for choosing mass matrix type: 1 : Concentrated mass matrix.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ALPHA1': {
    description: ': Mass proportional damping factor, α1.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ALPHA2': {
    description: ': Stiﬀness proportional damping factor, α2.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ALPHA': {
    description: ': α in the HHT-α time integration method.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'BETA': {
    description: ': Tension/torsion coupling parameter β. For a tensile armour of a ﬂexible pipe with lay angle α and radius R, the strain due to centreline strain and torsion is:',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'GAMMA': {
    description: ': γ in the HHT-α time integration method.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'DYNRES_N': {
    description: '. . . . . . . . . . . . . . . . . . . . . . . .68 E',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'NODEID2': {
    description: ': ID of node 2 (optional, applies only for TYPE=4).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'DOF2': {
    description: ': DOF of node 2 (optional, applies only for TYPE=4). If the optional numbers NODEID2 and DOF2 are speciﬁed the relative displacements between the two nodes will be presented.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'DYNRES_E': {
    description: '. . . . . . . . . . . . . . . . . . . . . . . . 69',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ELID': {
    description: ': id of element. X:',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ELNOD': {
    description: ': Element node (max. 2 for pipe and spring, max. 1 for cont and body502)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'PIPE31-33': {
    description: ', SPRING137, BODY502 : element types with TYPE=1,2 1 :',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'CONT': {
    description: '. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 75',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'REFSYS': {
    description: ': Reference coordinate system for the result, which can be assigned the values',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'SYS': {
    description: '=GLOBAL. The local system for the spring and pipe element types coincide with the element system as deﬁned by the ELORIENT card in Section 2.19. 70',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'DYNRES_I': {
    description: '. . . . . . . . . . . . . . . . . . . . . . . . .70',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'RES_': {
    description: 'with the I option (integration station results) can be applied. For deﬁnition of integration points for tubular and rectangular csoss sections, see Fig. 2.17. The format is as follows:',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'IGAU': {
    description: ': Element integration station 1-3, 1 and 3 at element ends.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'FOR': {
    description: 'illustration.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'IPOINT': {
    description: ': Integration point number, max npoint see Section 2.6.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'IPOINT2': {
    description: ': Conceptual integration point. This applies to tensile armour models apply- ing either pipe52 or hshear364 which do not have a visual model of the local cross-section. It is then possible to decide where in the cross-section proﬁle (rect-',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '439': {
    description: '1 1 global',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ELGR': {
    description: ': Element group name.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ELTY': {
    description: ': Element type. The complete list of available element types is given in Table 2.1 below.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'NOD1': {
    description: 'can be used if the user wants to force another node system being eccentric relative to the autostart node system to be moved accordingly.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'NOD2': {
    description: ': Node id, optional depending of element type',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'NOD3': {
    description: ': Node id, optional depending of element type',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'NOD4': {
    description: ': Node id, optional depending of element type If the REPEAT command is introduced, the previous sequence is repeated: N:',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'NELINC': {
    description: ': Element increment.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'LINEAR': {
    description: '. . . . . . . . . . . . . . . . . . . . . . . . . . .126',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'PIPE33': {
    description: '3D beam constant axial',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ELASTOPLASTIC': {
    description: '. . . . . . . . . . . . . . . . 127',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'CODE': {
    description: '=0) See Section 2.10',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ELASTIC': {
    description: '. . . . . . . . . . . . . . . . . . . . . . . . . .127',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'COMPIPE42': {
    description: '3D beam constant axial',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'COMPIPE': {
    description: '. . . . . . . . . . . . . . . . . . . . . . 75, 98',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'RESULTANT': {
    description: '. . . . . . . . . . . . . . . . . . . . . .133',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'CABLE111': {
    description: '3D cable constant axial strain',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'CABLE': {
    description: '. . . . . . . . . . . . . . . . . . . . . . . . 75, 101',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'EPCURVE': {
    description: '. . . . . . . . . . . . . . . . . . . . . . . . .129 F',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'HYCURVE': {
    description: '. . . . . . . . . . . . . . . . . . . . . . . . 131',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'CONT126': {
    description: '3D Seabed contact element (x and y',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'SOILCONTACT': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'HYCRUVE': {
    description: '1 Local',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '130': {
    description: '16 #',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'CONT130': {
    description: '3D Bellmouth con- tact element',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'BELLMOUTH': {
    description: ': Bellmouth.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '137': {
    description: 'For the cont126 element type, the optional parameters must either consist of only',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'SPRING137': {
    description: '3D non-linear',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'GENSPRING': {
    description: '. . . . . . . . . . . . . . . . . 105, 149',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '152': {
    description: 'Z0: z-coordinate of local system.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'CONT152': {
    description: '3D Pipe in body el- ement',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'SEA150': {
    description: 'Sea element',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'SEA': {
    description: '. . . . . . . . . . . . . . . . . . . . . . . . . . . 78, 133',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'CONT164': {
    description: '3D Stinger contact element',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ROLLER': {
    description: '. . . . . . . . . . . . . . . . . . . . . . . . . . 102',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ISOCONTACT': {
    description: '. . . . . . . . . . . . . . . . . . . . 139',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ISOKXYCONTACT': {
    description: '. . . . . . . . . . . . . . . 140 L',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'HELIX231': {
    description: '3D elastic helix el- ement',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'HELIX': {
    description: '. . . . . . . . . . . . . . . . . . . . . . . . . . . . . .76',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ELAS-': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'TIC': {
    description: 'n-dir: CONTACT, - EPCURVE/',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '233': {
    description: '• Add command line option to run Pflex: Syntax: pﬂex.exe -n preﬁx',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'HELIX233': {
    description: '3D elastoplastic',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ELASTOPLAS-': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '234': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'HELIX234': {
    description: '3D elastic Sz ele- ment',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'SZHELIX': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '235': {
    description: '-n: avoid interactive entering of .bpi ﬁle name and controlling parameters. The program will take preﬁx.bpi as the input ﬁle.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'HELIX235': {
    description: '3D resultant Sz el- ement',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'RE-': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'SULTANT': {
    description: '2(3) Local',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '352': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '353': {
    description: 'flexcross, see Section 2.10.2: 1. For all layers (element groups) ⩾ilaext, the same external pressure must be speciﬁed. Extenal pressure will then be applied to the outer surface of ilaext,',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'HSHEAR353': {
    description: '3D ﬂexible',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '363': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'HSHEAR364': {
    description: '3D ﬂexible',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '437': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'HELSPR437': {
    description: '3D helix spring ele- ment',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'HELSRPING': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'HELSPRING': {
    description: '. . . . . . . . . . . . . . . . . . . . . . 150',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '453': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'LAYERCONTACT': {
    description: '. . . . . . . . . . . . . . . . 109',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '454': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '463': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'HCONT463': {
    description: '3D Armour-sheath contact element',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'FRICVISC': {
    description: '. . . . . . . . . . . . . . . . . . . . . . . . .142 G',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '464': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'HCONT464': {
    description: '3D Layer',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '473': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '502': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'BODY502': {
    description: '3D Body element',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'BODY': {
    description: '. . . . . . . . . . . . . . . . . . . . . . . . . 79, 100',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'SPRING': {
    description: '. . . . . . . . . . . . . . . . . . . . . . . . . . . . 76',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'HSHEAR': {
    description: '. . . . . . . . . . . . . . . . . . . . . . . . . . . 77',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'DOFS': {
    description: 'at each end of the corresponding helix. In addition 2 two internal DOFs are used to allow accurate description of the longitudinal slip process. The torsion DOFs 4 and 10 are dummy. However, if the model includes a thick-walled based modelling',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'HCONT': {
    description: '. . . . . . . . . . . . . . . . . . . . . . . . . . . . 78',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'HELSPR': {
    description: '. . . . . . . . . . . . . . . . . . . . . . . . . . . .78',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '340': {
    description: '1 1 # #',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '342': {
    description: '# n j k',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'GRNAME': {
    description: ': Element group name.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'BEAM': {
    description: '. . . . . . . . . . . . . . . . . . . . . . . . . . 80, 82',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'CONTACT': {
    description: '. . . . . . . . . . . . . . . . . . . . .80, 135',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'RALEIGH': {
    description: '. . . . . . . . . . . . . . . . . . . . . . . . . . 81',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ALFA1': {
    description: ': Rayleigh damping factor for mass matrix contribution.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ALFA2': {
    description: ': Rayleigh damping factor for material stiﬀness matrix contribution.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'UPDATE': {
    description: '=0 and can then not be changed during analysis restarts. ALFA1 and ALFA2 can however be changed if UPDATE=1 is applied. For two-noded elements, the same damping factors are applied at both element ends. Note that ALFA1 and ALFA2 are',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ELTYP': {
    description: ': Type of element, which may have the following values:',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'RADIUS': {
    description: '. . . . . . . . . . . . . . . . . . . . . . . . . . . . 85',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'STINGER': {
    description: '. . . . . . . . . . . . . . . . . . . . . . . . . . 83',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ELEND': {
    description: ': Element end 1 or 2.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'XECC': {
    description: ': x-component eccentricity in element coordinates relative to the master node, see ex in Fig. 2.19 (unit: L).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'YECC': {
    description: ': y-component eccentricity in element coordinates relative to the master node (unit: L).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ZECC': {
    description: ': z-component eccentricity in element coordinates relative to the master node, see ez in Fig. 2.19 (unit: L).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ELINC': {
    description: ': ELement increment.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '3000': {
    description: '1 71.56',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'DZ2': {
    description: ': z-component eccentricity in element coordinates for the second roller end relative to the master node (unit: L).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'YPHI': {
    description: ': Orientation angle of the roller system relative to the element system, see ϕ in Fig. 2.19. Deﬁned as positive for rotation about the negative y-axis of the',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'DX1': {
    description: ': x-component eccentricity in element coordinates for the ﬁrst roller end relative to the master node (unit: L).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'DY1': {
    description: ': y-component eccentricity in element coordinates for the ﬁrst roller end relative to the master node (unit: L).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'DZ1': {
    description: ': z-component eccentricity in element coordinates for the ﬁrst roller end relative to the master node (unit: L).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'DX2': {
    description: ': x-component eccentricity in element coordinates for the second roller end relative to the master node (unit: L).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'DY2': {
    description: ': y-component eccentricity in element coordinates for the second roller end relative to the master node (unit: L).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'DYPHI': {
    description: '. If the parameter RADN is given, the stinger radius of curvature will be equal to DS divided by DYPHI between rollers i= 1 and i=2, and thereafter change linearly towards RADN between rollers i =N −1 and i =N.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'RADN': {
    description: ': Stinger radius of curvature between the two last rollers, i = N −1 and i = N. Linear interpolation of the curvature radius is then applied between rollers i = 2',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'PEAT': {
    description: 'card for ELECC STINGER, however, the RADIUS option has increased ﬂexibil- ity as the roller can rotation-symmetric about each of the three coordinate axes. The 86',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'IAXIS': {
    description: ': The element axis which the roller end eccentricity vectors is rotated about. The eccentricity vector for end 1 is deﬁned by DX1, DY1 and DZ1 and by DX2,',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'DPHI': {
    description: ': Constant angle increment for rotation about IAXIS=1,2 or 3. Positive rotation directions are deﬁned according to the right-hand rule (unit: rad).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ELIDN1': {
    description: ': The ﬁrst element ID of sequence n.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ELID11': {
    description: ': The ﬁrst element ID of sequence 1.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ELID12': {
    description: ': The last element ID of sequence 1. 90',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'HISTNO1': {
    description: ': The time history ID number for sequence 1.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ELIDN2': {
    description: ': The last element ID of sequence n.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'HISTNON': {
    description: ': The time history ID number for sequence n.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '300': {
    description: '12 8.3',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ELNR1': {
    description: ': First element ID number. T1: Temperature of ﬁrst element (unit: TE).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ELNR2': {
    description: ': Last element ID number. T2: Temperature of last element (unit: TE). Linear interpolation is applied for the intermediate elements.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'LOAD1': {
    description: '/LOAD2 is: 1 force in local x axis (unit: F)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'EULERANGLE': {
    description: '. In case of COORDINATES the remaining parameters have the following meaning:',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'INC': {
    description: ': Node increment',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'XINC': {
    description: ': x-coordinate/Tait–Bryan angle increment.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'YINC': {
    description: ': y-coordinate/Tait–Bryan angle increment.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ZINC': {
    description: ': z-coordinate/Tait–Bryan angle increment.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'COORDINATES': {
    description: '1 0',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '-10': {
    description: '-1e3',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '-15': {
    description: '41 0',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '-19': {
    description: '.75 # #',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '-20': {
    description: '# #',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'SHEARMODEL': {
    description: '. . . . . . . . . . . . . . . . . . . 112',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ELGRP': {
    description: ': Element group name.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'EPTYP': {
    description: ': Element property type as deﬁned above. The number and deﬁnition of the following parameters depend on the choice of element property type.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'FAX': {
    description: '=VALUE SCFMY=VALUE SCFMZ=VALUE]',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'RAD': {
    description: ': Helix radius (unit: L).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'CDR': {
    description: ': Radial drag coeﬃcient (unit: -).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'CDT': {
    description: ': Tangential drag coeﬃcient (unit: -).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'CMR': {
    description: ': Radial mass coeﬃcient (Normally 2.0 for circular pipes. This will result in an added mass of (RMADD −1.0)ρw',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '4D2': {
    description: ') (unit: -).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'CMT': {
    description: ': Tangential mass coeﬃcient (Must be ≥1.0. A value of 1.0 will result in no tangential added mass according to the above formula.) (unit: -).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ODP': {
    description: ': Outer diameter Dop (unit: L)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ODW': {
    description: ': External wrapping outer diameter Dow (unit: L)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '32D4': {
    description: 'op',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'PHIST': {
    description: ': External pressure and buoyancy mass history id.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'MHIST': {
    description: ': Dry mass history id number.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ELTIME': {
    description: '=VALUE: The activation time for the elasto-plastic material model is spec- iﬁed by VALUE, i.e. the elements behave elastically until VALUE is exceeded.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'AUTOPLAST': {
    description: '=VALUE: By specifying AUTOPLAST=1, the elements behave elas- tically until the proportionality limit is reached.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'VALUE': {
    description: '̸=1. Only available for compipe42, optional.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'SHEARA': {
    description: '=VALUE: Shear deformations with a shear rigidity (shear area times shear modulus) given by VALUE will be applied. An inﬁnite shear stiﬀness results for',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'SCFAX': {
    description: '=VALUE:',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'SCFMY': {
    description: '=VALUE:',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'SCFMZ': {
    description: '=VALUE:',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'RADE': {
    description: ': External radius where external pressure acts (unit: L).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'RADI': {
    description: ': Internal radius where internal pressure acts (unit: L).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'TCURV': {
    description: '=VALUE: The activation time for the bending model is speciﬁed by VALUE. Gives zero bending internal moments and stiﬀness for zero moment until VALUE',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'INSIDE': {
    description: ': Parameter where 1 means that the master is inside the slave group of larger diameter, and any other value means that the master is outside the slave group.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'CDZ': {
    description: ': Drag coeﬃcient for z-direction (unit: L2).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'COGY': {
    description: ': Local x-eccentricity from element origin to COG (unit: L).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'WDTHX': {
    description: ': X-rotation structural mass at COG (unit: ML2).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'WDTHY': {
    description: ': Y-rotation structural mass at COG (unit: ML2).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'WDTHZ': {
    description: ': Z-rotation structural mass at COG (unit: ML2).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'CDX': {
    description: ': Drag coeﬃcient for x-direction (unit: L2).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'CDY': {
    description: ': Drag coeﬃcient for y-direction (unit: L2).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'CDTHX': {
    description: ': Drag coeﬃcient for x-rotation at hydrodynamic center (unit: L5).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'CDTHY': {
    description: ': Drag coeﬃcient for y-rotation at hydrodynamic center (unit: L5).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'CDTHZ': {
    description: ': Drag coeﬃcient for z-rotation at hydrodynamic center (unit: L5).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'CMX': {
    description: ': Added mass coeﬃcient for x-direction (unit: L3).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'CMY': {
    description: ': Added mass coeﬃcient for y-direction (unit: L3).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'CMZ': {
    description: ': Added mass coeﬃcient for z-direction (unit: L3).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'CMTHX': {
    description: ': Added mass coeﬃcient for x-rotation at hydrodynamic center (unit: L5).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'CMTHY': {
    description: ': Added mass coeﬃcient for y-rotation at hydrodynamic center (unit: L5).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'CMTHZ': {
    description: ': Added mass coeﬃcient for z-rotation at hydrodynamic center (unit: L5).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'COGX': {
    description: ': Local x-eccentricity from element origin to COG (unit: L).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'COGZ': {
    description: ': Local x-eccentricity from element origin to COG (unit: L).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ICCHYD': {
    description: ': Hydrodynamic Coriolis-centripetal load switch, optional, default value: 0. 0 :',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'HCX': {
    description: ': Local x-eccentricity from element origin to hydrodynamic center, optional, de- fault value: COGX(unit: L).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'HCY': {
    description: ': Local y-eccentricity from element origin to hydrodynamic center, optional, de- fault value: COGY(unit: L).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'HCZ': {
    description: ': Local z-eccentricity from element origin to hydrodynamic center, optional, de- fault value: COGZ(unit: L).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'CONTPAR1': {
    description: '= is a character string and VALUE is an integer equal to either 0 or 1. For VALUE=0 which is default, an arbitrary number of contact elements may obtain contact with the same pipe element. If VALUE=1,',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'CONTPAR2': {
    description: '= is a character string and VALUE is an integer that deﬁnes the number of pipe elements a contact point is allowed to move along during one increment or iteration step before the contact is deactivated. For the',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'TPAR2': {
    description: '=VALUE option is currently only available for cont164 in combination with the ISOKXYCONTACT material type in Section 2.26.11. The CONTPAR1=VALUE option is applied in situations where two or more contact',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '103': {
    description: '20.0 #',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '40001': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '5301': {
    description: 'repeat 9',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'IREF': {
    description: ': Integer parameter for controlling the reference coordinate system applied for the material curves, the element displacements and the element forces. Further',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ICOULCNTR': {
    description: ': Integer parameter for controlling the COULOMB force scaling option speciﬁed by the GENSPRING material type in Section 2.26.16. Further descrip-',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'COULOMB': {
    description: ': The XNAME and PXNAME_I curves are scaled by the product of the local z-direction force and MUX, while the YNAME and PYNAME_I',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'STEP': {
    description: ': Load step at which the friction spring in local curvilinear helix system is acti- vated.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'CONMAT': {
    description: ': The name of the contact material describing the helix radial stiﬀness and the longitudinal helix friction properties',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'HELIXRAD': {
    description: ': helix radius (unit: L).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'LAYANG': {
    description: ': Helix lay angle α, positive according to the right hand rule as in Fig. 2.27',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ELSE': {
    description: ': Friction stress analysis is carried out.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'TTIME': {
    description: ': The time when friction is activated. Default: 0.0 Unit: s',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'NBACK': {
    description: ': Number of ordinary helix lengths used for turning direction, see Fig. 2.28.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'LPITCH': {
    description: '.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'NUSUAL': {
    description: ': Number of ordinary helix pitches between turning direction, see Fig. 2.28.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'DELTA': {
    description: ': The δ parameter according to Fig.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'LSTART': {
    description: ': The parameter lstart (unit: -), see Fig. 2.28. This parameter deﬁnes where in the curve the ﬁrst nodal point starts. If it is zero Bflex2010 assumes that the',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'CORRESPONDS': {
    description: 'WD: Dry weight (unit: ML−1). WS:',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'GAP0': {
    description: ': Initial gap. Default value =0.0, Unit: L. A non-zero value is only applicable',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'CNTR1': {
    description: ': For hcont454 this is the ﬁll factor. i.e. the fraction ﬁlled by the cross- section of wires with respect to the layer circumference. Dummy for other hcont',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'CNTR2': {
    description: ': A contact search parameter that is only relevant for hcont453 and hcont464. Default:e 0.0 If set to 1 for hcont453 an update contact search will be carried',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'SCALEFACT': {
    description: ': Ratio between total number of helices in a layer and the number of helices used to represent that layer (i.e. It is not necessary to represent all 70',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'GEOTYPE': {
    description: ': Geometry type, TUBE, RECTANGLE or TAPE for element type hs- hear363.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'GHIST': {
    description: ': Gravity history id.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'AXISYM': {
    description: ': Allowing the user to control the shear interaction behaviour of the hs- hear353 element. If AXISYM = 2 then the bending shear interaction is turned',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ISYM': {
    description: 'will cause full interaction between all axisymmetric and bending eﬀects. Default value = 10, i.e. fully coupled shear interaction is obtained It is noted that this input is not necessary when using 353FLEXCROSS, see Section',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'FACT': {
    description: '[PHIST GHIST ]',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ALFA': {
    description: ': Helix lay angle (unit: Radians).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '113': {
    description: 'applied models itcode=21 & 31 and itcode=0 &1, respectively linked to the pipe52 and hshear352 tensile armour element groups (flexcross), already include some',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '114': {
    description: 'where the shear stiﬀness parameter k is calculated from the below input as: k = G b',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'TEFF': {
    description: ': The eﬀective thickness of the tape layer. (unit: L)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'GMOD': {
    description: ': Shear modulus of the tape layer. If no values are given for the teff and gmod by using D for each parameter, the default plane surface remain plane',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'IFRICTION': {
    description: ': A non-zero value will activate the new friction model that is based on a constant stick stiﬀness, while zero will activate the old friction model. Optional.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'KSURF': {
    description: ': Surface stiﬀness Default: 1.51011 (unit: N m2) Typically the surface stiﬀness',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'KYEL': {
    description: ': A user deﬁned lateral transverse elastic stiﬀness. By activating the new fric- tion model (ifriction) in combination with the kyel parameter, the friction',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'THISTTX': {
    description: ': Time history for scaling of spring moment and stiﬀness about pipe axial rotation DOF.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'TTX': {
    description: ': Activation time for spring about pipe axial rotation DOF.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'THISTX': {
    description: ': Time history for scaling of spring force and stiﬀness in pipe axial direction.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'THISTY': {
    description: ': Time history for scaling of spring force and stiﬀness in pipe transverse di- rection.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'THISTZ': {
    description: ': Time history for scaling of spring force and stiﬀness in pipe-seabed normal direction.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'XNAME': {
    description: ': x-direction material curve name',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'YNAME': {
    description: ': y-direction material curve name',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ZNAME': {
    description: ': z-direction material curve name',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'TXNAME': {
    description: '. Note that the x-moment will be set to zero if the option IGAP=2 is applied for the CONTINT card in Section 2.5. The optional parameters must either consist of only XYCHOICE or all of the optional',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'T0_UZ': {
    description: ': Reference time for the KP-based soil embedment. Optional.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'THISTUZ': {
    description: ': Time history for scaling of KP-based soil embedment. Optional.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'UZNAME': {
    description: ': Table name for KP-based soil embedment. Optional. The main purpose of the time-controlled soil springs is to enhance the modelling capa-',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '116': {
    description: 'forces and moments, and will be included in results reported by Bflex2010post. The element property type is optional. No time-controlled springs will be present if the',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'KP-': {
    description: 'based soil embedment is modeled by the 2-dimensional table UZNAME. The ﬁrst table column contains the KP-values with coordinate reference as deﬁned by the CO-',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'SURFPR': {
    description: 'card in Section 2.8. The second column of the table contains the soil embed- ment ¯uz0. See Section 2.34 for deﬁnition of the table input format. The reference time T0_UZ refers to the simulation time where the pipeline shall have',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '450': {
    description: '1.0',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '-100': {
    description: '.0 -0.2',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'NODE1': {
    description: ': First node ID',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'TIME0': {
    description: ': Time to store static information.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'START': {
    description: ': Start time for ramping.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'STOP': {
    description: ': Stop time for ramping.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'EL1': {
    description: ': Element 1 ID.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'EL2': {
    description: ': Element 2 ID. Results are stored for element EL1 to EL2.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ELNODE': {
    description: ': Element node, i.e. element end. (1 or 2 for pipe, only 1 for cont).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'PIPE31-39': {
    description: ', SPRING136-137 : : 1 :',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '2301': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'FILE': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'NFDPO': {
    description: ': The number of points in the fatigue S-N diagram R :',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'IGERB': {
    description: ': Method for taking the mean stress into account 0 :',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'INTCO': {
    description: ': Method for interpolation in S-N diagram: 1 :',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'SCF': {
    description: ': Stress concentration factor (unit: )',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'NSEG': {
    description: ': Number of segments in the geometry. A geometry can be built from several segment types aligned after each other in the sequence they are given in the geometry card.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'CYLINDER': {
    description: '0.0 4',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'THETA': {
    description: ': Angle of node coordinate. Under option POLAR the REPEAT sequence has the following parameters:',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'NVIS': {
    description: ': Number of visual sections.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'LEN': {
    description: ': Length of the segment.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'DIAM': {
    description: ': Smallest diameter of segment. (unit: L)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '122': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'RADSTART': {
    description: ': Curvature radius at start of segment. (unit: L)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'RADEND': {
    description: ': Rate of curvature radius change along segment so that 1/Rad=1/Radstart+1/Radend*s where s is curvilinear length along segment',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'PHI0': {
    description: ': Slope at start of segment. The slope is measured along the longitudinal direc- tion, and relative to the center line of the bellmouth.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'DIAM1': {
    description: ': Diameter of ﬁrst segment.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'DIAM2': {
    description: ': Diameter of last segment.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'TEXT': {
    description: ': Descriptive analysis text.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'IEL1': {
    description: ': First core element',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ISTR1': {
    description: '/ISTR2 is 1 axial strain along local x axis (unit: -)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'IEL2': {
    description: ': Last core element',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ISTR2': {
    description: ': Initial strain for the last element, optional. Linear interpolation is applied for intermediate elements. If the REPEAT command is used then the previous sequence of load generation is',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'FRICTION': {
    description: ': Various friction models with user deﬁned elastic stiﬀness.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'R_CONTACT': {
    description: '. . . . . . . . . . . . . . . . . . . . .143',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '125': {
    description: 'default, the x- and y-direction material curves are to be speciﬁed as displacements versus unit force curves. By specifying USERDEFINED at the end of the contact',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'HYPERELASTIC': {
    description: '. . . . . . . . . . . . . . . . . 148 I',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'MTYPE': {
    description: ': Material type as deﬁned above. The following parameters depend on the material type as speciﬁed in the following. 2.26.1',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'GIT': {
    description: ': Torsion stiﬀness (unit: FL2) EM:',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'POISS': {
    description: ': Poisson’s ratio (-)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'TALFA': {
    description: ': Temperature elongation coeﬀ. (unit K−1)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'TECOND': {
    description: ': Thermal conductivity (dummy) (unit: ET−1L−1TE−1)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'HEATC': {
    description: ': Heat capacity (dummy) (unit: E−1M−1TE−1)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'EIY': {
    description: ': Bending stiﬀness about y axis (unit: FL2)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'EIZ': {
    description: ': Bending stiﬀness about z axis (unit: FL2)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'DENSITY': {
    description: ': Density (unit: ML−3)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ETRANS': {
    description: ': Transvere Young’s modulus (unit: FL−2)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '800': {
    description: '< 1 No failure',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '7850': {
    description: '1.17e-5 50',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'IHARD': {
    description: ': Hardening parameter; 0 = isotropic hardening; 1 = kinematic hardening.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'RHO0': {
    description: ': Density (dummy) (unit: ML−3)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'EPS': {
    description: ': Strain',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'SIGMA': {
    description: ': Stress (unit: FL−2) values describing the material curve for both positive and negative values of strain and stress.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '-1000': {
    description: '-1e5',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '-100000': {
    description: '.0',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '100000': {
    description: '.0 2.26.6',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ISOHYCURVE': {
    description: '. . . . . . . . . . . . . . . . . . . . 132',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'SEADEN': {
    description: ': Sea density (unit: ML−3 )',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'FQX': {
    description: ': Axial stress factor fqx (-) Axial stress = Axial force × factor',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'BENDNAME': {
    description: ': Material name in bending (epcurve, hycurve (only helix235) or iso- hycurve (only compipe42))',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'RHO': {
    description: ': Density (Dummy) (unit: ML−3)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'FKX': {
    description: ': Torsion stress factor fkx (-). For element type compipe42: Shear stress =',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'FKY': {
    description: ': y-curvature elastic stress factor fky (-). For element type compipe42: Bending stress = y-curvature × factor. For element type helix235: Bending stress =',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'FKZ': {
    description: ': z-curvature elastic stress factor fkz (-). For element type compipe42: Bending stress = z-curvature × factor. For element type helix235: Bending stress =',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'REFP': {
    description: ': Reference pressure (Dummy) (unit: FL−2).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'IPDER': {
    description: ': Friction moment internal pressure rating factor (Dummy) referring to Section',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'AND': {
    description: '9.17. The maxium bending stress is stabilized quite rapidly due to the gap closure eﬀect, quite in accordance with the',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '134': {
    description: 'moment from the value given on the material curve deﬁned at refp by linear internal pressure scaling (unit: L3).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'EPDER': {
    description: ': Friction moment external pressure rating factor (Dummy) referring to Sec- tion 2.31 and see Section 2.35. The parameter can be used to increase the friction',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'REFT': {
    description: ': Reference temperature (Dummy) (unit: C).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'TDER': {
    description: ': Temperature derating factor (Dummy) referring to Section 2.37 and Section',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'THE': {
    description: 'friction moment point from the value given on the material curve deﬁned at reft by linear temperature scaling(unit: C−1).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'AXNAME': {
    description: ': Material name in axial direction (epcurve or hycurve)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'TORNAME': {
    description: ': Material name in torsion (epcurve or hycurve)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '7025': {
    description: '81 axmat tomat',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'CURVE': {
    description: 'options in Sections 2.26.4 and 2.26.5, respectively. For both cases the curve is to be deﬁned as a consecutive number of points deﬁning displacement/rotation versus force/moment. As explained in Section 2.20.7, material curves that are scaled accord-',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'PX_NX': {
    description: ': Penetration value at which the last penetration-dependent material curve in local x-direction is valid. Positive for penetration into the seabed. Not speciﬁed',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'PYNAME_1': {
    description: ': Local y-direction ﬁrst penetration-dependent material curve name. The curve must be hyper-elastic. Not speciﬁed for NY=0. Optional.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'MUX': {
    description: ': Friction coeﬃcient in local x-direction (unit: -).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'MUY': {
    description: ': Friction coeﬃcient in local y-direction. Negative value will provide isotropic friction based on MUX (unit: -).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'XYCHOICE': {
    description: ': Enables the user to overrule the Coulomb friction concept by userdeﬁned characteristics i x- and y - directions by introducing the parameter USERDE-',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'USERDEFINED': {
    description: ': The XNAME, YNAME, TXNAME, PXNAME_I and PY-',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'COULOMB-COULOMB-COULOMB': {
    description: ': Scaling according to COULOMB is ap- plied for all material curves for the local x- and y-directions and the local',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'COULOMB-USERDEFINED-USERDEFINED': {
    description: ': Scaling according to COULOMB for XNAME, YNAME and TXNAME, and USERDEFINED characteristics',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'PXNAME_I': {
    description: 'curves and the third word governs the PYNAME_I curves. This is con- venient when describing soil resistance where one part is related to COULOMB and the second part is related to earth pressure resistance better described by a USERDE-',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'COULOMB-USERDEFINED-COULOMB': {
    description: ': Scaling according to COULOMB for',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'COULOMB-COULOMB-USERDEFINED': {
    description: ': Scaling according to COULOMB for',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'USERDEFINED-USERDEFINED-USERDEFINED': {
    description: ': The curves as deﬁned by the user are applied for all material curves for the local x-direction, the lo-',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'USERDEFINED-COULOMB-USERDEFINED': {
    description: ': Scaling according to COULOMB for PXNAME_I, and USERDEFINED characteristics applied for XNAME,',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '136': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'USERDEFINED-USERDEFINED-COULOMB': {
    description: ': Scaling according to COULOMB for PYNAME_I, and USERDEFINED characteristics applied for XNAME,',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'USERDEFINED-COULOMB-COULOMB': {
    description: ': Scaling according to COULOMB for',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'PX_1': {
    description: ': Penetration value at which the ﬁrst penetration-dependent material curve in local x-direction is valid. Positive for penetration into the seabed. Not speciﬁed',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'PXNAME_1': {
    description: ': Local x-direction ﬁrst penetration-dependent material curve name. The curve must be hyper-elastic. Not speciﬁed for NX=0. Optional.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'PXNAME_NX': {
    description: ': Local x-direction last penetration-dependent material curve name. The curve must be hyper-elastic. Not speciﬁed for NX=0,1. Optional.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'PY_1': {
    description: ': Penetration value at which the ﬁrst penetration-dependent material curve in local y-direction is valid. Positive for penetration into the seabed. Not speciﬁed',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'PY_NY': {
    description: ': Penetration value at which the last penetration-dependent material curve in local y-direction is valid. Positive for penetration into the seabed. Not speciﬁed',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'PYNAME_NY': {
    description: ': Local y-direction last penetration-dependent material curve name. The curve must be hyper-elastic. Not speciﬁed for NY=0,1. Optional.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'SOILX': {
    description: 'coulomb-userdefined-userdefined # #',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '138': {
    description: 'a consecutive number of points deﬁning displacement versus force per unit length or force, i.e. no scaling with µFz is applied.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'MUXY': {
    description: ': Friction coeﬃcient in local xy-direction (unit: -).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'XYNAME': {
    description: ': xy-plane material curve name',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'KSTICK': {
    description: '. As opposed to the ISOCONTACT option, the stick stiﬀness is constant and independent of the normal direction contact force. This may enhance the convergence properties in situations where large normal direction contact forces occur, such as for',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'MUS': {
    description: 'MUD',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '141': {
    description: 'mm Lay angle - tensile 2',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'KEL1': {
    description: 'KEL2 frac kdyn C1 C2 dim ksurf',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'MUD': {
    description: ': Dynamic friction coeﬃcient. Default value: 0.15',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'KEL2': {
    description: ': Elastic shear stiﬀness in transverse direction. Default: 1.0109 Unit: N m2',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'FRAC': {
    description: ': The ratio between the transition slip distance (from static friction to dynamic friction) and the elastic distance (from zero to static friction) Default: 0.1',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'KDYN': {
    description: ': Stiﬀness after the transition to dynamic friction. This stiﬀness might be set to a small positive value to improve numerical stability. Default: 0.0',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'DIM': {
    description: ': Dimension of model (1, 11, 12, -1, -11 -12= 1D 2, -2 = 2D). The negative values only applies for the Coulomb friction model type=6. By specifying a postive',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'MATMODEL': {
    description: 'kstick ktrans ksurf mu c1',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'KSHEAR': {
    description: ': Shear stiﬀness. Default: 1.0109 Unit: N m2 In lack of other information, the',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'KTRANS': {
    description: ': Transverse elastic stiﬀness Default: 0.0 (unit: N m2)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'MUTX': {
    description: ': Friction coeﬃcient in local y-direction due to x-rotation (unit: -).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '144': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'NAME_I': {
    description: 'curves as deﬁned by the user are applied.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'FINED': {
    description: '. The default value is COULOMB. 2.27',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '145': {
    description: '.5 mm Lay angle - tensile 3',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '146': {
    description: 'The above modications enable modelling of pipe-soil skin friction eﬀects in situations with non-zero x-rotation and zero y-displacement. For instance, consider a pipe that',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '147': {
    description: 'An arbitrary number of penetration-dependent curves PXNAME_I and PYNAME_I may be given and Bflex2010 will interpolate the force and the stiﬀness based on the',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '700': {
    description: '12 8.2',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'RXNAME': {
    description: ': x-rotation material curve name',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'RYNAME': {
    description: ': y-rotation material curve name',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'RZNAME': {
    description: ': z-rotation material curve name',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'AXFRIC': {
    description: ': Axial coeﬃcient of friction.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'XMATNAME': {
    description: ': Axial x-direction material curve name, using ep- or hycurve.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '151': {
    description: '45 (slowly increas- ing)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'POLAR': {
    description: ': Nodal points are given in a polar coordinates system for HSHEAR352. Local origo and orientation of the polar system must be speciﬁed. Nodal coordinates will be described along local x-axis by deﬁning radius, angles',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ROTDISP': {
    description: ': Enables the user to rotate and displace a given set of coordinates If option COORDINATES is selected, the NOCOOR card has the following ele- ments:',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'XCOR': {
    description: ': x-coordinate along local x-axis.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'YCOR': {
    description: ': y-coordinate.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ZCOR': {
    description: ': z-coordinate. Under option COORDINATES, the REPEAT card has the following parameters:',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'BETA1': {
    description: ': Rotation about x for local system.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'BETA2': {
    description: ': Rotation about y for local system.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'BETA3': {
    description: ': Rotation about z for local system. R:',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'THETAINC': {
    description: ': Increment in angle. If option ROTDISP is selected, the NOCOOR card has the following elements.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '154': {
    description: 'RI: Inner radius at node j (unit: L). The NODPROP command allows adjusting the element geometry properties of pipe31,',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '255': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '1042': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '1043': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '256': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '1044': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '257': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '242': {
    description: '– CONTACT . . . . . . . . . . . . . . . . . . . . . . 135 – ELASTIC. . . . . . . . . . . . . . . . . . . . . . . .127',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '1045': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '260': {
    description: '1 near6',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '245': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '1046': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '263': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '248': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'PRESHIST': {
    description: ': External pressure and buoyancy mass history number.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'GRAVHIST': {
    description: ': Dry mass history number. Refer to the concepts of dry mass and dry buoyancy mass concepts applied in the',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '158': {
    description: 'P2: Internal pressure of last element (unit: FL−2). Linear interpolation is applied',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '16001': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '16280': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '17001': {
    description: '69.0',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '17280': {
    description: '69.0',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '-16001': {
    description: '69.0',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '-16280': {
    description: '69.0',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '-17001': {
    description: '69.0',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '-17280': {
    description: '69.0 2.33',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'REELGRP': {
    description: ': Name of the pipe group intended for REELING.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ROPIPE': {
    description: ': Outer radius of the reeled pipe.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'SPOOLSPRGRP': {
    description: ': Name of group containing “spring elements” in spool.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'SPOOLCOGRP': {
    description: ': Name of group containing “contact elements” in spool.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'RSPOOL': {
    description: ': Radius of spool.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'FCLIMSPOOL': {
    description: ': Contact-force cut-oﬀlimit for spool.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ROLLGRP': {
    description: ': Name of group for roll.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ROLLCOGRP': {
    description: ': Name of group for “contact element” in roll.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'RROLL': {
    description: ': Radius of roll.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'FCLIMROLL': {
    description: ': Contact-force cut-oﬀlimit for spool. The sequence ROLLGRP ROLLCOGRP RROLL FCLIMROLL can be repeated to model multiple rolls.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'T11': {
    description: ': Value of entry (1,1), ﬁrst arguement value',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'TN1': {
    description: ': Value of entry (n,1), last argument value.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '162': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'NCOL': {
    description: ': Number of columns in table. Must be larger than or equal to 2.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'T12': {
    description: ': Value of entry (1,2), ﬁrst function value of column 2.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'T1_NCOL': {
    description: ': Value of entry (1,ncol), ﬁrst function value of last column.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'TIJ': {
    description: ': Value of entry (i,j).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'TN2': {
    description: ': Value of entry (n,2), last function value of column 2.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'TN_NCOL': {
    description: ': Value of entry (n,ncol), last function value of last column. The ﬁrst column deﬁnes the argument values, and the other columns deﬁne the function values. Linear interpolation of the function values are applied in between the argument',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'FAC1': {
    description: ': Load factor for time t1. T2: Time t2.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'FAC2': {
    description: ': Load factor for time t2 An arbitrary sequence may be given, and linear interpolation is applied between the time steps deﬁned by the TIMECO card above. For t ∈[T1 , T2] the load factor will',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'THIST_F': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'TFILE': {
    description: ': ﬁle name containing the parameters t1,fac1,t2,fac2...,deﬁned above 2.35.2',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'THIST_H': {
    description: '100 0.628 0.0',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'OMEGA': {
    description: ': Frequency, ω.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'PHASE': {
    description: ': Phase displacement, ϕ. The load factor at any time t, is then deﬁned by: F = sin(ωt + ϕ)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'THIST_R': {
    description: '100 10 20',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'RAMPTYPE': {
    description: ': Type of ramping, only RAMPCOS allowed.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'FAC': {
    description: ': Load factor after the ramping. The shape of the ramping function is a half cosine period, starting at zero slope. Be- tween ramping periods, the load factor is keept constant at the value obtained in the',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'RAMPCOS': {
    description: '0.0 2.36',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'DTVI': {
    description: ': Time increment between each restart/visual storage to the .raf ﬁle.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'DT0': {
    description: ': Time increment between each zero setting of the accumulated convergence control vectors.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'STEPTYPE': {
    description: 'is given.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ITCRIT': {
    description: ': Iteration criterion parameter, enables the user to select between alternative incremental norms scaled with respect to the associated accumulated norms. Must be given if STEPTYPE is given.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'AUTO': {
    description: ': If required tolerance is not met within MAXIT, the step is subdivided in two parts. This is repeated until required tolerance is met within MAXIT or',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ITERCO': {
    description: ': Iteration control parameter. Must be given if STEPTYPE is given.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'GO-ON': {
    description: ': the program proceeds after the maximum number of iterations is reached',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'DISP': {
    description: ': displacement norm is used',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'FORC': {
    description: ': force norm is used',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ENER': {
    description: ': energy norm is used',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ALL': {
    description: ': all norms are used',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'MAXDIV': {
    description: ': Maximum number of sub-divisions. Must be given if STEPTYPE is given.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'STATIC': {
    description: '# #',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'DYNAMIC': {
    description: 'auto go-on disp',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'MODE': {
    description: ': Result presentation mode:',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'INTEGRATION': {
    description: ':',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'FEM': {
    description: 'results according to the list deﬁned below is enabled in- cluding consistent representation of all numerical elements of the FEM model in xpost including the applied element and node numbers. In addition to',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '168': {
    description: 'the list below ﬁnite element resultant force results of all pipe elements is allowed for. Other options are deprecated, but this value are kept for back-',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'FACTOR': {
    description: ': Scaling factor for all radial quantities (scale pipe radius).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'RESULT': {
    description: ': Result types that will be stored, can be a list. Options are:',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'SIGMA-XX': {
    description: ': Total longitudinal stress σxx (unit: MPa )',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'SIGMA-YY': {
    description: ': Transverse stress σyy (unit: MPa )',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'SIGMA-XY': {
    description: ': σxy Shear stress at mean surface (pipe elements).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'STRAIN-XX': {
    description: ': εxx Longitudinal strain at mean surface - (pipe elements).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'STRAIN-YY': {
    description: ': εyy Hoop strain at mean surface (pipe elements).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'STRAIN-XY': {
    description: ': εxy Shear strain at mean surface (pipe elements).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ACCSTRAIN': {
    description: ': εtot Total longitudinal strain (elastoplastic pipe elements).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'SIGMA-XXI': {
    description: ': σxxi Longitudinal stress at inner surface (elastic pipe elements).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'SIGMA-YYI': {
    description: ': σyyi Hoop stress at inner surface-thickwalled theory (elastic pipe elements).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'SIGMA-XYI': {
    description: ': σxyi Shear stress at inner surface (elastic pipe elements).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'SIGMA-XXO': {
    description: ': σxxo Longitudinal stress at outer surface (elastic pipe elements).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'SIGMA-YYO': {
    description: ': σyyo Hoop stress at outer surface-thickwalled theory (elastic pipe elements).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'SIGMA-XYO': {
    description: ': σxyo Shear stress at outer surface (elastic pipe elements).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'VCONDIS-X': {
    description: ': Contact element local x-displacement.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'VCONDIS-Y': {
    description: ': Contact element local y-displacement.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'VCONDIS-Z': {
    description: ', VCONFOR-X and VCONFOR-Z can be used to obtain the bending induced eﬀects. These are deﬁned by the contact material in the ELPROP card of the helix.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'VCONFOR-X': {
    description: ': Contact element local x-force (unit: See Table 2.1)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'VCONFOR-Y': {
    description: ': Contact element local y-force (unit: See Table 2.1)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'VCONFOR-Z': {
    description: ': Contact element local z-force (unit: See Table 2.1)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'SIGMA-XX-C1': {
    description: ': Longitudinal stress in corner 1 of tensile armour. Only for',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'SIGMA-XX-C2': {
    description: ': Longitudinal stress in corner 2 of tensile armour. Only for',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'SIGMA-XX-C3': {
    description: ': Longitudinal stress in corner 3 of tensile armour. Only for',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'SIGMA-XX-C4': {
    description: ': Longitudinal stress in corner 4 of tensile armour. Only for',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'SIGMA-XX-AX': {
    description: ': Axial stress in tendon. Only for pipe52, uchshear352 and',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '169': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'SIGMA-XX-MY': {
    description: ': Longitudinal stress due to bending about weak axis. Only for pipe52, uchshear352 and hshear353 elements.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'SIGMA-XX-MZ': {
    description: ': Longitudinal stress due to bending about strong axis (i.e. about surface normal). Only for pipe52, uchshear352 and hshear353 ele-',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'NRPLOT': {
    description: '. . . . . . . . . . . . . . . . . . . . . . . . . . 180 P',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'FATIGUE': {
    description: 'for FATIGUE calculations',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ENPLOT': {
    description: '. . . . . . . . . . . . . . . . . . . . . . . . . . 183',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'YSCL': {
    description: ': Scaling factor to be used for y-axis (to convert to convenient unit).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'RAFPRE': {
    description: ': The Bflex2010post raf-ﬁle name preﬁx. If the ﬁle name is deﬁned by a combination of lower case and upper case letters, use e.g. ’input-ﬁlename’.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'MPFPRE': {
    description: ': The output .mpf ﬁle name preﬁx. If the ﬁle name is deﬁned by a combination of lower case and upper case letters, use e.g. ’mpf-ﬁlename’.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'XLEG': {
    description: ': The legend name for the x-axis. If the legend name contains more than one word or if the name is deﬁned by a combination of lower case and upper case letters, use e.g. ’Displacement (m)’.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'XRES': {
    description: ': x-axis result type. The following result types are available:',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'LOADSTEP': {
    description: ': Load step',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'TIME': {
    description: ': Time',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'HISTN': {
    description: ': History number with reference to Bflex2010 input ﬁle, e.g. HIST100',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'YLEG': {
    description: ': The legend name for the y-axis. If the legend name contains more than one word or if the name is deﬁned by a combination of lower case and upper case letters, use e.g. ’Displacement (m)’.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'YRES': {
    description: ': y-axis result type. All the result types deﬁned as integration point results. In addition, the following result types can be applied:',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'NODISP-X': {
    description: '1 81',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'NODISP-Y': {
    description: ': nodal y-displacement (unit: mm)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'NODISP-Z': {
    description: '1 81',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'NOROT-X': {
    description: ': nodal x-rotations (unit: mm)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'NOROT-Y': {
    description: ': nodal y-rotations (unit: mm)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'NOROT-Z': {
    description: ': nodal z-rotations (unit: mm)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'FNODEID': {
    description: ': First element ID number in numerical model.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'LNODEID': {
    description: ': Last element ID number in numerical model.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'XSCL': {
    description: ': Scaling factor to be used for x-axis (to convert to convenient unit).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '16611': {
    description: '10 1',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'CID': {
    description: 'XSCL YSCL',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'FELID': {
    description: ': First element ID number in numerical model.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'LELID': {
    description: ': Last element ID number in numerical model.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'LSECID': {
    description: ': Integration section number along element. Max 2 for PIPE31, PIPE34 and',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'PIPE37': {
    description: '. Max 3 for PIPE33, PIPE36, PIPE39, COMPIPE42 and CABLE111.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'CSECID': {
    description: ': Integration section number in cross-section. The total number is given in the control card of the SIMLA analysis.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '174': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ELFORCE-X': {
    description: ': Fx force (unit: N)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ELFORCE-Y': {
    description: ': Fy force (unit: N)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ELFORCE-Z': {
    description: ': Fz force (unit: N)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ELMOM-X': {
    description: ': Mx moment about centroid x-axis (unit: Nmm)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ELMOM-Y': {
    description: ': My moment about centroid y-axis (unit: Nmm)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ELMOM-Z': {
    description: ': Mz moment about centroid z-axis (unit: Nmm)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ELDISP-X': {
    description: ': Local element x displacement (element elongation for beams) (unit: L)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ELDISP-Y': {
    description: ': Local element y displacement (zero for beam) (unit: L)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ELDISP-Z': {
    description: ': Local element z displacement (zero for beam) (unit: L)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ELROT-X': {
    description: ': Local x-rotation (rigid body rotation eliminated for beam) (unit: R)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ELROT-Y': {
    description: ': Local y-rotation (rigid body rotation eliminated for beam) (unit: R)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ELROT-Z': {
    description: ': Local z-rotation (rigid body rotation eliminated for beam) (unit: R)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ELTOR-X': {
    description: ': torsion about centroid (unit: 1/mm)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ELCUR-Y': {
    description: ': y-curvature about centroid (unit: 1/mm)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ELCUR-Z': {
    description: ': z-curvature about centroid (unit: 1/mm)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'CONDIS-X': {
    description: ': Contact element displacement in local x-direction (unit: L)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '175': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'CONDIS-Y': {
    description: ': Contact element displacement in local y-direction (unit: L)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'CONDIS-Z': {
    description: ': Contact element displacement in local z-direction (surface normal) (unit: mm ).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'CONFOR-X': {
    description: ': Contact element force in local x-direction (unit: FL−1 for all con- tact elements except cont130 having unit: F ).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'CONFOR-Y': {
    description: ': Contact element force in local y-direction (unit: FL−1 for all con- tact elements except cont130 having unit: F ).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'CONFOR-Z': {
    description: ': Contact element force in local z-direction (surface normal) (unit: N ).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'SUBMASS': {
    description: ': dry mass - buoyancy mass (unit: ML−1)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'DRYMASS': {
    description: ': dry mass (unit: ML−1)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'INISTRA-X': {
    description: ': element initial axial strain (unit: -)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'INTPRES': {
    description: ': internal pressure (unit: FL−2)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'EXTPRES': {
    description: ': external pressure (unit: FL−2)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'INITOR-X': {
    description: ': initial torsion (unit: L−1)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'INICUR-Y': {
    description: ': initial curvature about local y-axis (unit: L−1)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'INICUR-Z': {
    description: ': initial curvature about local z-axis (unit: L−1)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ICONDIS-X': {
    description: ': Contact element initial displacement in local x-direction (unit: L)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ICONDIS-Y': {
    description: ': Contact element initial displacement in local y-direction (unit: L)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ICONDIS-Z': {
    description: ': Contact element initial displacement in local z-direction (unit: L)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '2316': {
    description: '1 1e3',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'X-COR': {
    description: ': x-coordinate (unit: mm)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'Y-COR': {
    description: ': y-coordinate (unit: mm)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'Z-COR': {
    description: ': z-coordinate (unit: mm)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'T-COR': {
    description: ': Polar theta coordinate (for elements connected to nodes generated by this option) (unit: R)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'A-COR': {
    description: ': Polar lay angle (for elements connected to nodes generated by this option) (unit: R)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'E-COR': {
    description: '"Axial force (kN)" ELFORC-X',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'K-COR': {
    description: ': curvilinear xy-coordinate, i.e. kp-coordinate for pipeline problems re- quires that a seabed has been deﬁned in Bflex2010 (unit: L)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '178': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '179': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'INTPOI': {
    description: ': Integration point number (around cross section, point 1 start at local y=radius and z = 0 and then clockwise). If no integration point, this is the negative refer- ence load step number. Default value: 1',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'NLOADSTEP': {
    description: ': If a positive load step number is given, then the results will be measured relative to the state at that step. If no or a negative loadstep is given, then actual values are used. Default value: 0',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ELFOR-X': {
    description: '1',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'FAPLOT': {
    description: '. . . . . . . . . . . . . . . . . . . . . . . . . . 180 Fatigue data . . . . . . . . . . . . . . . . . . . . . . . . 63',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'LOFPRE': {
    description: ': The output .lof ﬁle name preﬁx. If the ﬁle name is deﬁned by a combination of lower case and upper case letters, use e.g. ’fat-ﬁlename’. I3: the number of load cycles.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'FTIME': {
    description: ': the ﬁrst load step for calculating stress range.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'LTIME': {
    description: ': the last load step point for calculating stress range.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'OPTSTR': {
    description: ': Option for stress range calculation. ̸= 1 : Stress range is taken to be the diﬀerence between the stress ranges obtained',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'UNTCONV': {
    description: ': unit conversion factor to ﬁt the fatigue data. 3.9',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '181': {
    description: 'of external loads need to be added manually. This is because only element info is stored on data base.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'QX-REACT': {
    description: '1',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'QY-REACT': {
    description: ': Fy force (unit: F)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'QZ-REACT': {
    description: ': Fz force (unit: F)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'MX-REACT': {
    description: ': Mx moment about centroid x-axis (unit: FL)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'MY-REACT': {
    description: ': My moment about centroid y-axis (unit: FL)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'MZ-REACT': {
    description: ': Mz moment about centroid z-axis (unit: FL)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'QX-DAMP': {
    description: ': Fx damping force (unit: F)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'QY-DAMP': {
    description: ': Fy damping force (unit: F)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'QZ-DAMP': {
    description: ': Fz damping force (unit: F)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'MX-DAMP': {
    description: ': Mx damping moment about centroid x-axis (unit: FL)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'MY-DAMP': {
    description: ': My damping moment about centroid y-axis (unit: FL)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'MZ-DAMP': {
    description: ': Mz damping moment about centroid z-axis (unit: FL)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'QX-INER': {
    description: ': Fx inertia force (unit: F)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'QY-INER': {
    description: ': Fy inertia force (unit: F)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'QZ-INER': {
    description: ': Fz inertia force (unit: F)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'MX-INER': {
    description: ': Mx inertia moment about centroid x-axis (unit: FL)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'MY-INER': {
    description: ': My inertia moment about centroid y-axis (unit: FL)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'MZ-INER': {
    description: ': Mz inertia moment about centroid z-axis (unit: FL)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'QX-ALL': {
    description: ': Fx restoring+damping+inertia force (unit: F)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'QY-ALL': {
    description: ': Fy restoring+damping+inertia force (unit: F)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'QZ-ALL': {
    description: ': Fz restoring+damping+inertia force (unit: F)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'MX-ALL': {
    description: ': Mx restoring+damping+inertia moment about centroid x-axis (unit: FL)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'MY-ALL': {
    description: ': My restoring+damping+inertia moment about centroid y-axis (unit: FL)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'MZ-ALL': {
    description: ': Mz restoring+damping+inertia moment about centroid z-axis (unit: FL)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'IEND': {
    description: ': The element end that shall contribute. Default value = 0 means that all element ends are considered. 3.10',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'FNODID': {
    description: ': First node ID number in numerical model.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'NODESCL': {
    description: ': Scaling factor to be used for node number (i = i - NODESCL ).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'VALSCL': {
    description: ': Scaling factor to be used for x-,y and z-values (xi = xi * VALSCL) . The output ﬁle format is: Node number, Xi , Yi , Zi , T11, T12, T13, T21, T22, T23, T31, T32, T33',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ELEM': {
    description: '1 1',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'NCYCLE': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'PFLEXMESH': {
    description: ': Mesh factor for pflex model. Default = 1',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '185': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ITRANS': {
    description: ': If the value 1 is given the element end reactions are transformed to global system. Default value: 0',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'A7-AN': {
    description: ': preﬁx of all dyn ﬁles to be processed',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'I3B': {
    description: ': optional parameter. If speciﬁed, the plot number range i3-i3b will be stored to the same .mpf ﬁle',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'NFILES': {
    description: 'N',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'CHRAF': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'INODE': {
    description: 'Node position for the Pflex model.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'RAF1': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'INODE1ILOCAL1DELTA1': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'MOMCTR1IPROC1': {
    description: '...',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'RAFI': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'INODEIILOCALIDELTAI': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'MOMCTRIIPROCI': {
    description: '...',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'RAFN': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'INODENILOCALNDELTAN': {
    description: 'MOMCTRNIPROCN where N Number of analysis.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ILOCAL': {
    description: 'Local deformation parameter.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'DELTA0': {
    description: 'Initial ovalization, optional.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'MOMCTR': {
    description: 'Bending moment scaling parameter, optional.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'IPROC': {
    description: 'Procedure parameter, optional. • Add command line option to run Boundary: Syntax: boundary.exe -n preﬁx',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '190': {
    description: 'the Bflex2010 analysis), see also Section 2.1. By this parameter it is possible for the user to study various positions along the Bflex2010 model without having',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '191': {
    description: '• The model does not consider the directionality of the load i.e. the load',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'INODE1FIMOD1ILOCAL1ISTRES1NONLIN1ISTPFR1ISTPBE1ICODE1TRCURP1': {
    description: '...',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'INODEIFIMODIILOCALIISTRESINONLINIISTPFRIISTPBEIICODEITRCURPI': {
    description: '...',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'INODENFIMODNILOCALNISTRESNNONLINNISTPFRNISTPBENICODENTRCURPN': {
    description: 'The meaning of each parameter can be referred to Chapter 6. • Add command line option to run Lifetime:',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '193': {
    description: 'deformations will be included as well. Local stress parameter If the local stress parameter (ISTRES) = 1, the boundary',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'CHOUT': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'PREFIX': {
    description: '.LOF',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'CHINCL': {
    description: 'NCYCLE NSTART NEND IFLAG',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'CHINCL1NCYCLE1NSTART1NEND1IFLAG1': {
    description: '...',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'CHINCLINCYCLEINSTARTINENDIIFLAGI': {
    description: '...',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'CHINCLNNCYCLENNSTARTNNENDNIFLAGN': {
    description: 'where chout is the result ﬁle name, full name needs to be speciﬁed. The meaning of other parameters can be referred to Chapter 7.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '195': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'INCLUDE': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'PREFIX1': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'YORN1': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'NCYC1': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'NS1': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'NE1': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'IFL1': {
    description: '...',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'PREFIXI': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'YORNI': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'NCYCI': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'NSI': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'NEI': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'IFLI': {
    description: '...',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'PREFIXN': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'YORNN': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'NCYCN': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'NSN': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'NEN': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'IFLN': {
    description: 'where ﬁle The preﬁx of the raf ﬁle being part of the analysis.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'NEND': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'NSTART': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'IFLAG': {
    description: 'near1 Y',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '91790304': {
    description: '25 45',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '563135': {
    description: '40',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '80151': {
    description: '60',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '13123': {
    description: '80',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '1153': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '197': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'SIGMA-AX': {
    description: ': Axial stress σxa (unit: MPa )',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'SIGMA-NX': {
    description: ': Normal curvature stress σxbn (unit: MPa )',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'SIGMA-TX': {
    description: ': Transverse curvature stress σxbt (unit: MPa )',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'SIGMA-L1': {
    description: ': Total longitudinal stress corner 1 of tensile armour, i.e. the sum of the above σxx (unit: MPa ).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'SIGMA-L2': {
    description: ': Total longitudinal stress corner 2 of tensile armour, i.e. the sum of the above σxx (unit: MPa ).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'SIGMA-L3': {
    description: ': Total longitudinal stress corner 3 of tensile armour, i.e. the sum of the above σxx (unit: MPa ).',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'SIGMA-ZZ': {
    description: ': Normal stress σzz (unit: MPa )',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'SIGMA-YZ': {
    description: ': Shear stress σzy (unit: MPa )',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'CONT-PRE': {
    description: ': Contact pressure (unit: MPa)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'REL-DISP': {
    description: ': Relative displacement (unit: mm)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'HEL-TORS': {
    description: ': Helix torsion (unit: mm−1)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'HEL-NCUR': {
    description: ': Helix normal curvature (unit: mm−1)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'HEL-TCUR': {
    description: ': Helix transverse curvature (unit: mm−1)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'HIST400': {
    description: '"Shear force z (kN)"',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '5264': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '5265': {
    description: '1 1',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'STEP0': {
    description: 'INC',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '199': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ENERGY': {
    description: ': Energy (unit: MJ)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'INO1': {
    description: ': First node ID number in visual model',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'INO2': {
    description: ': Last node ID number in visual model',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ISTEP0': {
    description: ': All values in YRES is subtracted by the value at load step ISTEP0',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '9355': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '10507': {
    description: '1 1',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'LA_AXFO': {
    description: ': Axial force per layer',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'LA_TOMO': {
    description: ': Torsion moment per layer',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'LA_PI': {
    description: ': Pressure at inside of each layer + outside at last layer',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'LA_GAP': {
    description: ': Gap between each interface',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'LA_DR': {
    description: ': Radial displacmeent of each layer',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'LA_DT': {
    description: ': Thickness change per layer',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'LA_SXX': {
    description: ': Longitudinal stress per layer (along helix for helices)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'LA_SZZ': {
    description: ': Normal (radial) stress per layer',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ELFORC-X': {
    description: '10 10',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ELFORC-Y': {
    description: '10 10',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ELFORC-Z': {
    description: '10 10',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '202': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '204': {
    description: '45 (increasing) Failure',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'MCM-ITC21-P52': {
    description: '6 2',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'MCM-ITC31-P52': {
    description: '6 3',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'MCM-ITC32-P52': {
    description: '6 4',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'MCM-ITC32-P52-SHM': {
    description: '6 5',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'MCM-HC464-HS364-M': {
    description: 'anually modelled 6 6',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'RUC-ITC0-P52-HS352': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '254': {
    description: '9',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'RUC-ITC1-P52-HS352': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'RUC-ITC1-P52-HS352-NF': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'RUC-HC464-HC463-HS464-HS353': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '656': {
    description: '11',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'RUC-HC464-HC463-HS464-HS353-NF': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'RUC-HC464-HC453-HS464-HS353-NF': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '526': {
    description: 'The ruc and ITCODE models both included two segments, i.e. 3 centre nodes. In the former case, the pipe length is governed by the pitch length versus number of wires',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'RUC-HC464-HC453-HS464-HS353-NF-SHM': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'RUC-HC464-HC463-HS464-HS353-NF-SHM-FAC': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '-40': {
    description: 'deg Number of wires - tensile 3',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '1096': {
    description: 'mm BS minimum diameter',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '428': {
    description: 'mm Radial gap between pipe and BS',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '500': {
    description: 'MPa Applied tension',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'SHOWS': {
    description: 'ﬁtting at maximum end rotation of the last cycle. For the moment model, the stress distribution is symmetric whereas for the helix model, signiﬁcant stresses also occur at the neutral axis. This is due to the transient eﬀect introduced by the fact that the helix',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'WERE': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'INDICATES': {
    description: 'A graphical representation of the failure mechanism and the pipe conﬁguration in a failed pipe model are shown in Fig. 9.14. It is seen that severe global torsion deformation occurs during failure.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '310': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '512': {
    description: '.5 Num. of wires 47',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '415': {
    description: 'Num. of wires 52',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '-26': {
    description: '.3 Wire size (mm)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '-30': {
    description: '.3',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '-31': {
    description: '.0 Wire size (mm) 3ÃŮ10 5ÃŮ12.54ÃŮ15',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '650': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '1350': {
    description: 'E-mod. (GPa)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '-84': {
    description: '.4 Tape size (mm)',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '265': {
    description: '8 8.1',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '277': {
    description: '21 14.2',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '269': {
    description: '8 14.3',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '411': {
    description: '9 14.4',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '950': {
    description: '12 Table 9.7: NUMERICAL RESULTS VERSUS TEST RESULTS IN TERMS OF FAIL-',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'URE': {
    description: '/NO FAILURE Experiment Numerical',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '392': {
    description: '45 (increasing) Failure',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '1200': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '6000': {
    description: '< 1 No failure',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'TROL': {
    description: '. • Default selection of friction model has changed from 0 to 1 (old to new) when',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'LIX234': {
    description: ', HELIX235 and HELPR437',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'DYNRES': {
    description: '- NEW - Select result storage for speciﬁed nodal, element or intergration point results for all time steps. These results will be stored for all time steps, regardles of the frequency of result storage that is speciﬁed in the VISRES input. See Section',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '230': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'CTR': {
    description: '=0 for high tension cases, and MOMCTR=1 for small tension cases.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '237': {
    description: '',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ASME': {
    description: 'Journal of Engineering for Industry, 91:687–693. Østergaard, N. (2012). On Lateral Buckling of Armouring Wires in Flexible Pipes. PhD thesis, Aalborg University, Aalborg, Denmark. ISBN 87-91464-35-8.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  '239': {
    description: 'Sævik, S. (2005-02-14a). Usap - Test Manual, Marintek report no. 700254.00.03. MAR-',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'INTEK': {
    description: ', Trondheim, Norway. Sævik, S. (2005-02-14b). Usap - Theory Manual, Marintek report no. 700254.00.01.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'MARINTEK': {
    description: ', Trondheim, Norway. Sævik, S. (2011). Theoretical and experimental studies of stresses in ﬂexible pipes. Computer and Structures, 89:2273–2291.',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'COSURFR': {
    description: '. . . . . . . . . . . . . . . . . . . . . . . . . .42',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'ENVRES': {
    description: '. . . . . . . . . . . . . . . . . . . . . . . . . . 117',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'HEADING': {
    description: '. . . . . . . . . . . . . . . . . . . . . . . . .123',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
  'SIMPOST': {
    description: '– FAPLOT . . . . . . . . . . . . . . . . . . . . . . . . 180 – RSPLOT . . . . . . . . . . . . . . . . . . . . . . . . 182',
    valueType: 'string', // Default placeholder
    section: 'General',
  },
};
