// =============================================================================
// CCD LANGUAGE SCHEMA
// =============================================================================
//
// This file is the single source of truth for the LSP.
// Every entry here becomes:
//   • An autocomplete suggestion when the user types a field name
//   • A value suggestion when the user types after "="
//   • A hover card showing description, unit and valid range
//   • A diagnostic error/warning when an invalid value is used
//
// HOW TO FILL THIS IN
// -------------------
// Search for the marker  ⚑  in this file (Ctrl+F  ⚑).
// Each marker is a place where you must replace the placeholder with
// the real keyword or value from your Concordia software manual.
//
// Marker types:
//   ⚑ FIELD NAME  – the exact string the user types before "="
//   ⚑ VALUES      – the list of keywords accepted by that field
//   ⚑ UNIT        – physical unit shown in the hover card (e.g. '[m]')
//   ⚑ RANGE       – valid numeric min/max (set to undefined to skip check)
//   ⚑ DESCRIPTION – one-line description shown in the hover card
//
// =============================================================================

// ---------------------------------------------------------------------------
// Type definitions
// ---------------------------------------------------------------------------

export type ValueType =
  | 'enum'      // one of a fixed set of keyword strings
  | 'number'    // any numeric scalar
  | 'boolean'   // true / false
  | 'string'    // free-text string (quoted)
  | 'array'     // space- or comma-separated list of numbers / strings
  | 'path';     // file or directory path (quoted string)

export interface FieldDefinition {
  /** One-line description shown in hover card */
  description: string;
  /** How the value is expected to be written */
  valueType: ValueType;
  /** For valueType:'enum' — the exact accepted keyword strings */
  allowedValues?: string[];
  /** Physical unit label, e.g. '[m]', '[deg]', '[N/m²]' */
  unit?: string;
  /** For valueType:'number' — valid numeric range (inclusive) */
  range?: { min: number; max: number };
  /** Whether omitting this field should produce a warning */
  required?: boolean;
  /** Name of the logical section this field belongs to */
  section: string;
}

/** Flat map of  fieldName → definition.
 *  The fieldName is the exact string the user types before "=". */
export type CcdSchema = Readonly<Record<string, FieldDefinition>>;

// ---------------------------------------------------------------------------
// Section labels (used for grouping completions and outline view)
// ---------------------------------------------------------------------------
export const SECTIONS = {
  ANALYSIS:           'Analysis',
  SOLVER:             'Solver',
  TIME:               'Time Integration',
  MODEL:              'Model / Geometry',
  CABLE:              'Cable Properties',
  MATERIAL:           'Material',
  CROSS_SECTION:      'Cross-Section',
  HYDRODYNAMICS:      'Hydrodynamics',
  ENVIRONMENT:        'Environment',
  CURRENT:            'Current',
  WAVE:               'Wave',
  WIND:               'Wind',
  BOUNDARY:           'Boundary Conditions',
  INITIAL:            'Initial Conditions',
  LOADS:              'Applied Loads',
  OUTPUT:             'Output',
} as const;

// =============================================================================
// SCHEMA DEFINITION
// =============================================================================

export const CCD_SCHEMA: CcdSchema = {

  // =========================================================================
  // ANALYSIS
  // =========================================================================

  // ⚑ FIELD NAME: Replace 'analysis.type' with the exact keyword from your
  //   manual that selects the analysis type (e.g. 'type', 'analysis', ...).
  'analysis.type': {
    // ⚑ DESCRIPTION: What does this field control?
    description: 'Type of structural analysis to perform.',
    valueType: 'enum',
    // ⚑ VALUES: List every accepted keyword for this field.
    //   Example from a FEM solver might be: 'static', 'dynamic', 'modal'
    allowedValues: [
      // ⚑ 'KEYWORD_1',   ← replace with first allowed value
      // ⚑ 'KEYWORD_2',   ← replace with second allowed value
      // ⚑ 'KEYWORD_3',   ← add as many as your manual lists
    ],
    required: true,
    section: SECTIONS.ANALYSIS,
  },

  // ⚑ FIELD NAME: Replace 'analysis.domain' with the field that controls
  //   whether the analysis runs in time or frequency domain.
  'analysis.domain': {
    // ⚑ DESCRIPTION
    description: 'Solution domain for the analysis.',
    valueType: 'enum',
    // ⚑ VALUES: e.g. 'time', 'frequency', 'static'
    allowedValues: [
      // ⚑ 'KEYWORD_1',
      // ⚑ 'KEYWORD_2',
    ],
    section: SECTIONS.ANALYSIS,
  },

  // ⚑ FIELD NAME: Replace 'analysis.title' with the field used for a
  //   run description / job title string.
  'analysis.title': {
    // ⚑ DESCRIPTION
    description: 'Descriptive title for this analysis run.',
    valueType: 'string',
    section: SECTIONS.ANALYSIS,
  },

  // =========================================================================
  // SOLVER
  // =========================================================================

  // ⚑ FIELD NAME: Field that selects the numerical solver / integration method.
  'solver.method': {
    // ⚑ DESCRIPTION
    description: 'Numerical solver or time-integration method.',
    valueType: 'enum',
    // ⚑ VALUES: e.g. 'newmark', 'wilson-theta', 'runge-kutta', 'implicit', ...
    allowedValues: [
      // ⚑ 'KEYWORD_1',
      // ⚑ 'KEYWORD_2',
      // ⚑ 'KEYWORD_3',
    ],
    section: SECTIONS.SOLVER,
  },

  // ⚑ FIELD NAME: Convergence tolerance / residual threshold.
  'solver.tolerance': {
    // ⚑ DESCRIPTION
    description: 'Convergence tolerance for iterative solver.',
    valueType: 'number',
    // ⚑ RANGE: set realistic min/max for your solver, or delete range key.
    range: { min: 1e-12, max: 1e-1 },
    section: SECTIONS.SOLVER,
  },

  // ⚑ FIELD NAME: Maximum number of Newton / Picard iterations per step.
  'solver.max_iterations': {
    // ⚑ DESCRIPTION
    description: 'Maximum number of nonlinear iterations per load/time step.',
    valueType: 'number',
    // ⚑ RANGE
    range: { min: 1, max: 10000 },
    section: SECTIONS.SOLVER,
  },

  // ⚑ FIELD NAME: Flag that turns line-search on/off.
  'solver.line_search': {
    // ⚑ DESCRIPTION
    description: 'Enable or disable line-search in the nonlinear solver.',
    valueType: 'boolean',
    section: SECTIONS.SOLVER,
  },

  // ⚑ FIELD NAME: Field controlling solver output verbosity level.
  'solver.verbosity': {
    // ⚑ DESCRIPTION
    description: 'Level of diagnostic output written by the solver.',
    valueType: 'enum',
    // ⚑ VALUES: e.g. 'silent', 'minimal', 'normal', 'verbose', 'debug'
    allowedValues: [
      // ⚑ 'KEYWORD_1',
      // ⚑ 'KEYWORD_2',
      // ⚑ 'KEYWORD_3',
    ],
    section: SECTIONS.SOLVER,
  },

  // =========================================================================
  // TIME INTEGRATION
  // =========================================================================

  // ⚑ FIELD NAME: Simulation start time.
  'time.start': {
    // ⚑ DESCRIPTION
    description: 'Start time of the simulation.',
    valueType: 'number',
    // ⚑ UNIT
    unit: '[s]',
    // ⚑ RANGE
    range: { min: 0, max: 1e9 },
    section: SECTIONS.TIME,
  },

  // ⚑ FIELD NAME: Simulation end / total duration.
  'time.end': {
    // ⚑ DESCRIPTION
    description: 'End time (total duration) of the simulation.',
    valueType: 'number',
    // ⚑ UNIT
    unit: '[s]',
    range: { min: 0, max: 1e9 },
    required: true,
    section: SECTIONS.TIME,
  },

  // ⚑ FIELD NAME: Fixed time-step size.
  'time.dt': {
    // ⚑ DESCRIPTION
    description: 'Time-step size for dynamic integration.',
    valueType: 'number',
    // ⚑ UNIT
    unit: '[s]',
    // ⚑ RANGE
    range: { min: 1e-9, max: 1e3 },
    required: true,
    section: SECTIONS.TIME,
  },

  // ⚑ FIELD NAME: Field for Newmark-beta parameter β (if applicable).
  'time.newmark_beta': {
    // ⚑ DESCRIPTION
    description: 'Newmark-β parameter (0.25 = average acceleration).',
    valueType: 'number',
    range: { min: 0, max: 1 },
    section: SECTIONS.TIME,
  },

  // ⚑ FIELD NAME: Field for Newmark-gamma parameter γ (if applicable).
  'time.newmark_gamma': {
    // ⚑ DESCRIPTION
    description: 'Newmark-γ parameter (0.5 = no numerical damping).',
    valueType: 'number',
    range: { min: 0, max: 1 },
    section: SECTIONS.TIME,
  },

  // =========================================================================
  // MODEL / GEOMETRY
  // =========================================================================

  // ⚑ FIELD NAME: Global number of finite elements (or segments).
  'model.n_elements': {
    // ⚑ DESCRIPTION
    description: 'Total number of elements along the cable/pipe.',
    valueType: 'number',
    // ⚑ RANGE
    range: { min: 1, max: 100000 },
    required: true,
    section: SECTIONS.MODEL,
  },

  // ⚑ FIELD NAME: Field selecting the element formulation type.
  'model.element_type': {
    // ⚑ DESCRIPTION
    description: 'Finite element formulation used for the structural model.',
    valueType: 'enum',
    // ⚑ VALUES: e.g. 'beam', 'truss', 'cable', 'pipe', 'rod', ...
    allowedValues: [
      // ⚑ 'KEYWORD_1',
      // ⚑ 'KEYWORD_2',
    ],
    section: SECTIONS.MODEL,
  },

  // ⚑ FIELD NAME: Unstretched / reference length of the cable.
  'model.length': {
    // ⚑ DESCRIPTION
    description: 'Unstretched (reference) length of the cable or pipe.',
    valueType: 'number',
    // ⚑ UNIT
    unit: '[m]',
    range: { min: 0, max: 1e6 },
    required: true,
    section: SECTIONS.MODEL,
  },

  // ⚑ FIELD NAME: Seabed / water depth for top-tensioned systems.
  'model.water_depth': {
    // ⚑ DESCRIPTION
    description: 'Water depth at the installation site.',
    valueType: 'number',
    // ⚑ UNIT
    unit: '[m]',
    range: { min: 0, max: 12000 },
    section: SECTIONS.MODEL,
  },

  // ⚑ FIELD NAME: Field for number of cable/pipe segments with
  //   different properties (used if segmented model).
  'model.n_segments': {
    // ⚑ DESCRIPTION
    description: 'Number of segments with distinct cross-sectional properties.',
    valueType: 'number',
    range: { min: 1, max: 1000 },
    section: SECTIONS.MODEL,
  },

  // =========================================================================
  // CABLE PROPERTIES
  // =========================================================================

  // ⚑ FIELD NAME: Outer diameter of the cable.
  'cable.outer_diameter': {
    // ⚑ DESCRIPTION
    description: 'Outer (nominal) diameter of the cable.',
    valueType: 'number',
    // ⚑ UNIT
    unit: '[m]',
    range: { min: 0, max: 10 },
    required: true,
    section: SECTIONS.CABLE,
  },

  // ⚑ FIELD NAME: Inner / bore diameter (for pipe-in-pipe or hollow cross-sections).
  'cable.inner_diameter': {
    // ⚑ DESCRIPTION
    description: 'Inner (bore) diameter (set 0 for solid cross-section).',
    valueType: 'number',
    // ⚑ UNIT
    unit: '[m]',
    range: { min: 0, max: 10 },
    section: SECTIONS.CABLE,
  },

  // ⚑ FIELD NAME: Mass per unit length.
  'cable.mass_per_length': {
    // ⚑ DESCRIPTION
    description: 'Mass per unit length (dry, in air).',
    valueType: 'number',
    // ⚑ UNIT
    unit: '[kg/m]',
    range: { min: 0, max: 1e6 },
    required: true,
    section: SECTIONS.CABLE,
  },

  // ⚑ FIELD NAME: Axial (torsional) stiffness EA or just E×A.
  'cable.axial_stiffness': {
    // ⚑ DESCRIPTION
    description: 'Axial stiffness EA of the cable cross-section.',
    valueType: 'number',
    // ⚑ UNIT
    unit: '[N]',
    range: { min: 0, max: 1e15 },
    section: SECTIONS.CABLE,
  },

  // ⚑ FIELD NAME: Bending stiffness EI.
  'cable.bending_stiffness': {
    // ⚑ DESCRIPTION
    description: 'Bending stiffness EI of the cable cross-section.',
    valueType: 'number',
    // ⚑ UNIT
    unit: '[N·m²]',
    range: { min: 0, max: 1e15 },
    section: SECTIONS.CABLE,
  },

  // ⚑ FIELD NAME: Torsional stiffness GJ.
  'cable.torsional_stiffness': {
    // ⚑ DESCRIPTION
    description: 'Torsional stiffness GJ of the cable cross-section.',
    valueType: 'number',
    // ⚑ UNIT
    unit: '[N·m²/rad]',
    range: { min: 0, max: 1e15 },
    section: SECTIONS.CABLE,
  },

  // ⚑ FIELD NAME: Minimum allowable tension (compression cut-off).
  'cable.min_tension': {
    // ⚑ DESCRIPTION
    description: 'Minimum allowable axial tension (slack condition threshold).',
    valueType: 'number',
    // ⚑ UNIT
    unit: '[N]',
    section: SECTIONS.CABLE,
  },

  // =========================================================================
  // MATERIAL
  // =========================================================================

  // ⚑ FIELD NAME: Material identifier / label.
  'material.id': {
    // ⚑ DESCRIPTION
    description: 'Unique label identifying the material definition.',
    valueType: 'string',
    section: SECTIONS.MATERIAL,
  },

  // ⚑ FIELD NAME: Young's modulus E.
  'material.young_modulus': {
    // ⚑ DESCRIPTION
    description: "Young's modulus of elasticity.",
    valueType: 'number',
    // ⚑ UNIT
    unit: '[Pa]',
    range: { min: 0, max: 1e15 },
    section: SECTIONS.MATERIAL,
  },

  // ⚑ FIELD NAME: Shear modulus G.
  'material.shear_modulus': {
    // ⚑ DESCRIPTION
    description: 'Shear modulus (G = E / (2(1+ν))).',
    valueType: 'number',
    // ⚑ UNIT
    unit: '[Pa]',
    range: { min: 0, max: 1e15 },
    section: SECTIONS.MATERIAL,
  },

  // ⚑ FIELD NAME: Poisson ratio ν.
  'material.poisson': {
    // ⚑ DESCRIPTION
    description: "Poisson's ratio.",
    valueType: 'number',
    range: { min: -1, max: 0.5 },
    section: SECTIONS.MATERIAL,
  },

  // ⚑ FIELD NAME: Mass density ρ.
  'material.density': {
    // ⚑ DESCRIPTION
    description: 'Mass density of the material.',
    valueType: 'number',
    // ⚑ UNIT
    unit: '[kg/m³]',
    range: { min: 0, max: 25000 },
    required: true,
    section: SECTIONS.MATERIAL,
  },

  // =========================================================================
  // CROSS-SECTION
  // =========================================================================

  // ⚑ FIELD NAME: Cross-section area A.
  'cross_section.area': {
    // ⚑ DESCRIPTION
    description: 'Cross-sectional area.',
    valueType: 'number',
    // ⚑ UNIT
    unit: '[m²]',
    range: { min: 0, max: 1e4 },
    section: SECTIONS.CROSS_SECTION,
  },

  // ⚑ FIELD NAME: Second moment of area I (strong axis).
  'cross_section.Iy': {
    // ⚑ DESCRIPTION
    description: 'Second moment of area about the local y-axis (strong or weak).',
    valueType: 'number',
    // ⚑ UNIT
    unit: '[m⁴]',
    range: { min: 0, max: 1e10 },
    section: SECTIONS.CROSS_SECTION,
  },

  // ⚑ FIELD NAME: Second moment of area I (weak axis).
  'cross_section.Iz': {
    // ⚑ DESCRIPTION
    description: 'Second moment of area about the local z-axis.',
    valueType: 'number',
    // ⚑ UNIT
    unit: '[m⁴]',
    range: { min: 0, max: 1e10 },
    section: SECTIONS.CROSS_SECTION,
  },

  // ⚑ FIELD NAME: Polar (torsional) moment of area J.
  'cross_section.J': {
    // ⚑ DESCRIPTION
    description: 'Polar (torsional) moment of area.',
    valueType: 'number',
    // ⚑ UNIT
    unit: '[m⁴]',
    range: { min: 0, max: 1e10 },
    section: SECTIONS.CROSS_SECTION,
  },

  // =========================================================================
  // HYDRODYNAMICS
  // =========================================================================

  // ⚑ FIELD NAME: Drag coefficient (normal).
  'hydro.Cd_normal': {
    // ⚑ DESCRIPTION
    description: 'Normal (transverse) Morison drag coefficient Cd.',
    valueType: 'number',
    range: { min: 0, max: 5 },
    required: true,
    section: SECTIONS.HYDRODYNAMICS,
  },

  // ⚑ FIELD NAME: Drag coefficient (tangential / axial).
  'hydro.Cd_tangential': {
    // ⚑ DESCRIPTION
    description: 'Tangential (axial) Morison drag coefficient.',
    valueType: 'number',
    range: { min: 0, max: 5 },
    section: SECTIONS.HYDRODYNAMICS,
  },

  // ⚑ FIELD NAME: Added mass coefficient Ca.
  'hydro.Ca': {
    // ⚑ DESCRIPTION
    description: 'Added mass coefficient Ca (= Cm - 1).',
    valueType: 'number',
    range: { min: 0, max: 5 },
    section: SECTIONS.HYDRODYNAMICS,
  },

  // ⚑ FIELD NAME: Inertia coefficient Cm (for Morison equation).
  'hydro.Cm': {
    // ⚑ DESCRIPTION
    description: 'Inertia (mass) coefficient Cm for Morison equation.',
    valueType: 'number',
    range: { min: 0, max: 5 },
    section: SECTIONS.HYDRODYNAMICS,
  },

  // ⚑ FIELD NAME: Field that enables/disables buoyancy calculation.
  'hydro.buoyancy': {
    // ⚑ DESCRIPTION
    description: 'Include hydrostatic buoyancy in the load calculation.',
    valueType: 'boolean',
    section: SECTIONS.HYDRODYNAMICS,
  },

  // ⚑ FIELD NAME: Field selecting the hydrodynamic load model.
  'hydro.model': {
    // ⚑ DESCRIPTION
    description: 'Hydrodynamic load model for fluid-structure interaction.',
    valueType: 'enum',
    // ⚑ VALUES: e.g. 'morison', 'potential', 'none', ...
    allowedValues: [
      // ⚑ 'KEYWORD_1',
      // ⚑ 'KEYWORD_2',
    ],
    section: SECTIONS.HYDRODYNAMICS,
  },

  // =========================================================================
  // ENVIRONMENT
  // =========================================================================

  // ⚑ FIELD NAME: Gravitational acceleration vector or scalar.
  'environment.gravity': {
    // ⚑ DESCRIPTION
    description: 'Gravitational acceleration (positive downward).',
    valueType: 'number',
    // ⚑ UNIT
    unit: '[m/s²]',
    range: { min: 0, max: 20 },
    section: SECTIONS.ENVIRONMENT,
  },

  // ⚑ FIELD NAME: Seawater (fluid) density.
  'environment.fluid_density': {
    // ⚑ DESCRIPTION
    description: 'Density of the surrounding fluid (seawater or fresh water).',
    valueType: 'number',
    // ⚑ UNIT
    unit: '[kg/m³]',
    range: { min: 900, max: 1100 },
    section: SECTIONS.ENVIRONMENT,
  },

  // ⚑ FIELD NAME: Air density (needed for wind loading).
  'environment.air_density': {
    // ⚑ DESCRIPTION
    description: 'Density of air for aerodynamic load calculation.',
    valueType: 'number',
    // ⚑ UNIT
    unit: '[kg/m³]',
    range: { min: 0.5, max: 2.0 },
    section: SECTIONS.ENVIRONMENT,
  },

  // ⚑ FIELD NAME: Flag to enable/disable seabed contact.
  'environment.seabed_contact': {
    // ⚑ DESCRIPTION
    description: 'Include seabed contact (soil-pipe interaction).',
    valueType: 'boolean',
    section: SECTIONS.ENVIRONMENT,
  },

  // ⚑ FIELD NAME: Seabed stiffness (spring foundation).
  'environment.seabed_stiffness': {
    // ⚑ DESCRIPTION
    description: 'Normal stiffness of the seabed contact model.',
    valueType: 'number',
    // ⚑ UNIT
    unit: '[N/m²]',
    range: { min: 0, max: 1e12 },
    section: SECTIONS.ENVIRONMENT,
  },

  // =========================================================================
  // CURRENT
  // =========================================================================

  // ⚑ FIELD NAME: Field selecting the current profile type.
  'current.profile': {
    // ⚑ DESCRIPTION
    description: 'Spatial profile type for the current velocity distribution.',
    valueType: 'enum',
    // ⚑ VALUES: e.g. 'uniform', 'linear', 'power_law', 'tabular', 'none'
    allowedValues: [
      // ⚑ 'KEYWORD_1',
      // ⚑ 'KEYWORD_2',
      // ⚑ 'KEYWORD_3',
    ],
    section: SECTIONS.CURRENT,
  },

  // ⚑ FIELD NAME: Current velocity at the surface (or uniform value).
  'current.velocity': {
    // ⚑ DESCRIPTION
    description: 'Current velocity at the water surface (or single uniform value).',
    valueType: 'number',
    // ⚑ UNIT
    unit: '[m/s]',
    range: { min: 0, max: 20 },
    section: SECTIONS.CURRENT,
  },

  // ⚑ FIELD NAME: Current direction (heading angle).
  'current.direction': {
    // ⚑ DESCRIPTION
    description: 'Current heading direction (measured from North or x-axis).',
    valueType: 'number',
    // ⚑ UNIT
    unit: '[deg]',
    range: { min: -360, max: 360 },
    section: SECTIONS.CURRENT,
  },

  // ⚑ FIELD NAME: Path to a tabular current profile data file.
  'current.data_file': {
    // ⚑ DESCRIPTION
    description: 'Path to a file containing depth-vs-velocity current profile data.',
    valueType: 'path',
    section: SECTIONS.CURRENT,
  },

  // =========================================================================
  // WAVE
  // =========================================================================

  // ⚑ FIELD NAME: Wave theory selection.
  'wave.theory': {
    // ⚑ DESCRIPTION
    description: 'Wave kinematic theory used to compute wave-induced velocities.',
    valueType: 'enum',
    // ⚑ VALUES: e.g. 'airy', 'stokes2', 'stokes5', 'dean', 'irregular', 'none'
    allowedValues: [
      // ⚑ 'KEYWORD_1',
      // ⚑ 'KEYWORD_2',
      // ⚑ 'KEYWORD_3',
      // ⚑ 'KEYWORD_4',
    ],
    section: SECTIONS.WAVE,
  },

  // ⚑ FIELD NAME: Significant (or regular) wave height.
  'wave.height': {
    // ⚑ DESCRIPTION
    description: 'Significant wave height Hs (irregular) or height H (regular).',
    valueType: 'number',
    // ⚑ UNIT
    unit: '[m]',
    range: { min: 0, max: 50 },
    section: SECTIONS.WAVE,
  },

  // ⚑ FIELD NAME: Peak / regular wave period.
  'wave.period': {
    // ⚑ DESCRIPTION
    description: 'Peak spectral period Tp (irregular) or period T (regular).',
    valueType: 'number',
    // ⚑ UNIT
    unit: '[s]',
    range: { min: 0, max: 100 },
    section: SECTIONS.WAVE,
  },

  // ⚑ FIELD NAME: Wave direction (propagation heading).
  'wave.direction': {
    // ⚑ DESCRIPTION
    description: 'Wave propagation direction (from North or from x-axis).',
    valueType: 'number',
    // ⚑ UNIT
    unit: '[deg]',
    range: { min: -360, max: 360 },
    section: SECTIONS.WAVE,
  },

  // ⚑ FIELD NAME: Wave spectrum type (for irregular / stochastic analysis).
  'wave.spectrum': {
    // ⚑ DESCRIPTION
    description: 'Spectral shape for irregular wave generation.',
    valueType: 'enum',
    // ⚑ VALUES: e.g. 'jonswap', 'pierson-moskowitz', 'ochi-hubble', 'tabular'
    allowedValues: [
      // ⚑ 'KEYWORD_1',
      // ⚑ 'KEYWORD_2',
      // ⚑ 'KEYWORD_3',
    ],
    section: SECTIONS.WAVE,
  },

  // ⚑ FIELD NAME: JONSWAP peak-enhancement factor γ.
  'wave.jonswap_gamma': {
    // ⚑ DESCRIPTION
    description: 'JONSWAP peak-enhancement factor γ (default 3.3).',
    valueType: 'number',
    range: { min: 1, max: 10 },
    section: SECTIONS.WAVE,
  },

  // ⚑ FIELD NAME: Random seed for irregular wave time-series generation.
  'wave.seed': {
    // ⚑ DESCRIPTION
    description: 'Random number seed for irregular wave time-series.',
    valueType: 'number',
    range: { min: 1, max: 2147483647 },
    section: SECTIONS.WAVE,
  },

  // =========================================================================
  // WIND
  // =========================================================================

  // ⚑ FIELD NAME: Mean wind speed at reference height.
  'wind.speed': {
    // ⚑ DESCRIPTION
    description: 'Mean wind speed at the reference height above sea level.',
    valueType: 'number',
    // ⚑ UNIT
    unit: '[m/s]',
    range: { min: 0, max: 100 },
    section: SECTIONS.WIND,
  },

  // ⚑ FIELD NAME: Wind direction heading.
  'wind.direction': {
    // ⚑ DESCRIPTION
    description: 'Wind direction heading (from North or from x-axis).',
    valueType: 'number',
    // ⚑ UNIT
    unit: '[deg]',
    range: { min: -360, max: 360 },
    section: SECTIONS.WIND,
  },

  // ⚑ FIELD NAME: Wind profile type.
  'wind.profile': {
    // ⚑ DESCRIPTION
    description: 'Vertical wind speed profile law.',
    valueType: 'enum',
    // ⚑ VALUES: e.g. 'uniform', 'power_law', 'log_law', 'none'
    allowedValues: [
      // ⚑ 'KEYWORD_1',
      // ⚑ 'KEYWORD_2',
      // ⚑ 'KEYWORD_3',
    ],
    section: SECTIONS.WIND,
  },

  // =========================================================================
  // BOUNDARY CONDITIONS
  // =========================================================================

  // ⚑ FIELD NAME: Type of constraint at the top end.
  'bc.top.type': {
    // ⚑ DESCRIPTION
    description: 'Constraint type applied at the top end of the cable/riser.',
    valueType: 'enum',
    // ⚑ VALUES: e.g. 'fixed', 'pinned', 'free', 'prescribed', 'spring', ...
    allowedValues: [
      // ⚑ 'KEYWORD_1',
      // ⚑ 'KEYWORD_2',
      // ⚑ 'KEYWORD_3',
    ],
    required: true,
    section: SECTIONS.BOUNDARY,
  },

  // ⚑ FIELD NAME: Type of constraint at the bottom end.
  'bc.bottom.type': {
    // ⚑ DESCRIPTION
    description: 'Constraint type applied at the bottom end (anchor / seabed).',
    valueType: 'enum',
    // ⚑ VALUES: same set as bc.top.type typically
    allowedValues: [
      // ⚑ 'KEYWORD_1',
      // ⚑ 'KEYWORD_2',
      // ⚑ 'KEYWORD_3',
    ],
    required: true,
    section: SECTIONS.BOUNDARY,
  },

  // ⚑ FIELD NAME: Top-end prescribed displacement or motion (x-component).
  'bc.top.motion_x': {
    // ⚑ DESCRIPTION
    description: 'Prescribed displacement / motion at the top end — x direction.',
    valueType: 'number',
    // ⚑ UNIT
    unit: '[m]',
    section: SECTIONS.BOUNDARY,
  },

  // ⚑ FIELD NAME: Top-end prescribed displacement or motion (y-component).
  'bc.top.motion_y': {
    // ⚑ DESCRIPTION
    description: 'Prescribed displacement / motion at the top end — y direction.',
    valueType: 'number',
    // ⚑ UNIT
    unit: '[m]',
    section: SECTIONS.BOUNDARY,
  },

  // ⚑ FIELD NAME: Top-end prescribed displacement or motion (z-component).
  'bc.top.motion_z': {
    // ⚑ DESCRIPTION
    description: 'Prescribed displacement / motion at the top end — z direction.',
    valueType: 'number',
    // ⚑ UNIT
    unit: '[m]',
    section: SECTIONS.BOUNDARY,
  },

  // ⚑ FIELD NAME: Path to a top-end motion time-series file.
  'bc.top.motion_file': {
    // ⚑ DESCRIPTION
    description: 'Path to CSV/MAT file containing prescribed top-end motion time-series.',
    valueType: 'path',
    section: SECTIONS.BOUNDARY,
  },

  // =========================================================================
  // INITIAL CONDITIONS
  // =========================================================================

  // ⚑ FIELD NAME: Field for specifying how initial configuration is obtained.
  'initial.type': {
    // ⚑ DESCRIPTION
    description: 'Method used to establish the initial (t=0) configuration.',
    valueType: 'enum',
    // ⚑ VALUES: e.g. 'static_equilibrium', 'catenary', 'file', 'zero', ...
    allowedValues: [
      // ⚑ 'KEYWORD_1',
      // ⚑ 'KEYWORD_2',
      // ⚑ 'KEYWORD_3',
    ],
    section: SECTIONS.INITIAL,
  },

  // ⚑ FIELD NAME: Path to a restart / hot-start file.
  'initial.restart_file': {
    // ⚑ DESCRIPTION
    description: 'Path to a restart file providing the initial state.',
    valueType: 'path',
    section: SECTIONS.INITIAL,
  },

  // =========================================================================
  // APPLIED LOADS
  // =========================================================================

  // ⚑ FIELD NAME: Distributed load per unit length — x component.
  'load.distributed_x': {
    // ⚑ DESCRIPTION
    description: 'Uniformly distributed load per unit length in the global x direction.',
    valueType: 'number',
    // ⚑ UNIT
    unit: '[N/m]',
    section: SECTIONS.LOADS,
  },

  // ⚑ FIELD NAME: Distributed load per unit length — y component.
  'load.distributed_y': {
    // ⚑ DESCRIPTION
    description: 'Uniformly distributed load per unit length in the global y direction.',
    valueType: 'number',
    // ⚑ UNIT
    unit: '[N/m]',
    section: SECTIONS.LOADS,
  },

  // ⚑ FIELD NAME: Distributed load per unit length — z component.
  'load.distributed_z': {
    // ⚑ DESCRIPTION
    description: 'Uniformly distributed load per unit length in the global z direction.',
    valueType: 'number',
    // ⚑ UNIT
    unit: '[N/m]',
    section: SECTIONS.LOADS,
  },

  // ⚑ FIELD NAME: Pre-tension or top tension applied at the top end.
  'load.top_tension': {
    // ⚑ DESCRIPTION
    description: 'Applied axial tension at the top end of the cable/riser.',
    valueType: 'number',
    // ⚑ UNIT
    unit: '[N]',
    range: { min: 0, max: 1e10 },
    section: SECTIONS.LOADS,
  },

  // =========================================================================
  // OUTPUT
  // =========================================================================

  // ⚑ FIELD NAME: Output directory path.
  'output.path': {
    // ⚑ DESCRIPTION
    description: 'Directory where result files will be written.',
    valueType: 'path',
    section: SECTIONS.OUTPUT,
  },

  // ⚑ FIELD NAME: Output file format.
  'output.format': {
    // ⚑ DESCRIPTION
    description: 'File format for result output.',
    valueType: 'enum',
    // ⚑ VALUES: e.g. 'csv', 'mat', 'hdf5', 'vtk', 'binary', 'ascii'
    allowedValues: [
      // ⚑ 'KEYWORD_1',
      // ⚑ 'KEYWORD_2',
      // ⚑ 'KEYWORD_3',
    ],
    section: SECTIONS.OUTPUT,
  },

  // ⚑ FIELD NAME: How often to write results (every N steps).
  'output.frequency': {
    // ⚑ DESCRIPTION
    description: 'Write results every N time steps (1 = every step).',
    valueType: 'number',
    range: { min: 1, max: 1000000 },
    section: SECTIONS.OUTPUT,
  },

  // ⚑ FIELD NAME: List of physical quantities / variables to output.
  'output.variables': {
    // ⚑ DESCRIPTION
    description: 'Space-separated list of result variables to write.',
    valueType: 'array',
    // ⚑ VALUES: list every variable name your solver can export.
    //   These will appear as array-element completions.
    allowedValues: [
      // ⚑ 'VARIABLE_1',   ← e.g. 'tension', 'curvature', 'displacement', ...
      // ⚑ 'VARIABLE_2',
      // ⚑ 'VARIABLE_3',
      // ⚑ 'VARIABLE_4',
      // ⚑ 'VARIABLE_5',
    ],
    section: SECTIONS.OUTPUT,
  },

  // ⚑ FIELD NAME: Flag to enable or disable screen / log output.
  'output.verbose': {
    // ⚑ DESCRIPTION
    description: 'Print detailed progress information to the console.',
    valueType: 'boolean',
    section: SECTIONS.OUTPUT,
  },

  // ⚑ FIELD NAME: Log file name.
  'output.log_file': {
    // ⚑ DESCRIPTION
    description: 'File name for the solver run log.',
    valueType: 'path',
    section: SECTIONS.OUTPUT,
  },

  // ==========================================================================
  // ⚑ ADD MORE FIELDS
  // --------------------------------------------------------------------------
  // If your manual has fields that do not fit any category above, add them here
  // following the same pattern:
  //
  //  // ⚑ FIELD NAME: describe what to replace
  //  'your.field_name': {
  //    description: '⚑ DESCRIPTION',
  //    valueType: 'enum' | 'number' | 'boolean' | 'string' | 'array' | 'path',
  //    allowedValues: [ /* ⚑ VALUES */ ],  // only for 'enum'
  //    unit: '⚑ UNIT',                    // only for 'number'
  //    range: { min: 0, max: 0 },         // only for 'number', optional
  //    required: false,
  //    section: SECTIONS.OUTPUT,          // choose appropriate section
  //  },
  // ==========================================================================

};

// ---------------------------------------------------------------------------
// Convenience helpers used by server.ts
// ---------------------------------------------------------------------------

/** Returns all field names that belong to a given section. */
export function fieldsInSection(section: string): string[] {
  return Object.entries(CCD_SCHEMA)
    .filter(([, def]) => def.section === section)
    .map(([key]) => key);
}

/** Returns only fields that are marked required. */
export function requiredFields(): string[] {
  return Object.entries(CCD_SCHEMA)
    .filter(([, def]) => def.required === true)
    .map(([key]) => key);
}
