const translations = {
    id: {
        "nav-about": "About",
        "nav-experience": "Experience",
        "nav-portfolio": "Portfolio",
        "nav-education": "Education",
        "nav-skills": "Skills",
        "btn-contact": "Contact Me",
        
        "hero-badge": "• CAD/CAM ENGINEER",
        "hero-desc": "Spesialis dalam pemodelan 3D presisi, alur kerja manufaktur, dan sistem produksi otomatis. Menggabungkan ilmu komputer dengan teknik mesin.",
        "hero-stat1-label": "TAHUN<br>PENGALAMAN",
        "hero-stat2-label": "DESAIN TOOLING<br>& OUTSOLE",
        "hero-stat3-label": "MASTER<br>PROGRAMMER CNC",
        
        "core-status": "CORE STATUS",
        "status-online": "ONLINE",
        "avail-title": "Available for Work",
        "avail-desc": "Terbuka untuk proyek teknik & CNC",
        
        "btn-cv-id": "Download CV (ID)",
        "btn-cv-zh": "Download CV (ZH)",

        "about-title": "Tentang <span class=\"text-primary\">Saya</span>",
        "about-p1": "Saya merupakan lulusan Sarjana Komputer dari Universitas Sains dan Teknologi Komputer (2023) dengan latar belakang Teknik Pemesinan dari SMK. Saya memiliki kompetensi unggul di bidang <strong>CAD/CAM, pemodelan 3D, dan proses manufaktur tooling.</strong>",
        "about-p2": "Berpengalaman dalam pembuatan desain teknik menggunakan software CAD (Rhinoceros), inspeksi outsole, serta penyusunan program CAM untuk mesin 3D printing dan mesin CNC. Saya memiliki pemahaman mendalam tentang toleransi, kualitas produksi, dan alur proses manufaktur.",
        "about-p3": "Terbiasa bekerja dengan presisi, cepat belajar, dan siap berkontribusi dalam pengembangan sistem produksi berbasis teknologi CAD/CAM dan otomasi industri.",
        "about-stat1": "Tahun Pengalaman CNC & CAM",
        "about-stat2": "Ahli Desain Tooling & Outsole",

        "exp-title": "Pengalaman <span class=\"text-primary\">Profesional</span>",
        
        "exp1-date": "Februari 2025 - Sekarang",
        "exp1-role": "Bottom Tooling Staff",
        "exp1-desc1": "<strong>Desain dan Pemodelan Tooling 3D:</strong> Menggunakan software CAD (Rhinoceros) sesuai spesifikasi outsole dan standar manufaktur.",
        "exp1-desc2": "<strong>Inspeksi Teknis Outsole:</strong> Berdasarkan parameter dimensi, kontur, dan toleransi desain.",
        "exp1-desc3": "<strong>Program CAM:</strong> Menyusun program untuk proses 3D printing (slicing, toolpath, parameter mesin).",
        "exp1-desc4": "<strong>Simulasi & Verifikasi:</strong> Melakukan simulasi desain CAD untuk meminimalkan defect sebelum cetak.",
        "exp1-desc5": "<strong>Trial Printing & Optimasi:</strong> Evaluasi hasil cetak untuk mencapai kualitas tooling optimal.",
        "exp1-desc6": "<strong>Dokumentasi Data:</strong> Mengelola data CAD/CAM dan laporan hasil inspeksi.",

        "exp2-date": "November 2021 - Sekarang",
        "exp2-role": "CNC Programmer",
        "exp2-desc1": "<strong>Membuat Program CNC:</strong> Menyusun kode kontrol untuk memproduksi komponen sesuai keinginan.",
        "exp2-desc2": "<strong>Pengujian & Debugging:</strong> Memastikan program berfungsi baik dan melakukan debugging.",
        "exp2-desc3": "<strong>Pemrograman Lanjutan:</strong> Menyempurnakan program untuk efisiensi dan kualitas produk.",
        "exp2-desc4": "<strong>Pengaturan Mesin:</strong> Menyesuaikan kecepatan potong dan parameter pemotongan presisi.",
        "exp2-desc5": "<strong>Kolaborasi Tim:</strong> Bekerja dengan tim Molding Workshop untuk pemahaman spesifikasi produk.",
        "exp2-desc6": "<strong>Pemeliharaan Perangkat Lunak:</strong> Memelihara dan memperbarui software CNC.",

        "exp3-date": "Juli 2019 – November 2021",
        "exp3-role": "Molding Workshop",
        "exp3-desc1": "<strong>Pemantauan Proses:</strong> Memantau pencetakan untuk memastikan kualitas produk.",
        "exp3-desc2": "<strong>Perbaikan & Pemeliharaan:</strong> Memperbaiki komponen rusak, serta pemeliharaan rutin mesin pencetakan.",
        "exp3-desc3": "<strong>Pemeliharaan Overhaul:</strong> Menjaga kondisi mesin agar tetap baik saat digunakan.",

        "exp4-date": "Mei 2017 – Februari 2019",
        "exp4-role": "CNC Operator",
        "exp4-desc1": "<strong>Mempersiapkan & Memuat Program:</strong> Memeriksa mesin, memasang alat potong, memuat program CNC.",
        "exp4-desc2": "<strong>Mengawasi Produksi:</strong> Memantau kecepatan pemotongan dan kualitas permukaan.",
        "exp4-desc3": "<strong>Troubleshooting & Pemeliharaan:</strong> Mengidentifikasi masalah dan melakukan pemeliharaan rutin mesin.",
        "exp4-desc4": "<strong>Pemeriksaan Kualitas:</strong> Memastikan produk sesuai spesifikasi.",

        "port-title": "Proyek <span class=\"text-primary\">Unggulan</span>",
        "port1-title": "CNC Setup & Workholding",
        "port1-desc": "Setup presisi komponen metal silindris di mesin milling CNC menggunakan step clamps untuk pemesinan yang aman dan akurat.",
        "port2-title": "P20 Steel Mold Cavity",
        "port2-desc": "Cetakan rongga presisi tinggi yang dikerjakan dari baja perkakas P20, menampilkan pemesinan 3D kompleks, penyelarasan core/cavity, dan toleransi yang tepat.",
        "port3-title": "Active CNC Milling Process",
        "port3-desc": "Operasi pemesinan CNC real-time yang memamerkan toolpath yang dioptimalkan, penggilingan dinamis, dan aplikasi coolant yang efektif untuk hasil akhir permukaan yang superior.",
        "port-btn": "View Details",

        "edu-title": "Pendidikan & <span class=\"text-primary\">Latar Belakang</span>",
        "edu1-degree": "Teknik Informatika",
        "edu1-desc": "Memperoleh dasar yang kuat dalam pemrograman (Java, Python, C++), struktur data, algoritma, rekayasa perangkat lunak, dan jaringan komputer. Mengembangkan kecintaan terhadap inovasi teknologi.",
        "edu2-degree": "Teknik Pemesinan",
        "edu2-desc": "Pemahaman komprehensif tentang sistem mekanik, operasi mesin CNC, dan pemeliharaan. Menguasai interpretasi gambar teknis dan pengukuran presisi.",
        "edu2-award-title": "🏆 Prestasi CADD:",
        "edu2-award1": "<strong>Juara 1</strong> LKS CADD Kab. Magelang (2015)",
        "edu2-award2": "<strong>Juara Harapan 2</strong> LKS CADD Prov. Jawa Tengah (2016)",
        "edu2-award3": "<strong>Juara Harapan 2</strong> Mechanical Fair UGM CADD (2017)",

        "skill-title": "Keahlian <span class=\"text-primary\">Teknis</span>",
        "skill1-title": "Software & Tools",
        "skill2-title": "Mesin & Hardware",
        "skill3-title": "Soft Skill & Bahasa",

        "contact-title": "Hubungi <span class=\"text-primary\">Saya</span>",
        "contact-desc": "Tertarik untuk berkolaborasi atau membutuhkan Engineer CAD/CAM yang terampil? Mari diskusikan bagaimana saya dapat berkontribusi pada proyek Anda selanjutnya.",
        "contact-loc": "Semarang, Jawa Tengah, Indonesia",
        "footer-copy": "&copy; 2026 Muhamad Arif Setiawan. All rights reserved."
    },
    en: {
        "nav-about": "About",
        "nav-experience": "Experience",
        "nav-portfolio": "Portfolio",
        "nav-education": "Education",
        "nav-skills": "Skills",
        "btn-contact": "Contact Me",

        "hero-badge": "• CAD/CAM ENGINEER",
        "hero-desc": "Specializing in precision 3D modeling, manufacturing workflows, and automated production systems. Merging computer science with mechanical engineering.",
        "hero-stat1-label": "YEARS<br>EXPERIENCE",
        "hero-stat2-label": "TOOLING &<br>OUTSOLE",
        "hero-stat3-label": "MASTER<br>PROGRAMMER",
        
        "core-status": "CORE STATUS",
        "status-online": "ONLINE",
        "avail-title": "Available for Work",
        "avail-desc": "Open to engineering & CNC projects",

        "btn-cv-id": "Download CV (ID)",
        "btn-cv-zh": "Download CV (ZH)",

        "about-title": "About <span class=\"text-primary\">Me</span>",
        "about-p1": "I am a Computer Science graduate from Universitas Sains dan Teknologi Komputer (2023) with a background in Machining Engineering from vocational school. I have excellent competencies in <strong>CAD/CAM, 3D modeling, and tooling manufacturing processes.</strong>",
        "about-p2": "Experienced in technical design using CAD software (Rhinoceros), outsole inspection, and CAM programming for 3D printing and CNC machines. I have a deep understanding of tolerances, production quality, and manufacturing workflows.",
        "about-p3": "Accustomed to working with precision, a fast learner, and ready to contribute to the development of production systems based on CAD/CAM technology and industrial automation.",
        "about-stat1": "Years CNC & CAM Experience",
        "about-stat2": "Tooling & Outsole Design Expert",

        "exp-title": "Professional <span class=\"text-primary\">Experience</span>",
        
        "exp1-date": "February 2025 - Present",
        "exp1-role": "Bottom Tooling Staff",
        "exp1-desc1": "<strong>3D Tooling Design and Modeling:</strong> Using CAD software (Rhinoceros) according to outsole specifications and manufacturing standards.",
        "exp1-desc2": "<strong>Outsole Technical Inspection:</strong> Based on dimensional parameters, contours, and design tolerances.",
        "exp1-desc3": "<strong>CAM Programming:</strong> Compiling programs for the 3D printing process (slicing, toolpaths, machine parameters).",
        "exp1-desc4": "<strong>Simulation & Verification:</strong> Conducting CAD design simulations to minimize defects before printing.",
        "exp1-desc5": "<strong>Trial Printing & Optimization:</strong> Evaluating printing results to achieve optimal tooling quality.",
        "exp1-desc6": "<strong>Data Documentation:</strong> Managing CAD/CAM data and inspection reports.",

        "exp2-date": "November 2021 - Present",
        "exp2-role": "CNC Programmer",
        "exp2-desc1": "<strong>CNC Programming:</strong> Writing control codes to produce components according to specifications.",
        "exp2-desc2": "<strong>Testing & Debugging:</strong> Ensuring programs work properly and troubleshooting issues.",
        "exp2-desc3": "<strong>Advanced Programming:</strong> Refining programs for product efficiency and quality.",
        "exp2-desc4": "<strong>Machine Setup:</strong> Adjusting cutting speeds and precision cutting parameters.",
        "exp2-desc5": "<strong>Team Collaboration:</strong> Working with the Molding Workshop team to understand product specifications.",
        "exp2-desc6": "<strong>Software Maintenance:</strong> Maintaining and updating CNC software.",

        "exp3-date": "July 2019 – November 2021",
        "exp3-role": "Molding Workshop",
        "exp3-desc1": "<strong>Process Monitoring:</strong> Monitoring the molding process to ensure product quality.",
        "exp3-desc2": "<strong>Repair & Maintenance:</strong> Repairing broken components and performing routine maintenance on molding machines.",
        "exp3-desc3": "<strong>Overhaul Maintenance:</strong> Keeping machines in good condition during operation.",

        "exp4-date": "May 2017 – February 2019",
        "exp4-role": "CNC Operator",
        "exp4-desc1": "<strong>Setup & Program Loading:</strong> Inspecting machines, installing cutting tools, and loading CNC programs.",
        "exp4-desc2": "<strong>Production Monitoring:</strong> Monitoring cutting speeds and surface quality.",
        "exp4-desc3": "<strong>Troubleshooting & Maintenance:</strong> Identifying problems and performing routine machine maintenance.",
        "exp4-desc4": "<strong>Quality Control:</strong> Ensuring products meet specifications.",

        "port-title": "Featured <span class=\"text-primary\">Projects</span>",
        "port1-title": "CNC Setup & Workholding",
        "port1-desc": "Precision setup of cylindrical metal components on a CNC milling machine using step clamps for secure and accurate machining.",
        "port2-title": "P20 Steel Mold Cavity",
        "port2-desc": "High-precision mold cavity machined from P20 tool steel, featuring complex 3D surfacing, core/cavity alignment, and precise tolerances.",
        "port3-title": "Active CNC Milling Process",
        "port3-desc": "Real-time CNC machining operation showcasing optimized toolpaths, dynamic milling, and effective coolant application for superior surface finishes.",
        "port-btn": "View Details",

        "edu-title": "Education & <span class=\"text-primary\">Background</span>",
        "edu1-degree": "Computer Science",
        "edu1-desc": "Acquired a strong foundation in programming (Java, Python, C++), data structures, algorithms, software engineering, and computer networks. Developed a passion for technological innovation.",
        "edu2-degree": "Machining Engineering",
        "edu2-desc": "Comprehensive understanding of mechanical systems, CNC machine operations, and maintenance. Mastered technical drawing interpretation and precision measurements.",
        "edu2-award-title": "🏆 CADD Achievements:",
        "edu2-award1": "<strong>1st Place</strong> LKS CADD Magelang Regency (2015)",
        "edu2-award2": "<strong>Runner Up 2</strong> LKS CADD Central Java Province (2016)",
        "edu2-award3": "<strong>Runner Up 2</strong> Mechanical Fair UGM CADD (2017)",

        "skill-title": "Technical <span class=\"text-primary\">Expertise</span>",
        "skill1-title": "Software & Tools",
        "skill2-title": "Engineering & Hardware",
        "skill3-title": "Soft Skills & Languages",

        "contact-title": "Get in <span class=\"text-primary\">Touch</span>",
        "contact-desc": "Interested in collaborating or need a skilled CAD/CAM Engineer? Let's discuss how I can contribute to your next project.",
        "contact-loc": "Semarang, Central Java, Indonesia",
        "footer-copy": "&copy; 2026 Muhamad Arif Setiawan. All rights reserved."
    },
    zh: {
        "nav-about": "关于我",
        "nav-experience": "工作经验",
        "nav-portfolio": "作品集",
        "nav-education": "教育背景",
        "nav-skills": "专业技能",
        "btn-contact": "联系我",

        "hero-badge": "• CAD/CAM 工程师",
        "hero-desc": "专注于精密3D建模、制造流程和自动化生产系统。将计算机科学与机械工程完美结合。",
        "hero-stat1-label": "年<br>工作经验",
        "hero-stat2-label": "模具与<br>外底设计",
        "hero-stat3-label": "CNC<br>高级编程",
        
        "core-status": "核心状态",
        "status-online": "在线",
        "avail-title": "可接受工作",
        "avail-desc": "接受工程与CNC项目",

        "btn-cv-id": "下载简历 (ID)",
        "btn-cv-zh": "下载简历 (ZH)",

        "about-title": "关于 <span class=\"text-primary\">我</span>",
        "about-p1": "我是科技大学计算机科学专业的毕业生（2023年），拥有职业学校机械加工工程背景。在<strong>CAD/CAM、3D建模和模具制造过程</strong>方面具备出色的能力。",
        "about-p2": "拥有使用CAD软件（Rhinoceros）进行技术设计、外底检测以及3D打印和CNC机器CAM编程的丰富经验。对公差、生产质量和制造流程有深入了解。",
        "about-p3": "习惯于高精度工作，学习能力强，准备好为基于CAD/CAM技术和工业自动化的生产系统发展做出贡献。",
        "about-stat1": "年 CNC & CAM 经验",
        "about-stat2": "模具与外底设计专家",

        "exp-title": "专业 <span class=\"text-primary\">经验</span>",
        
        "exp1-date": "2025年2月 - 至今",
        "exp1-role": "底部模具专员",
        "exp1-desc1": "<strong>3D模具设计与建模：</strong> 根据外底规格和制造标准使用CAD软件（Rhinoceros）。",
        "exp1-desc2": "<strong>外底技术检测：</strong> 基于尺寸参数、轮廓和设计公差。",
        "exp1-desc3": "<strong>CAM 编程：</strong> 为3D打印过程编写程序（切片、刀具路径、机器参数）。",
        "exp1-desc4": "<strong>模拟与验证：</strong> 进行CAD设计模拟以在打印前最小化缺陷。",
        "exp1-desc5": "<strong>试印与优化：</strong> 评估打印结果以达到最佳模具质量。",
        "exp1-desc6": "<strong>数据文档：</strong> 管理CAD/CAM数据和检测报告。",

        "exp2-date": "2021年11月 - 至今",
        "exp2-role": "CNC 程序员",
        "exp2-desc1": "<strong>CNC 编程：</strong> 编写控制代码以根据规格生产组件。",
        "exp2-desc2": "<strong>测试与调试：</strong> 确保程序正常运行并排除故障。",
        "exp2-desc3": "<strong>高级编程：</strong> 优化程序以提高产品效率和质量。",
        "exp2-desc4": "<strong>机器设置：</strong> 调整切割速度和精密加工参数。",
        "exp2-desc5": "<strong>团队合作：</strong> 与模具车间团队合作了解产品规格。",
        "exp2-desc6": "<strong>软件维护：</strong> 维护和更新CNC软件。",

        "exp3-date": "2019年7月 – 2021年11月",
        "exp3-role": "模具车间",
        "exp3-desc1": "<strong>过程监控：</strong> 监控成型过程以确保产品质量。",
        "exp3-desc2": "<strong>维修与维护：</strong> 修理损坏部件并对成型机进行日常维护。",
        "exp3-desc3": "<strong>大修维护：</strong> 保持机器在运行期间的良好状态。",

        "exp4-date": "2017年5月 – 2019年2月",
        "exp4-role": "CNC 操作员",
        "exp4-desc1": "<strong>设置与程序加载：</strong> 检查机器，安装刀具，加载CNC程序。",
        "exp4-desc2": "<strong>生产监控：</strong> 监控切割速度和表面质量。",
        "exp4-desc3": "<strong>故障排除与维护：</strong> 识别问题并进行日常机器维护。",
        "exp4-desc4": "<strong>质量控制：</strong> 确保产品符合规格。",

        "port-title": "精选 <span class=\"text-primary\">项目</span>",
        "port1-title": "CNC 设置与工装",
        "port1-desc": "在CNC铣床上使用阶梯压板精确设置圆柱形金属组件，以实现安全准确的加工。",
        "port2-title": "P20 钢模腔",
        "port2-desc": "由P20工具钢加工而成的高精度模腔，具有复杂的3D曲面、型芯/型腔对齐和精确公差。",
        "port3-title": "主动 CNC 铣削过程",
        "port3-desc": "实时CNC加工操作，展示了优化的刀具路径、动态铣削和有效的冷却液应用，以获得卓越的表面光洁度。",
        "port-btn": "查看详情",

        "edu-title": "教育 & <span class=\"text-primary\">背景</span>",
        "edu1-degree": "计算机科学",
        "edu1-desc": "在编程（Java、Python、C++）、数据结构、算法、软件工程和计算机网络方面打下了坚实基础。培养了对技术创新的热情。",
        "edu2-degree": "机械加工工程",
        "edu2-desc": "全面了解机械系统、CNC机器操作和维护。精通技术图纸解释和精密测量。",
        "edu2-award-title": "🏆 CADD 奖项:",
        "edu2-award1": "<strong>冠军</strong> 马格朗县 LKS CADD (2015)",
        "edu2-award2": "<strong>季军</strong> 中爪哇省 LKS CADD (2016)",
        "edu2-award3": "<strong>季军</strong> 机械工程展 UGM CADD (2017)",

        "skill-title": "技术 <span class=\"text-primary\">专长</span>",
        "skill1-title": "软件与工具",
        "skill2-title": "工程与硬件",
        "skill3-title": "软技能与语言",

        "contact-title": "联系 <span class=\"text-primary\">我</span>",
        "contact-desc": "有兴趣合作或需要熟练的CAD/CAM工程师？让我们讨论如何为您的下一个项目做出贡献。",
        "contact-loc": "印度尼西亚中爪哇三宝垄",
        "footer-copy": "&copy; 2026 Muhamad Arif Setiawan。保留所有权利。"
    },
    ko: {
        "nav-about": "소개",
        "nav-experience": "경력",
        "nav-portfolio": "포트폴리오",
        "nav-education": "학력",
        "nav-skills": "보유 기술",
        "btn-contact": "연락하기",

        "hero-badge": "• CAD/CAM 엔지니어",
        "hero-desc": "정밀 3D 모델링, 제조 워크플로우 및 자동화 생산 시스템 전문. 컴퓨터 공학과 기계 공학의 융합.",
        "hero-stat1-label": "년<br>경력",
        "hero-stat2-label": "툴링 및<br>아웃솔",
        "hero-stat3-label": "마스터<br>프로그래머",
        
        "core-status": "핵심 상태",
        "status-online": "온라인",
        "avail-title": "근무 가능",
        "avail-desc": "엔지니어링 및 CNC 프로젝트 수락 가능",

        "btn-cv-id": "이력서 다운로드 (ID)",
        "btn-cv-zh": "이력서 다운로드 (ZH)",

        "about-title": "나에 <span class=\"text-primary\">대하여</span>",
        "about-p1": "저는 직업 학교에서 기계 가공 공학을 전공하고 과학 기술 대학교(2023)에서 컴퓨터 과학 학위를 받았습니다. <strong>CAD/CAM, 3D 모델링 및 툴링 제조 공정</strong>에서 뛰어난 역량을 갖추고 있습니다.",
        "about-p2": "CAD 소프트웨어(Rhinoceros)를 사용한 기술 설계, 아웃솔 검사, 3D 프린팅 및 CNC 머신용 CAM 프로그래밍 경험이 풍부합니다. 공차, 생산 품질 및 제조 워크플로우에 대한 깊은 이해를 보유하고 있습니다.",
        "about-p3": "정밀한 작업에 익숙하고 학습이 빠르며 CAD/CAM 기술 및 산업 자동화를 기반으로 한 생산 시스템 개발에 기여할 준비가 되어 있습니다.",
        "about-stat1": "년 CNC & CAM 경력",
        "about-stat2": "툴링 및 아웃솔 설계 전문가",

        "exp-title": "전문 <span class=\"text-primary\">경력</span>",
        
        "exp1-date": "2025년 2월 - 현재",
        "exp1-role": "바텀 툴링 스태프",
        "exp1-desc1": "<strong>3D 툴링 설계 및 모델링:</strong> 아웃솔 사양 및 제조 표준에 따라 CAD 소프트웨어(Rhinoceros) 사용.",
        "exp1-desc2": "<strong>아웃솔 기술 검사:</strong> 치수 매개변수, 윤곽 및 설계 공차 기반.",
        "exp1-desc3": "<strong>CAM 프로그래밍:</strong> 3D 프린팅 공정(슬라이싱, 툴패스, 기계 매개변수)용 프로그램 컴파일.",
        "exp1-desc4": "<strong>시뮬레이션 및 검증:</strong> 인쇄 전 결함을 최소화하기 위해 CAD 설계 시뮬레이션 수행.",
        "exp1-desc5": "<strong>시험 인쇄 및 최적화:</strong> 인쇄 결과를 평가하여 최적의 툴링 품질 달성.",
        "exp1-desc6": "<strong>데이터 문서화:</strong> CAD/CAM 데이터 및 검사 보고서 관리.",

        "exp2-date": "2021년 11월 - 현재",
        "exp2-role": "CNC 프로그래머",
        "exp2-desc1": "<strong>CNC 프로그래밍:</strong> 사양에 따라 구성 요소를 생산하기 위한 제어 코드 작성.",
        "exp2-desc2": "<strong>테스트 및 디버깅:</strong> 프로그램이 제대로 작동하는지 확인하고 문제 해결.",
        "exp2-desc3": "<strong>고급 프로그래밍:</strong> 제품 효율성 및 품질 향상을 위한 프로그램 최적화.",
        "exp2-desc4": "<strong>기계 설정:</strong> 절단 속도 및 정밀 절단 매개변수 조정.",
        "exp2-desc5": "<strong>팀 협업:</strong> 성형 워크샵 팀과 협력하여 제품 사양 이해.",
        "exp2-desc6": "<strong>소프트웨어 유지 관리:</strong> CNC 소프트웨어 유지 및 업데이트.",

        "exp3-date": "2019년 7월 – 2021년 11월",
        "exp3-role": "성형 워크샵",
        "exp3-desc1": "<strong>공정 모니터링:</strong> 제품 품질 보장을 위해 성형 공정 모니터링.",
        "exp3-desc2": "<strong>수리 및 유지 보수:</strong> 파손된 부품 수리 및 성형 기계 정기 유지 보수 수행.",
        "exp3-desc3": "<strong>오버홀 유지 관리:</strong> 작동 중 기계를 양호한 상태로 유지.",

        "exp4-date": "2017년 5월 – 2019년 2월",
        "exp4-role": "CNC 작업자",
        "exp4-desc1": "<strong>설정 및 프로그램 로드:</strong> 기계 점검, 절단 도구 설치 및 CNC 프로그램 로드.",
        "exp4-desc2": "<strong>생산 모니터링:</strong> 절단 속도 및 표면 품질 모니터링.",
        "exp4-desc3": "<strong>문제 해결 및 유지 보수:</strong> 문제를 식별하고 정기적인 기계 유지 보수 수행.",
        "exp4-desc4": "<strong>품질 관리:</strong> 제품이 사양을 충족하는지 확인.",

        "port-title": "주요 <span class=\"text-primary\">프로젝트</span>",
        "port1-title": "CNC 설정 및 워크홀딩",
        "port1-desc": "안전하고 정확한 가공을 위해 스텝 클램프를 사용하여 CNC 밀링 머신에서 원통형 금속 구성 요소의 정밀 설정.",
        "port2-title": "P20 강철 금형 캐비티",
        "port2-desc": "복잡한 3D 표면 처리, 코어/캐비티 정렬 및 정밀 공차를 특징으로 하는 P20 공구강으로 가공된 고정밀 금형 캐비티.",
        "port3-title": "활성 CNC 밀링 프로세스",
        "port3-desc": "최적화된 툴패스, 동적 밀링 및 우수한 표면 조도를 위한 효과적인 냉각수 적용을 보여주는 실시간 CNC 가공 작업.",
        "port-btn": "자세히 보기",

        "edu-title": "학력 및 <span class=\"text-primary\">배경</span>",
        "edu1-degree": "컴퓨터 과학",
        "edu1-desc": "프로그래밍(Java, Python, C++), 데이터 구조, 알고리즘, 소프트웨어 엔지니어링 및 컴퓨터 네트워크에 대한 강력한 기반을 확보했습니다. 기술 혁신에 대한 열정을 키웠습니다.",
        "edu2-degree": "기계 가공 공학",
        "edu2-desc": "기계 시스템, CNC 기계 작동 및 유지 관리에 대한 포괄적인 이해. 기술 도면 해석 및 정밀 측정 숙달.",
        "edu2-award-title": "🏆 CADD 수상 내역:",
        "edu2-award1": "<strong>1위</strong> LKS CADD 마겔랑 리젠시 (2015)",
        "edu2-award2": "<strong>3위</strong> LKS CADD 중부 자바 주 (2016)",
        "edu2-award3": "<strong>3위</strong> 기계 공학 박람회 UGM CADD (2017)",

        "skill-title": "기술 <span class=\"text-primary\">전문 지식</span>",
        "skill1-title": "소프트웨어 및 도구",
        "skill2-title": "엔지니어링 및 하드웨어",
        "skill3-title": "소프트 스킬 및 언어",

        "contact-title": "<span class=\"text-primary\">연락</span>하기",
        "contact-desc": "협업에 관심이 있거나 숙련된 CAD/CAM 엔지니어가 필요하십니까? 다음 프로젝트에 제가 어떻게 기여할 수 있는지 논의해 봅시다.",
        "contact-loc": "인도네시아 중부 자바 스마랑",
        "footer-copy": "&copy; 2026 Muhamad Arif Setiawan. 모든 권리 보유."
    }
};

// Language Swicher Logic
function setLanguage(lang) {
    localStorage.setItem('cv_lang', lang);
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Update active button state
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if(btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
}

// Initialize language on load
document.addEventListener('DOMContentLoaded', () => {
    // Check local storage or default to ID since CV was mostly ID originally
    const savedLang = localStorage.getItem('cv_lang') || 'id'; 
    setLanguage(savedLang);

    // Bind click events to language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = e.currentTarget.getAttribute('data-lang');
            setLanguage(lang);
        });
    });
});
