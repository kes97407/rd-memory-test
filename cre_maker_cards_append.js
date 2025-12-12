/* 
  cre_maker_cards_append.js
  - This file safely APPENDS CRE MAKER cards into an existing flashcard app that already defines `cards`.
  - It avoids duplicate IDs by `id`.
  - Load it after your main app script:
      <script src="cre_maker_cards_append.js"></script>
*/

(() => {
  const newCards = [
    /* ============================
       CRE MAKER (from this chat)
    ============================ */
    {
      "id": "DFX_1_RSM",
      "topic": "CRE MAKER - RSM/SEM/HOQ/DFM-DFA",
      "frontText": "A reliability engineer wants to determine the combination of temperature and pressure that maximizes yield of a new electronic component while minimizing the number of experiments.\\nWhich of the following techniques is MOST appropriate?\\n\\n(A) Simple random sampling\\n(B) Response surface methodology\\n(C) Acceptance sampling\\n(D) Life data analysis (Weibull)",
      "backText": "정답: (B)\\n\\n해설: 최적 수율을 위한 다인자 최적화 설계 → RSM."
    },
    {
      "id": "DFX_2_SEM",
      "topic": "CRE MAKER - RSM/SEM/HOQ/DFM-DFA",
      "frontText": "A reliability engineer wants to investigate the micro-cracks and fracture surface of a failed solder joint in order to identify the failure mechanism.\\nWhich tool is MOST appropriate?\\n\\n(A) Control chart\\n(B) Design of experiments\\n(C) Scanning electron microscope (SEM)\\n(D) Fault tree analysis",
      "backText": "정답: (C)\\n\\n해설: 미세구조, 파단면 관찰 → SEM."
    },
    {
      "id": "DFX_3_SEM_PURPOSE",
      "topic": "CRE MAKER - RSM/SEM/HOQ/DFM-DFA",
      "frontText": "The primary purpose of using a scanning electron microscope (SEM) in failure analysis is to:\\n\\n(A) Estimate field failure rates\\n(B) Identify latent software defects\\n(C) Characterize physical failure mechanisms\\n(D) Measure thermal cycling profiles",
      "backText": "정답: (C)\\n\\n해설: “고장 메커니즘 식별”이라는 문장이 그대로 들어가는 유형."
    },
    {
      "id": "DFX_4_HOQ_DEF",
      "topic": "CRE MAKER - RSM/SEM/HOQ/DFM-DFA",
      "frontText": "The House of Quality (HOQ) is primarily used to:\\n\\n(A) Analyze failure modes and their effects\\n(B) Translate customer requirements into technical specifications\\n(C) Monitor process stability over time\\n(D) Prioritize corrective actions for field failures",
      "backText": "정답: (B)\\n\\n해설: 너가 쓴 정의 그대로."
    },
    {
      "id": "DFX_5_HOQ_TOOL",
      "topic": "CRE MAKER - RSM/SEM/HOQ/DFM-DFA",
      "frontText": "A cross-functional team is trying to relate customer “wants” (WHATs) to design characteristics (HOWs) using a matrix that includes correlation between technical features.\\nWhich tool are they MOST likely using?\\n\\n(A) Fault tree\\n(B) Ishikawa diagram\\n(C) House of Quality (QFD)\\n(D) Control plan",
      "backText": "정답: (C)\\n\\n해설: WHAT–HOW 매트릭스, 상관지붕이 나오면 HOQ."
    },
    {
      "id": "DFX_6_DFA_FASTENERS",
      "topic": "CRE MAKER - RSM/SEM/HOQ/DFM-DFA",
      "frontText": "A design team redesigned a product so that the number of fasteners was reduced from 12 to 4, and many small parts were combined into a single molded part.\\nThis is BEST described as:\\n\\n(A) Design for reliability (DFR)\\n(B) Design for assembly (DFA)\\n(C) Design for maintainability\\n(D) Design of experiments (DOE)",
      "backText": "정답: (B)\\n\\n해설: 조립단계 간소화 → DFA."
    },
    {
      "id": "DFX_7_DFA_CHANGE",
      "topic": "CRE MAKER - RSM/SEM/HOQ/DFM-DFA",
      "frontText": "To reduce assembly time and assembly errors, which of the following design changes is MOST appropriate?\\n\\n(A) Add more inspection points\\n(B) Increase the number of screws to ensure tighter joints\\n(C) Combine parts and reduce fastener count\\n(D) Tighten incoming inspection limits",
      "backText": "정답: (C)\\n\\n해설: “결속구 수 감소 = 조립 간소화”를 정답으로 유도."
    },
    {
      "id": "DFX_8_SCENARIO_Q1",
      "topic": "CRE MAKER - RSM/SEM/HOQ/DFM-DFA",
      "frontText": "A company is developing a new high-reliability connector.\\n1) First, the team uses customer interviews and constructs a matrix relating customer “wants” to technical characteristics.\\n2) Then, it uses designed experiments to optimize yield at different molding temperatures and pressures.\\n3) After field failures occur, the engineer uses a microscope to examine fracture surfaces.\\n4) Finally, the design is modified to reduce the number of fasteners and simplify assembly.\\n\\nQ1. The matrix in step (1) is an example of:",
      "backText": "정답: HOQ (QFD)"
    },
    {
      "id": "DFX_9_SCENARIO_Q2",
      "topic": "CRE MAKER - RSM/SEM/HOQ/DFM-DFA",
      "frontText": "A company is developing a new high-reliability connector.\\n1) First, the team uses customer interviews and constructs a matrix relating customer “wants” to technical characteristics.\\n2) Then, it uses designed experiments to optimize yield at different molding temperatures and pressures.\\n3) After field failures occur, the engineer uses a microscope to examine fracture surfaces.\\n4) Finally, the design is modified to reduce the number of fasteners and simplify assembly.\\n\\nQ2. The technique in step (2) is MOST likely:",
      "backText": "정답: RSM"
    },
    {
      "id": "DFX_10_SCENARIO_Q3",
      "topic": "CRE MAKER - RSM/SEM/HOQ/DFM-DFA",
      "frontText": "A company is developing a new high-reliability connector.\\n1) First, the team uses customer interviews and constructs a matrix relating customer “wants” to technical characteristics.\\n2) Then, it uses designed experiments to optimize yield at different molding temperatures and pressures.\\n3) After field failures occur, the engineer uses a microscope to examine fracture surfaces.\\n4) Finally, the design is modified to reduce the number of fasteners and simplify assembly.\\n\\nQ3. The microscope in step (3) is primarily used to:",
      "backText": "정답: identify physical failure mechanisms (SEM)"
    },
    {
      "id": "DFX_11_SCENARIO_Q4",
      "topic": "CRE MAKER - RSM/SEM/HOQ/DFM-DFA",
      "frontText": "A company is developing a new high-reliability connector.\\n1) First, the team uses customer interviews and constructs a matrix relating customer “wants” to technical characteristics.\\n2) Then, it uses designed experiments to optimize yield at different molding temperatures and pressures.\\n3) After field failures occur, the engineer uses a microscope to examine fracture surfaces.\\n4) Finally, the design is modified to reduce the number of fasteners and simplify assembly.\\n\\nQ4. The design change in step (4) is BEST described as:",
      "backText": "정답: DFA / 제품 조립 간소화"
    },

    {
      "id": "TT_Q1",
      "topic": "CRE MAKER - Reliability Test Types",
      "frontText": "Q1.\\n\\nA customer requires that a power supply have an MTBF of at least 20,000 hours at 80% confidence.\\nThe reliability engineer designs a test on 8 units, operating them simultaneously and checking whether the requirement can be proven.\\n\\nThis type of test is BEST described as:\\n(A) Qualification test\\n(B) Demonstration test\\n(C) Screening test\\n(D) Performance test",
      "backText": "정답: (B)\\n\\n해설: “규격/계약 요구조건을 입증(demonstrate)”하는 시험."
    },
    {
      "id": "TT_Q2",
      "topic": "CRE MAKER - Reliability Test Types",
      "frontText": "Q2.\\n\\nA manufacturer produces relays in lots of 5,000 units. For each lot, 125 units are tested for 200 hours.\\nThe lot is accepted if there are 2 or fewer failures and rejected otherwise.\\n\\nThis type of test is MOST appropriately called:\\n(A) Demonstration test\\n(B) Acceptance test\\n(C) Development test\\n(D) Screening test",
      "backText": "정답: (B)\\n\\n해설: “로트 합격/불합격 결정 = 인수검사”."
    },
    {
      "id": "TT_Q3",
      "topic": "CRE MAKER - Reliability Test Types",
      "frontText": "Q3.\\n\\nA reliability engineer introduces a 24-hour high-temperature burn-in at 125°C to remove units that fail early, so that only robust units are shipped to the customer.\\nThe primary purpose of this test is to:\\n(A) Demonstrate compliance with an MTBF requirement\\n(B) Collect life data for Weibull analysis\\n(C) Screen out early-life failures\\n(D) Qualify the design for a new environment",
      "backText": "정답: (C)\\n\\n해설: burn-in, ESS의 키워드는 “초기고장 제거 / 약한 개체 골라내기”."
    },
    {
      "id": "TT_Q4",
      "topic": "CRE MAKER - Reliability Test Types",
      "frontText": "Q4.\\n\\nDuring development, shaft diameter is specified as 10.00 ± 0.50 mm. Early builds show that only 70% of shafts fit correctly in the mating part.\\nTo increase yield while maintaining proper fit, the engineer analyzes the distribution of diameters and gradually tightens the tolerance based on process capability.\\n\\nThis activity is BEST described as:\\n(A) Fault tree analysis\\n(B) Design of experiments\\n(C) Tolerance design / specification refinement\\n(D) Acceptance sampling",
      "backText": "정답: (C)\\n\\n해설: 규격·공차를 데이터 기반으로 조정하며 “수율 최적화” → 공차 설계 개념."
    },
    {
      "id": "TT_Q5",
      "topic": "CRE MAKER - Reliability Test Types",
      "frontText": "Q5.\\n\\nBefore approving a new automotive controller for production, the manufacturer exposes samples to a full set of environmental conditions:\\n– temperature cycling from -40°C to 125°C\\n– vibration tests in three axes\\n– humidity and electrical overstress\\n\\nIf all requirements are met, the design is approved for use in the field.\\n\\nThis test is BEST classified as a:\\n(A) Screening test\\n(B) Qualification test\\n(C) Demonstration test\\n(D) Performance test",
      "backText": "정답: (B)\\n\\n해설: “양산 전, 설계가 특정 환경에서 사용 가능인지 공식 승인 받는 시험”."
    },
    {
      "id": "TT_Q6",
      "topic": "CRE MAKER - Reliability Test Types",
      "frontText": "Q6.\\n\\nA power supply is tested at room temperature with a nominal load. The output voltage, ripple, and efficiency are measured and compared with the specification.\\nTime to failure is not recorded, and the test stops after the measurements are taken.\\n\\nThis test is primarily a:\\n(A) Reliability growth test\\n(B) Performance test\\n(C) Screening test\\n(D) Qualification test",
      "backText": "정답: (B)\\n\\n해설: 고장까지 얼마나 버티는지(X), “성능값이 스펙 안에 들어오냐”만 보는 시험."
    },
    {
      "id": "TT_Q7",
      "topic": "CRE MAKER - Reliability Test Types",
      "frontText": "Q7.\\n\\nA contract requires a zero-failure demonstration test of a pump assembly.\\nTen units are operated for 1,000 hours each. If any failure occurs, the test is considered failed and the lot will not be accepted.\\n\\nThe maximum number of failures allowed in this test plan is:\\n(A) 2\\n(B) 1\\n(C) 0\\n(D) Depends on the MTBF target",
      "backText": "정답: (C)\\n\\n해설: “무고장 시연시험 = 허용 고장수 r = 0”."
    },
    {
      "id": "TT_Q7_2",
      "topic": "CRE MAKER - Reliability Test Types",
      "frontText": "Q7-2.\\n\\nA zero-failure test is most appropriate when the engineer wants to:\\n(A) Estimate the entire life distribution\\n(B) Compare two competing designs\\n(C) Show that the failure rate is below a specified maximum\\n(D) Diagnose the root cause of failures",
      "backText": "정답: (C)"
    },
    {
      "id": "TT_Q8",
      "topic": "CRE MAKER - Reliability Test Types",
      "frontText": "Q8.\\n\\nDuring the early design phase, prototypes of a new gearbox are subjected to aggressive overload and shock tests. The purpose is to reveal design weaknesses so that engineers can redesign components before production.\\n\\nThis type of test is BEST described as:\\n(A) Demonstration test\\n(B) Acceptance test\\n(C) Development test\\n(D) Screening test",
      "backText": "정답: (C)\\n\\n해설: 개발 단계, 실패를 일부러 내보면서 설계 개선하는 시험."
    },
    {
      "id": "TT_Q9",
      "topic": "CRE MAKER - Reliability Test Types",
      "frontText": "Q9.\\n\\nA manufacturer produces 10,000 fuses per day. Instead of testing all fuses, the engineer selects a sample of 200 units, tests them to a specified current level, and decides whether the day’s production is acceptable.\\n\\nThis activity is BEST described as:\\n(A) 100% screening\\n(B) Life data analysis\\n(C) Sampling inspection (sampling test)\\n(D) Reliability growth testing",
      "backText": "정답: (C)\\n\\n해설: 전체가 아닌 일부 샘플로 품질/신뢰도를 추정·판단 → 샘플링 시험."
    },
    {
      "id": "TT_Q10_1",
      "topic": "CRE MAKER - Reliability Test Types",
      "frontText": "A company is developing a new electronic module.\\n1) In the early design stage, they run prototypes to failure under overstress to identify design weaknesses.\\n2) After design improvements, they run a formal test to prove MTBF ≥ 50,000 hours at 90% confidence.\\n3) For each production lot, they test a sample of units and decide whether to accept or reject the lot.\\n4) For high-reliability applications, they also add a burn-in step to remove early-life failures.\\n\\nQ10-1. Step (1) is BEST classified as:",
      "backText": "정답: Development test"
    },
    {
      "id": "TT_Q10_2",
      "topic": "CRE MAKER - Reliability Test Types",
      "frontText": "A company is developing a new electronic module.\\n1) In the early design stage, they run prototypes to failure under overstress to identify design weaknesses.\\n2) After design improvements, they run a formal test to prove MTBF ≥ 50,000 hours at 90% confidence.\\n3) For each production lot, they test a sample of units and decide whether to accept or reject the lot.\\n4) For high-reliability applications, they also add a burn-in step to remove early-life failures.\\n\\nQ10-2. Step (2) is BEST classified as:",
      "backText": "정답: Demonstration test"
    },
    {
      "id": "TT_Q10_3",
      "topic": "CRE MAKER - Reliability Test Types",
      "frontText": "A company is developing a new electronic module.\\n1) In the early design stage, they run prototypes to failure under overstress to identify design weaknesses.\\n2) After design improvements, they run a formal test to prove MTBF ≥ 50,000 hours at 90% confidence.\\n3) For each production lot, they test a sample of units and decide whether to accept or reject the lot.\\n4) For high-reliability applications, they also add a burn-in step to remove early-life failures.\\n\\nQ10-3. Step (3) is BEST classified as:",
      "backText": "정답: Acceptance test / Sampling test"
    },
    {
      "id": "TT_Q10_4",
      "topic": "CRE MAKER - Reliability Test Types",
      "frontText": "A company is developing a new electronic module.\\n1) In the early design stage, they run prototypes to failure under overstress to identify design weaknesses.\\n2) After design improvements, they run a formal test to prove MTBF ≥ 50,000 hours at 90% confidence.\\n3) For each production lot, they test a sample of units and decide whether to accept or reject the lot.\\n4) For high-reliability applications, they also add a burn-in step to remove early-life failures.\\n\\nQ10-4. Step (4) is BEST classified as:",
      "backText": "정답: Screening test (burn-in)"
    },

    {
      "id": "RISK_Q1",
      "topic": "CRE MAKER - Risk Analysis Methods",
      "frontText": "Q1. A team wants to identify component-level failure modes, their causes, and the effects on the next higher assembly. The team also wants to prioritize actions using severity/occurrence/detection ratings.\\nWhich method is MOST appropriate?\\n\\n(A) Fault Tree Analysis (FTA)\\n(B) FMEA / FMECA\\n(C) Event Tree Analysis (ETA)\\n(D) Reliability Block Diagram (RBD)",
      "backText": "정답: (B)\\n\\n해설: 부품/기능 단위 Bottom-up, S/O/D로 우선순위(RPN 등) → FMEA/FMECA."
    },
    {
      "id": "RISK_Q2",
      "topic": "CRE MAKER - Risk Analysis Methods",
      "frontText": "Q2. A plant experienced a “System shutdown” top event. Engineers want to model logical combinations of causes (AND/OR gates) that can lead to this top event.\\nWhich method is MOST appropriate?\\n\\n(A) Fault Tree Analysis (FTA)\\n(B) FMEA\\n(C) Control chart\\n(D) DOE",
      "backText": "정답: (A)\\n\\n해설: Top-down, deductive, AND/OR로 원인 조합 분석 → FTA."
    },
    {
      "id": "RISK_Q3",
      "topic": "CRE MAKER - Risk Analysis Methods",
      "frontText": "Q3. After a loss-of-coolant initiating event, engineers want to evaluate sequences of safety system successes/failures to estimate outcomes (minor incident vs major accident).\\nWhich method fits BEST?\\n\\n(A) FTA\\n(B) FMEA\\n(C) Event Tree Analysis (ETA)\\n(D) Pareto chart",
      "backText": "정답: (C)\\n\\n해설: Initiating event → 분기(성공/실패) 시나리오 전개는 ETA(Forward, inductive)."
    },
    {
      "id": "RISK_Q4",
      "topic": "CRE MAKER - Risk Analysis Methods",
      "frontText": "Q4. A chemical process team reviews a P&ID and uses guidewords such as “More/ Less/ None/ Reverse” to identify deviations and hazards.\\nWhich method is being used?\\n\\n(A) FTA\\n(B) FMEA\\n(C) HAZOP\\n(D) RBD",
      "backText": "정답: (C)\\n\\n해설: Guideword 기반 편차 분석 = HAZOP."
    },
    {
      "id": "RISK_Q5",
      "topic": "CRE MAKER - Risk Analysis Methods",
      "frontText": "Q5. A manager wants a quick method to rank risks using a grid of Severity vs Likelihood (e.g., low/med/high) for many hazards when data are limited.\\nWhich approach is BEST?\\n\\n(A) Weibull analysis\\n(B) Risk matrix\\n(C) Markov modeling\\n(D) Regression",
      "backText": "정답: (B)\\n\\n해설: 데이터 부족 시 정성(또는 반정량) 위험순위화 → risk matrix."
    },
    {
      "id": "RISK_Q6",
      "topic": "CRE MAKER - Risk Analysis Methods",
      "frontText": "Q6. Two failure modes have the same RPN=120.\\n- Mode A: Severity=10, Occurrence=2, Detection=6\\n- Mode B: Severity=5, Occurrence=6, Detection=4\\nWhich statement is MOST accurate?\\n\\n(A) They are equally critical; treat them the same\\n(B) Mode B is always worse because occurrence is higher\\n(C) RPN alone can be misleading; Severity should be separately considered\\n(D) Detection rating is irrelevant",
      "backText": "정답: (C)\\n\\n해설: RPN은 곱셈이라 치명도(Severity)가 큰 모드가 묻힐 수 있음 → CRE에서 자주 나오는 포인트."
    },
    {
      "id": "RISK_Q7",
      "topic": "CRE MAKER - Risk Analysis Methods",
      "frontText": "Q7. A standby redundant system has repair and imperfect switching behavior. The engineer needs to model state transitions over time (up/down states with repair rates).\\nWhich technique is MOST appropriate?\\n\\n(A) RBD only\\n(B) Markov model\\n(C) Pareto chart\\n(D) Histogram",
      "backText": "정답: (B)\\n\\n해설: 수리/스위칭/상태전이 포함되면 Markov가 강함. (RBD는 상태의 동적 전이를 표현하기 어려움)"
    },
    {
      "id": "RISK_Q8",
      "topic": "CRE MAKER - Risk Analysis Methods",
      "frontText": "Q8. A system has two redundant channels. Field data suggest both channels sometimes fail due to a shared environmental stress (common cause).\\nWhich is the BEST next step?\\n\\n(A) Continue using only FMEA; redundancy guarantees safety\\n(B) Perform Common Cause Failure (CCF) analysis / incorporate into fault tree\\n(C) Use a control chart\\n(D) Ignore; rare events don’t matter",
      "backText": "정답: (B)\\n\\n해설: 리던던시는 CCF에 취약 → FTA/CCF 반영이 실전 포인트."
    },

    {
      "id": "INT_Q9",
      "topic": "CRE MAKER - Interaction Plot (DOE/ANOVA)",
      "frontText": "Q9. An interaction plot shows two lines (Factor B levels) across Factor A levels. The lines are nearly parallel.\\nWhat is the BEST interpretation?\\n\\n(A) Strong interaction exists\\n(B) Little to no interaction; main effects dominate\\n(C) Randomization failed\\n(D) Aliasing must be present",
      "backText": "정답: (B)\\n\\n해설: 교호작용 플롯에서 평행=상호작용 거의 없음."
    },
    {
      "id": "INT_Q10",
      "topic": "CRE MAKER - Interaction Plot (DOE/ANOVA)",
      "frontText": "Q10. An interaction plot shows the lines crossing:\\n- When A=Low, B1 > B2\\n- When A=High, B2 > B1\\nWhat does this imply?\\n\\n(A) No interaction\\n(B) Measurement error\\n(C) Strong interaction; the effect of B depends on A\\n(D) Only B matters",
      "backText": "정답: (C)\\n\\n해설: 교차는 대표적인 강한 교호작용(Effect reversal) 신호."
    },
    {
      "id": "INT_Q11",
      "topic": "CRE MAKER - Interaction Plot (DOE/ANOVA)",
      "frontText": "Q11. Yield(%) 결과 평균이 아래와 같다.\\n\\n- A1,B1 = 80\\n- A1,B2 = 60\\n- A2,B1 = 70\\n- A2,B2 = 90\\n\\nWhich statement is MOST accurate?\\n\\n(A) A2 is always better than A1\\n(B) B1 is always better than B2\\n(C) Interaction exists because the best B level changes with A\\n(D) No interaction because averages are similar",
      "backText": "정답: (C)\\n\\n해설: A1에서는 B1이 좋고, A2에서는 B2가 더 좋음 → 교호작용."
    },
    {
      "id": "INT_Q12",
      "topic": "CRE MAKER - Interaction Plot (DOE/ANOVA)",
      "frontText": "Q12. A manager looks only at main effects and concludes “B2 is better overall.” But the interaction plot shows crossing lines.\\nWhat is the BEST critique?\\n\\n(A) Main effects are always sufficient\\n(B) Main effects can be misleading when interaction is present\\n(C) Interaction means the experiment is invalid\\n(D) Interaction can be ignored if sample size is large",
      "backText": "정답: (B)\\n\\n해설: 교호작용 있으면 “평균의 평균”은 함정이 될 수 있음 → 조건별 최적이 달라짐."
    },
    {
      "id": "INT_Q13",
      "topic": "CRE MAKER - Interaction Plot (DOE/ANOVA)",
      "frontText": "Q13. Using the same table from Q11, if the goal is maximize yield, which factor setting is BEST?\\n\\n(A) A1,B1\\n(B) A1,B2\\n(C) A2,B1\\n(D) A2,B2",
      "backText": "정답: (D)\\n\\n해설: 최고 평균이 90인 조합 선택. (단, 비용/공정 안정성 조건이 추가되면 답이 바뀔 수 있음)"
    },
    {
      "id": "INT_Q14",
      "topic": "CRE MAKER - Interaction Plot (DOE/ANOVA)",
      "frontText": "Q14. Which statement about interaction plots is MOST correct?\\n\\n(A) Crossing lines always prove causation\\n(B) Non-parallel lines always mean measurement error\\n(C) Interaction plots suggest effect dependency, but statistical confirmation typically uses ANOVA interaction term (p-value)\\n(D) If lines cross, you must abandon the experiment",
      "backText": "정답: (C)\\n\\n해설: 그래프는 “힌트”, 최종 판정은 보통 ANOVA의 교호작용 항(A×B) 유의성으로 확인."
    },

    {
      "id": "BG_Q1_BETA_POST",
      "topic": "CRE MAKER - Beta & Gamma Distributions",
      "frontText": "Q1. (베이지안 업데이트) 불량률 p\\n어떤 공정의 불량률 p에 대해 사전분포가 p \\\\sim \\\\text{Beta}(2,8) 라고 하자.\\n샘플 20개를 검사했더니 불량이 3개 나왔다.\\n\\n사후분포는?\\n- (A) Beta(5,25)\\n- (B) Beta(22,11)\\n- (C) Beta(2,11)\\n- (D) Beta(8,2)",
      "backText": "정답: (A)\\n\\n해설: 베타-이항 결합. \\\\(\\\\alpha'=\\\\alpha+x=2+3=5\\\\), \\\\(\\\\beta'=\\\\beta+(n-x)=8+17=25\\\\)."
    },
    {
      "id": "BG_Q2_BETA_SUPPORT",
      "topic": "CRE MAKER - Beta & Gamma Distributions",
      "frontText": "Q2. (분포 선택) 0~1 사이 “비율” 모델링\\n다음 중 0과 1 사이 값(예: 신뢰도, 불량률, 수율)을 확률분포로 모델링할 때 가장 적절한 것은?\\n- (A) 정규분포\\n- (B) 지수분포\\n- (C) 베타분포\\n- (D) 감마분포",
      "backText": "정답: (C)\\n\\n해설: Beta는 정의역이 [0,1]이라 비율/확률 파라미터에 딱 맞음."
    },
    {
      "id": "BG_Q3_BETA_MAP",
      "topic": "CRE MAKER - Beta & Gamma Distributions",
      "frontText": "Q3. (MAP 추정) “임무 성공확률 R” 추정\\n어떤 장치의 “임무 성공확률” R에 대해 사전분포가 R \\\\sim \\\\text{Beta}(4,2) 이다.\\n임무시험 10회를 수행해 7회 성공, 3회 실패했다.\\n\\n사후분포의 MAP(최빈값) 추정치는?\\n- (A) 0.50\\n- (B) 0.625\\n- (C) 0.714\\n- (D) 0.875",
      "backText": "정답: (C)\\n\\n해설: 사후분포 \\\\( \\\\text{Beta}(4+7,\\\\,2+3)=\\\\text{Beta}(11,5)\\\\).\\nMAP \\\\(=\\\\frac{\\\\alpha-1}{\\\\alpha+\\\\beta-2}=\\\\frac{11-1}{11+5-2}=\\\\frac{10}{14}=0.714\\\\)."
    },
    {
      "id": "BG_Q4_BETA_PRED",
      "topic": "CRE MAKER - Beta & Gamma Distributions",
      "frontText": "Q4. (예측확률) 다음 5개가 “전부 양품”일 확률\\n불량률 p\\\\sim \\\\text{Beta}(2,8) (사전정보만 있음).\\n다음 5개를 뽑았을 때 불량이 0개일 확률로 가장 가까운 값은?\\n- (A) 0.10\\n- (B) 0.25\\n- (C) 0.40\\n- (D) 0.75",
      "backText": "정답: (C)\\n\\n해설: 베타-이항 예측(Beta-binomial).\\n\\\\(P(X=0)=\\\\dfrac{B(\\\\alpha,\\\\beta+5)}{B(\\\\alpha,\\\\beta)} \\\\approx 0.396\\\\) (≈ 0.40)"
    },
    {
      "id": "BG_Q5_GAMMA_POISSON",
      "topic": "CRE MAKER - Beta & Gamma Distributions",
      "frontText": "Q5. (포아송 과정) “k번째 고장까지 시간”\\n고장이 포아송 과정을 따르고 고장률이 \\\\(\\\\lambda=0.002\\\\) failures/hour 라고 하자.\\n3번째 고장까지 걸리는 시간 \\\\(T_3\\\\)의 분포로 옳은 것은?\\n- (A) 정규분포\\n- (B) 지수분포\\n- (C) 베타분포\\n- (D) 감마분포",
      "backText": "정답: (D)\\n\\n해설: 포아송 과정에서 “k번째 사건까지 시간”은 \\\\( \\\\text{Gamma}(k,\\\\text{rate}=\\\\lambda)\\\\)."
    },
    {
      "id": "BG_Q6_GAMMA_MEAN",
      "topic": "CRE MAKER - Beta & Gamma Distributions",
      "frontText": "Q6. (기댓값) k번째 고장까지 평균 시간\\n위 Q5 조건에서 \\\\(T_3\\\\)의 기댓값은?\\n- (A) 500 hr\\n- (B) 1000 hr\\n- (C) 1500 hr\\n- (D) 3000 hr",
      "backText": "정답: (C)\\n\\n해설: \\\\(E[T_k]=k/\\\\lambda=3/0.002=1500\\\\) hr."
    },
    {
      "id": "BG_Q7_GAMMA_POST",
      "topic": "CRE MAKER - Beta & Gamma Distributions",
      "frontText": "Q7. (베이지안) 지수수명 고장률 \\\\(\\\\lambda\\\\)의 사후분포\\n수명이 지수분포(\\\\(\\\\lambda\\\\) 미지)라고 가정한다.\\n사전분포 \\\\( \\\\lambda \\\\sim \\\\text{Gamma}(\\\\alpha=2,\\\\ \\\\beta=1000)\\\\) (여기서 \\\\(\\\\beta\\\\)는 rate 업데이트에 시간 T가 더해지는 형태, 즉 \\\\(\\\\beta'=\\\\beta+T\\\\)).\\n시험 총 누적시간 \\\\(T=2000\\\\) unit-hours 동안 고장이 \\\\(r=6\\\\)회 발생했다.\\n\\n사후분포는?\\n- (A) Gamma(8, 3000)\\n- (B) Gamma(2, 3006)\\n- (C) Gamma(6, 2002)\\n- (D) Gamma(2000, 8)",
      "backText": "정답: (A)\\n\\n해설: 감마-지수(포아송) 결합. \\\\(\\\\alpha'=\\\\alpha+r=8\\\\), \\\\(\\\\beta'=\\\\beta+T=3000\\\\)."
    },
    {
      "id": "BG_Q8_GAMMA_POSTMEAN",
      "topic": "CRE MAKER - Beta & Gamma Distributions",
      "frontText": "Q8. (사후평균 고장률) \\\\(\\\\mathbb{E}[\\\\lambda \\\\mid data]\\\\)\\nQ7의 사후분포에서 사후평균 고장률은?\\n- (A) 0.0010 /hr\\n- (B) 0.0020 /hr\\n- (C) 0.00267 /hr\\n- (D) 0.0060 /hr",
      "backText": "정답: (C)\\n\\n해설: Gamma(shape \\\\(\\\\alpha'\\\\), rate \\\\(\\\\beta'\\\\))에서 평균은 \\\\(\\\\alpha'/\\\\beta' = 8/3000=0.00267\\\\) /hr."
    },
    {
      "id": "BG_Q9_MATCH",
      "topic": "CRE MAKER - Beta & Gamma Distributions",
      "frontText": "Q9. (어떤 분포를 어디에 쓰나?)\\n다음 매칭 중 가장 적절한 것은?\\n- (A) 불량률 \\\\(p\\\\) → 감마, 고장률 \\\\(\\\\lambda\\\\) → 베타\\n- (B) 불량률 \\\\(p\\\\) → 정규, 고장률 \\\\(\\\\lambda\\\\) → 베타\\n- (C) 불량률/성공확률 \\\\(p\\\\) → 베타, 지수수명 고장률 \\\\(\\\\lambda\\\\) → 감마\\n- (D) 둘 다 항상 정규로 근사하면 된다",
      "backText": "정답: (C)\\n\\n해설: \\\\(p\\\\in[0,1]\\\\) 확률 파라미터는 Beta, \\\\(\\\\lambda>0\\\\) (rate) 같은 양수 파라미터는 Gamma가 대표적."
    },

    /* ============================
       CRE MAKER - 오답노트(40)
    ============================ */
    {
      "id": "CRE-M01",
      "topic": "CRE MAKER - 오답노트(40)",
      "frontText": "CRE-M01\\n\\n지문: Accelerated Life Testing(ALT)의 주요 이점으로 가장 적절한 것은?\\n\\n보기(A~D)\\n(A) 정상조건에서만 시험하여 수명 예측 오차를 제거한다\\n(B) Major 고장만 예측하고 Minor 결함은 식별하지 않는다\\n(C) 스트레스를 가해 고장을 빠르게 유발하여 시간·비용을 절감하고 수명/메커니즘 분석에 활용한다\\n(D) 신뢰성 성장모델(Duane/AMSAA)을 대체하는 유일한 방법이다",
      "backText": "정답: (C)\\n\\n짧은 해설: ALT는 가속조건에서 고장을 빨리 발생시켜 비용/기간을 줄이고, 모델로 정상조건 수명 추정에 활용한다."
    },
    {
      "id": "CRE-M02",
      "topic": "CRE MAKER - 오답노트(40)",
      "frontText": "CRE-M02\\n\\n지문: 가속 수명시험의 그래픽(도해) 분석의 대표 장점은?\\n\\n보기(A~D)\\n(A) 분포 가정 없이도 항상 동일한 결론을 준다\\n(B) 정상조건 수명으로 외삽(extrapolation)해 예상 수명을 추정할 수 있다\\n(C) 표본 수가 작을수록 더 정확해진다\\n(D) 가속계수(AF)를 계산할 필요가 없다",
      "backText": "정답: (B)\\n\\n짧은 해설: 가속조건에서 얻은 관계를 이용해 사용조건(정상조건) 성능/수명으로 외삽하는 것이 핵심."
    },
    {
      "id": "CRE-M03",
      "topic": "CRE MAKER - 오답노트(40)",
      "frontText": "CRE-M03\\n\\n지문: Monte Carlo 시뮬레이션이 특히 유용한 상황은?\\n\\n보기(A~D)\\n(A) 동질 집단에서 무작위 표본추출을 보장하기 위해\\n(B) 무작위 변동이 핵심인 시스템을 난수 반복으로 모사해 성능/리스크 분포를 추정하기 위해\\n(C) 공정 평균을 0으로 중심교정하기 위해\\n(D) 닫힌형 해(analytic solution)를 항상 정확히 구하기 위해",
      "backText": "정답: (B)\\n\\n짧은 해설: 불확실성을 난수로 샘플링해 결과 분포(리스크/성능)를 근사한다."
    },
    {
      "id": "CRE-M04",
      "topic": "CRE MAKER - 오답노트(40)",
      "frontText": "CRE-M04\\n\\n지문: 신뢰성 있는 제품 설계의 주요 목표로 가장 적절한 것은?\\n\\n보기(A~D)\\n(A) 단기 이윤 최대화\\n(B) 수명주기비용(LCC) 최소화\\n(C) 보증기간 단축\\n(D) 생산량 극대화",
      "backText": "정답: (B)\\n\\n짧은 해설: 초기비용+고장/정비/다운타임 등 전체 수명주기 비용을 최소화하는 방향이 핵심."
    },
    {
      "id": "CRE-M05",
      "topic": "CRE MAKER - 오답노트(40)",
      "frontText": "CRE-M05\\n\\n지문: 보전성(Maintainability) 예측이 평가하는 대상은?\\n\\n보기(A~D)\\n(A) 시스템 효율\\n(B) 고장 후 복구/수리 가능성(예: MTTR)\\n(C) 공정능력(Cp, Cpk)\\n(D) 공정 산포(σ)만",
      "backText": "정답: (B)\\n\\n짧은 해설: 보전성은 “얼마나 빨리/쉽게 복구되는가”를 다룬다."
    },
    {
      "id": "CRE-M06",
      "topic": "CRE MAKER - 오답노트(40)",
      "frontText": "CRE-M06\\n\\n지문: 신뢰성 문제해결에서 데이터 수집을 포함한 프로세스의 이상적인 “마지막 단계”는?\\n\\n보기(A~D)\\n(A) 문제 식별\\n(B) 상황 분석\\n(C) 문제 보고\\n(D) 근본원인 분석(RCA) 및 재발방지 확정",
      "backText": "정답: (D)\\n\\n짧은 해설: 최종은 원인 규명→대책 확정(검증 포함)으로 닫는 것."
    },
    {
      "id": "CRE-M07",
      "topic": "CRE MAKER - 오답노트(40)",
      "frontText": "CRE-M07\\n\\n지문: Arrhenius 가속계수(AF)가 달라지는 주요 요인으로 가장 적절한 것은?\\n\\n보기(A~D)\\n(A) 고장분포 종류(정규/와이블 등)\\n(B) 고장 메커니즘(활성화에너지 등 물리적 기전)\\n(C) 표본의 제조국가\\n(D) 관리도 관리한계 폭",
      "backText": "정답: (B)\\n\\n짧은 해설: Arrhenius는 물리적 반응속도/메커니즘에 의해 AF가 좌우된다."
    },
    {
      "id": "CRE-M08",
      "topic": "CRE MAKER - 오답노트(40)",
      "frontText": "CRE-M08\\n\\n지문: 신뢰성 향상과 설계 성숙도를 얻는 가장 효과적인 방법은?\\n\\n보기(A~D)\\n(A) Duane 성장모델을 적용한다\\n(B) Test–Analyze–Fix(TAAF)를 구조적으로 반복한다\\n(C) 출하검사를 강화한다\\n(D) 보고서를 더 많이 작성한다",
      "backText": "정답: (B)\\n\\n짧은 해설: 성장모델은 “측정” 도구, 성숙은 TAAF 폐루프가 만든다."
    },
    {
      "id": "CRE-M09",
      "topic": "CRE MAKER - 오답노트(40)",
      "frontText": "CRE-M09\\n\\n지문: 누적 시험시간 T=50,000 hr, 고장 r=4(지수분포). MTBF의 90% 단측 하한 신뢰한계(MTBF LCL)는?\\n(공식: \\\\(MTBF_L=2T/\\\\chi^2_{(2r+2),0.90}\\\\))\\n\\n보기(A~D)\\n(A) 4,865 hr\\n(B) 6,255 hr\\n(C) 10,000 hr\\n(D) 12,500 hr",
      "backText": "정답: (B)\\n\\n짧은 해설: df=10, \\\\(\\\\chi^2_{10,0.90}=15.987\\\\) → \\\\(2*50,000/15.987 \\\\approx 6,255\\\\) hr."
    },
    {
      "id": "CRE-M10",
      "topic": "CRE MAKER - 오답노트(40)",
      "frontText": "CRE-M10\\n\\n지문: 관측 중단(censoring)의 의미로 가장 적절한 것은?\\n\\n보기(A~D)\\n(A) 편향된 데이터만 사용한 시험\\n(B) 모든 시료가 고장날 때까지 수행한 시험\\n(C) 일부 시료는 고장하지 않은 채 시험 종료/이탈되어 “고장시간이 완전 관측되지 않는” 데이터가 포함된 상태\\n(D) 번인(burn-in)만 수행한 시험",
      "backText": "정답: (C)\\n\\n짧은 해설: 중단/검열은 “미고장 시료 포함”으로 고장시간이 부분 관측되는 것."
    },
    {
      "id": "CRE-M11",
      "topic": "CRE MAKER - 오답노트(40)",
      "frontText": "CRE-M11\\n\\n지문: RCM(Reliability-Centered Maintenance)의 목적에 가장 부합하는 것은?\\n\\n보기(A~D)\\n(A) 치명 부품의 정비주기를 무조건 최소화\\n(B) 재고를 줄이기 위해 비치명 부품 제거\\n(C) 기능을 유지하기 위해 고장모드별 최적 정비과업/우선순위를 선정\\n(D) 예방정비를 전면 중단",
      "backText": "정답: (C)\\n\\n짧은 해설: RCM은 기능 중심으로 고장모드 기반 정비전략을 선택·우선순위화한다."
    },
    {
      "id": "CRE-M12",
      "topic": "CRE MAKER - 오답노트(40)",
      "frontText": "CRE-M12\\n\\n지문: 50개 유닛을 50시간 시험. 고장난 유닛은 제거(미교체). 시험은 50시간에서 종료. 해당 데이터는?\\n\\n보기(A~D)\\n(A) 좌측 중단(left censoring)\\n(B) 시간 관측 중단(time censoring, Type I)\\n(C) 고장수 관측 중단(failure censoring, Type II)\\n(D) 무중단(complete data)",
      "backText": "정답: (B)\\n\\n짧은 해설: 종료 기준이 “시간 고정”이면 Type I(시간 중단)."
    },
    {
      "id": "CRE-M13",
      "topic": "CRE MAKER - 오답노트(40)",
      "frontText": "CRE-M13\\n\\n지문: 신뢰할 수 있는 제품을 지속적으로 제공하기 위한 핵심요소로 가장 적절한 것은?\\n\\n보기(A~D)\\n(A) 유지보수 활동을 일정대로 수행 보장\\n(B) 장비 점검 주기만 보장\\n(C) 제품/공정 변동성(variation) 감소\\n(D) 검사 비율 100%",
      "backText": "정답: (C)\\n\\n짧은 해설: 변동성 감소가 성능/수명 일관성을 직접 개선한다."
    },
    {
      "id": "CRE-M14",
      "topic": "CRE MAKER - 오답노트(40)",
      "frontText": "CRE-M14\\n\\n지문: DOE에서 “블록(block)”의 올바른 정의는?\\n\\n보기(A~D)\\n(A) 서로 다른 처리를 적용할 수 있는 비교적 균질한 실험단위의 집합\\n(B) 추정 정밀도를 높이기 위해 측정을 여러 번 반복하는 것(=반복측정)\\n(C) 반응(response)의 수준(level)\\n(D) 교락(confounding)을 제거하는 통계검정",
      "backText": "정답: (A)\\n\\n짧은 해설: 블록은 유사 단위끼리 묶어 블록효과를 분리하고 처리 비교를 명확히 한다."
    },
    {
      "id": "CRE-M15",
      "topic": "CRE MAKER - 오답노트(40)",
      "frontText": "CRE-M15\\n\\n지문: 단위 시간당 다운타임을 최소화하려는 교체정책으로 가장 적절한 것은? (마모형 고장률 증가 가정)\\n\\n보기(A~D)\\n(A) 항상 고장 시 교체(run-to-failure)\\n(B) 최소 수리만 반복\\n(C) 임의 시점 예방교체\\n(D) 미리 정한 시점/연령에 예방교체(age/block replacement)",
      "backText": "정답: (D)\\n\\n짧은 해설: 고장률이 증가(웨어아웃)할 때 계획 예방교체가 다운타임을 줄인다."
    },
    {
      "id": "CRE-M16",
      "topic": "CRE MAKER - 오답노트(40)",
      "frontText": "CRE-M16\\n\\n지문: 신뢰성 정의에 반드시 포함되어야 하는 요소는?\\n\\n보기(A~D)\\n(A) 안전운영 요구사항\\n(B) 필수 기능(Required function)\\n(C) 생산량\\n(D) 이익률",
      "backText": "정답: (B)\\n\\n짧은 해설: 신뢰성은 “정해진 환경/기간 동안 요구 기능 수행 확률”이므로 기능 정의가 필수."
    },
    {
      "id": "CRE-M17",
      "topic": "CRE MAKER - 오답노트(40)",
      "frontText": "CRE-M17\\n\\n지문: 위험 분석(Risk analysis)이 가장 직접적으로 지원하는 활동은?\\n\\n보기(A~D)\\n(A) 색상 표준화\\n(B) 로고 디자인\\n(C) 사무실 레이아웃\\n(D) 자원(인력/비용/시간) 할당 및 우선순위 결정",
      "backText": "정답: (D)\\n\\n짧은 해설: 리스크 크기를 근거로 어디에 집중할지 결정한다."
    },
    {
      "id": "CRE-M18",
      "topic": "CRE MAKER - 오답노트(40)",
      "frontText": "CRE-M18\\n\\n지문: 프로젝트 일정관리에서 불확실성(기간 변동)을 다루기 위해 설계된 기법은?\\n\\n보기(A~D)\\n(A) CPM\\n(B) 간트 차트\\n(C) PERT\\n(D) 체크시트",
      "backText": "정답: (C)\\n\\n짧은 해설: PERT는 3점 추정 등으로 기간 불확실성을 반영한다."
    },
    {
      "id": "CRE-M19",
      "topic": "CRE MAKER - 오답노트(40)",
      "frontText": "CRE-M19\\n\\n지문: 대형 조직에서 품질부서와 신뢰성부서의 최적 관계는?\\n\\n보기(A~D)\\n(A) 신뢰성이 품질을 지휘한다\\n(B) 품질이 신뢰성을 지휘한다\\n(C) 책임이 일부 중복되므로 상호 협력/조율한다\\n(D) 완전히 독립 운영한다",
      "backText": "정답: (C)\\n\\n짧은 해설: 품질·신뢰성은 교집합이 있어 협업이 최적."
    },
    {
      "id": "CRE-M20",
      "topic": "CRE MAKER - 오답노트(40)",
      "frontText": "CRE-M20\\n\\n지문: Duane/Crow 성장모델 해석에서 “순간 MTBF 목표 2000 hr 달성”을 확인하려면 언제의 데이터가 중요하며, 추가 활동은 언제 필요한가?\\n\\n보기(A~D)\\n(A) 순간 MTBF가 2000 hr 이상인 구간에서만 추가 테스트가 필요하다\\n(B) 순간 MTBF가 2000 hr 미만인 구간에서 TAAF(수정/검증)와 추가 테스트가 필요하다\\n(C) 누적 MTBF만 보면 되므로 순간 MTBF는 불필요하다\\n(D) α 값만 맞추면 추가 테스트는 필요 없다",
      "backText": "정답: (B)\\n\\n짧은 해설: 목표 미달 구간에서 원인 제거(TAAF)와 검증을 수행해 순간 MTBF를 끌어올린다."
    },
    {
      "id": "CRE-M21",
      "topic": "CRE MAKER - 오답노트(40)",
      "frontText": "CRE-M21\\n\\n지문: 마모(wear)의 정의로 가장 적절한 것은?\\n\\n보기(A~D)\\n(A) 과전류에 의한 절연 파괴\\n(B) 상대적으로 부드러운 표면이 단단한 표면과 상호작용하며 재료 손실이 누적되는 현상\\n(C) 단 1회의 충격으로 즉시 파손\\n(D) 소프트웨어 버그로 기능 상실",
      "backText": "정답: (B)\\n\\n짧은 해설: 접촉/마찰로 재료 제거·변형이 누적되는 열화 현상."
    },
    {
      "id": "CRE-M22",
      "topic": "CRE MAKER - 오답노트(40)",
      "frontText": "CRE-M22\\n\\n지문: 공통원인고장(CCF)이 성립하기 위한 가장 근본적인 전제는?\\n\\n보기(A~D)\\n(A) 공유 전원 공급장치가 있어야 한다\\n(B) 대기 서브시스템이 있어야 한다\\n(C) 경고 시스템이 있어야 한다\\n(D) 동일 기능을 수행하는 중복(리던던트) 경로/요소가 있어야 한다",
      "backText": "정답: (D)\\n\\n짧은 해설: CCF는 “리던던시가 한 원인으로 함께 무력화”되는 개념이므로 전제는 중복 구조."
    },
    {
      "id": "CRE-M23",
      "topic": "CRE MAKER - 오답노트(40)",
      "frontText": "CRE-M23\\n\\n지문: 지수분포 가정에서 고장 데이터로 MTBF의 90% 단측 하한 신뢰한계를 구할 때 쓰는 형태로 가장 적절한 것은?\\n\\n보기(A~D)\\n(A) \\\\(MTBF_L=T/r\\\\)\\n(B) \\\\(MTBF_L=2T/\\\\chi^2_{(2r+2),0.90}\\\\)\\n(C) \\\\(MTBF_L=\\\\chi^2_{(2r),0.90}/(2T)\\\\)\\n(D) \\\\(MTBF_L=(USL-LSL)/(6\\\\sigma)\\\\)",
      "backText": "정답: (B)\\n\\n짧은 해설: MTBF 하한은 카이제곱 분위수를 이용해 보수적으로 산정한다(지수 가정)."
    },
    {
      "id": "CRE-M24",
      "topic": "CRE MAKER - 오답노트(40)",
      "frontText": "CRE-M24\\n\\n지문: 무고장 시연 테스트: n=7개를 동일 미션으로 시험했더니 0 failures. 90% 신뢰수준에서 신뢰도 하한 \\\\(R_L\\\\)는?\\n\\n보기(A~D)\\n(A) \\\\(R_L=0.1^{1/7}=0.7197\\\\)\\n(B) \\\\(R_L=0.9^{1/7}=0.9851\\\\)\\n(C) \\\\(R_L=1-0.1/7=0.9857\\\\)\\n(D) \\\\(R_L=0.9-0.1/7=0.8857\\\\)",
      "backText": "정답: (B)\\n\\n짧은 해설: 0 failures면 \\\\(P(0)=R^n\\\\) → \\\\(R_L=(1-\\\\alpha)^{1/n}=0.9^{1/7}\\\\)."
    },
    {
      "id": "CRE-M25",
      "topic": "CRE MAKER - 오답노트(40)",
      "frontText": "CRE-M25\\n\\n지문: 두 모집단이 정규이며 분산이 동일하다고 가정할 때, 두 평균 차이에 대한 2-표본 t통계량은?\\n\\n보기(A~D)\\n(A) \\\\((\\\\bar x_1-\\\\bar x_2)/\\\\sqrt{s_1^2/n_1+s_2^2/n_2}\\\\)\\n(B) \\\\((\\\\bar x_1-\\\\bar x_2)/(s_p\\\\sqrt{1/n_1+1/n_2}), \\\\ s_p^2=\\\\frac{(n_1-1)s_1^2+(n_2-1)s_2^2}{n_1+n_2-2}\\\\)\\n(C) \\\\((\\\\bar x_1-\\\\bar x_2)/(s_1+s_2)\\\\)\\n(D) \\\\((\\\\bar x_1-\\\\bar x_2)/s_p\\\\)",
      "backText": "정답: (B)\\n\\n짧은 해설: 등분산이면 pooled 분산 \\\\(s_p\\\\)를 쓰는 2-sample t가 정석."
    },
    {
      "id": "CRE-M26",
      "topic": "CRE MAKER - 오답노트(40)",
      "frontText": "CRE-M26\\n\\n지문: n=200 수명시험에서 14개 고장. 신뢰도 점추정 \\\\(\\\\hat R\\\\)과 95% 양측 신뢰구간(정규근사)으로 가장 적절한 것은?\\n\\n보기(A~D)\\n(A) \\\\(\\\\hat R=0.93\\\\), CI≈(0.895, 0.965)\\n(B) \\\\(\\\\hat R=0.07\\\\), CI≈(0.035, 0.105)\\n(C) \\\\(\\\\hat R=0.86\\\\), CI≈(0.820, 0.900)\\n(D) \\\\(\\\\hat R=0.93\\\\), CI≈(0.930, 0.930)",
      "backText": "정답: (A)\\n\\n짧은 해설: \\\\(\\\\hat R=1-14/200=0.93\\\\), SE≈\\\\(\\\\sqrt{0.93·0.07/200}=0.018\\\\) → ±1.96SE."
    },
    {
      "id": "CRE-M27",
      "topic": "CRE MAKER - 오답노트(40)",
      "frontText": "CRE-M27\\n\\n지문: 20개 유닛을 “고장 시 즉시 교체”하며 시험. 10번째 고장이 t=80hr에 발생(지수 가정). (1) MTTF 점추정, (2) 90% 단측 MTTF 하한은?\\n\\n보기(A~D)\\n(A) (1) 8hr, (2) 5hr\\n(B) (1) 160hr, (2) 104hr\\n(C) (1) 200hr, (2) 160hr\\n(D) (1) 1600hr, (2) 1000hr",
      "backText": "정답: (B)\\n\\n짧은 해설: 누적시간 \\\\(T=20×80=1600\\\\). 점추정 \\\\(T/r=160\\\\). 하한 \\\\(2T/\\\\chi^2_{(22),0.90}=3200/30.813\\\\approx 104\\\\)."
    },
    {
      "id": "CRE-M28",
      "topic": "CRE MAKER - 오답노트(40)",
      "frontText": "CRE-M28\\n\\n지문: 공통원인고장(CCF)의 정의로 가장 적절한 것은?\\n\\n보기(A~D)\\n(A) 직렬시스템에서 간헐적으로 발생하는 단일 고장\\n(B) 중복 시스템에서 단일 원인으로 다중 경로/요소가 함께 고장\\n(C) 시스템 기능 상실을 유발하는 모든 고장\\n(D) 복잡한 시스템에서 나타나는 모든 고장",
      "backText": "정답: (B)\\n\\n짧은 해설: CCF는 “리던던시가 같은 원인으로 동시에 무력화”되는 상황."
    },
    {
      "id": "CRE-M29",
      "topic": "CRE MAKER - 오답노트(40)",
      "frontText": "CRE-M29\\n\\n지문: 고장률 λ=0.001/hr, 하루 20hr 운용. 20일(총 400hr) 동안 신뢰도 0.95 이상을 달성하려 한다. 고장 시 즉시 교체, 완벽 스위칭의 대기(순차) 리던던시에서 필요한 최소 여분(spare) 수는?\\n\\n보기(A~D)\\n(A) 0\\n(B) 1\\n(C) 2\\n(D) 3",
      "backText": "정답: (C)\\n\\n짧은 해설: \\\\(λt=0.4\\\\). Poisson에서 \\\\(P(N≤1)=0.938<0.95\\\\), \\\\(P(N≤2)=0.992\\\\ge 0.95\\\\) → 여분 2개."
    },
    {
      "id": "CRE-M30",
      "topic": "CRE MAKER - 오답노트(40)",
      "frontText": "CRE-M30\\n\\n지문: FTA(Fault Tree Analysis)의 대표 장점으로 가장 적절한 것은?\\n\\n보기(A~D)\\n(A) 모든 fault를 동시에 다룬다\\n(B) 부품수준 이벤트 영향만 다룬다\\n(C) 항상 고장률 데이터가 필수다\\n(D) 특정 Top Event 하나에 집중해 논리적으로 원인을 전개한다",
      "backText": "정답: (D)\\n\\n짧은 해설: FTA는 Top Event 중심의 원인 조합(AND/OR)을 체계적으로 분석한다."
    },
    {
      "id": "CRE-M31",
      "topic": "CRE MAKER - 오답노트(40)",
      "frontText": "CRE-M31\\n\\n지문: 제품 안전 설계(product safety design)의 목적에 가장 부합하는 것은?\\n\\n보기(A~D)\\n(A) 오사용/실사용 환경에서 소비자 부상 위험을 감소\\n(B) 근본원인분석 비용을 줄이기 위해 시험을 생략\\n(C) 수익률을 즉시 극대화\\n(D) 고장 데이터 수집을 금지",
      "backText": "정답: (A)\\n\\n짧은 해설: 안전 설계는 hazard를 제거/완화해 사용자 위해를 줄이는 것이 목적."
    },
    {
      "id": "CRE-M32",
      "topic": "CRE MAKER - 오답노트(40)",
      "frontText": "CRE-M32\\n\\n지문: 최적 교체정책의 기본원칙으로 가장 적절한 것은?\\n\\n보기(A~D)\\n(A) 예방교체 횟수 최소화\\n(B) 고장교체만 수행\\n(C) 재고 최소화가 유일한 목적\\n(D) 총 보전비용(예방+고장+다운타임)을 최소화",
      "backText": "정답: (D)\\n\\n짧은 해설: 정책은 총비용(또는 총손실) 최소화로 정식화하는 것이 표준."
    },
    {
      "id": "CRE-M33",
      "topic": "CRE MAKER - 오답노트(40)",
      "frontText": "CRE-M33\\n\\n지문: 혼합(서브팝) 시스템: 30%는 지수(평균 5000 cycles), 70%는 Weibull(η=4000, β=2). 1000 cycles에서 신뢰도는?\\n\\n보기(A~D)\\n(A) 0.8187\\n(B) 0.9394\\n(C) 0.9032\\n(D) 0.7000",
      "backText": "정답: (C)\\n\\n짧은 해설: \\\\(R=0.3e^{-0.2}+0.7e^{-(0.25)^2}=0.3(0.8187)+0.7(0.9394)=0.9032\\\\)."
    },
    {
      "id": "CRE-M34",
      "topic": "CRE MAKER - 오답노트(40)",
      "frontText": "CRE-M34\\n\\n지문: 위험 관리(Risk management)의 초점으로 가장 적절한 것은?\\n\\n보기(A~D)\\n(A) 알 수 없는 위험에 임의 확률 할당\\n(B) 모든 위험을 0으로 만들기\\n(C) 문서량 증가\\n(D) 중요한 위험을 평가하고 적절한 대응을 구현/추적",
      "backText": "정답: (D)\\n\\n짧은 해설: 핵심은 “중요 리스크의 평가→대응 실행→모니터링”이다."
    },
    {
      "id": "CRE-M35",
      "topic": "CRE MAKER - 오답노트(40)",
      "frontText": "CRE-M35\\n\\n지문: 다구치 설계에서 잡음인자(noise factor)의 예로 가장 적절한 것은?\\n\\n보기(A~D)\\n(A) 주변 온도\\n(B) 제어 가능한 공정 설정값\\n(C) 부품 치수(설계로 관리 가능)\\n(D) 처리 수준(level)",
      "backText": "정답: (A)\\n\\n짧은 해설: 잡음인자는 통제가 어렵거나 비용이 큰 외란(환경/사용조건)."
    },
    {
      "id": "CRE-M36",
      "topic": "CRE MAKER - 오답노트(40)",
      "frontText": "CRE-M36\\n\\n지문: 2개 구성품이 부하를 공유(load-sharing)하는 능동 병렬. 공유 중 각 구성품 고장률은 λ/2, 한쪽 고장 후 남은 1개는 고장률 λ로 운용. 시스템 신뢰도 \\\\(R(t)\\\\)는?\\n\\n보기(A~D)\\n(A) \\\\(e^{-λt}\\\\)\\n(B) \\\\(e^{-2λt}\\\\)\\n(C) \\\\(e^{-λt}(1+λt)\\\\)\\n(D) \\\\(1-(1-e^{-λt})^2\\\\)",
      "backText": "정답: (C)\\n\\n짧은 해설: 첫 고장까지 총률 λ, 이후 단독률 λ → 적분하면 \\\\(R(t)=e^{-λt}(1+λt)\\\\)."
    },
    {
      "id": "CRE-M37",
      "topic": "CRE MAKER - 오답노트(40)",
      "frontText": "CRE-M37\\n\\n지문: 모집단 분산(σ)을 모르는 경우 표본평균의 95% 신뢰구간에 일반적으로 사용하는 분포는? (정규성 가정, n이 크지 않음)\\n\\n보기(A~D)\\n(A) Z 분포\\n(B) t 분포\\n(C) 카이제곱 분포\\n(D) 포아송 분포",
      "backText": "정답: (B)\\n\\n짧은 해설: σ 미지이면 표준적으로 t-구간을 사용(특히 n이 작을 때)."
    },
    {
      "id": "CRE-M38",
      "topic": "CRE MAKER - 오답노트(40)",
      "frontText": "CRE-M38\\n\\n지문: 순차 시험(Sequential test)의 OC 곡선이 제공하는 정보는?\\n\\n보기(A~D)\\n(A) MTTR 분포\\n(B) Cp 값\\n(C) 피로 한계\\n(D) 실제 MTBF 값에 따른 “합격 확률”",
      "backText": "정답: (D)\\n\\n짧은 해설: OC는 “진짜 품질(또는 MTBF)이 이 정도일 때 합격할 확률”을 보여준다."
    },
    {
      "id": "CRE-M39",
      "topic": "CRE MAKER - 오답노트(40)",
      "frontText": "CRE-M39\\n\\n지문: 가속시험에서 추정 활성화에너지 \\\\(E\\\\)가 조건에 따라 달라진다. 가장 그럴듯한 원인은?\\n\\n보기(A~D)\\n(A) 표본이 적어서\\n(B) 혼합된 고장 메커니즘(다중 메커니즘)이 존재해서\\n(C) 온도 조건 미유지는 유일한 원인이다\\n(D) 관리도 한계를 잘못 계산해서",
      "backText": "정답: (B)\\n\\n짧은 해설: 지배 메커니즘이 바뀌면 추정 \\\\(E\\\\)가 달라질 수 있다."
    },
    {
      "id": "CRE-M40",
      "topic": "CRE MAKER - 오답노트(40)",
      "frontText": "CRE-M40\\n\\n지문: 실험계획법에서 교락(confounding)의 의미로 가장 적절한 것은?\\n\\n보기(A~D)\\n(A) 표본이 크면 자동으로 사라진다\\n(B) 둘 이상의 효과가 얽혀 개별 효과를 분리해 추정/검출할 수 없는 상태\\n(C) 측정기 오차만 의미한다\\n(D) 정규분포가 아닐 때만 발생한다",
      "backText": "정답: (B)\\n\\n짧은 해설: 설계 구조상 효과가 alias되어 분리 추정이 불가능해지는 상태가 교락."
    },

    /* ============================
       CRE MAKER - 공통형태고장(CCF)(10)
    ============================ */
    {
      "id": "CRE-CCF-01",
      "topic": "CRE MAKER - 공통형태고장(CCF)(10)",
      "frontText": "CRE-CCF-01\\n\\n지문: 다음 중 *공통형태 고장(Common-Mode Failure, CCF)*의 예로 가장 적절한 것은? (센서 시스템)\\n\\n보기(A~D)\\n(A) 센서 A가 마모로 고장나고, 한참 뒤 센서 B가 별도의 제조불량으로 고장남\\n(B) 센서 두 개가 독립적으로 작동하지만 우연히 같은 시간에 고장남\\n(C) 두 개 센서 모두 동일한 SW 필터 로직 버그로 실제 고장을 “정상”으로 판단해 검출에 실패함\\n(D) 한 센서가 고장났지만 다른 센서가 정상적으로 고장을 검출함",
      "backText": "정답: (C)\\n\\n짧은 해설: 동일 원인(공통 SW 로직)이 여러 경로/요소를 동시에 무력화하면 CCF다."
    },
    {
      "id": "CRE-CCF-02",
      "topic": "CRE MAKER - 공통형태고장(CCF)(10)",
      "frontText": "CRE-CCF-02\\n\\n지문: 1oo2(이중화) 유닛에서 “스위칭 메커니즘”이 고장나면 어떤 유형의 위험으로 보는 것이 가장 타당한가?\\n\\n보기(A~D)\\n(A) 스위치 고장은 항상 독립고장이라 CCF가 아니다\\n(B) 스위치/전환 로직 고장은 두 채널을 함께 무력화할 수 있어 CCF 경로가 된다\\n(C) 스위칭이 실패해도 시스템은 반드시 정상 유지된다\\n(D) 스위칭 고장은 오직 가용성에만 영향, 안전에는 영향이 없다",
      "backText": "정답: (B)\\n\\n짧은 해설: 전환 실패(공통 스위치/공통 로직)는 이중화의 이점을 한 번에 제거하는 전형적 CCF 경로다."
    },
    {
      "id": "CRE-CCF-03",
      "topic": "CRE MAKER - 공통형태고장(CCF)(10)",
      "frontText": "CRE-CCF-03\\n\\n지문: 다음 중 “공통 전원/연료 시스템 고장”이 이중화 설계를 무력화하는 이유로 가장 적절한 것은?\\n\\n보기(A~D)\\n(A) 공통 전원은 고장률이 항상 0에 가깝다\\n(B) 이중화는 동일 기능의 *독립 자원*이 필요하며 공통 전원/연료는 단일 실패점이 된다\\n(C) 전원은 소프트웨어가 제어하므로 CCF와 무관하다\\n(D) 공통 전원 고장은 오직 한 채널만 영향을 준다",
      "backText": "정답: (B)\\n\\n짧은 해설: 리던던시는 “공통 자원”이 남아 있으면 단일 실패점으로 붕괴한다."
    },
    {
      "id": "CRE-CCF-04",
      "topic": "CRE MAKER - 공통형태고장(CCF)(10)",
      "frontText": "CRE-CCF-04\\n\\n지문: 여러 시스템이 동일한 SW 컴포넌트(라이브러리/드라이버)를 공유한다. 이때 가장 CRE 관점에서 중요한 위험은?\\n\\n보기(A~D)\\n(A) SW는 마모가 없으므로 고장 모드가 없다\\n(B) 공통 SW 결함이 여러 시스템에서 동시에 동일 증상으로 나타나는 CCF가 될 수 있다\\n(C) SW 공유는 오히려 CCF를 줄인다\\n(D) HW가 다르면 SW 결함은 전혀 전파되지 않는다",
      "backText": "정답: (B)\\n\\n짧은 해설: 공통 소프트웨어 결함은 “다중 경로 동시 실패”를 유발하는 대표 CCF 원인이다."
    },
    {
      "id": "CRE-CCF-05",
      "topic": "CRE MAKER - 공통형태고장(CCF)(10)",
      "frontText": "CRE-CCF-05\\n\\n지문: 다음 중 “유지보수 작업(또는 비조치)”이 공통형태 고장의 *생성 사건(initiating event)*이 되는 사례로 가장 적절한 것은?\\n\\n보기(A~D)\\n(A) 점검 기록을 전산으로 옮겨 적는 행정 작업\\n(B) 유지보수 중 경고 시스템을 꺼둔 뒤 원복을 누락하여, 모든 채널의 경고가 비활성화됨\\n(C) 한 채널의 센서만 교체하고 정상 동작을 확인함\\n(D) 정비 후 절차에 따라 기능시험을 수행함",
      "backText": "정답: (B)\\n\\n짧은 해설: 알람/보호 기능 “비활성화→원복 누락”은 O’Connor가 강조한 전형적 이벤트 활성화(activation) 패턴이다."
    },
    {
      "id": "CRE-CCF-06",
      "topic": "CRE MAKER - 공통형태고장(CCF)(10)",
      "frontText": "CRE-CCF-06\\n\\n지문: “시스템 표시기가 운영요원에게 경고하지 않음”이 가장 위험해지는 상황의 설명으로 적절한 것은?\\n\\n보기(A~D)\\n(A) 경고가 없어도 자동 보호 로직이 항상 완벽하므로 안전 영향이 없다\\n(B) 경고 실패는 독립고장이라 이중화와 무관하다\\n(C) 동일 HMI/알람 경로가 여러 안전 기능의 ‘공통’ 인지 수단일 때, 경고 실패는 다중 기능을 동시에 무력화할 수 있다\\n(D) 경고 실패는 미관상의 문제다",
      "backText": "정답: (C)\\n\\n짧은 해설: 공통 알람/표시 경로는 “사람-시스템 인터페이스” 관점의 CCF 경로가 된다."
    },
    {
      "id": "CRE-CCF-07",
      "topic": "CRE MAKER - 공통형태고장(CCF)(10)",
      "frontText": "CRE-CCF-07\\n\\n지문: “하나의 고장으로 인해 시스템 부하가 증가하고 하류(다운스트림) 부분 고장이 발생”하는 현상은 CRE 용어로 가장 가깝게 무엇으로 분류하는가?\\n\\n보기(A~D)\\n(A) 공통원인고장(CCF)과 무관한 순수 독립고장\\n(B) 연쇄/종속 고장(cascading or dependent failure)로, 단일 고장이 다수 경로를 동시에 무력화할 수 있어 CCF 위험을 증폭한다\\n(C) 우연적 동시고장(coincidental failure)\\n(D) 통계적 표본오차",
      "backText": "정답: (B)\\n\\n짧은 해설: 부하 증가로 연쇄적으로 무너지면 “독립” 가정이 깨지고, 결과적으로 다중 경로 실패(실질 CCF 수준)를 만든다."
    },
    {
      "id": "CRE-CCF-08",
      "topic": "CRE MAKER - 공통형태고장(CCF)(10)",
      "frontText": "CRE-CCF-08\\n\\n지문: 다음 중 “사람의 행동으로 인해 여러 경로에서 고장 발생”의 전형적 사례로 가장 적절한 것은?\\n\\n보기(A~D)\\n(A) 서로 다른 업체가 만든 두 채널을 서로 다른 날에 교체함\\n(B) 허위 경보가 잦아 운영자가 알람을 차단해 두 채널 모두 경고가 나오지 않게 함\\n(C) 한 채널만 점검하고 다른 채널은 손대지 않음\\n(D) 자동 스위칭 기능이 정상 작동함",
      "backText": "정답: (B)\\n\\n짧은 해설: 허위 경보 → 알람 차단은 “운영자 조치가 공통 원인”이 되는 대표적인 CCF 생성 사건이다."
    },
    {
      "id": "CRE-CCF-09",
      "topic": "CRE MAKER - 공통형태고장(CCF)(10)",
      "frontText": "CRE-CCF-09\\n\\n지문: 아래 중 CCF(공통형태 고장) 위험을 *가장 직접적으로 낮추는* 설계/운영 대책 조합은?\\n\\n보기(A~D)\\n(A) 동일 HW/동일 SW/동일 위치에 두 채널을 배치하고 시험은 한 채널만 수행\\n(B) 채널을 물리적으로 분리하고(분리 배치), 전원/연료를 독립화하며, SW/센서를 이종화(diversity)한다\\n(C) 두 채널을 중앙 집중식 위치에 모아 관리 편의성을 높인다\\n(D) 경고가 많으면 운영자가 알람을 끄도록 허용한다",
      "backText": "정답: (B)\\n\\n짧은 해설: 분리(physical separation) + 독립 자원 + 이종화(diversity)는 CCF를 줄이는 정석 조합이다."
    },
    {
      "id": "CRE-CCF-10",
      "topic": "CRE MAKER - 공통형태고장(CCF)(10)",
      "frontText": "CRE-CCF-10 (계산형, β-factor)\\n\\n지문: 1oo2 능동 이중화 시스템. 각 채널의 위험고장 확률을 \\\\(p=\\\\lambda t\\\\)로 근사(작지 않아도 근사 적용). β-factor 모델에서 “공통원인 비율”이 β일 때, 미션 시간 동안 시스템 위험고장 확률의 근사식은\\n\\\\[\\nP_{sys}\\\\approx \\\\beta p + (1-\\\\beta)^2 p^2\\n\\\\]\\n이다. \\\\(\\\\lambda=1\\\\times 10^{-4}/hr\\\\), \\\\(t=1000hr\\\\), \\\\(\\\\beta=0.2\\\\)일 때 \\\\(P_{sys}\\\\)는?\\n\\n보기(A~D)\\n(A) 0.0064\\n(B) 0.0200\\n(C) 0.0264\\n(D) 0.0800",
      "backText": "정답: (C)\\n\\n짧은 해설: \\\\(p=\\\\lambda t=0.1\\\\). \\\\(\\\\beta p=0.02\\\\), \\\\((1-\\\\beta)^2p^2=0.8^2\\\\times 0.01=0.0064\\\\). 합=0.0264."
    },

    /* ============================
       CRE MAKER - Risk Management(10)
    ============================ */
    {
      "id": "CRE-RM-01",
      "topic": "CRE MAKER - Risk Management(10)",
      "frontText": "CRE-RM-01\\n\\n지문: 신제품에서 특정 소재가 규제(법규) 변경으로 “금지될 가능성”이 확인되었다. 팀이 가장 먼저 결정한 조치는 해당 소재를 사용하는 기능 자체를 설계에서 제거하고, 다른 소재로 대체하는 것이다. 이 대응은 무엇인가?\\n\\n보기(A~D)\\n(A) 회피(Avoid)\\n(B) 전이(Transfer)\\n(C) 완화(Mitigate)\\n(D) 승인(Accept)",
      "backText": "정답: (A)\\n\\n짧은 해설: 위험 원인(금지될 소재/기능)을 없애서 “위험 자체를 제거”하면 회피다."
    },
    {
      "id": "CRE-RM-02",
      "topic": "CRE MAKER - Risk Management(10)",
      "frontText": "CRE-RM-02\\n\\n지문: 고가 장비의 화재 위험이 있으며, 화재 발생 시 손실 규모가 매우 크다. 회사는 화재 보험을 구매해 손실 비용의 대부분을 보험사로 넘기기로 했다. 이 대응은?\\n\\n보기(A~D)\\n(A) 회피(Avoid)\\n(B) 전이(Transfer)\\n(C) 완화(Mitigate)\\n(D) 승인(Accept)",
      "backText": "정답: (B)\\n\\n짧은 해설: 비용/책임을 제3자(보험)로 이전하면 전이다."
    },
    {
      "id": "CRE-RM-03",
      "topic": "CRE MAKER - Risk Management(10)",
      "frontText": "CRE-RM-03\\n\\n지문: 서버 다운 위험을 줄이기 위해 이중 전원(UPS)과 핫스탠바이 서버를 구축하고, 장애 알람 모니터링을 강화했다. 이 대응은?\\n\\n보기(A~D)\\n(A) 회피(Avoid)\\n(B) 전이(Transfer)\\n(C) 완화(Mitigate)\\n(D) 승인(Accept)",
      "backText": "정답: (C)\\n\\n짧은 해설: 발생확률/영향을 낮추는 조치(리던던시/모니터링)는 완화다."
    },
    {
      "id": "CRE-RM-04",
      "topic": "CRE MAKER - Risk Management(10)",
      "frontText": "CRE-RM-04\\n\\n지문: 프로젝트 초기에 “경미한 문서 오탈자” 리스크가 있으나 영향이 작고 수정 비용도 낮다. 팀은 별도 조치 없이 발생 시 수정하기로 하되, 일정에 1일 버퍼만 반영했다. 이 대응은?\\n\\n보기(A~D)\\n(A) 회피(Avoid)\\n(B) 전이(Transfer)\\n(C) 완화(Mitigate)\\n(D) 승인(Accept)",
      "backText": "정답: (D)\\n\\n짧은 해설: 적극적으로 줄이기보다 ‘감수 + 필요 시 대응(버퍼/예비)’이면 승인이다."
    },
    {
      "id": "CRE-RM-05",
      "topic": "CRE MAKER - Risk Management(10)",
      "frontText": "CRE-RM-05\\n\\n지문: 단일 공급업체 부품 결함으로 리콜 위험이 있다. 팀은 공급업체를 2원화하고(dual sourcing), 입고검사를 강화하며, 공정능력 기준 미달 시 즉시 차단하기로 했다. 이 대응은?\\n\\n보기(A~D)\\n(A) 회피(Avoid)\\n(B) 전이(Transfer)\\n(C) 완화(Mitigate)\\n(D) 승인(Accept)",
      "backText": "정답: (C)\\n\\n짧은 해설: 공급 리스크의 발생확률/영향을 낮추는 통제 강화는 완화다."
    },
    {
      "id": "CRE-RM-06",
      "topic": "CRE MAKER - Risk Management(10)",
      "frontText": "CRE-RM-06\\n\\n지문: 고장으로 인한 고객 손해배상 위험이 있다. 회사는 고객 계약서에 “간접 손해에 대한 책임 제한(Liability limitation)” 조항을 포함하고, SLA 위반 시 페널티 상한을 설정했다. 이 대응은?\\n\\n보기(A~D)\\n(A) 회피(Avoid)\\n(B) 전이(Transfer)\\n(C) 완화(Mitigate)\\n(D) 승인(Accept)",
      "backText": "정답: (B)\\n\\n짧은 해설: 계약으로 책임/손실 부담을 상대방 또는 제한된 범위로 “이전/이동”시키면 전이다."
    },
    {
      "id": "CRE-RM-07",
      "topic": "CRE MAKER - Risk Management(10)",
      "frontText": "CRE-RM-07\\n\\n지문: 안전 분석에서 특정 기능이 사용자 오사용 시 치명 위험을 유발할 수 있음이 확인되었다. 팀은 그 기능 자체를 제품에서 삭제하고, 요구사항에서 제외했다. 이 대응은?\\n\\n보기(A~D)\\n(A) 회피(Avoid)\\n(B) 전이(Transfer)\\n(C) 완화(Mitigate)\\n(D) 승인(Accept)",
      "backText": "정답: (A)\\n\\n짧은 해설: 위험을 유발하는 활동/기능을 없애면 회피다(완화가 아니라 “제거”)."
    },
    {
      "id": "CRE-RM-08",
      "topic": "CRE MAKER - Risk Management(10)",
      "frontText": "CRE-RM-08\\n\\n지문: 사이버 침해 위험에 대해 회사는 보안 관제(MSSP) 업체를 고용하고, 침해 대응을 포함한 계약(SLA/배상/페널티)을 체결했다. 내부 통제 개선은 최소만 수행한다. 이 대응의 주된 성격은?\\n\\n보기(A~D)\\n(A) 회피(Avoid)\\n(B) 전이(Transfer)\\n(C) 완화(Mitigate)\\n(D) 승인(Accept)",
      "backText": "정답: (B)\\n\\n짧은 해설: 리스크 부담(운영/책임 일부)을 외부에 계약으로 넘기는 것이 핵심이면 전이가 주된 분류다."
    },
    {
      "id": "CRE-RM-09",
      "topic": "CRE MAKER - Risk Management(10)",
      "frontText": "CRE-RM-09\\n\\n지문: 일정 지연 위험이 존재한다. 팀이 선택한 방법은 (1) 크리티컬 작업에 숙련 인력을 추가 투입해 작업 시간을 단축하고, (2) 진척 KPI를 매일 모니터링해 조기 경보를 받는 것이다. 이 대응은?\\n\\n보기(A~D)\\n(A) 회피(Avoid)\\n(B) 전이(Transfer)\\n(C) 완화(Mitigate)\\n(D) 승인(Accept)",
      "backText": "정답: (C)\\n\\n짧은 해설: 지연 “발생확률/영향”을 줄이려는 적극 조치(자원 투입/모니터링)는 완화다."
    },
    {
      "id": "CRE-RM-10",
      "topic": "CRE MAKER - Risk Management(10)",
      "frontText": "CRE-RM-10\\n\\n지문: 테스트 결과 “공통원인고장(CCF)” 가능성이 확인되었다. 팀은 이종화(서로 다른 센서 타입/서로 다른 소프트웨어 경로), 물리적 분리 배치, 독립 전원을 적용한다. 이 대응은?\\n\\n보기(A~D)\\n(A) 회피(Avoid)\\n(B) 전이(Transfer)\\n(C) 완화(Mitigate)\\n(D) 승인(Accept)",
      "backText": "정답: (C)\\n\\n짧은 해설: CCF의 가능성과 영향을 낮추는 설계 대책(다이버시티/분리/독립화)은 완화다."
    }
  ];

  function getCardsRef() {
    if (typeof window !== "undefined" && Array.isArray(window.cards)) return window.cards;
    if (typeof cards !== "undefined" && Array.isArray(cards)) return cards;
    return null;
  }

  function merge() {
    const target = getCardsRef();
    if (!target) return false;

    const existing = new Set();
    for (const c of target) {
      if (c && typeof c.id === "string") existing.add(c.id);
    }

    const toAdd = [];
    for (const c of newCards) {
      if (!c || typeof c.id !== "string") continue;
      if (!existing.has(c.id)) toAdd.push(c);
    }

    if (toAdd.length) target.push(...toAdd);

    try {
      if (typeof window !== "undefined") {
        if (typeof window.preloadImages === "function") window.preloadImages();
        if (typeof window.updateCardView === "function") window.updateCardView();
      } else {
        if (typeof preloadImages === "function") preloadImages();
        if (typeof updateCardView === "function") updateCardView();
      }
    } catch (e) {}

    return true;
  }

  if (merge()) return;

  let tries = 0;
  const maxTries = 100; // ~10s
  const timer = setInterval(() => {
    tries++;
    if (merge() || tries >= maxTries) clearInterval(timer);
  }, 100);
})();
