# Two-Year Self-Study Curriculum in AI and Machine Learning Engineering

> A structured, assessed learning portfolio by Laith AlKhdour. This is an independent MSc-level study plan, not an accredited degree or a claim of academic equivalence.

**Planned period:** October 2026–September 2028  
**Commitment:** 12–15 focused hours per active study week  
**Structure:** four semesters, each with 24 active weeks and approximately two weeks of leave or contingency  
**Total planned effort:** 1,152–1,440 hours across 96 active weeks  
**Orientation:** mathematical and experimental rigor combined with production AI engineering  
**Primary output:** a reproducible GitHub portfolio of problem sets, implementations, experiments, systems projects, and a final research study

## Contents

- [1. Program purpose and completion outcomes](#1-program-purpose-and-completion-outcomes)
- [2. Books and reading strategy](#2-books-and-reading-strategy)
- [3. Calendar and workload](#3-calendar-and-workload)
- [4. Semester 1: Mathematics and classical machine learning](#4-semester-1-mathematics-and-classical-machine-learning)
- [5. Semester 2: Deep learning and reliable ML systems](#5-semester-2-deep-learning-and-reliable-ml-systems)
- [6. Semester 3: Language models and production AI applications](#6-semester-3-language-models-and-production-ai-applications)
- [7. Semester 4: Advanced systems and independent research](#7-semester-4-advanced-systems-and-independent-research)
- [8. Assessment and progression policy](#8-assessment-and-progression-policy)
- [9. GitHub repository design](#9-github-repository-design)
- [10. Operating rules and scope control](#10-operating-rules-and-scope-control)
- [11. First two weeks checklist](#11-first-two-weeks-checklist)
- [12. Official resources and selected papers](#12-official-resources-and-selected-papers)

## 1. Program purpose and completion outcomes

The purpose is to strengthen the foundations behind existing production AI experience and make engineering decisions defensible through mathematics, experiments, and measured system behavior. Book completion is an input; demonstrated capability is the outcome.

By completion, aim to be able to:

1. Derive and implement core learning algorithms, explain their assumptions, and diagnose numerical failures.
2. Design valid experiments with appropriate splits, baselines, uncertainty estimates, and leakage controls.
3. Train and evaluate neural networks, implement attention, and explain optimization and generalization trade-offs.
4. Build reproducible ML pipelines with explicit data contracts, versioning, observability, and rollback.
5. Evaluate retrieval, generation, adaptation, and agent workflows as separate components and as complete systems.
6. Reason about storage, transactions, replication, consistency, and stream processing in AI applications.
7. Benchmark model serving across quality, latency, throughput, memory, reliability, and cost.
8. Critically read research, reproduce bounded claims, and complete an independently reviewable investigation.

### Scope boundaries

This is a focused AI/ML engineering curriculum. It does not attempt full coverage of theoretical computer science, robotics, computer vision, reinforcement learning, or all branches of statistics. Those areas receive foundations or optional specialization. A university program would also provide faculty feedback, supervised research, peer assessment, and accredited examination that self-study cannot automatically reproduce.

Arrange an external review at least once each semester when possible: an experienced engineer for system design, and a researcher or mathematically strong practitioner for theoretical and experimental work. Record reviewer qualifications and feedback; a review is feedback, not accreditation.

## 2. Books and reading strategy

### Six primary books

| Code | Book | Main role | Core use |
| --- | --- | --- | --- |
| MML | *Mathematics for Machine Learning* — Marc Peter Deisenroth, A. Aldo Faisal, Cheng Soon Ong | Mathematical foundations | Semester 1; revisit probability and optimization in Semester 2 |
| HOML | *Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow* — Aurélien Géron | Practical classical ML and deep learning | Semesters 1–2 |
| HLLM | *Hands-On Large Language Models* — Jay Alammar, Maarten Grootendorst | Language model representations and applications | Semester 3 |
| AIE | *AI Engineering* — Chip Huyen | Foundation-model application design and evaluation | Semesters 3–4 |
| DMLS | *Designing Machine Learning Systems* — Chip Huyen | Data, deployment, monitoring, and feedback | Semesters 2–4 |
| DDIA | *Designing Data-Intensive Applications* — Martin Kleppmann; edition-dependent coauthorship | Distributed data systems | Semesters 2 and 4 |

**Edition policy:** record the edition you own in `resources/reading-map.md`. The HOML companion linked below targets the third edition of the TensorFlow/Keras book. DDIA has edition-dependent authorship and organization; use the topic names below against your edition's contents. Do not buy another edition simply to match this plan.

The plan maps readings by topic rather than page number. Each semester begins by selecting the relevant sections from your editions. A week's reading is usually a section or selected chapter material, not a requirement to finish a dense chapter alongside a substantial lab.

### Targeted academic supplements

These are references for specific gaps, not four additional cover-to-cover commitments.

| Reference | Required selections | Optional extension |
| --- | --- | --- |
| Kevin Murphy, *Probabilistic Machine Learning: An Introduction* | Statistical decision-making, probabilistic inference, generalization, uncertainty | Gaussian processes and variational inference |
| Goodfellow, Bengio, Courville, *Deep Learning* | Numerical computation, optimization, regularization, representation learning | More detailed generative modeling |
| Boyd and Vandenberghe, *Convex Optimization* | Convex sets/functions, unconstrained optimization, constrained optimization and KKT intuition | Duality proofs and advanced algorithms |
| Sutton and Barto, *Reinforcement Learning: An Introduction* | MDPs, Bellman equations, tabular dynamic programming and temporal-difference learning | Policy gradients and deep RL |

Use NumPy for foundation implementations, scikit-learn for classical comparisons, and PyTorch for new deep learning work. Read HOML's Keras/TensorFlow examples to understand the concepts; translate selected examples to PyTorch rather than maintaining two complete implementations of every exercise.

### Reading workflow

1. Write the question the reading should answer.
2. Read the minimum relevant section and produce notes in your own words.
3. Work a derivation or example without the book open.
4. Test the concept through code, an experiment, or a system design decision.
5. Document where it fails and revisit after one and four weeks.

For research papers, extract the problem, assumptions, contribution, baseline, evaluation protocol, limitations, and a feasible reproduction target. Choose a few papers for depth rather than collecting many unread links.

## 3. Calendar and workload

| Semester | Dates | Central question | Main deliverable |
| --- | --- | --- | --- |
| 1 | October 2026–March 2027 | Why do standard ML algorithms work, and when does evaluation mislead us? | Rigorous tabular ML benchmark |
| 2 | April–September 2027 | How do we train useful representations and operate ML reliably? | Neural model with a reproducible deployment pipeline |
| 3 | October 2027–March 2028 | How do we build and evaluate useful language-model applications? | Evaluated Arabic/English document assistant |
| 4 | April–September 2028 | Which system choices improve quality, efficiency, and reliability under controlled conditions? | Dissertation-style experimental study and reproducible system |

Week numbers are **active learning blocks within each semester**, not ISO calendar weeks. Allocate 24 blocks across each six-month window; reserve approximately two weeks for leave, illness, or remediation. Keep exact start/end dates in the repository tracker. Weeks 21–24 still count as study hours because project closure, review, and assessment require work.

### Sustainable weekly allocation

| Activity | Hours at a 12-hour baseline | Output |
| --- | --- | --- |
| Theory and problem solving | 4 | Derivations, solved problems, retrieval practice |
| Implementation and experiments | 4 | Working code, measured comparisons |
| Semester project | 2 | One scoped increment |
| Papers, writing, and review | 2 | Evidence log, technical explanation, planning |
| Optional capacity | Up to 3 extra | Remediation first; extensions second |

Project time increases during integration and Semester 4 by replacing some reading and lab time. It is not added invisibly on top of the weekly budget. Weekly labs should feed the semester project wherever possible.

Example cadence: four two-hour sessions plus a four-hour weekend block. Choose days around work and gym commitments. Track actual hours and outcomes; attendance alone does not establish progress.

### Weekly definition of done

- [ ] Can explain the main idea without reading notes.
- [ ] Completed 3–6 carefully chosen problems or equivalent experimental/design tasks.
- [ ] Produced one inspectable artifact: derivation, implementation, experiment, or design decision.
- [ ] Recorded assumptions, failures, and what remains unclear.
- [ ] Updated progress and linked evidence in GitHub.

Do not force a new from-scratch algorithm every week. Use such implementations when they expose the mechanism; evaluation, failure analysis, and systems reasoning require different evidence.

## 4. Semester 1: Mathematics and classical machine learning

**Period:** October 2026–March 2027  
**Effort:** 288–360 hours  
**Primary resources:** MML and HOML  
**Supplement:** Murphy for inference/evaluation; selected Boyd material for optimization

### Learning outcomes

- Explain vector spaces, projections, eigenvalues, SVD, and their relationship to regression and PCA.
- Calculate gradients with clear shape conventions and verify them numerically.
- Connect likelihood, loss minimization, regularization, and Bayesian inference.
- Implement linear regression, logistic regression, PCA, and k-means with NumPy.
- Compare linear, kernel, tree, ensemble, and unsupervised methods appropriately.
- Evaluate generalization with correct splits, uncertainty estimates, and decision thresholds.

### Module allocation

| Module | Active weeks | Required depth |
| --- | --- | --- |
| Mathematical foundations | 1–10 | Derivations and numerical examples |
| Classical ML and experimental design | 11–20 | Implementations and controlled comparisons |
| Project completion and assessment | 21–24 | Reproducible benchmark and closed-book review |

### Weekly plan

| Week | Focus and reading | Required practical work | Evidence to commit |
| --- | --- | --- | --- |
| 1 | Diagnostic; MML introduction; HOML ML landscape | Assess algebra, calculus, probability, Python, and evaluation; create environment and simple train/test baseline | Diagnostic, remediation list, data-selection note |
| 2 | MML linear algebra: spaces, rank, linear maps | Solve systems, inspect rank-deficient data, implement basic elimination for learning | Worked problems and numerical lab |
| 3 | MML analytic geometry: norms, inner products, projections | Derive least-squares projection; compare geometric and numerical solutions | Projection derivation and visualization |
| 4 | MML matrix decompositions: eigenvalues, SVD | Explore conditioning and low-rank reconstruction; compare stable solves with naive inversion | SVD lab and first monthly report |
| 5 | MML vector calculus: derivatives and chain rule | Derive gradients for linear and logistic losses; finite-difference checks on small inputs | Gradient notebook with shape annotations |
| 6 | MML optimization; HOML linear-model training | Implement gradient descent; test learning rate, scaling, and regularization; recognize convex versus nonconvex objectives | Optimizer comparison and convergence plots |
| 7 | MML probability: conditional probability and Bayes' rule | Compute Bayesian updates and expectations; simulate independent and dependent variables | Probability problem set |
| 8 | MML probability: covariance, common distributions, sampling | Study covariance geometry; simulate sampling variation and estimator bias/variance | Sampling lab and monthly report |
| 9 | MML statistical learning and linear regression; Murphy selections | Derive MLE and MAP for a simple model; relate Gaussian noise to squared loss and priors to regularization | Derivations and NumPy regression module |
| 10 | Estimation, bootstrap intervals, generalization | Bootstrap a metric with an appropriate resampling unit; compare random and group/time splits where applicable | Evaluation protocol and foundation checkpoint |
| 11 | HOML end-to-end project: preparation and pipelines | Audit missingness, duplicates, feature availability, preprocessing leakage; implement train-only fitting | Dataset card and preprocessing pipeline |
| 12 | HOML classification and linear models | Implement logistic regression; compare threshold choices, PR/ROC metrics, and calibration | Classification lab and monthly report |
| 13 | HOML and MML support vector machines | Explain margin, regularization, and kernels; compare linear and RBF models under the same split | Kernel comparison and complexity note |
| 14 | HOML decision trees | Study impurity, depth, pruning, and instability; inspect mistakes on held-out validation data | Tree experiments and error slices |
| 15 | HOML ensembles | Compare bagging, random forests, and boosting with controlled tuning budgets | Baseline results table |
| 16 | HOML and MML dimensionality reduction | Derive PCA; implement with SVD; compare standardized and unstandardized inputs | PCA implementation and monthly report |
| 17 | HOML unsupervised learning | Implement k-means; compare cluster stability and anomaly scoring; explain limits of internal cluster metrics | Unsupervised lab and failure examples |
| 18 | MML Gaussian mixture models; Murphy inference selections | Explain latent variables and EM; implement a small 1D/2D mixture model or walk through every update numerically | EM derivation and convergence evidence |
| 19 | Model selection and statistical discipline | Set a bounded search budget; run cross-validation inside the development data; distinguish predictive association from causality | Tuning log and revised protocol |
| 20 | Explainability, calibration, and decision cost | Examine feature importance limitations, subgroup errors, and threshold costs; calibrate using separate validation data | Decision memo and monthly report |
| 21 | Project experiments | Freeze development choices; run final model comparisons; document negative results | Configurations and experiment table |
| 22 | Robustness and final evaluation | Check leakage and reproducibility; freeze choices before one final test evaluation; assess shift and missing features separately | Final test results and robustness report |
| 23 | Assessment and technical presentation | Complete closed-book assessment; present modeling decisions and defend limitations | Answers, slides/notes, presentation recording if feasible |
| 24 | Final report and remediation | Release benchmark; correct failed competencies and retest those areas | Report, self-review, semester release |

### Semester project: rigorous tabular ML benchmark

**Question:** how much do model family, preprocessing, and threshold selection change predictive quality and decision cost on a realistic tabular task?

Choose one public, properly licensed dataset with a clear target. Suitable domains include credit risk, churn, or demand prediction. Financial classification offers useful continuity with prior experience; it must remain a learning benchmark rather than a claim of validated financial decision-making.

**Required scope:**

1. Define the prediction time, target, unit of observation, and available features.
2. Create a dataset card, train/validation/test split, and leakage checklist before model comparison.
3. Compare a dummy baseline and at least three meaningful model families.
4. Include your NumPy regression or classification implementation as a learning artifact; compare it to a library implementation on a small controlled dataset.
5. Evaluate primary/secondary metrics, uncertainty, calibration for classification, and at least three meaningful error slices.
6. Include a bounded tuning budget, preprocessing ablation, and robustness check.
7. Produce a runnable experiment command and a 6–10-page-equivalent report, approximately 2,500–4,000 words excluding appendices.

**Acceptance criteria:** the split respects the data-generating context; preprocessing fits only on training data; each result maps to a configuration; a fresh environment reproduces the main table within documented tolerance; conclusions acknowledge uncertainty and dataset limitations. Beating the baseline is desirable, but honest negative results can pass.

### Semester 1 competency gate

Without consulting notes, derive linear regression and logistic-loss gradients; explain SVD-based PCA; calculate a conditional probability; describe MLE versus MAP; choose a valid split; identify leakage in a sample pipeline. Correct weaknesses before starting the corresponding advanced topic.

**Optional extension:** selected convex duality, Gaussian processes, or a more rigorous study of learning bounds. Choose at most one.

## 5. Semester 2: Deep learning and reliable ML systems

**Period:** April–September 2027  
**Effort:** 288–360 hours  
**Primary resources:** HOML, DMLS, selected DDIA  
**Supplements:** *Deep Learning*, Murphy, Sutton and Barto

### Learning outcomes

- Derive backpropagation for a small network and implement a verified training loop.
- Diagnose underfitting, overfitting, unstable gradients, and data pipeline failures.
- Explain CNNs, sequence models, attention, and basic representation learning.
- Demonstrate probabilistic modeling and RL foundations without making them separate full specializations.
- Version data/model artifacts, define contracts, and demonstrate deployment, monitoring, and rollback.
- Explain how database and event-processing semantics affect ML correctness.

### Module allocation

| Module | Active weeks | Required depth |
| --- | --- | --- |
| Neural foundations and architectures | 1–11 | Training mechanics and controlled experiments |
| Probabilistic and RL foundations | 12–14 | Small mathematical/numerical examples |
| Data and ML systems | 15–20 | One minimal pipeline; failure drills |
| Integration and assessment | 21–24 | Operational evidence and research reproduction |

### Weekly plan

| Week | Focus and reading | Required practical work | Evidence to commit |
| --- | --- | --- | --- |
| 1 | HOML neural networks; *Deep Learning* feedforward models | Implement a two-layer NumPy MLP; derive and gradient-check backpropagation | MLP implementation and derivation |
| 2 | PyTorch tensors, autograd, modules, training | Translate the MLP; build train/evaluate loops; overfit a tiny batch before scaling | Training loop and smoke check |
| 3 | HOML deep-network training; initialization and optimization | Compare SGD and Adam under a fixed budget; inspect gradients and loss curves | Optimizer experiment |
| 4 | Regularization, normalization, early stopping | Compare dropout/weight decay; distinguish validation tuning from test reporting | Ablation and monthly report |
| 5 | HOML data loading; DMLS training data | Create train-only transforms and reproducible loaders; document seeds and remaining nondeterminism | Data pipeline and dataset contract |
| 6 | HOML CNNs | Train a compact CNN and compare a simple baseline; inspect class-level errors | CNN lab and evaluation |
| 7 | Transfer learning and representation quality | Compare frozen features with fine-tuning under equal compute; inspect domain mismatch | Transfer-learning comparison |
| 8 | HOML sequence models | Implement a small recurrent model; test masking, padding, and temporal leakage | Sequence lab and monthly report |
| 9 | HOML attention; original Transformer paper | Implement scaled dot-product attention and verify causal masking behavior | Attention module and tensor-shape explanation |
| 10 | Transformer architecture | Assemble a small encoder/decoder component; explain residuals, normalization, positional information | Architecture notebook and correctness checks |
| 11 | HOML autoencoders and generative modeling | Train a small autoencoder; derive the VAE objective at a conceptual/mathematical level; separate reconstruction quality from useful features | Representation comparison |
| 12 | Murphy uncertainty and probabilistic modeling | Distinguish aleatoric/epistemic uncertainty; compare a probabilistic or ensemble approach with a point estimate | Uncertainty lab and monthly report |
| 13 | Sutton/Barto: MDPs and dynamic programming | Define a small gridworld; implement policy evaluation and value iteration | Bellman derivation and tabular solver |
| 14 | Sutton/Barto: temporal-difference learning | Implement tabular Q-learning; compare with model-based planning over several seeds; explain exploration | Learning curves and RL limitations |
| 15 | DMLS system design; DDIA data models and storage | Define model contract and serving requirements; select storage/indexing based on access patterns | Architecture decision record |
| 16 | DMLS data engineering and features | Build one batch pipeline; version dataset metadata and model artifacts; test training/serving feature parity | Pipeline and monthly report |
| 17 | DDIA transactions, schema evolution, encoding | Simulate duplicate writes and schema changes; document transaction boundaries and compatibility | Data correctness lab |
| 18 | DDIA replication and stream processing concepts | Examine replay, ordering, and delivery semantics with a small event log; implement idempotent updates | Replay experiment and design note |
| 19 | DMLS deployment; HOML serving | Package model behind a small API with input validation; add health checks and a reproducible build | Service, container, API examples |
| 20 | DMLS distribution shifts and monitoring | Inject a synthetic shift; monitor data and service metrics; explain why drift does not itself establish accuracy loss | Monitoring report and monthly report |
| 21 | DMLS continual learning and rollback | Stage a model replacement; test failure and rollback; document conditions for retraining | Release/rollback evidence |
| 22 | Bounded research reproduction | Reproduce one narrow claim using existing neural experiments; repeat key configurations over multiple seeds | Reproduction note and discrepancy analysis |
| 23 | Assessment and reliability drill | Complete closed-book exam; load-test the service and inject a dependency/model failure | Exam, load results, failure report |
| 24 | Project close and review | Consolidate training, evaluation, serving, monitoring, and limitations into a release | Technical report, demo, semester release |

### Semester project: neural model with an operational lifecycle

Choose **one** modest task: text classification, small-image classification, or time-series prediction. Prefer a task whose dataset and baseline are already familiar. Do not combine all architectures into one product.

**Required scope:**

1. A simple baseline and one main neural model with at least two hypothesis-driven ablations.
2. A reproducible training pipeline with tracked configurations and dataset metadata.
3. An API with explicit schema validation, timeout handling, and model version identification.
4. Quality, p50/p95 latency, throughput, and memory measurements under a declared workload.
5. Minimal monitoring for inputs and service health; delayed-label quality evaluation where labels exist.
6. One replay/idempotency drill and one model rollout/rollback drill.
7. A 6–10-page-equivalent report and a short runbook.

**Minimal stack:** Python, PyTorch, FastAPI, Docker, and either a simple filesystem artifact registry or MLflow. Use PostgreSQL only if the project needs durable application records. Kafka, Redis, Kubernetes, and feature stores are optional; architectural complexity is not evidence of learning.

**Acceptance criteria:** one documented command path trains and evaluates the model; predictions are traceable to a version; invalid input is handled; the declared service objective is measured; failure handling and rollback are demonstrated. Set latency targets after measuring the baseline on available hardware rather than inventing universal targets.

### Year 1 research reproduction

Reproduce **one claim, table subset, or ablation**, not a complete large paper. Use an accessible small model or a scaled-down setting; label it clearly if it differs from the original. Week 22 consolidates experiments begun earlier, rather than demanding a reproduction from scratch in one week.

Good options: an optimizer comparison linked to Adam, a normalization experiment linked to Batch Normalization, or an architecture comparison on a small dataset. Report data, configuration, seeds, compute, agreement/disagreement, and reasons full equivalence was not achieved.

### Semester 2 competency gate

Derive backpropagation for a small network; explain attention shapes and masks; diagnose a failed learning curve; write a Bellman equation; distinguish drift from measured quality loss; explain why replay can create duplicates; demonstrate rollback with evidence.

**Optional extension:** deeper Bayesian inference, a policy-gradient implementation, or distributed training. Choose one only after the core service is complete.

## 6. Semester 3: Language models and production AI applications

**Period:** October 2027–March 2028  
**Effort:** 288–360 hours  
**Primary resources:** HLLM and AIE  
**Supporting resource:** DMLS for data/evaluation/monitoring principles

### Learning outcomes

- Explain tokenization, embeddings, transformer generation, and adaptation choices.
- Evaluate retrieval separately from generation and report end-to-end outcomes.
- Compare lexical, dense, hybrid, and reranked retrieval on held-out questions.
- Design constrained tool workflows with explicit failure handling.
- Compare prompting, retrieval, and fine-tuning without assuming one is always superior.
- Benchmark inference and make quality/cost/latency trade-offs using measured evidence.

### Module allocation

| Module | Active weeks | Required depth |
| --- | --- | --- |
| Language model foundations and representations | 1–6 | Small implementations and analysis |
| Retrieval and evaluation | 7–13 | Held-out benchmark and failure taxonomy |
| Workflows, adaptation, and serving | 14–20 | Controlled comparisons and bounded tools |
| System release and research proposal | 21–24 | Publicly reviewable evidence and capstone scope |

### Weekly plan

| Week | Focus and reading | Required practical work | Evidence to commit |
| --- | --- | --- | --- |
| 1 | HLLM language model overview; AIE foundations | Map pretraining, post-training, and application development; select one small model and record its license/version | Model-selection memo |
| 2 | HLLM tokens and embeddings | Analyze Arabic/English tokenization and truncation; compare representations on a labeled small set | Tokenization and embedding lab |
| 3 | HLLM transformer internals; revisit attention | Build a tiny educational language model or complete a decoder forward pass; verify causal behavior | Educational decoder and explanation |
| 4 | HLLM generation; AIE decoding/model behavior | Compare deterministic/sampling settings on a fixed prompt set; analyze task quality and variability | Decoding report and monthly report |
| 5 | HLLM text classification and clustering | Compare keyword/linear embedding baselines with model-based classification; inspect cluster failure cases | Representation benchmark |
| 6 | HLLM semantic search | Create lexical and dense retrieval baselines with a fixed corpus version | Baseline retrieval index and metrics |
| 7 | AIE/HLLM RAG: ingestion and chunking | Audit parsing, segmentation, metadata, and OCR errors on a small permitted corpus; define source IDs | Ingestion pipeline and corpus card |
| 8 | Retrieval evaluation | Build development/test questions with relevance judgments; split by document/source where needed | Evaluation dataset v1 and monthly report |
| 9 | Hybrid retrieval and reranking | Compare dense, lexical, fusion, and one reranker within a fixed tuning budget | Retrieval results and error slices |
| 10 | Context construction and evidence | Experiment with context budget/order; preserve source attribution; measure whether necessary evidence reaches the prompt | Context ablation |
| 11 | AIE evaluation methodology | Define answer correctness, supportedness, citation correctness, and abstention; establish a human rubric | End-to-end evaluation protocol |
| 12 | AIE model-assisted evaluation | Compare judge outputs against blinded human ratings on a sample; examine systematic disagreements | Judge validation and monthly report |
| 13 | HLLM/AIE prompting and structured outputs | Compare simple and structured prompts; validate schemas and retry policy; test unanswerable questions | Prompt comparison and failure taxonomy |
| 14 | AIE agents/tool use | Implement one bounded read-only tool workflow; compare against a deterministic workflow baseline | Tool contract and baseline comparison |
| 15 | Reliability and adversarial inputs | Test prompt injection, malformed tool calls, missing evidence, and unavailable dependencies | Failure tests and remediation log |
| 16 | HLLM/AIE fine-tuning and data quality | Define whether adaptation is justified; prepare a small licensed training set and strict held-out evaluation | Adaptation proposal and monthly report |
| 17 | Parameter-efficient adaptation | Run a small adapter experiment if feasible; otherwise reproduce on a smaller task/model; compare with prompting baseline | Training configuration and quality comparison |
| 18 | AIE inference optimization | Profile prefill/decode where observable; record TTFT, generation speed, end-to-end latency, and memory | Serving benchmark v1 |
| 19 | Batching, caching, and quantization | Compare one optimization at a time; verify output-quality changes and cache invalidation behavior | Performance/quality trade-off table |
| 20 | AIE architecture and feedback | Add tracing and feedback taxonomy; measure cost per evaluated task and failure rate | Runbook and monthly report |
| 21 | Integration and workload testing | Freeze system configuration; test typical, long, unanswerable, and dependency-failure workloads | Integration and load-test report |
| 22 | Final held-out evaluation | Compare baseline and final system; report aggregate and Arabic/English/document-quality slices | Final results and error analysis |
| 23 | Assessment and capstone proposal | Defend system decisions; draft research question, related work, hypotheses, and compute budget | Exam/presentation and proposal |
| 24 | Release and proposal review | Publish reproducible learning release; review proposal feasibility and define Semester 4 gates | Semester release and revised proposal |

### Semester project: evaluated Arabic/English document assistant

**Question:** which retrieval and context decisions improve evidence-supported answers across Arabic and English under a fixed latency and compute budget?

Use approximately 100–300 short, permitted documents or a smaller equivalent corpus. Aim for 100–150 manually checked questions, with development and untouched test partitions. Narrow the corpus if annotation takes more than the allotted time; benchmark quality matters more than volume.

Include answerable, unanswerable, Arabic, English, and noisy-document cases. If comparing Arabic and English directly, use matched tasks where possible or explicitly acknowledge difficulty differences between subsets.

**Required scope:**

1. A corpus card with provenance, permissions, ingestion procedure, and exclusions.
2. Lexical and dense retrieval baselines, then hybrid/reranking comparisons.
3. Retrieval metrics such as recall@k and nDCG where relevance labels support them.
4. End-to-end human-rated correctness, evidence support, citation correctness, and abstention behavior.
5. Judge validation if model-assisted scoring is used; never treat an unvalidated judge as ground truth.
6. A deterministic workflow baseline before adding a bounded agent/tool experiment.
7. One small adaptation experiment; it may remain separate from the final assistant if retrieval is the better solution.
8. Inference metrics with workload, hardware/provider, token lengths, concurrency, and warm/cold conditions stated.
9. A 8–12-page-equivalent report, approximately 3,000–5,000 words, with failure examples and compute cost.

**Acceptance criteria:** no test-question tuning; retrieval and generation failure are separated; sources are traceable; bilingual results are disaggregated; invalid outputs and absent evidence have explicit handling; the main comparison is reproducible. Do not present a local prototype as production validated without actual operational evidence.

### Semester 3 competency gate

Explain retrieval recall versus answer correctness; diagnose missing versus misused evidence; justify prompting/RAG/adaptation selection; explain causal attention and decoding; distinguish TTFT from end-to-end latency; describe a judge's limitations; defend the added value of the tool workflow against its simpler baseline.

**Optional extension:** multimodal retrieval, advanced adapter methods, or a more complex agent evaluation. Do not introduce all three.

## 7. Semester 4: Advanced systems and independent research

**Period:** April–September 2028  
**Effort:** 288–360 hours  
**Primary resources:** DDIA, AIE, DMLS, and papers specific to the research question  
**Primary output:** dissertation-style study plus a reproducible system; this is the fourth semester project, not a fifth parallel project

### Learning outcomes

- Formulate a testable research question and distinguish novelty from engineering integration.
- Reason explicitly about consistency, fault tolerance, replay, and data evolution.
- Run controlled experiments, ablations, failure drills, and workload benchmarks.
- Quantify uncertainty and explain the boundaries of generalization.
- Produce a defensible technical study that another engineer can inspect and rerun.

### Pick one capstone direction

| Direction | Example bounded question | Feasible experiment | Main risk |
| --- | --- | --- | --- |
| Arabic/English retrieval | Does reranking plus hybrid retrieval improve supported answer quality over a tuned dense baseline? | Reuse Semester 3; fix generator and compare retrieval configurations | Label quality and unequal language difficulty |
| Inference efficiency | Which quantization/batching choice gives the best quality–latency–memory trade-off for one small model? | Fixed model/task; compare a few configurations under declared workloads | Hardware-specific conclusions |
| Reliable tool orchestration | Does a constrained workflow reduce failure and resource usage versus an agent on bounded tasks? | Fixed tool set and tasks; deterministic and agent baselines; failure injection | Evaluation ambiguity and model variability |
| Streaming ML correctness | How do replay and feature freshness affect prediction correctness under injected failures? | Replayable event simulator with idempotent/non-idempotent baselines | Confusing system correctness with predictive quality |

**Default recommendation:** Arabic/English retrieval builds directly on the Semester 3 benchmark and minimizes infrastructure overhead. Choose inference efficiency if model-serving expertise becomes the higher-priority career objective. Select the direction by Semester 3 week 23.

The core study is one question, 2–3 hypotheses, a small set of baselines, and a limited number of controlled interventions. A publishable contribution is possible but not a completion requirement. Do not promise novel research before examining related work.

### Weekly plan

| Week | Focus and reading | Required practical work | Evidence to commit |
| --- | --- | --- | --- |
| 1 | Research design and related work | Review approximately 8–12 relevant papers; deeply analyze the closest 3–4; define a bounded question | Literature matrix and research question |
| 2 | Hypotheses and protocol | Specify variables, baselines, metrics, splits, resampling units, compute limits, and analysis plan before final runs | Versioned experimental protocol |
| 3 | DDIA storage and index trade-offs | Trace the chosen system's actual read/write path; benchmark one relevant storage/index decision | Architecture and measurement note |
| 4 | DDIA transactions and consistency | Define correctness invariants; test concurrency or version mismatch relevant to the capstone | Invariants, failure case, monthly report |
| 5 | DDIA replication and partitioning | Analyze stale reads and partitions; perform a relevant simulation or design exercise | Consistency/failure design note |
| 6 | DDIA distributed failures and consensus concepts | Explain timeouts, partial failure, clocks, and coordination limits; avoid implementing consensus from scratch | Failure model and recovery plan |
| 7 | DDIA batch/stream processing; DMLS pipelines | Test replay/versioning on the study's data path; keep unrelated infrastructure as a small standalone lab | Replay or rebuild evidence |
| 8 | Pilot and feasibility gate | Run baseline plus one intervention on a small subset; estimate remaining run cost and annotation effort | Pilot results and monthly report |
| 9 | Baseline stabilization | Resolve correctness issues; freeze baseline and development configuration | Baseline release and verification checklist |
| 10 | Year 2 reproduction | Reproduce the narrow published result most relevant to the capstone, or a clearly labeled scaled-down version | Reproduction note and differences |
| 11 | Main experiment block A | Execute first hypothesis with controlled comparisons; retain failed runs with reasons | Run manifests and results |
| 12 | Main experiment block B | Execute second hypothesis; check variation across seeds/runs or query resamples as appropriate | Results and monthly report |
| 13 | Ablations | Remove one component at a time; control tuning and compute budgets | Ablation table |
| 14 | Robustness and generalization | Evaluate prespecified shifts, long inputs, noisy data, or task slices; record unexpected findings separately | Robustness results |
| 15 | Efficiency and reliability | Measure quality, latency, throughput, memory, cost, and failures under the declared workload | Benchmark and failure report |
| 16 | Statistical analysis | Analyze effect sizes and uncertainty; apply paired comparisons where appropriate; acknowledge multiple comparisons | Analysis notebook and monthly report |
| 17 | Results freeze | Finish preregistered final evaluations; close the test set; identify evidence supporting or rejecting hypotheses | Frozen results release |
| 18 | Methods and results writing | Draft reproducible methods, main tables/figures, and results without overstating causality | Draft report sections |
| 19 | Limitations and system decisions | Write threats to validity, related-work comparison, deployment implications, and failure analysis | Discussion draft and decision records |
| 20 | External/self-review | Request critique if a reviewer is available; otherwise conduct structured adversarial self-review | Review log and monthly report |
| 21 | Revision and reproduction audit | Rerun the smallest complete result path in a clean environment; resolve substantive reviewer issues | Reproduction audit and corrections |
| 22 | Artifact packaging | Finalize data-access instructions, model/config versions, run commands, demo, and system runbook | Release candidate |
| 23 | Defense and final assessment | Present a 20–30-minute defense; answer baseline, uncertainty, correctness, and limitation questions | Presentation and assessment record |
| 24 | Final release and next steps | Publish report/artifact; document unresolved work and next research/engineering priorities | Final release and completion review |

### Capstone feasibility gates

- **Week 2:** every hypothesis has a measurable outcome, a baseline, and an affordable experiment.
- **Week 8:** the pilot runs end to end. If not, shrink the dataset/model or remove an intervention; do not add infrastructure.
- **Week 16:** planned comparisons are mostly complete. Freeze scope and prioritize validity, analysis, and writing.
- **Week 21:** a clean environment reproduces the minimal main-result path, or limitations are explicitly documented.

### Dissertation-style report

Target approximately **8,000–12,000 words**, excluding references and appendices. This is a planning range, not a quality score.

1. Abstract and precise contribution statement.
2. Problem definition and practical motivation.
3. Related work and comparison with closest studies.
4. Research questions and hypotheses.
5. Dataset, permissions, labeling, and evaluation protocol.
6. System/model design and baseline justification.
7. Experimental setup, versions, hardware, compute budget, and reproducibility.
8. Results with uncertainty and ablations.
9. Error analysis, robustness, and reliability.
10. Threats to validity, limitations, and deployment implications.
11. Conclusions bounded by the evidence and future work.

**Acceptance criteria:** a reader can identify what was tested, reproduce the main comparison, and distinguish results from interpretation. Report negative findings, changed protocol decisions, and scaled-down reproduction settings. Conclusions must match the experimental design; a larger stack or a longer report does not compensate for an invalid experiment.

### Final competency gate

Defend baseline choice, explain what each experiment isolates, quantify uncertainty, demonstrate a failure/recovery path, describe a relevant consistency trade-off, and identify evidence that would overturn the main conclusion.

**Optional extension:** submission to a workshop, technical blog series, or open-source package extraction. Begin after the core report and reproducibility audit pass.

## 8. Assessment and progression policy

### Suggested scoring

These are self-study rubrics, not university grades. Preserve raw evidence and describe who assessed each item.

| Component | Semesters 1–3 | Semester 4 |
| --- | --- | --- |
| Problem sets / theoretical reasoning | 25% | 10% |
| Labs / controlled experiments | 25% | 20% |
| Semester project / final study | 35% | 50% |
| Examination and technical defense | 15% | 20% |

**Progression threshold:** at least 70/100 overall, at least 60% in each component, and every semester's critical competency gate passed. This threshold is a planning rule, not an externally validated standard.

### Examination format

For Semesters 1–3, use a 90–120-minute closed-book assessment covering derivations, conceptual explanations, experimental design, and diagnosis. Use different questions from completed exercises. Follow it with a practical code/system review and a 15–20-minute presentation. Semester 4 uses a defense and reproduction audit.

Self-assessment is vulnerable to leniency. If no external examiner is available, time the assessment, commit answers before checking, retain corrections, and retest failed concepts using new problems. Label results as self-assessed.

### Project rubric

| Criterion | Weight | Passing evidence |
| --- | --- | --- |
| Problem formulation and assumptions | 15% | Clear target, scope, prediction/task context, success criteria |
| Technical correctness | 20% | Valid derivations/code/data handling; meaningful checks |
| Experimental validity | 25% | Appropriate splits, baselines, controls, uncertainty, and honest test use |
| Reproducibility | 15% | Configuration, environment, versions, data-access path, executable workflow |
| Engineering quality | 15% | Simple architecture, observability/failure behavior where relevant |
| Communication and limitations | 10% | Clear report, source attribution, negative findings, bounded conclusions |

### Remediation policy

Failed prerequisites block only the dependent topic. Use the contingency weeks or replace an optional extension to revisit the topic. Rework one derivation, implement a small diagnostic example, and complete a new assessment. If more than three core topics remain unresolved, revise the schedule rather than marking the semester complete.

### Progress tracker template

| Semester | Week | Planned dates | Actual hours | Main evidence | Gate/status | Next action |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | 1 | To schedule | — | To add | Not started | Diagnostic and environment |

Statuses: `not-started`, `in-progress`, `blocked`, `review`, `complete`, `remediation`.

Record a brief monthly review at weeks 4, 8, 12, 16, and 20; the semester report replaces a separate week-24 monthly report. Each review should explain what improved, what failed, actual hours, and the next scope adjustment.

## 9. GitHub repository design

**Suggested repository name:** `ai-ml-self-study`  
**Suggested description:** “A two-year independent curriculum in ML foundations, deep learning, production AI systems, and reproducible research.”

Use this document as `README.md` or as `CURRICULUM.md` linked from a shorter README. The paths below are a suggested structure to create over time, not a claim that these files already exist.

| Path | Purpose |
| --- | --- |
| `README.md` | Program overview, current milestone, navigation, how to reproduce work |
| `CURRICULUM.md` | This detailed plan if separate from README |
| `progress/tracker.md` | Weekly evidence and actual hours |
| `progress/monthly/` | Monthly retrospective notes |
| `resources/reading-map.md` | Editions, selected sections, official links, licensing notes |
| `resources/papers.md` | Paper summaries and reproduction candidates |
| `semester-01/notes/`, `semester-01/problem-sets/`, `semester-01/labs/` | Foundations evidence |
| `semester-02/notes/`, `semester-02/problem-sets/`, `semester-02/labs/` | Neural/system evidence |
| `semester-03/notes/`, `semester-03/labs/`, `semester-03/evaluations/` | LLM application evidence |
| `semester-04/proposal/`, `semester-04/experiments/`, `semester-04/report/` | Capstone evidence |
| `projects/tabular-benchmark/` | Semester 1 project |
| `projects/neural-ml-service/` | Semester 2 project |
| `projects/bilingual-document-assistant/` | Semester 3 project |
| `projects/capstone/` | Semester 4 system, or links to the evolved Semester 3 project |
| `assessments/` | Questions, committed answers, corrections, reviewer feedback |
| `templates/` | Weekly, experiment, paper-review, and project-report templates |
| `.github/ISSUE_TEMPLATE/` | Optional learning-task and experiment issue templates |
| `.github/workflows/` | Checks added when executable projects exist |

### Project conventions

Each project should have a README, environment/dependency definition, configurations, source modules, appropriate tests, data-access instructions, and reports. Keep experiment settings out of ad hoc notebook edits. Notebook exploration is useful; reusable training/evaluation code should migrate into modules.

Suggested filenames: `week-05-gradients.md`, `experiment-003-reranking.md`, and `adr-002-storage-choice.md`. Use consistent identifiers and link them from the tracker.

### GitHub issue template

```markdown
## Learning objective
What should I be able to explain, derive, implement, or evaluate?

## Reading
Book edition, topic/section, and primary source links.

## Work
- [ ] Theory / problem set
- [ ] Implementation or experiment
- [ ] Analysis and limitations
- [ ] Evidence linked in tracker

## Acceptance criteria
Observable evidence that demonstrates the learning objective.

## Budget
Estimated hours, compute cap, and dependency blockers.

## Evidence
Commit, report, experiment configuration, and reviewer feedback.
```

### Weekly note template

```markdown
# Semester NN — Week NN — Topic

## Objective and prerequisites
## Reading completed
## Explanation in my own words
## Derivations / solved problems
## Implementation or experimental setup
## Results and failure analysis
## Questions still unresolved
## Retrieval-practice answers
## Time spent and next action
```

### Experiment template

```markdown
# Experiment ID — Short title

## Hypothesis and rationale
## Dataset/version and split
## Baseline and controlled variables
## Configuration, seeds, hardware, and environment
## Metrics and analysis plan
## Results with uncertainty
## Interpretation and threats to validity
## Reproduction commands and artifacts
## Follow-up decision
```

### Repository workflow

1. Create four semester milestones; use small issues for weekly work and separate issues for experiments requiring decisions.
2. Suggested labels: `math`, `ml`, `deep-learning`, `systems`, `llm`, `research`, `assessment`, `remediation`.
3. Commit small increments; use pull requests for major reports or releases, even when reviewing your own work.
4. End each semester with a tagged release such as `semester-1-complete`, including the report and reproduction instructions.
5. Add CI only for executable work: selected numerical checks, data-contract checks, smoke training, evaluation fixtures, and service behavior. Do not build CI around checking that notes exist.
6. Keep large data, weights, caches, experiment databases, and secrets outside Git. Commit metadata, access instructions, checksums, configurations, and small permitted fixtures.
7. State licenses separately for your code, notes, and external data. Link official book resources; do not redistribute book PDFs, paid text, restricted solutions, or employer/customer material.

No GitHub repository is created or published by this document. It is ready to place in a repository when you choose to create one.

## 10. Operating rules and scope control

### Hardware and compute

- Start with CPU-friendly classical ML and small neural models.
- For limited GPU memory, select a small model, reduce sequence length and batch size, and benchmark memory before committing to adaptation experiments.
- An 8 GB laptop GPU is a useful planning constraint, not a promise that any selected model or fine-tuning recipe will fit.
- Record cloud spend and compute time; define a cap before any cloud experiment. Prefer small reproducible experiments over large runs without a hypothesis.
- Model/provider APIs and libraries change during two years. Recheck official documentation and model licenses at the beginning of the relevant semester; pin the actual versions used.

### Avoiding fragmentation

This program should become the main learning backbone. Fold relevant math, deep-ML, and inference lessons into the corresponding weeks instead of treating them as three additional independent workloads. Certifications are optional career work; their preparation should replace an extension or use a separately budgeted period.

During demanding work periods, protect the core problem set and experiment. Pause extensions first. If availability drops below 8 hours per week for more than a month, extend the timeline or reduce specialization scope; do not preserve the 24-month target by removing all assessment.

### Responsible use of AI coding tools

Use assistants for explanations, alternative approaches, code review, and debugging. Attempt core derivations and foundation implementations independently before requesting a solution. Mark materially AI-assisted work and verify it with numerical checks, reference comparisons, or direct reasoning. Closed-book assessments exclude AI assistance.

The test is whether you can reconstruct the logic, explain failures, and modify the implementation correctly. A repository full of generated code is not evidence of mastery by itself.

### Risk register

| Risk | Early signal | Response |
| --- | --- | --- |
| Passive reading | Chapters complete but problems cannot be solved | Reduce reading volume; require derivation and small experiment |
| Too much parallel study | Repeated missed weeks and unfinished tracks | Consolidate into this curriculum; suspend extensions |
| Infrastructure overbuilding | More services than measured requirements | Use minimal local stack and justify each dependency |
| Weak evaluation | Test set used repeatedly for design decisions | Freeze protocol and rebuild a genuinely untouched evaluation where feasible |
| Research scope expansion | More questions without a working pilot | Enforce one question and Semester 4 feasibility gates |
| Unverifiable portfolio | Results have no configs or reproduction path | Block release until artifacts and run instructions exist |
| Weak feedback | All work self-scored with no criticism | Seek an external review or document an adversarial self-review |
| Compute bottleneck | Runs exceed budget or memory | Scale model/data; preserve experimental question |

## 11. First two weeks checklist

### Before the first study block

- [ ] Create `ai-ml-self-study` with this file as README or curriculum.
- [ ] Record the six book editions and map Semester 1 sections.
- [ ] Reserve 12 weekly hours in a sustainable calendar.
- [ ] Create Semester 1 milestone and first four issues.
- [ ] Set up Python, NumPy, pandas, scikit-learn, plotting, and notebook tooling in an isolated environment.
- [ ] Select a public dataset and record its license and prediction context.
- [ ] Create the progress tracker and templates.

### Week 1 diagnostic

Attempt these independently and record confidence as well as correctness:

1. Solve a small linear system and explain rank deficiency.
2. Compute a projection and interpret it geometrically.
3. Differentiate a scalar function of a vector.
4. Calculate a conditional probability using Bayes' rule.
5. Explain mean, variance, covariance, and sampling variation.
6. Build a small Python train/evaluate workflow.
7. Identify leakage in a preprocessing example.
8. Explain why a good training score does not demonstrate generalization.

Use the diagnostic to target review; it is not a prerequisite to enrolling in your own plan. Advance faster through concepts you can already demonstrate, but preserve the evidence and use saved hours for weaker foundations.

### Week 2 outcome

Complete the first linear-algebra problem set and lab, commit the evidence, and review whether the 12-hour budget was realistic. Make the first scope adjustment based on actual time rather than ambition.

## 12. Official resources and selected papers

The curriculum and weekly sequencing are original planning recommendations. The following links provide the underlying texts, author materials, documentation, and papers. Topic mappings should be checked against the editions actually used. Resource links were checked during preparation on September 30, 2026; revisit them as the program progresses.

### Books and author materials

- [Mathematics for Machine Learning — official companion site](https://mml-book.github.io/)
- [HOML third-edition TensorFlow/Keras notebooks — author repository](https://github.com/ageron/handson-ml3)
- [Hands-On Large Language Models — official companion repository](https://github.com/HandsOnLLM/Hands-On-Large-Language-Models)
- [AI Engineering — author companion repository](https://github.com/chiphuyen/aie-book)
- [Designing Machine Learning Systems — publisher page](https://www.oreilly.com/library/view/designing-machine-learning/9781098107956/)
- [Designing Data-Intensive Applications — official book site](https://dataintensive.net/)
- [Probabilistic Machine Learning: An Introduction — author site](https://probml.github.io/pml-book/book1.html)
- [Deep Learning — official book site](https://www.deeplearningbook.org/)
- [Convex Optimization — Stanford author materials](https://web.stanford.edu/~boyd/cvxbook/)
- [Reinforcement Learning: An Introduction — author site](http://incompleteideas.net/book/the-book-2nd.html)

### Implementation references

- [NumPy documentation](https://numpy.org/doc/)
- [scikit-learn user guide](https://scikit-learn.org/stable/user_guide.html)
- [PyTorch tutorials](https://pytorch.org/tutorials/)
- [FastAPI documentation](https://fastapi.tiangolo.com/)
- [PostgreSQL documentation](https://www.postgresql.org/docs/)
- [MLflow documentation](https://mlflow.org/docs/latest/)
- [Hugging Face Transformers documentation](https://huggingface.co/docs/transformers/)

These are reference entry points, not an endorsement of unspecified future versions. Use the documentation corresponding to your pinned dependencies.

### Selected foundational papers

| Paper | Use in the program |
| --- | --- |
| [Adam: A Method for Stochastic Optimization](https://arxiv.org/abs/1412.6980) | Semester 2 optimizer reasoning and bounded reproduction |
| [Batch Normalization](https://arxiv.org/abs/1502.03167) | Semester 2 training behavior and controlled ablation |
| [Attention Is All You Need](https://arxiv.org/abs/1706.03762) | Semesters 2–3 attention and architecture reading |
| [Sentence-BERT](https://arxiv.org/abs/1908.10084) | Semester 3 embedding and retrieval foundations |
| [Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks](https://arxiv.org/abs/2005.11401) | Semester 3 retrieval/generation research context |
| [LoRA: Low-Rank Adaptation of Large Language Models](https://arxiv.org/abs/2106.09685) | Semester 3 parameter-efficient adaptation |

Select newer work relevant to the capstone at the proposal stage. Foundational papers provide mechanisms and historical context; they do not automatically represent the strongest current systems.

---

**Completion evidence:** four semester releases, four substantial project outcomes including the capstone, solved mathematical work, two bounded paper reproductions, reproducible experiment records, and a final technical study. Report the work as an independent AI/ML study portfolio on your CV, rather than as an awarded MSc.
