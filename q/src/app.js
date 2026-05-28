const STORAGE_KEY = "australia-pr-score-profile-static-v3";
let activeOccupationGroup = "All";

const DATA = {
  sources: [
    { label: "Home Affairs", url: "https://immi.homeaffairs.gov.au/" },
    { label: "Points table", url: "https://immi.homeaffairs.gov.au/supporting/Pages/Work/189-points-table.aspx" },
    { label: "SkillSelect invitation rounds", url: "https://immi.homeaffairs.gov.au/visas/working-in-australia/skillselect/invitation-rounds" },
    { label: "Engineers Australia", url: "https://www.engineersaustralia.org.au/migrants/migration-skills-assessment" },
    { label: "ACS", url: "https://www.acs.org.au/msa/information-for-applicants.html" },
    { label: "ANMAC", url: "https://www.anmac.org.au/skilled-migration-services" },
    { label: "AITSL", url: "https://www.aitsl.edu.au/migrate-to-australia" },
    { label: "CPA Australia", url: "https://www.cpaaustralia.com.au/migration-assessment" },
    { label: "Competent English", url: "https://immi.homeaffairs.gov.au/supporting/Pages/competent-english.aspx" },
    { label: "Proficient English", url: "https://immi.homeaffairs.gov.au/help-support/meeting-our-requirements/english-language/proficient-english" },
    { label: "Superior English", url: "https://immi.homeaffairs.gov.au/help-support/meeting-our-requirements/english-language/superior-english" },
    { label: "ImmiTrend invitation estimates", url: "https://immitrend.com.au/rounds" },
    { label: "ANZSCO SkillSelect rounds", url: "https://anzsco.com.au/skillselect" }
  ],
  occupations: [
    {
      id: "mechatronics",
      group: "Engineering",
      title: "Engineering Professionals nec",
      titleZh: "工程专业人员 nec（机电/机器人常见方向）",
      anzsco: "233999",
      relatedMajors: "Mechatronics, Robotics, Control Systems, Product Design",
      authority: "Engineers Australia",
      pathways: ["189", "190", "491", "186"],
      range: "85-95+",
      targetMin: 85,
      competitiveness: "High",
      risk: "适合机电/机器人背景规划，但职业评估要看课程、项目和工作职责是否真正匹配工程职业。"
    },
    {
      id: "engineering-technologist",
      group: "Engineering",
      title: "Engineering Technologist",
      titleZh: "工程技术专家",
      anzsco: "233914",
      relatedMajors: "Applied Engineering, Automation, Engineering Technology",
      authority: "Engineers Australia",
      pathways: ["189", "190", "491", "186"],
      range: "85-95+",
      targetMin: 85,
      competitiveness: "High",
      risk: "适合偏应用技术的工程课程，但评估类别需要和课程结构及职责一致。"
    },
    {
      id: "mechanical",
      group: "Engineering",
      title: "Mechanical Engineer",
      titleZh: "机械工程师",
      anzsco: "233512",
      relatedMajors: "Mechanical Design, CAD/CAE, Robotics Hardware, Manufacturing",
      authority: "Engineers Australia",
      pathways: ["189", "190", "491", "186"],
      range: "85-95+",
      targetMin: 85,
      competitiveness: "High",
      risk: "更适合机械设计、制造、测试、机械系统方向明确的背景。"
    },
    {
      id: "electrical",
      group: "Engineering",
      title: "Electrical Engineer",
      titleZh: "电气工程师",
      anzsco: "233311",
      relatedMajors: "Electrical Systems, Power, Control, Automation",
      authority: "Engineers Australia",
      pathways: ["189", "190", "491", "186"],
      range: "85-95+",
      targetMin: 85,
      competitiveness: "High",
      risk: "适合电力、电气系统、控制和自动化证据更强的背景。"
    },
    {
      id: "electronics",
      group: "Engineering",
      title: "Electronics Engineer",
      titleZh: "电子工程师",
      anzsco: "233411",
      relatedMajors: "Embedded Systems, Circuits, Sensors, Robotics Electronics",
      authority: "Engineers Australia",
      pathways: ["189", "190", "491", "186"],
      range: "90-95+",
      targetMin: 90,
      competitiveness: "High",
      risk: "需要清晰的电路、嵌入式、传感器或硬件工程证据。"
    },
    {
      id: "software",
      group: "IT",
      title: "Software Engineer",
      titleZh: "软件工程师",
      anzsco: "261313",
      relatedMajors: "Software Engineering, AI, Robotics Software, Full Stack",
      authority: "ACS",
      pathways: ["189", "190", "491", "186"],
      range: "90-100+",
      targetMin: 90,
      competitiveness: "Very high",
      risk: "只有当学习和工作职责真正偏 ICT/软件时才适合，机器人项目里有代码不一定足够。"
    },
    {
      id: "ict-business-analyst",
      group: "IT",
      title: "ICT Business Analyst",
      titleZh: "ICT 商业分析师",
      anzsco: "261111",
      relatedMajors: "Information Systems, Business Analytics, Product Analysis",
      authority: "ACS",
      pathways: ["189", "190", "491", "186"],
      range: "90-100+",
      targetMin: 90,
      competitiveness: "Very high",
      risk: "需要 ICT 分析职责和证据，普通商业分析经验不一定符合。"
    },
    {
      id: "registered-nurse",
      group: "Healthcare",
      title: "Registered Nurse",
      titleZh: "注册护士",
      anzsco: "2544xx",
      relatedMajors: "Nursing, Clinical Practice",
      authority: "ANMAC",
      pathways: ["189", "190", "491", "186"],
      range: "75-90+",
      targetMin: 75,
      competitiveness: "Medium to high",
      risk: "需要护理学历、注册、临床实习和英语要求；分数只是其中一部分。"
    },
    {
      id: "accountant",
      group: "Business",
      title: "Accountant (General)",
      titleZh: "会计师",
      anzsco: "221111",
      relatedMajors: "Accounting, Finance with required accounting subjects",
      authority: "CPA Australia / CA ANZ / IPA",
      pathways: ["189", "190", "491", "186"],
      range: "95-105+",
      targetMin: 95,
      competitiveness: "Very high",
      risk: "会计历史竞争很高，课程科目覆盖和英语分数非常关键。"
    },
    {
      id: "early-childhood-teacher",
      group: "Education",
      title: "Early Childhood Teacher",
      titleZh: "幼教教师",
      anzsco: "241111",
      relatedMajors: "Early Childhood Education",
      authority: "AITSL",
      pathways: ["189", "190", "491", "186"],
      range: "70-85+",
      targetMin: 70,
      competitiveness: "Medium",
      risk: "需要对应教育学历、教学实习、英语和教师评估材料。"
    },
    {
      id: "secondary-teacher",
      group: "Education",
      title: "Secondary School Teacher",
      titleZh: "中学教师",
      anzsco: "241411",
      relatedMajors: "Secondary Education, Teaching Areas",
      authority: "AITSL",
      pathways: ["189", "190", "491", "186"],
      range: "75-90+",
      targetMin: 75,
      competitiveness: "Medium to high",
      risk: "教学方向、实习天数、英语和州注册路径都会影响可行性。"
    }
  ],
  englishDetails: {
    competent: "IELTS 6 each; PTE L47 R48 W51 S54",
    proficient: "IELTS 7 each; PTE L58 R59 W69 S76",
    superior: "IELTS 8 each; PTE L69 R70 W85 S88"
  },
  categories: [
    {
      id: "english",
      label: "English / 英语水平",
      options: [
        { value: "competent", label: "Competent English / 合格英语", points: 0 },
        { value: "proficient", label: "Proficient English / 熟练英语", points: 10 },
        { value: "superior", label: "Superior English / 优秀英语", points: 20 }
      ]
    },
    {
      id: "age",
      label: "Age / 年龄",
      options: [
        { value: "18-24", label: "18-24 / 18-24 岁", points: 25 },
        { value: "25-32", label: "25-32 / 25-32 岁", points: 30 },
        { value: "33-39", label: "33-39 / 33-39 岁", points: 25 },
        { value: "40-44", label: "40-44 / 40-44 岁", points: 15 },
        { value: "45+", label: "45+ / 45 岁以上", points: null }
      ]
    },
    {
      id: "education",
      label: "Education / 学历",
      options: [
        { value: "doctorate", label: "Doctorate / 博士毕业", points: 20 },
        { value: "bachelor", label: "Bachelor / 本科毕业", points: 15 },
        { value: "master", label: "Master / 硕士毕业", points: 15 },
        { value: "diplomaTrade", label: "Diploma or trade qualification / 文凭或技工资格", points: 10 },
        { value: "recognised", label: "Recognised qualification / 评估机构认可资格", points: 10 }
      ]
    },
    {
      id: "overseasWork",
      label: "Overseas skilled employment / 海外技术工作",
      options: [
        { value: "0", label: "Less than 3 years / 少于 3 年", points: 0 },
        { value: "3-4", label: "3-4 years / 3-4 年", points: 5 },
        { value: "5-7", label: "5-7 years / 5-7 年", points: 10 },
        { value: "8+", label: "8+ years / 8 年以上", points: 15 }
      ]
    },
    {
      id: "australianWork",
      label: "Australian skilled employment / 澳洲技术工作",
      options: [
        { value: "0", label: "Less than 1 year / 少于 1 年", points: 0 },
        { value: "1-2", label: "1-2 years / 1-2 年", points: 5 },
        { value: "3-4", label: "3-4 years / 3-4 年", points: 10 },
        { value: "5-7", label: "5-7 years / 5-7 年", points: 15 },
        { value: "8+", label: "8+ years / 8 年以上", points: 20 }
      ]
    },
    {
      id: "australianStudy",
      label: "Australian study requirement / 澳洲学习要求",
      options: [
        { value: "yes", label: "Yes / 是", points: 5 },
        { value: "no", label: "No / 否", points: 0 }
      ]
    },
    {
      id: "specialistEducation",
      label: "Specialist education / STEM 研究型学历",
      options: [
        { value: "yes", label: "Eligible STEM research Master or PhD / 符合条件的 STEM 研究型硕士或博士", points: 10 },
        { value: "no", label: "Not applicable / 不适用", points: 0 }
      ]
    },
    {
      id: "regionalStudy",
      label: "Regional study / 偏远地区学习",
      options: [
        { value: "yes", label: "Yes / 是", points: 5 },
        { value: "no", label: "No / 否", points: 0 }
      ]
    },
    {
      id: "communityLanguage",
      label: "Community language / 社区语言认证",
      options: [
        { value: "yes", label: "Yes / 是", points: 5 },
        { value: "no", label: "No / 否", points: 0 }
      ]
    },
    {
      id: "professionalYear",
      label: "Professional Year / 澳洲职业年",
      options: [
        { value: "yes", label: "Completed in Australia / 已在澳洲完成", points: 5 },
        { value: "no", label: "No / 否", points: 0 }
      ]
    },
    {
      id: "partner",
      label: "Partner or single / 配偶或单身",
      options: [
        { value: "single", label: "Single or partner is Australian citizen/PR / 单身或配偶为澳洲公民/PR", points: 10 },
        { value: "partnerEnglish", label: "Partner has competent English only / 配偶仅有合格英语", points: 5 },
        { value: "partnerSkilled", label: "Partner has English + skills assessment + eligible occupation / 配偶有英语、职业评估和合资格职业", points: 10 },
        { value: "other", label: "Otherwise / 其他情况", points: 0 }
      ]
    },
    {
      id: "visaSubclass",
      label: "Target visa points / 目标签证加分",
      options: [
        { value: "189", label: "189 Skilled Independent / 189 独立技术移民", points: 0 },
        { value: "190", label: "190 state nomination / 190 州担保", points: 5 },
        { value: "491", label: "491 regional nomination or family sponsorship / 491 偏远地区或亲属担保", points: 15 }
      ]
    }
  ],
  visas: [
    ["485", "Temporary Graduate", "临时毕业生签证", "No points test. Useful after eligible Australian study."],
    ["189", "Skilled Independent", "独立技术移民", "Points-tested PR pathway without state or employer nomination."],
    ["190", "Skilled Nominated", "州担保技术移民", "Points-tested PR pathway with state nomination and +5 points."],
    ["491", "Skilled Work Regional", "偏远地区技术签证", "Regional pathway with +15 points and location conditions."],
    ["186", "Employer Nomination Scheme", "雇主担保永居", "Employer-sponsored PR pathway, not points-tested."]
  ],
  rules: [
    ["65 points is only the EOI floor", "65 分只是 EOI 最低门槛", "很多职业实际竞争分远高于 65。邀请轮次、州担保清单、职业配额和政策变化都会影响结果。"],
    ["Occupation decides the assessment path", "职业决定评估路径", "工程看 Engineers Australia，IT 看 ACS，护理看 ANMAC，会计看 CPA/CA/IPA，教师看 AITSL。"],
    ["190 and 491 add points but add conditions", "190/491 加分，但也有条件", "州担保和偏远地区路径能加分，但通常也有居住、工作、职业清单和承诺要求。"],
    ["Score alone is not enough", "只有分数不够", "还要通过职业评估、满足签证要求，并在合适的邀请或州担保窗口中递交。"]
  ],
  pathwaySteps: [
    {
      id: "189",
      title: "189 Skilled Independent",
      titleZh: "189 独立技术移民",
      steps: [
        "确认职业在对应 skilled occupation list 上，并选择 ANZSCO。",
        "完成职业评估，例如工程走 Engineers Australia，IT 走 ACS。",
        "准备英语成绩，至少 Competent；想加分则冲 Proficient/Superior。",
        "递交 SkillSelect EOI，等待邀请轮次。",
        "获邀后提交签证材料、体检、无犯罪、学历和工作证明。"
      ]
    },
    {
      id: "190",
      title: "190 Skilled Nominated",
      titleZh: "190 州担保技术移民",
      steps: [
        "确认目标州是否开放该职业，以及是否有居住、工作或毕业地要求。",
        "完成职业评估和英语成绩。",
        "递交 EOI，并选择对应州或 Territory。",
        "按州政府要求提交 ROI 或州担保申请。",
        "获得州提名后拿到 +5 分，再递交 190 签证申请。"
      ]
    },
    {
      id: "491",
      title: "491 Skilled Work Regional",
      titleZh: "491 偏远地区技术路径",
      steps: [
        "确认职业和目标偏远地区州担保或亲属担保条件。",
        "完成职业评估、英语和 EOI。",
        "申请州/地区提名或符合亲属担保要求，获得 +15 分。",
        "获邀后申请 491，并遵守偏远地区居住和工作条件。",
        "满足后续居住、收入和签证条件后，再规划 191 永居路径。"
      ]
    },
    {
      id: "485",
      title: "485 Temporary Graduate",
      titleZh: "485 临时毕业生签证",
      steps: [
        "完成合资格澳洲课程，并确认符合 Australian study requirement。",
        "准备英语、健康保险、无犯罪和毕业材料。",
        "递交 485，用毕业后时间积累澳洲工作和职业评估材料。",
        "同步准备 189/190/491 所需的英语、职业评估和 EOI。",
        "485 本身不是 PR，但常作为毕业后过渡和提分阶段。"
      ]
    },
    {
      id: "186",
      title: "186 Employer Nomination",
      titleZh: "186 雇主担保永居",
      steps: [
        "找到符合条件的澳洲雇主和提名职位。",
        "确认职业、薪资、工作经验、英语和雇主资质要求。",
        "雇主提交 nomination，申请人准备签证材料。",
        "按 stream 要求提供技能、工作、英语、健康和品格证明。",
        "186 不走 points test，但对雇主和职位真实性要求很高。"
      ]
    }
  ],
  bonusDetails: [
    {
      title: "Australian study requirement / 澳洲学习要求",
      detail: "在这个工具里，“本科毕业”和“硕士毕业”预设都按已完成满足 Australian study requirement 的澳洲课程处理，所以默认获得 5 分。真实申请仍要核对课程时长、CRICOS、学习地点和完成时间。"
    },
    {
      title: "Specialist education / STEM 研究型学历",
      detail: "通常指在澳洲取得符合条件的 STEM 研究型硕士或博士，并满足相关学习时长和领域要求。Coursework 授课型硕士通常不按这一项加分。"
    },
    {
      title: "Community language / 社区语言认证",
      detail: "通常需要 NAATI 认可的社区语言资质，例如 CCL 或符合要求的口译/笔译 credential。常见规划方式是用中文等社区语言争取额外 5 分。"
    },
    {
      title: "Professional Year / 澳洲职业年",
      detail: "通常要求在澳洲完成获认可的 Professional Year，领域一般包括会计、ICT 或工程，并且完成时间需要符合邀请前的有效期要求。"
    }
  ],
  roundSummary: [
    {
      date: "13 Nov 2025",
      total: "10,300",
      subclass189: "10,000",
      subclass491: "300",
      note: "Latest large 189 round. Many health and education occupations invited around 75-85; many engineering/science roles around 85-90."
    },
    {
      date: "21 Aug 2025",
      total: "7,037",
      subclass189: "6,887",
      subclass491: "150",
      note: "Health and education remained active; several engineering and science occupations sat around 90+."
    },
    {
      date: "7 Nov 2024",
      total: "15,000",
      subclass189: "15,000",
      subclass491: "0",
      note: "Large 189 round. Software, ICT Business Analyst, Accountant and Electronics Engineer appeared around 95."
    },
    {
      date: "5 Sep 2024",
      total: "7,973",
      subclass189: "7,973",
      subclass491: "0",
      note: "High competition round. Software Engineer around 100; Engineering Professionals nec around 90."
    },
    {
      date: "13 Jun 2024",
      total: "5,292",
      subclass189: "5,292",
      subclass491: "0",
      note: "Accountant and Software Engineer around 100; Engineering Professionals nec around 95."
    }
  ],
  invitationInsights: [
    {
      occupationId: "registered-nurse",
      latestScore: "75-80",
      recentRange: "70-80",
      estInvites: "1,300+ RN nec in Nov 2025, plus hundreds across aged care, critical care, medical and surgical RN groups (Est.)",
      trend: "High volume and recurring invitations across multiple RN specialisations.",
      ease: "Easier",
      rank: 1
    },
    {
      occupationId: "early-childhood-teacher",
      latestScore: "85",
      recentRange: "70-85",
      estInvites: "~512 in Nov 2025 189; ~24 in 491 (Est.)",
      trend: "Priority-style demand, but score moved from 70 in Nov 2024 to 85-90 in 2025 rounds.",
      ease: "Moderate",
      rank: 2
    },
    {
      occupationId: "secondary-teacher",
      latestScore: "75-85",
      recentRange: "70-85",
      estInvites: "~392 in Nov 2025 189; ~19 in 491 (Est.)",
      trend: "Strong pathway, especially compared with IT/accounting, but 491 can require higher points.",
      ease: "Moderate",
      rank: 3
    },
    {
      occupationId: "mechanical",
      latestScore: "85-90",
      recentRange: "85-95",
      estInvites: "Not always shown in latest round; historically active in larger 189 rounds",
      trend: "Good engineering pathway if assessment evidence is strong, but less forgiving than teaching/health.",
      ease: "Moderate-hard",
      rank: 4
    },
    {
      occupationId: "electrical",
      latestScore: "85-90",
      recentRange: "85-95",
      estInvites: "Not always shown in latest round; engineering-linked rounds remain active",
      trend: "Similar to mechanical; assessability and state nomination options matter a lot.",
      ease: "Moderate-hard",
      rank: 5
    },
    {
      occupationId: "mechatronics",
      latestScore: "85-95",
      recentRange: "85-95",
      estInvites: "Appeared around 85 in Nov 2024, 90 in Sep 2024 and 95 in Jun 2024",
      trend: "Feasible for robotics/mechatronics, but nec category must be justified carefully.",
      ease: "Hard",
      rank: 6
    },
    {
      occupationId: "engineering-technologist",
      latestScore: "85-95",
      recentRange: "85-95",
      estInvites: "Appeared around 85 in Nov 2024; broader engineering technologist demand is smaller than mainstream engineering.",
      trend: "Good only when course and duties clearly match the technologist pathway.",
      ease: "Hard",
      rank: 7
    },
    {
      occupationId: "electronics",
      latestScore: "95",
      recentRange: "95",
      estInvites: "Appeared around 95 in Aug/Nov 2025 and Nov 2024.",
      trend: "Higher cut-off inside engineering; needs strong hardware/electronics evidence.",
      ease: "Hard",
      rank: 8
    },
    {
      occupationId: "software",
      latestScore: "95-100",
      recentRange: "95-100",
      estInvites: "Appeared around 95 in Nov 2024 and 100 in Jun/Sep 2024; absent from some 2025 189 rounds.",
      trend: "Very competitive and inconsistent in 189; state/employer routes may matter more.",
      ease: "Very hard",
      rank: 9
    },
    {
      occupationId: "ict-business-analyst",
      latestScore: "95",
      recentRange: "95+",
      estInvites: "Appeared around 95 in Nov 2024; not consistently visible in every later 189 round.",
      trend: "Needs very clear ICT business analysis evidence and high points.",
      ease: "Very hard",
      rank: 10
    },
    {
      occupationId: "accountant",
      latestScore: "95-100",
      recentRange: "95-100",
      estInvites: "Appeared around 95 in Nov 2024 and 100 in Jun 2024.",
      trend: "Historically crowded. English, Professional Year, partner points and state options are often decisive.",
      ease: "Very hard",
      rank: 11
    }
  ],
  inviteCases: [
    {
      title: "Registered Nurse / 注册护士",
      score: "80 pts",
      pathway: "189 or 491",
      profile: "25-32 岁 + 澳洲护理本科/硕士 + Proficient English + 单身/配偶加分 + 澳洲学习要求",
      result: "高于多个 RN 近期 75-80 分邀请线，属于较有希望的画像。"
    },
    {
      title: "Secondary School Teacher / 中学教师",
      score: "85 pts",
      pathway: "189 or 491",
      profile: "25-32 岁 + 澳洲教育硕士 + Proficient/Superior English + 澳洲学习 + 单身 + 491/190 备选",
      result: "接近或达到近期 75-85 分区间，适合同时看州担保和偏远地区。"
    },
    {
      title: "Engineering Professionals nec / 机电机器人方向",
      score: "90 pts",
      pathway: "189 + 190 backup",
      profile: "25-32 岁 + 澳洲工程硕士 + Superior English + 单身 + 澳洲学习 + NAATI/职业年或澳洲工作",
      result: "达到部分工程轮次 85-90 线，但 nec 评估证据必须非常清晰。"
    },
    {
      title: "Software Engineer / 软件工程师",
      score: "100 pts",
      pathway: "189 + 190/186 backup",
      profile: "25-32 岁 + ACS 相关学历 + Superior English + 澳洲学习 + 单身 + 澳洲工作/职业年/NAATI",
      result: "才接近 95-100 的竞争画像；低于 90 通常需要更现实地看 190、491 或 186。"
    },
    {
      title: "Accountant / 会计",
      score: "100 pts",
      pathway: "189 + 190 backup",
      profile: "25-32 岁 + 会计硕士 + Superior English + Professional Year + NAATI + 单身",
      result: "匹配近年 95-100 的高竞争画像，但仍强依赖轮次和职业配额。"
    }
  ],
  blankProfile: {
    occupationId: "",
    studyStage: "",
    age: "",
    english: "",
    education: "",
    overseasWork: "",
    australianWork: "",
    australianStudy: "",
    specialistEducation: "",
    regionalStudy: "",
    communityLanguage: "",
    professionalYear: "",
    partner: "",
    visaSubclass: ""
  },
  defaultProfile: {
    occupationId: "mechatronics",
    studyStage: "bachelor",
    age: "18-24",
    english: "proficient",
    education: "bachelor",
    overseasWork: "0",
    australianWork: "0",
    australianStudy: "yes",
    specialistEducation: "no",
    regionalStudy: "no",
    communityLanguage: "no",
    professionalYear: "no",
    partner: "single",
    visaSubclass: "189"
  },
  futureProfile: {
    occupationId: "mechatronics",
    studyStage: "master",
    age: "25-32",
    english: "proficient",
    education: "master",
    overseasWork: "0",
    australianWork: "0",
    australianStudy: "yes",
    specialistEducation: "no",
    regionalStudy: "no",
    communityLanguage: "no",
    professionalYear: "no",
    partner: "single",
    visaSubclass: "189"
  }
};

let profile = loadProfile();

function $(id) {
  return document.getElementById(id);
}

function loadProfile() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    return { ...DATA.blankProfile, ...saved };
  } catch {
    return { ...DATA.blankProfile };
  }
}

function saveProfile() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
}

function getOccupation() {
  return DATA.occupations.find((occupation) => occupation.id === profile.occupationId) || null;
}

function getOption(category, value) {
  return category.options.find((option) => option.value === value) || null;
}

function hasCompleteProfile(activeProfile = profile) {
  return Boolean(activeProfile.occupationId) && DATA.categories.every((category) => Boolean(activeProfile[category.id]));
}

function calculate(activeProfile = profile) {
  let eligible = true;
  const breakdown = DATA.categories.map((category) => {
    const option = getOption(category, activeProfile[category.id]);
    if (option?.points === null) eligible = false;
    return {
      id: category.id,
      label: category.label,
      selected: option?.label || "Not selected / 未选择",
      points: option?.points || 0
    };
  });
  return {
    eligible,
    breakdown,
    total: breakdown.reduce((sum, item) => sum + item.points, 0)
  };
}

function getStatus(total, eligible, occupation) {
  if (!eligible) return ["Ineligible by age / 年龄不符合技术移民年龄要求", "Age issue", "red"];
  if (total < 65) return ["Below the minimum EOI threshold / 低于 65 分 EOI 最低门槛", "Below 65", "red"];
  if (total < occupation.targetMin) return ["Meets 65, but below this occupation reference range / 达到 65，但低于该职业参考竞争分", "Needs boost", "amber"];
  if (total <= occupation.targetMin + 9) return ["Around the reference range / 接近参考竞争区间", "Competitive", "blue"];
  return ["Above the reference floor, but still not guaranteed / 高于参考下限，但不保证获邀", "Strong", "green"];
}

function buildAdvice(total, occupation) {
  const items = [];
  if (total < 65) items.push("Reach 65 first / 先把总分提高到 65 分以上");
  if (profile.english !== "superior") items.push("Aim for Superior English / 优先冲刺 Superior English");
  if (profile.visaSubclass === "189") items.push("Compare 190 and 491 backups / 同时比较 190 州担保和 491 偏远地区路径");
  if (profile.australianWork === "0") items.push("Target 1 year Australian skilled work / 争取 1 年澳洲相关技术工作");
  if (profile.communityLanguage === "no") items.push("Consider NAATI/CCL community language / 考虑社区语言认证 +5");
  if (total < occupation.targetMin) items.push(`Reference gap: ${occupation.targetMin - total} points / 距参考下限还差 ${occupation.targetMin - total} 分`);
  return [...new Set(items)].slice(0, 5);
}

function buildBoostList(total, occupation) {
  if (total >= occupation.targetMin) {
    return [{ label: "Your score is already at or above the reference floor / 当前已达到或超过参考下限", points: 0 }];
  }

  const boosts = [];
  if (profile.english === "competent") boosts.push({ label: "English to Proficient / 英语提升到 Proficient", points: 10 });
  if (profile.english !== "superior") boosts.push({ label: "English to Superior / 英语提升到 Superior", points: profile.english === "competent" ? 20 : 10 });
  if (profile.visaSubclass === "189") boosts.push({ label: "Try 190 nomination / 尝试 190 州担保", points: 5 });
  if (profile.visaSubclass !== "491") boosts.push({ label: "Try 491 regional pathway / 尝试 491 偏远地区路径", points: profile.visaSubclass === "190" ? 10 : 15 });
  if (profile.regionalStudy === "no") boosts.push({ label: "Regional study / 偏远地区学习", points: 5 });
  if (profile.professionalYear === "no") boosts.push({ label: "Professional Year if eligible / 符合条件时完成职业年", points: 5 });
  if (profile.communityLanguage === "no") boosts.push({ label: "NAATI/CCL community language / 社区语言认证", points: 5 });
  if (profile.australianWork === "0") boosts.push({ label: "1 year Australian skilled work / 1 年澳洲技术工作", points: 5 });
  if (profile.specialistEducation === "no") boosts.push({ label: "Eligible STEM research degree / 符合条件的 STEM 研究型学历", points: 10 });

  return boosts.slice(0, 7);
}

function renderSources() {
  $("topSources").innerHTML = DATA.sources
    .slice(0, 4)
    .map((source) => `<a class="source-link" href="${source.url}" target="_blank" rel="noreferrer">${source.label}</a>`)
    .join("");

  $("allSources").innerHTML = DATA.sources
    .map((source) => `<a href="${source.url}" target="_blank" rel="noreferrer">${source.label}</a>`)
    .join("");
}

function selectOccupation(id, shouldScroll = false) {
  profile.occupationId = id;
  const occupation = DATA.occupations.find((item) => item.id === id);
  if (occupation) activeOccupationGroup = occupation.group;
  saveProfile();
  render();
  if (shouldScroll) document.getElementById("calculator").scrollIntoView({ behavior: "smooth" });
}

function renderOccupationSelect() {
  const groups = [...new Set(DATA.occupations.map((occupation) => occupation.group))];
  const filters = ["All", ...groups];
  const currentOccupation = getOccupation();
  if (activeOccupationGroup !== "All" && !groups.includes(activeOccupationGroup)) {
    activeOccupationGroup = currentOccupation?.group || "All";
  }

  $("occupationFilters").innerHTML = filters
    .map((group) => {
      const active = group === activeOccupationGroup;
      return `<button class="picker-filter ${active ? "is-active" : ""}" type="button" data-group="${group}" aria-pressed="${active}">${group}</button>`;
    })
    .join("");

  const visibleOccupations = DATA.occupations.filter((occupation) => activeOccupationGroup === "All" || occupation.group === activeOccupationGroup);
  $("occupationPicker").innerHTML = visibleOccupations
    .map((occupation) => {
      const active = occupation.id === profile.occupationId;
      return `
        <button class="occupation-option ${active ? "is-selected" : ""}" type="button" role="option" aria-selected="${active}" data-picker-occupation="${occupation.id}">
          <span class="occupation-option__top">
            <span>
              <strong>${occupation.title}</strong>
              <small>${occupation.titleZh}</small>
            </span>
            <em>${occupation.range}</em>
          </span>
          <span class="occupation-option__meta">
            <span>${occupation.anzsco}</span>
            <span>${occupation.authority}</span>
          </span>
        </button>
      `;
    })
    .join("");

  document.querySelectorAll("[data-group]").forEach((button) => {
    button.addEventListener("click", () => {
      activeOccupationGroup = button.dataset.group;
      renderOccupationSelect();
    });
  });

  document.querySelectorAll("[data-picker-occupation]").forEach((button) => {
    button.addEventListener("click", () => selectOccupation(button.dataset.pickerOccupation));
  });
}

function getEnglishDetail(value) {
  return DATA.englishDetails[value] || "";
}

function getChoiceModifier(categoryId) {
  return categoryId === "english" ? "choice-option--detail choice-option--wide" : "";
}

function renderForm() {
  $("profileForm").innerHTML = DATA.categories
    .map((category) => {
      const options = category.options
        .map((option) => {
          const active = profile[category.id] === option.value;
          const points = option.points === null ? "Ineligible" : `${option.points} pts`;
          return `
            <button
              class="choice-option ${getChoiceModifier(category.id)} ${active ? "is-selected" : ""}"
              type="button"
              data-choice-category="${category.id}"
              data-choice-value="${option.value}"
              aria-pressed="${active}"
            >
              <span>
                ${option.label}
                ${category.id === "english" ? `<small>${getEnglishDetail(option.value)}</small>` : ""}
              </span>
              <em>${points}</em>
            </button>
          `;
        })
        .join("");
      return `
        <fieldset class="choice-field ${category.id === "english" ? "choice-field--wide" : ""}" id="field-${category.id}">
          <legend>${category.label}</legend>
          <div class="choice-grid">${options}</div>
        </fieldset>
      `;
    })
    .join("");

  document.querySelectorAll("[data-choice-category]").forEach((button) => {
    button.addEventListener("click", () => {
      profile[button.dataset.choiceCategory] = button.dataset.choiceValue;
      if (button.dataset.choiceCategory === "education") {
        profile.studyStage = button.dataset.choiceValue === "master" ? "master" : "bachelor";
        if (button.dataset.choiceValue === "bachelor" || button.dataset.choiceValue === "master") profile.australianStudy = "yes";
      }
      saveProfile();
      render();
    });
  });
}

function renderBreakdown(breakdown) {
  const positive = breakdown.filter((item) => item.points > 0);
  $("breakdownChart").innerHTML = positive.length
    ? positive
    .map((item) => {
      const width = Math.min(100, (item.points / 30) * 100);
      return `
        <div class="bar-row">
          <span>${item.label.split(" / ")[0]}</span>
          <div class="bar-track"><div class="bar-fill" style="width:${width}%"></div></div>
          <strong>${item.points}</strong>
        </div>
      `;
    })
    .join("")
    : `<div class="empty-state">完成选择后会显示各项加分拆解。</div>`;
}

function renderVisaChart(ready = true) {
  if (!ready) {
    $("visaChart").innerHTML = `<div class="empty-state">完成选择后会显示 189 / 190 / 491 对比分数。</div>`;
    return;
  }

  $("visaChart").innerHTML = ["189", "190", "491"]
    .map((visa) => {
      const score = calculate({ ...profile, visaSubclass: visa }).total;
      const width = Math.min(100, (score / 110) * 100);
      return `
        <div class="bar-row">
          <span>Subclass ${visa}</span>
          <div class="bar-track"><div class="bar-fill" style="width:${width}%"></div></div>
          <strong>${score}</strong>
        </div>
      `;
    })
    .join("");
}

function renderOccupationRows() {
  const query = $("occupationSearch").value.trim().toLowerCase();
  const rows = DATA.occupations.filter((occupation) => {
    const haystack = `${occupation.group} ${occupation.title} ${occupation.titleZh} ${occupation.anzsco} ${occupation.relatedMajors} ${occupation.authority}`.toLowerCase();
    return haystack.includes(query);
  });

  $("occupationRows").innerHTML = rows
    .map(
      (occupation) => `
        <tr class="${occupation.id === profile.occupationId ? "selected-row" : ""}">
          <td>
            <button class="link-button" type="button" data-occupation="${occupation.id}">${occupation.title}</button>
            <span class="subtext">${occupation.titleZh}</span>
          </td>
          <td><strong>${occupation.anzsco}</strong></td>
          <td>${occupation.relatedMajors}</td>
          <td>${occupation.authority}</td>
          <td><div class="pathways">${occupation.pathways.map((pathway) => `<span>${pathway}</span>`).join("")}</div></td>
          <td><strong>${occupation.range}</strong><span class="subtext">${occupation.competitiveness}</span></td>
          <td>${occupation.risk}</td>
        </tr>
      `
    )
    .join("");

  document.querySelectorAll("[data-occupation]").forEach((button) => {
    button.addEventListener("click", () => selectOccupation(button.dataset.occupation, true));
  });
}

function renderRules() {
  $("ruleCards").innerHTML = DATA.rules
    .map(
      ([title, titleZh, detail]) => `
        <article class="info-card">
          <h3>${title}</h3>
          <strong>${titleZh}</strong>
          <p>${detail}</p>
        </article>
      `
    )
    .join("");

  $("visaCards").innerHTML = DATA.visas
    .map(
      ([id, title, titleZh, detail]) => `
        <article class="info-card">
          <span class="pill">${id}</span>
          <h3>${title}</h3>
          <strong>${titleZh}</strong>
          <p>${detail}</p>
        </article>
      `
    )
    .join("");
}

function renderBonusExplanations() {
  $("bonusExplanations").innerHTML = DATA.bonusDetails
    .map(
      (item) => `
        <article class="bonus-explain-card">
          <h4>${item.title}</h4>
          <p>${item.detail}</p>
        </article>
      `
    )
    .join("");
}

function getInsightForOccupation(occupationId) {
  return DATA.invitationInsights.find((item) => item.occupationId === occupationId);
}

function renderInvitationInsights() {
  $("roundRows").innerHTML = DATA.roundSummary
    .map(
      (round) => `
        <article class="round-card">
          <strong>${round.date}</strong>
          <div>
            <span>Total ${round.total}</span>
            <span>189 ${round.subclass189}</span>
            <span>491 ${round.subclass491}</span>
          </div>
          <p>${round.note}</p>
        </article>
      `
    )
    .join("");

  $("easeRanking").innerHTML = [...DATA.invitationInsights]
    .sort((a, b) => a.rank - b.rank)
    .map((item) => {
      const occupation = DATA.occupations.find((entry) => entry.id === item.occupationId);
      return `
        <button class="ranking-item" type="button" data-rank-occupation="${item.occupationId}">
          <span class="ranking-item__number">${item.rank}</span>
          <span>
            <strong>${occupation.title}</strong>
            <small>${occupation.titleZh}</small>
          </span>
          <em>${item.ease}</em>
        </button>
      `;
    })
    .join("");

  $("trendRows").innerHTML = DATA.invitationInsights
    .map((item) => {
      const occupation = DATA.occupations.find((entry) => entry.id === item.occupationId);
      return `
        <tr>
          <td>
            <button class="link-button" type="button" data-rank-occupation="${item.occupationId}">${occupation.title}</button>
            <span class="subtext">${occupation.titleZh}</span>
          </td>
          <td><strong>${item.latestScore}</strong></td>
          <td>${item.recentRange}</td>
          <td>${item.estInvites}</td>
          <td>${item.trend}</td>
          <td><strong>${item.ease}</strong></td>
        </tr>
      `;
    })
    .join("");

  $("caseCards").innerHTML = DATA.inviteCases
    .map(
      (item) => `
        <article class="case-card">
          <div class="case-card__top">
            <span class="pill">${item.pathway}</span>
            <strong>${item.score}</strong>
          </div>
          <h4>${item.title}</h4>
          <p>${item.profile}</p>
          <div>${item.result}</div>
        </article>
      `
    )
    .join("");

  document.querySelectorAll("[data-rank-occupation]").forEach((button) => {
    button.addEventListener("click", () => selectOccupation(button.dataset.rankOccupation, true));
  });
}

function renderPathwaySteps() {
  $("pathwaySteps").innerHTML = DATA.pathwaySteps
    .map(
      (pathway) => `
        <article class="pathway-card">
          <div class="pathway-card__head">
            <span class="pill">${pathway.id}</span>
            <div>
              <h3>${pathway.title}</h3>
              <strong>${pathway.titleZh}</strong>
            </div>
          </div>
          <ol>
            ${pathway.steps.map((step) => `<li>${step}</li>`).join("")}
          </ol>
        </article>
      `
    )
    .join("");
}

function syncPresetButtons() {
  const isMaster = profile.education === "master" || profile.studyStage === "master";
  const hasStudyStage = profile.studyStage === "bachelor" || profile.studyStage === "master";
  $("studyStageBadge").textContent = hasStudyStage ? (isMaster ? "硕士毕业" : "本科毕业") : "未选择";
  $("currentPreset").classList.toggle("is-active", hasStudyStage && !isMaster);
  $("futurePreset").classList.toggle("is-active", isMaster);
}

function render() {
  const occupation = getOccupation();
  const result = calculate();
  const ready = hasCompleteProfile();
  const [statusText, statusShort, tone] = ready
    ? getStatus(result.total, result.eligible, occupation)
    : ["Select a major and complete your profile / 请选择专业并填写自身情况", "Waiting", "neutral"];
  const gap = ready ? Math.max(0, occupation.targetMin - result.total) : "-";
  const statusClass = `status status--${tone}`;

  $("heroScore").textContent = ready ? result.total : "—";
  $("heroOccupation").textContent = occupation?.title || "-";
  $("heroReference").textContent = occupation?.range || "-";
  $("heroStatus").className = statusClass;
  $("heroStatus").textContent = statusText;

  $("occupationGroup").textContent = occupation?.group || "-";
  $("occupationAnzsco").textContent = occupation?.anzsco || "-";
  $("occupationAuthority").textContent = occupation?.authority || "-";
  $("occupationRange").textContent = occupation?.range || "-";
  $("occupationRisk").textContent = occupation?.risk || "请先选择一个专业/职业方向，页面会再显示对应 ANZSCO、评估机构和参考竞争分。";
  renderOccupationSelect();

  renderForm();

  document.querySelector(".score-card")?.classList.toggle("is-empty", !ready);
  document.querySelector(".result-panel")?.classList.toggle("is-empty", !ready);
  $("totalScore").textContent = ready ? result.total : "—";
  $("statusBadge").className = statusClass;
  $("statusBadge").textContent = statusShort;
  $("statusText").textContent = statusText;
  $("referenceScore").textContent = occupation?.range || "-";
  $("scoreGap").textContent = gap;
  $("scoreProgress").style.width = ready ? `${Math.min(100, (result.total / 110) * 100)}%` : "0%";
  $("adviceList").innerHTML = ready
    ? buildAdvice(result.total, occupation).map((item) => `<li>${item}</li>`).join("")
    : `<li class="empty-state">选择专业并完成选项后，这里会显示优先提分建议。</li>`;
  $("boostList").innerHTML = ready
    ? buildBoostList(result.total, occupation)
        .map((item) => `<div class="boost-item"><span>${item.label}</span><strong>${item.points > 0 ? `+${item.points}` : "OK"}</strong></div>`)
        .join("")
    : `<div class="boost-item boost-item--empty"><span>选择专业和个人情况后，系统会按参考竞争分给出加分方向。</span><strong>-</strong></div>`;

  syncPresetButtons();
  renderBreakdown(ready ? result.breakdown : []);
  renderVisaChart(ready);
  renderOccupationRows();
}

function bindEvents() {
  $("occupationSearch").addEventListener("input", renderOccupationRows);

  $("currentPreset").addEventListener("click", () => {
    profile = { ...DATA.defaultProfile, occupationId: profile.occupationId };
    saveProfile();
    render();
  });

  $("futurePreset").addEventListener("click", () => {
    profile = { ...DATA.futureProfile, occupationId: profile.occupationId };
    saveProfile();
    render();
  });
}

renderSources();
renderRules();
renderPathwaySteps();
renderBonusExplanations();
renderInvitationInsights();
bindEvents();
render();
