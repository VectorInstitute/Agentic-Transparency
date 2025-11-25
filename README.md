# X-AXIOM: Agentic Transparency Taxonomy

**A Practical Taxonomy for Interpretability and Explainability in LLM-based Agentic AI**

[![Vector Institute](https://img.shields.io/badge/Vector-Institute-blue)](https://vectorinstitute.ai)
[![arXiv](https://img.shields.io/badge/arXiv-Coming%20Soon-red)](https://arxiv.org/)

## Overview

As artificial intelligence evolves from static predictive models to autonomous agentic systems, transparency becomes increasingly critical yet challenging. **X-AXIOM** (Agentic Transparency: A Practical Taxonomy for Interpretability and Explainability) provides a comprehensive framework for understanding and implementing transparency in LLM-based agentic AI systems.

Traditional interpretability and explainability methods were designed for static models and single-step predictions. X-AXIOM extends these concepts to address the unique challenges of agentic systems that:
- Maintain state across multiple steps
- Make autonomous decisions
- Use external tools and APIs
- Update internal memory and beliefs
- Coordinate across multiple agents

## Key Features

### 📊 Comprehensive Taxonomy
A 5-axis framework organizing transparency across:
- **WHAT** (Cognitive Objects): Intent, beliefs, plans, memory, tool I/O, policies, outcomes
- **WHY** (Assurance Objectives): Faithfulness, usefulness, compliance, robustness, equity, auditability
- **HOW** (Mechanisms): Intrinsic, post-hoc, causal, operational, social
- **WHEN** (Temporal Stages): Design-time, process-time, outcome-time
- **WHO** (Multi-agent): Role contracts, attribution, provenance

### 🎯 Six Assurance Objectives
1. **Faithfulness**: Explanations reflect actual computations
2. **Usefulness**: Actionable for users, developers, and auditors
3. **Compliance**: Supports legal, ethical, and organizational requirements
4. **Robustness**: Stable under perturbations and adversarial tests
5. **Equity**: Fair treatment across demographic groups
6. **Auditability**: Reproducible, verifiable, and traceable

### 🔬 Cognitive Audit Surface
Formalizes the observable components of agentic systems:
- **Intent**: Goal understanding and task interpretation
- **Beliefs**: System's understanding of the world state
- **Plans**: Multi-step reasoning and action sequences
- **Memory**: Persistent state and historical context
- **Tool I/O**: External function calls and API interactions
- **Policies/Guardrails**: Safety constraints and operational limits
- **Outcomes**: Final decisions and their impacts

### 📋 Evaluation Protocols
Design-time, process-time, and outcome-time assessment frameworks aligned with assurance objectives, including:
- Plan-trace agreement for faithfulness
- Task success metrics for usefulness
- Control mapping for compliance
- Perturbation stability for robustness
- Disparity metrics for equity
- Replay verification for auditability

## The X-AXIOM Framework

![X-AXIOM Taxonomy](static/images/figures/figure2-07.png)

*The X-AXIOM taxonomy organizes transparency along five interconnected axes, providing a unified framework for interpretability and explainability in agentic AI systems.*

### Five Axes Explained

#### 1. Cognitive Objects (WHAT)
The internal states and interfaces that should be observable:
- Agent's intent and goal interpretation
- Beliefs about the environment
- Plans and action sequences
- Memory stores and retrieval patterns
- Tool inputs, outputs, and errors
- Policy constraints and guardrails
- Final outcomes and their justifications

#### 2. Assurance & Evaluation Objectives (WHY)
Why transparency is needed and how to evaluate it:
- **Faithfulness**: Does the explanation match actual behavior?
- **Usefulness**: Can stakeholders act on the information?
- **Compliance**: Does it meet regulatory requirements?
- **Robustness**: Is it stable under variations?
- **Equity**: Is treatment fair across groups?
- **Auditability**: Can decisions be reproduced and verified?

#### 3. Mechanisms (HOW)
Technical approaches to achieve transparency:
- **Intrinsic**: Self-rationales, plan graphs, program sketches
- **Post hoc**: Attribution, counterfactuals, prototypes
- **Causal/Mechanistic**: Activation patching, circuit discovery
- **Operational**: Signed logs, execution replay, provenance
- **Social**: Dialogue, role rationales, interactive explanation

#### 4. Temporal Stages (WHEN)
When transparency is applied in the system lifecycle:
- **Design-time**: Architecture choices, logging infrastructure, schema definitions
- **Process-time**: Runtime traces, plan generation, tool calls, memory updates
- **Outcome-time**: Decision summaries, explanation packets, audit trails

#### 5. Multi-agent Extensions (WHO)
Accountability in distributed systems:
- **Role-rationale contracts**: Binding responsibilities to explanations
- **Attribution mappings**: Team, agent, and tool-level provenance
- **Provenance graphs**: W3C PROV-based traceability across agents

## Contributions

This work provides four main contributions:

1. **X-AXIOM Taxonomy**: A unified framework with 5 axes (WHAT, WHY, HOW, WHEN, WHO) providing shared vocabulary for interpretability, explainability, and governance

2. **Cognitive Audit Surface**: Formalization of observable components (intent, beliefs, plans, memory, tool I/O, policies, outcomes) with 6 assurance objectives aligned with EU AI Act, NIST AI RMF, and ISO/IEC 42001

3. **Comprehensive Survey**: Mapping of methods from interpretability, XAI, mechanistic interpretability, and operational monitoring into the X-AXIOM space, highlighting coverage and gaps

4. **Evaluation Protocols**: Design-time, process-time, and outcome-time evaluation frameworks showing how X-AXIOM guides concrete transparency and audit practices

## Resources

- **📄 Paper PDF**: [Read the full paper](static/pdf/aixpert_expliability_interptability_review.pdf)
- **🌐 Project Website**: [Coming soon when published]
- **📚 arXiv**: [Coming soon]
- **🏛️ Vector Institute**: [vectorinstitute.ai](https://vectorinstitute.ai)

## Citation

```bibtex
# BibTeX citation to be provided upon publication
```

## Getting Started

### Local Preview

To view the project website locally:

1. Clone this repository:
   ```bash
   git clone https://github.com/VectorInstitute/X-AXIOM.git
   cd X-AXIOM
   ```

2. Open `index.html` in your web browser:
   ```bash
   # On Linux/WSL
   xdg-open index.html

   # On macOS
   open index.html

   # On Windows
   start index.html
   ```

### Repository Structure

```
X-AXIOM/
├── index.html                    # Project website
├── README.md                     # This file
├── .nojekyll                    # GitHub Pages config
├── static/
│   ├── css/                     # Stylesheets
│   ├── js/                      # JavaScript
│   ├── images/
│   │   ├── figures/             # Paper figures
│   │   ├── favicon.ico          # Site icon
│   │   └── social_preview.png   # Social media preview
│   └── pdf/
│       └── aixpert_expliability_interptability_review.pdf
```

## Related Work

X-AXIOM builds upon and extends prior work in:
- **Classical XAI**: LIME, SHAP, counterfactual explanations
- **Mechanistic Interpretability**: Circuit analysis, activation patching, sparse autoencoders
- **LLM Explainability**: Chain-of-thought, attention visualization, retrieval attribution
- **Agentic AI**: ReAct, tool-use agents, multi-agent systems
- **AI Governance**: EU AI Act, NIST AI RMF, ISO/IEC 42001

For a comprehensive comparison with related surveys, see Table 1 in the paper.

## Applications

The X-AXIOM framework is applicable to:
- 🤖 **LLM-based Agents**: Single-agent assistants with tool use
- 👥 **Multi-agent Systems**: Coordinator-worker, role teams, swarms
- 🔍 **AI Safety & Alignment**: Monitoring and verification of agent behavior
- ⚖️ **AI Governance**: Compliance with regulatory frameworks
- 🏢 **Enterprise AI**: Auditability and accountability for business applications
- 🔬 **Research**: Systematic evaluation of transparency methods

## Future Work

We identify several open challenges:
- Multi-step planning transparency
- Tool use explanation and verification
- Memory and belief tracking across long horizons
- Multi-agent coordination and attribution
- Socio-technical aspects of agentic transparency
- Real-time monitoring and intervention
- Privacy-preserving transparency mechanisms

## Contact

For questions, collaborations, or feedback:
- **Vector Institute**: [vectorinstitute.ai](https://vectorinstitute.ai)
- **Issues**: [GitHub Issues](https://github.com/VectorInstitute/X-AXIOM/issues)

## License

License to be determined.

## Acknowledgments

This work is affiliated with the Vector Institute for Artificial Intelligence.

Acknowledgments and funding information to be added upon publication.

---

<p align="center">
  <em>Making Agentic AI Transparent, Accountable, and Trustworthy</em>
</p>
