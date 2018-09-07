var app = angular.module("myApp", ["ngRoute"]);

app.controller("myCtrl", function ($scope) {

    $scope.rotation = ["AC", "GP", "MH", "OG", "CAH"];

    //     AC

    //          AC Core Conditions

    $scope.acconditions = [
        {
            name: 'Falls',
            description: '3% of all >65yo patient IP stays are due to falls; 30% of ≥65yo and 50% of ≥80yo have had a fall in the previous year.',
            hx: 'Where / when / why, injury sustained, Hx of falls -frequency in past 12m, gait and balance disorders, sensory impairment, MSK issues, CVS, Rx',
            ex: 'Relevant neuro; falls testing: TUG + Romberg\'s + functional reach + sternal push, heel-to-toe; CV',
            ix: 'X-ray if ?#, urine MCS if confused, CTB / MRI if headstrike',
            mx: 'Rehabilitation programme w/ OT input, remediation of RFs'
    },
        {
            name: 'Cardiac failure',
            description: 'The decline of the heart, precipitated and exacerbated by injury.',
            hx: 'SOBOE, angina, swelling',
            ex: 'Vitals, cardiac examination - JVP, lung crackles, peripheral oedema, thready pulse',
            ix: 'FBE + UEC + BNP',
            mx: 'Optimisation of fluid balance (diuretics vs. fluid restriction), cardiac Rx (ACEi + cardioselective β-blocker + CaCB)'
    },
        {
            name: 'Faecal incontinence',
            description: 'Serious psychological sequelae.',
            hx: 'Investigate cause',
            ex: 'LL neurological exam',
            ix: 'NCS + fecal MCS',
            mx: '?'
    },
        {
            name: 'Dementia',
            description: 'From 10% of people ≥65, to 30% of those ≥85.',
            hx: 'From pt: how has your memory been over the past year?',
            ex: 'Gait + balance + CN',
            ix: 'MSU',
            mx: ''
    },
        {
            name: 'Elder abuse',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Constipation',
            description: 'A regular comorbidity; coloxyl & senna are ubiquitous on GEM.',
            hx: 'Ax severity - blood, pain, regularity',
            ex: 'DRE',
            ix: 'AXR',
            mx: 'Stool softener & stimulant laxative, rationalisation of Rx'
    },
        {
            name: 'Depression',
            description: 'Consider how it presents differently in older people.',
            hx: 'Somatic Sx - pain, fatigue + mood disturbance - irritability, anxiety',
            ex: 'MSE, cognitive testing',
            ix: '',
            mx: 'SSRIs, psychotherapy'
    },
        {
            name: 'Pneumonia',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Bowel cancer',
            description: 'The 5th most common cause of death in those aged 45-74.',
            hx: 'Anaemia Sx, blood in stool, malignancy screen',
            ex: 'GI exam, DRE',
            ix: 'CT, PET',
            mx: 'CTx, RTx, surgery, palliative care'
    },
        {
            name: 'Fractured NOH',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Parkinsons',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Functional decline',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Polypharmacy',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Frailty',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Vascular dementia',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Delirium',
            description: 'The pathophys is still poorly understood, and the Dx is still often missed.',
            hx: 'Determine presence of predisposing (sensory impairment + dehydration + old age + depression + dementia) and precipitating (Rx change / polyRx / change of environment e.g. hospital admx / constipation / ) factors.',
            ex: 'CAM - acute onset & fluctuating course, disorganised speech and/or behaviour, inattention, altered conscious state; other cognitive testing (SMMSE, RUDAS, MOCA)',
            ix: 'Urine MCS, FBE + UEC + CRP',
            mx: 'Remove trigger, halo'
    },
];


    $scope.showAcConditions = function (x) {
        $scope.info = $scope.acconditions[x].description;
        $scope.hx = $scope.acconditions[x].hx;
        $scope.ex = $scope.acconditions[x].ex;
        $scope.ix = $scope.acconditions[x].ix;
        $scope.mx = $scope.acconditions[x].mx;
    };


    //          AC OSCEs

    $scope.acosce = [
        {
            name: 'Confirmation of death',
            description: 'You have been notified by a ward nurse that Mohammed, 81, has died. Please confirm his death.',
            structure: 'Check resusc status, if family present offer condolences and explain procedure; wash hands, confirm pt identity, general inspection, ?respiratory distress, verbal stimulus, pain, pupils, pulse (carotid), auscultate heart for ≥2mins, lungs ≥3mins; documentation',
            mnemonic: 'DVPPP - Distress Verbal Pain Pupils Pulse',
            questions: 'What are three reasons for which you would refer this case to the coroner?'
    },
        {
            name: 'Carer distress',
            description: 'Thi\'s father burnt his forearm on a frying pan last night, while wandering around the house. She is in significant distress following this incident.',
            structure: 'Calm, educate, Mx - supports include dementia.org.au, Dementia Australia, which has a national dementia helpline, DBMAS, local carer support groups',
            mnemonic: '',
            questions: ''
    },
        {
            name: 'Patient w/ lower limb neoplastic skin lesion',
            description: '',
            structure: '',
            mnemonic: '',
            questions: ''
    },
        {
            name: 'Having trouble sleeping',
            description: '',
            structure: '',
            mnemonic: '',
            questions: ''
    },
        {
            name: 'Rushing to the toilet',
            description: '',
            structure: '',
            mnemonic: '',
            questions: ''
    },
        {
            name: 'Patient nearing death',
            description: 'Kelechi, 91, has terminal pancreatic cancer. He is hoping to discuss issues related to death.',
            structure: 'EPOA - who can do it, what does it mean, who needs a copy, what decisions can be made',
            mnemonic: '',
            questions: ''
    },
        {
            name: 'Post stroke rehabilitation',
            description: 'Jerry, 83, has had a right MCA stroke last week. Take a short Hx and deliver an appropriate Mx plan',
            structure: 'Neuro Ax, ADLs, mobility, candidate for ASAP rehab, then AH and Rx',
            mnemonic: 'OPQRS - OT + PT, Psych + QOL + Return to ___ + ST, SW',
            questions: ''
    },
        {
            name: 'Worried about falling',
            description: 'Helen, 92, had a fall last week. She sustained no serious injuries but now refuses to leave her house, for fear of falling again. Take a Hx and counsel her on Mx options.',
            structure: '1. Hx of fall & PHx of falls 2. Establish presence of RFs 3. Educate regarding fear and risk of falling 4. Mx includes PT',
            mnemonic: 'OPQR',
            questions: 'What is the most likely cause of Helen\'s fall?; What are two intrinsic and extrinsic RFs for falls in general?'
    },
        {
            name: 'Multiple sclerosis',
            description: 'Myrtle, 52, has had MS for the last 14 years. Take a Hx of her illness and discuss Mx options.',
            structure: 'Neuro Sx -weakness (gait) -paraesthesia -vision (INO, RAPD) -bowel & bladder; Mx -Methyldpred for acute relapse -Mabs for for prevention -Pregab / TSAs / ISC for Sx relief',
            mnemonic: 'Vision gait doses for multiple sclerosis',
            questions: 'What is the most likely anatomical location of the demyelinating plaque that would cause these symptoms?; What does the presence of oligoclonal bands indicate?; What other conditions can result in generalized white matter disease evident on the MRI? '
    },
        {
            name: 'Differentiating delirium from BPSD',
            description: 'Jenny is a nurse on your ward. She is concerned about the behaviour of one of her patients. Counsel her.',
            structure: '',
            mnemonic: '',
            questions: ''
    },
        {
            name: 'Falls examination',
            description: '',
            structure: '',
            mnemonic: '',
            questions: ''
    },
        {
            name: 'In tremendous pain',
            description: '',
            structure: '',
            mnemonic: '',
            questions: ''
    },
        {
            name: 'Differentiating dementia from delirium',
            description: '',
            structure: '',
            mnemonic: '',
            questions: ''
    },

];


    $scope.showAcOsces = function (x) {
        $scope.osceinfo = $scope.acosce[x].description;
        $scope.structure = $scope.acosce[x].structure;
        $scope.mnemonic = $scope.acosce[x].mnemonic;
        $scope.questions = $scope.acosce[x].questions;
    };



    //     GP

    //          GP Core Conditions

    $scope.gpconditions = [
         {
            name: 'COPD',
            description: 'Irreversible small airway destruction -> obstruction of airflow',
            hx: 'Assess severity (Rx, admx, QOL) + smoking',
            ex: 'Barrel chest + crackles + tobacco stains',
            ix: 'Spirometry',
            mx: 'Short - ↑SABA intake + oral Abx + CS'
        }, {
            name: 'T2DM',
            description: 'Decreased insulin sensitivity leads to poor BGL control',
            hx: 'AUSDRISK, hyperglycaemic episodes, FHx',
            ex: 'Heart + carotids + sensation + proprioception',
            ix: 'FBE + HbA1c + FBG',
            mx: 'Lifestyle +/- metformin +/- SUs +/- exenatide for weight loss +/- insulin (basal or bolus)'
        }, {
            name: 'Rhinosinusitis (Acute)',
            description: 'Only 1% is bacterial',
            hx: 'Re-sickening / ++severity at onset / >10d duration',
            ex: 'Fever, purulent nasal d/c',
            ix: 'None',
            mx: 'Supportive therapy, + Abx if Hx as above'
        }, {
            name: 'Tonsillitis (Tonsillopharyngitis)',
            description: '~30% CARviruses, ~10% GAS (higher in children)',
            hx: 'Oral intake + N/V + ?viral Sx (absence supports Dx) + exposure',
            ex: 'Exudative, enlarged, erythematous tonsils',
            ix: 'Rapid antigen detection test (strep throat swab)',
            mx: 'Mainstay is Abx (if viral ruled out)',
        }, {
            name: 'Hypertension',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
        }, {
            name: 'Skin Cancer',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
        }, {
            name: 'Atrial Fibrillation',
            description: 'Cooked circuitry leads to rapid atrial contraction and subsequent ventricular arrhythmia',
            hx: 'Palpitations + SOB + fatigue + angina + fainting + dizziness',
            ex: 'HR irregularly irregular',
            ix: 'ECG',
            mx: 'Rate control for older pts w/ persistent, rhythm control for younger w/ sporadic. Thrombi forms in poorly clearing atria so NOAC if ≥2pts on CHADSVASc'
        }, {
            name: 'Eczema',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
        }, {
            name: 'Dyslipidaemia',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
        }, {
            name: 'Rheumatoid Arthritis',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
        }, {
            name: 'Valvular Heart Disease',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
        }, {
            name: 'Osteoarthritis',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
        }, {
            name: 'Asthma',
            description: 'Reversible airway obstruction with long-term remodelling',
            hx: 'Assess severity (Rx, admx, QOL) + triggers + current Mx',
            ex: 'Expiratory wheeze',
            ix: 'Spirometry pre- and post-bronchodilator',
            mx: 'SABA -> LAMA -> ICS -> oral CS'
        }, {
            name: 'CKD',
            description: 'Lose 1/2 kidney function before change is seen on eGFR',
            hx: 'HTN + DM + ATSI',
            ex: 'Diabetic exam',
            ix: 'FBE + UEC + CMP +/- CTKUB if structural cause suspected',
            mx: 'ACEi + diuretic + fluid restriction + control causes'
        }, {
            name: 'Acne',
            description: 'Infection of facial sebaceous glands, usually w/ Proprionibacterium.',
            hx: 'Severity (QOL), duration',
            ex: 'Skin check',
            ix: 'Clinical Dx',
            mx: 'Mild -BPO / salicylic acid; Moderate -Topical retinoids +/- topical/oral Abx +/- hormonal Rx in females; Severe -Isotretinoin'
        }, {
            name: 'Chest Pain',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
        }, {
            name: 'Back Pain',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
        }, {
            name: 'Stroke',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
        }, {
            name: 'T1DM',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
        }, {
            name: 'Non-specific Headache',
            description: 'What are the red flags?',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
        }, {
            name: 'Hypothyroidism',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
        }, {
            name: 'IBS',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
        }, {
            name: 'Meningitis',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
        }, {
            name: 'Coeliac',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
        }, {
            name: 'Weight Loss',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
        }, {
            name: 'GORD',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
        }, {
            name: 'Migraine',
            description: 'These days, migraine is thought to be primarily a neurogenic process with 2º changes in cerebral blood flow.',
            hx: 'Sx + aura + triggers ',
            ex: 'Neuro + CVS',
            ix: 'Clinical Dx, however: -if considering GCA, ESR + CRP',
            mx: 'Acute: NSAIDs, paracetamol, sumatriptan; Preventive: β-blockers, anticonvulsants TCAs'
        }, {
            name: 'Fatty Liver',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
        }, {
            name: 'Hyperthyroidism',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
        }, {
            name: 'Tension Headache',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
        }, {
            name: 'Polymyalgia Rheumatica',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
        }, {
            name: 'Osteoporosis',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
        }, {
            name: 'Red Eye',
            description: 'Conjunctivitis / dry eyes / foreign body... the list is long, and is usually limited to PC treatment.',
            hx: 'Ax severity',
            ex: 'Eye inspection -?distorted pupil -?corneal involvement -?copious d/c; vision testing',
            ix: 'Conjunctival scraping & culture if severe bacterial conjunctivitis suspected',
            mx: 'Hard to differentiate b/w viral and bacterial:: most cases treated w/ Abx; R/f when severe pain not relieved w/ topical anaesthetics'
        }, {
            name: 'Prostate Cancer',
            description: 'Include a thorough understanding of screening recommendations',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
        }, {
            name: 'Fever in a Returned Traveller',
            description: 'Malaria until proven otherwise.',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
        }, {
            name: 'Benign Prostatic Hyperplasia',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
        }, {
            name: 'Limb Injury, ?Fracture',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
        }, {
            name: 'Chalazion',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
        }, {
            name: 'Psoriasis',
            description: 'An autoimmune disease of skin and, in 30%, joints.',
            hx: 'Itch',
            ex: 'Symmetrical erythematous plaques w/ silver scaling',
            ix: 'Clinical Dx',
            mx: 'Topical emollients & CS +/- MTX, cyclosporine, adalimumab, phototherapy'
        }, {
            name: 'Erectile Dysfunction',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
        }, {
            name: 'Anaphylaxis',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
        }, {
            name: 'Eye Foreign Body',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
        }, {
            name: 'Fatigue',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
        }, {
            name: 'Epistaxis',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
        }, {
            name: 'Pancreatitis',
            description: 'Stasis is, as always, the basis. And alcohol. IGETSMASHED',
            hx: 'Epigastric pain, N/V',
            ex: 'GI exam',
            ix: 'Lipase, LFTs, FBE + UEC + CTAbdo',
            mx: 'NBM, IV fluids + Abx'
        }, {
            name: 'IBD',
            description: 'Ulcerative colitis and Crohn\'s disease. The latter is full thickness and from mouth to anus.',
            hx: 'Diarrhoea, blood in stool, dyschezia, weight loss',
            ex: 'GI exam + DRE',
            ix: 'Anti-TTG, anti-gliadin',
            mx: 'Severe refractory: Mabs'
        }, {
            name: 'Breast Ca',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
        }, {
            name: 'Acute Abdomen',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
        }, {
            name: 'Sebaceous Cyst',
            description: 'Sebaceous gland grows way out of proportion.',
            hx: 'Painless lump',
            ex: 'Fluctuant',
            ix: 'None',
            mx: 'Elective excision'
        }, {
            name: 'Diverticular Disease',
            description: 'Imagine squeezing a small balloon with your fingers slightly apart. The bulges that come through are like diverticulae.',
            hx: 'LLQ pain, ∆bowel habits, N/V',
            ex: 'GI exam, abdo palp, DRE',
            ix: 'CT abdomen',
            mx: 'If uncomplicated presentation: free fluids, analgesia + Abx, education re: fibre + fluid intake; If burst diverticulae: immediate Hartmann\'s.'
        }, {
            name: 'Ureteric Colic',
            description: 'The majority of stones pass naturally.',
            hx: 'Fucking Hurts esp sites of transition (\'loin to groin\'), haematuria',
            ex: 'Urinalysis',
            ix: 'FBE if febrile, non-contrast CTAP +/- KUBUS',
            mx: 'Analgesia, Abx, alpha blockers, IV fluids, surgery (stent / nephrostomy / shockwave lithotripsy),'
        }, {
            name: 'Lipoma',
            description: 'Benign adipose tissue tumour.',
            hx: 'Development over time',
            ex: 'Palpate, full skin check',
            ix: 'US',
            mx: 'Elective excision if bothersome'
        }, {
            name: 'Insomnia',
            description: 'Can\'t sleep.',
            hx: 'Ax severity (QOL), sleep timing + hygiene, other Sx e.g. restlessness, PMHx esp. psych',
            ex: 'Neuro for RLS, Epworth Sleepiness Scale',
            ix: 'Clinical Dx',
            mx: 'CBT, Sxatic relief w/ benzos, Z-drugs, exercise'
        }, {
            name: 'PUD',
            description: 'Ulcers are usually in the first part of the duodenum.',
            hx: 'Anaemia Sx, Hx of GORD, epigastric pain, FHx of GI issues',
            ex: 'Epig. tenderness (usually mild)',
            ix: 'Helicobacter fecal antigen / breath test, G-scope Bx',
            mx: 'PPI (esomeprazole), H2RA (ranitidine), antacids (sodium bic/alg); Rx of H. pylori -clarithro+amoxi+metro'
        }, {
            name: 'Haemorrhoids',
            description: 'Inflamed superficial veins in the rectum and anus',
            hx: 'Bright red blood in stool & on wiping, itch / pain / discomfort, Hx of straining or constipation / proloned sitting / lifting',
            ex: 'GI exam + DRE',
            ix: 'None',
            mx: '↑fluid & fibre, banding'
        }, {
            name: 'Gallbladder Disease',
            description: 'Bile backup is bad as stasis is the basis.',
            hx: 'Pain Pee Poo Pruritus, N/V',
            ex: 'Jaundice, RUQ pain, fever',
            ix: 'LFTs + FBE + UEC + lipase + US +/- ERCP',
            mx: 'Abx + analgesia + lap chole'
        }, {
            name: 'Chicken Pox',
            description: 'VZV infection contracted by inhalation of droplets.',
            hx: 'Exposure to infection, ++itch, duration of Sx (usu 5-10d)',
            ex: 'Complete skin check for characteristic rash',
            ix: 'Culture from vesicle but simple clinical Dx',
            mx: 'School absence - infectious 4-5 days after clearing rash, calamine gel for itch, acyclovir'
        }, {
            name: 'Balanitis',
            description: 'Inflammation of foreskin and glans.',
            hx: 'STI Sx: pain, itch, redness, discharge;',
            ex: 'Genital examination, vitals',
            ix: 'None',
            mx: 'Effective cleaning principles +/- clotrimazole cream'
        },

        ];



    $scope.showGpConditions = function (x) {
        $scope.info = $scope.gpconditions[x].description;
        $scope.hx = $scope.gpconditions[x].hx;
        $scope.ex = $scope.gpconditions[x].ex;
        $scope.ix = $scope.gpconditions[x].ix;
        $scope.mx = $scope.gpconditions[x].mx;
    }


    //          GP OSCEs

    $scope.gposce = [
        {
            name: 'Iron Deficiency Anaemia',
            description: 'The key is to ask: what is really going on here?',
            structure: 'Assess severity + possible causes + treatment options',
            mnemonic: 'TAMM - Thalassaemia <br> Anaemia of chronic disease <br> Malabsorption 2º to ED <br> Menstruation',
            questions: 'What are two causes of normocytic and macrocytic anaemia?'
    },
        {
            name: 'Screening for STIs',
            description: '',
            structure: '',
            mnemonic: 'Sexual Hx PPPPP - Partners Practises Protection from STIs Prevention of pregnancy PHx of STIs',
            questions: ''
    },
        {
            name: 'Starting warfarin',
            description: 'Rarer these days, but still could be assessed.',
            structure: '',
            mnemonic: '',
            questions: ''
    },
        {
            name: 'Can\'t get it up ',
            description: '',
            structure: 'Assess for cause',
            mnemonic: '',
            questions: ''
    },
        {
            name: 'Fever in a returned traveller',
            description: '',
            structure: '',
            mnemonic: '',
            questions: ''
    },
        {
            name: 'Osteoarthritis examination',
            description: '',
            structure: '',
            mnemonic: '',
            questions: ''
    },
        {
            name: 'Quitting smoking',
            description: '',
            structure: 'Non-pharm: MI, hypnotherapy, CBT; Pharm: varenicline',
            mnemonic: '',
            questions: ''
    },
        {
            name: 'Getting tired during the day',
            description: '',
            structure: '',
            mnemonic: '',
            questions: ''
    },
        {
            name: 'Feeling exhausted',
            description: '',
            structure: '',
            mnemonic: '',
            questions: ''
    },
];


    $scope.showGpOsces = function (x) {
        $scope.osceinfo = $scope.gposce[x].description;
        $scope.structure = $scope.gposce[x].structure;
        $scope.mnemonic = $scope.gposce[x].mnemonic;
        $scope.questions = $scope.gposce[x].questions;
    }

    //     MH

    //          MH Core Conditions

    $scope.mhconditions = [
        {
            name: 'Schizophrenia',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Dependent personality disorder',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Substance dependence',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Schizoid personality disorder',
            description: 'Cluster A',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Delusional disorder',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Factitious disorder',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Generalised anxiety disorder',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Brief psychotic disorder',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Borderline personality disorder',
            description: 'Cluster B',
            hx: 'DSM: -Labile mood -Unstable self image -Cycles of idealisation & devaluation -Feelings of abandonment -Chronic emptiness -Risky behaviour -DSH & suicidality -Paranoid thoughts',
            ex: 'A pattern of the ≥5 of the above traits, that is pervasive, unwavering and causes significant distress',
            ix: 'N/A',
            mx: 'Dialectical Behavioural Therapy'
    },
        {
            name: 'Conversion disorder',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Schizoaffective disorder',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Somatic symptom disorder',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Wernicke-Korsakoff syndrome',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Major depression',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Antisocial personality disorder',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Post-traumatic stress disorder',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Bipolar disorder',
            description: 'Mania usually lasts 2-6 weeks.',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Panic disorder',
            description: 'The presence of panic attacks plus deleterious effects of avoidance / anxiety because of these attacks.',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Bulimia nervosa',
            description: 'Disordered eating with an out-of-control feeling component.',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Obsessive-compulsive disorder',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Schizotypal personality disorder',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Social anxiety disorder',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Body dysmorphic disorder',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Narcissistic personality disorder',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Agoraphobia',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Anorexia nervosa',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    }
];


    $scope.showMhConditions = function (x) {
        $scope.info = $scope.mhconditions[x].description;
        $scope.hx = $scope.mhconditions[x].hx;
        $scope.ex = $scope.mhconditions[x].ex;
        $scope.ix = $scope.mhconditions[x].ix;
        $scope.mx = $scope.mhconditions[x].mx;
    };


    //          MH OSCEs

    $scope.mhosce = [
        {
            name: 'Social withdrawal',
            description: '',
            structure: '',
            mnemonic: '',
            questions: ''
    },
        {
            name: 'Disordered eating',
            description: '',
            structure: '',
            mnemonic: '',
            questions: ''
    },
        {
            name: 'Alcoholism',
            description: '',
            structure: '',
            mnemonic: '',
            questions: ''
    },
        {
            name: 'First manic episode',
            description: '',
            structure: '',
            mnemonic: '',
            questions: ''
    },
        {
            name: 'Depression in an elderly man',
            description: '',
            structure: '',
            mnemonic: '',
            questions: ''
    },
        {
            name: 'Episodes of terror',
            description: '',
            structure: '',
            mnemonic: '',
            questions: ''
    },
        {
            name: 'Suicidally depressed',
            description: '',
            structure: '',
            mnemonic: 'CPR - Current plan + Past Hx of attempts + Resources for support, both internal and external',
            questions: 'What are three dynamic RFs for suicide?'
    },
        {
            name: 'Risk Assessment',
            description: 'Perform one of these for every MH OSCE.',
            structure: 'Have you had -thoughts about harming yourself? -thoughts about killing yourself? -thoughts about harming others?; Have you ever had these thoughts in the past?',
            mnemonic: 'Risk Ax for Every Ax',
            questions: 'What factors would put this person more at risk of self-harm?'
    },

];


    $scope.showMhOsces = function (x) {
        $scope.osceinfo = $scope.mhosce[x].description;
        $scope.structure = $scope.mhosce[x].structure;
        $scope.mnemonic = $scope.mhosce[x].mnemonic;
        $scope.questions = $scope.mhosce[x].questions;
    };


    //     OG

    //          OG Core Conditions

    $scope.ogconditions = [
        {
            name: 'Normal labour',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Cervical cancer screening',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Recurrent miscarriage',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Normal physiological changes in pregnancy',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Ectopic pregnancy',
            description: '',
            hx: 'RIF pain, Sx of shock',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Stillbirth',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Multiple pregnancy',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Teratogenic infection',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Breast cancer screening',
            description: 'Mammogram from 50-74 every 2 years.',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'GDM',
            description: 'Placental steroids increase resistance to insulin throughout pregnancy.',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Anaemia',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Preeclampsia',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Placenta praevia',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Hyperemesis',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Placental adhesive disorders',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'APH',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Alloimunisation',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Chorioamnionitis',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Induction of labour',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Termination of pregnancy',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Malpresentation',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Prolonged labour',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Fetal distress',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Shoulder dystocia',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Instrumental delivery',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Caesarean section',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'VBAC',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'PPH',
            description: '4% of new mums.',
            hx: 'RFs: macrosomia / prolonged 1SL / obesity / PET / chorio / anaemia / coagulopathy',
            ex: 'Vitals',
            ix: 'FBE + G&H + coags',
            mx: '10IU synt IM, +ergot / carboprost'
    },
        {
            name: 'Heavy menstrual bleeding',
            description: 'More than 7d or ≥80mL bleed per cycle',
            hx: 'PALM COEIN, characterise severity -anaemia Sx',
            ex: 'Abdo, spec',
            ix: 'FBE + coags + US',
            mx: 'Non-hormonal: tranexamic acid / mefenamic acid; hormonal: OCP / IUD / implanon'
    },
        {
            name: 'PCOS',
            description: 'Excess immature follicle development results in disordered hormone levels; 15% of women of reproductive age (!).',
            hx: 'Hirsutism, acne, weight gain, ↓libido, oligomenorrhoea, acanthosis nigricans',
            ex: 'BMI',
            ix: 'TVUS + FSH&LH + TFTs + prolactin (extended Ax of oligomenorrhoea causes)',
            mx: 'Lifestyle, metformin, hormonal contraception (esp. OCP), clomiphene citrate'
    },
        {
            name: 'Menopause',
            description: 'The last menstrual period is \'the\' menopause.',
            hx: 'Mood + sleep + vaginal + vasomotor',
            ex: 'Vaginal exam',
            ix: 'Anti-mullerian hormone',
            mx: 'Topical oestrogen for AV, venlafaxine / CBT for vasomotor, HRT (oestrogen-only for women w/o uterus)'
    },
        {
            name: 'Fibroids',
            description: 'Like a mole on the uterus, and just as common - 30% of women have fibroids.',
            hx: 'HMB, dull deep abdo pain, ?hoping for pregnancy',
            ex: 'Abdo + bimanual',
            ix: 'TVUS',
            mx: 'Only if Sxatic, unless attempting conception: hysteroscopic resection (submucosal), lap myomectomy (other), hysterectomy, IUD if øeager or øcandidate for surgery'
    },
        {
            name: 'PID',
            description: 'Long-term inflammation of the pelvic organs, usually 2º STI.',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Endometriosis',
            description: 'Extra-uterine endometrial tissue follows course of menstrual cycle and provokes inflammation',
            hx: 'Pain, deep dyspareunia, dysmenorrhoea, infertility',
            ex: 'Abdo, bimanual',
            ix: 'GS diagnostic lap',
            mx: 'Simple analgesia, hormonal contraception (pill / IUD), lap excision'
    },
        {
            name: 'Infertility',
            description: '12m of unprotected sex w/o conception.',
            hx: 'Menstrual Hx, gynae Hx, weight loss / exercise, C. psychosocial, age, tubal / uterine / cervical abnormalities, smoking',
            ex: 'TVUS',
            ix: 'Sperm sampling (40%MF), hormonal testing',
            mx: 'IVF, ICSI, clomiphene'
    },
        {
            name: 'STI',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Stress incontinence',
            description: 'Weak urethral sphincter leads to little dribbles',
            hx: 'Cough sneeze laugh',
            ex: '',
            ix: 'PVR',
            mx: 'Surgical options are shit'
    },
        {
            name: 'Contraception',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Ovarian cancer',
            description: 'The sixth most common cause of death from cancer in women.',
            hx: 'Abdominal bloating, pelvic/abdo pain, PV bleeding, weight loss, fatigue. Early OvCa causes nonspecific Sx::most cases reach Dx only at late stage.',
            ex: 'Palpable mass',
            ix: 'CA-125, β-hCG, αFP, LDH, Tv/aUS, CTAP, CXR to exclude mets',
            mx: '5-year survival: 45%, R/f to gynae oncologist, mention surgical and CTx options, f/u in one week'
    },
        {
            name: 'SGA',
            description: 'Foetus at ≤10th growth centile; may be normal and in this case, be wary of iatrogenic prematurity',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'LGA',
            description: 'Foetus at ≥90th growth centile',
            hx: 'DM, obesity',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'IUGR',
            description: 'A foetus that can\'t meet its genetic growth potential.',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Urge incontinence',
            description: 'The urge to urinate presents without sufficient volume to warrant it.',
            hx: 'Pelvic fullness',
            ex: '',
            ix: 'MSU, ?Flow studies',
            mx: 'Oxybutynin'
    },
        {
            name: 'Placental abruption',
            description: 'Placenta separating from the uterus causes bleeding into decidua; Resultant haematoma compresses structures nearby and partially occludes blood flow to foetus.',
            hx: 'Pain, PV loss (though the majority will be occult), DFM',
            ex: 'Vitals, tender, \'woody\' uterus',
            ix: 'CTG, AFI, FFN, amnisure, Kleihauer?, FBE + Coags + G&H',
            mx: 'Deliver iso fetal or maternal deterioration'
    },
        {
            name: 'Endometrial hyperplasia',
            description: 'A ≥5mm thickened endometrium we see every cycle, but is worrisome in postmenopausal women.',
            hx: 'PMB',
            ex: 'Spec, bedside pipelle',
            ix: 'US, HD&C',
            mx: 'Tranexamic acid / HRT / endometrial ablation / hysterectomy'
    },
        {
            name: 'Prolapse',
            description: 'Prevalence rates only exist for reported Sxatic POP - still high, at ~8% of women.',
            hx: 'Feeling a bulge, something falling out of the vagina, urinary +/- faecal incontinence',
            ex: 'Speculum exam + bimanual',
            ix: 'None',
            mx: 'Pelvic floor PT, pessary, urogynae r/f'
    },

];


    $scope.showOgConditions = function (x) {
        $scope.info = $scope.ogconditions[x].description;
        $scope.hx = $scope.ogconditions[x].hx;
        $scope.ex = $scope.ogconditions[x].ex;
        $scope.ix = $scope.ogconditions[x].ix;
        $scope.mx = $scope.ogconditions[x].mx;
    };


    //          OG OSCEs

    $scope.ogosce = [
        {
            name: 'First antenatal visit',
            description: 'Luana is 8 weeks pregnant. Take a Hx and describe your recommendations for her pregnancy.',
            structure: 'PObHx, GHx, PMHx, model of care?, Ix',
            mnemonic: 'Bloods screens vax scans -G&H, Rh, Ab -FTCS, NIPS -Rubella Syphillis HBV HCV HIV status -Growth, morph, well-being thereafter',
            questions: 'What would put Luana at more risk of preterm labour?'
    },
        {
            name: 'Assessment of fetal wellbeing',
            description: 'Arethra is 1 day old. Assess her wellbeing and describe your findings to the examiner.',
            structure: 'Movement, fetal respiration, tone, CTG, Volume (AFI Index)',
            mnemonic: 'Monitor Fetus to Confirm Viability',
            questions: 'Which findings on CTG would you consider indicative of fetal distress?'
    },
        {
            name: 'Hormonal contraception',
            description: '',
            structure: '',
            mnemonic: '',
            questions: ''
    },
        {
            name: 'Pregnant woman with headache',
            description: '',
            structure: '',
            mnemonic: '',
            questions: ''
    },
        {
            name: 'Postpartum fever',
            description: '',
            structure: '',
            mnemonic: '',
            questions: ''
    },
        {
            name: 'Treatment of FTP',
            description: '',
            structure: '',
            mnemonic: '',
            questions: ''
    },
        {
            name: 'The pill',
            description: '',
            structure: '',
            mnemonic: '',
    },
        {
            name: 'Fundus less than dates',
            description: '',
            structure: '',
            mnemonic: '',
            questions: ''
    },
        {
            name: 'Emergency contraception',
            description: '',
            structure: '',
            mnemonic: '',
            questions: ''
    },
        {
            name: 'Pelvic pain that just never goes away',
            description: '',
            structure: '',
            mnemonic: '',
            questions: ''
    },
        {
            name: 'Post-term pregnancy',
            description: 'Take a Hx, provide Mx and counsel this pregnant woman at 42 weeks gestation.',
            structure: '',
            mnemonic: '',
            questions: ''
    },
        {
            name: 'Twins',
            description: 'Jane, 32, has just discovered she is 8 weeks pregnant with twins. What advice would you like to give her?',
            structure: '',
            mnemonic: '',
            questions: ''
    },
        {
            name: 'PPH',
            description: '',
            structure: '',
            mnemonic: '',
    },
        {
            name: 'Postnatal depression',
            description: '',
            structure: '',
            mnemonic: '',
            questions: ''
    },
        {
            name: 'Blood sugar',
            description: '',
            structure: '',
            mnemonic: '',
            questions: ''
    },
        {
            name: 'Early bleeding in pregnancy',
            description: '',
            structure: '',
            mnemonic: '',
            questions: ''
    },

];


    $scope.showOgOsces = function (x) {
        $scope.osceinfo = $scope.ogosce[x].description;
        $scope.structure = $scope.ogosce[x].structure;
        $scope.mnemonic = $scope.ogosce[x].mnemonic;
        $scope.questions = $scope.ogosce[x].questions;
    };


    //     CAH

    //          CAH Core Conditions

    $scope.cahconditions = [
        {
            name: 'Normal growth and feeding',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Normal development including puberty',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Immunisation',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Continence',
            description: 'Urinary incontinence persists in ~15% of 5yo children, most of which is isolated nocturnal enuresis.',
            hx: 'Characterise severity, fluid intake',
            ex: '',
            ix: '',
            mx: 'Discuss toilet training at every opportunity >12mo (readiness based on milestones r/t age, however)'
    },
        {
            name: 'Newborn check',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Developmental dysplasia of the hip',
            description: 'A spectrum of conditions resulting from hip joint malformation.',
            hx: 'RFs: breech at ≥34wks, FHx of same',
            ex: 'Hip exam at every visit: abduction + elevation for reducibility, gentle adduction for dislocatability',
            ix: 'US during first 4m',
            mx: 'r/f to orthopedic surgeon'
    },
        {
            name: 'Sleep',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Sepsis',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Anaphylaxis',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Diabetic ketoacidosis',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Hypoglycaemia',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Meningitis',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Congenital heart disease',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Brief Resolved Unexplained Event (formerly ALTE)',
            description: '',
            hx: '',
            ex: '',
            ix: 'Low-risk: none',
            mx: ''
    },
        {
            name: 'Resuscitation and emergency transport services',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Febrile seizure',
            description: 'Usually iso systemic viral or bacterial infxn, occurs in ~3% of children esp. 12-18mo',
            hx: 'Generally tonic-clonic. Simple if <15min w/ no neuro signs',
            ex: '>38ºC',
            ix: 'LP only I. if meningitis or intracranial pathology suspected',
            mx: 'Expectant; IV benzos if >5min'
    },
        {
            name: 'Epilepsy',
            description: '5% of children have a seizure; 1% of these are epileptic.',
            hx: 'Characterise seizure -when, where, why; Hx of other odd behavioural events; FHx + DHx',
            ex: 'Neuro + CN',
            ix: 'EEG',
            mx: 'Acute: IV benzos; Long-term: anticonvulsants'
    },
        {
            name: 'Migraine',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Non-specific headache',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Raised ICP',
            description: 'Most often a complication of TBI',
            hx: 'Severe headache, vomiting',
            ex: 'HTN, papilloedema, ↓GCS',
            ix: 'Imaging',
            mx: 'ABCD'
    },
        {
            name: 'Bacteraemia',
            description: 'Bacteria in the blood.',
            hx: 'Sepsis screen',
            ex: 'BP, JVP',
            ix: 'BCs every 24hrs',
            mx: 'Antipyretics, fluid resusc, vasopressors, resp support; Abx cefazolin /  vanc if MRSA'
    },
        {
            name: 'Meningitis /encephalitis',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Pneumonia',
            description: 'Aim for minimal handling in children with respiratory distress.',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Cellulitis',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Urinary tract infection',
            description: 'The majority are uncomplicated w/o long-term sequelae.',
            hx: 'Infant: irritability, poor feeding; Child: abdo pain, back pain, dysuria, new incontinence',
            ex: 'Fever, unwell appearance, costovertebral angle tenderness',
            ix: 'C. RBUS in <2yo',
            mx: 'Usually OP, C.I. for hospital admx (<2mo, vomiting, urosepsis); Ceph +/- amoxi, if no improvement w/in 48hrs, extend coverage'
    },
        {
            name: 'Septic arthritis/osteomyelitis',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Otitis media (acute)',
            description: '',
            hx: 'Acute onset pain',
            ex: 'Middle ear inflmxn + effusion',
            ix: 'None',
            mx: 'Avoid Abx, simple analgesia +/- topical lignocaine'
    },
        {
            name: 'Bronchiolitis',
            description: 'Most common cause of wheeze in infants.',
            hx: '',
            ex: '',
            ix: '',
            mx: 'Comfort feeds to settle'
    },
        {
            name: 'Croup',
            description: 'Aka viral laryngotracheitis, most commonly caused by parainfluenza.',
            hx: 'Barking cough, hoarseness',
            ex: 'Inspiratory stridor',
            ix: 'None',
            mx: 'Mild: self-limited 3-5 day course, steam inhalation, analgesia; Severe: single dose oral dexa + norad nebs, IV fluids, monitoring'
    },
        {
            name: 'Pertussis',
            description: 'Aka whooping cough. Highly contagious.',
            hx: 'Chronic cough',
            ex: 'Inspiratory whoop',
            ix: 'Nasopharyngeal culture / PCR if ≤4wks duration; Serology if >4wks duration',
            mx: 'Abx øreduce Sx course but ✓limit spread; stay at home.'
    },
        {
            name: 'Foreign body',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Cystic fibrosis',
            description: 'Defective transporters cause ↑intracellular Cl, resulting in thick dry airway mucus and ↑susceptibility to infection.',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Viral rashes (aka exanthems)',
            description: 'VZV / measles / rubella / roseola (herpes) / parvo',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Urticaria',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Intussusception',
            description: 'Invagination of proximal into distal bowel.',
            hx: 'Pain, vomiting, lethargy, red-currant jelly stool',
            ex: 'Pallor. palpable mass',
            ix: 'US - target sign; AXR - absence of gas around cecum',
            mx: 'Simple: air enema reduction; Complicated: laparotomy'
    },
        {
            name: 'Functional abdominal pain',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Constipation',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Gastroenteritis',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Cows milk protein intolerance',
            description: '',
            hx: '',
            ex: '',
            ix: 'FBE + UEC + LFTs + urine MCS + stool sampling + ESR',
            mx: 'Admx, stop formula, give AA formula, close f/u'
    },
        {
            name: 'Failure to thrive',
            description: 'The growth chart is not the disease.',
            hx: 'Possible causes -↓intake -malabsorption -↑requirements; Quantify intake and output;',
            ex: 'Normal low weight children don\'t look ill. FTT children have -sparse hair -wasted appearance (esp. gluten & thighs) -abdo protuberance -ricketic features; Observe child-parent interaction',
            ix: 'FBE + film + urine MCS + UEC + CMP + LFTs w/ albumin + protein + ESR + stool sampling + vit D',
            mx: 'Admx for weight gain'
    }, {
            name: 'Leukaemia',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Slipped upper femoral epiphysis',
            description: 'Slips near the time of peak linear growth (F:12, M:13.5), especially in the obese child.',
            hx: 'Pain w/o identifiable cause, worse on WB',
            ex: 'Altered gait',
            ix: 'Xray',
            mx: 'Avoid WB until surgery. Educate re: 45% Ro same in contralateral hip'
    },
        {
            name: 'Juvenile arthritis',
            description: 'An extensive and poorly elucidated range of causes make this a diagnosis of confusion.',
            hx: 'Intermittent fever, joint pain',
            ex: 'Evanescent rash',
            ix: 'No definitive tests exist, thus clinical Dx',
            mx: 'Varies'
    },
        {
            name: 'Autism',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'ADD / ADHD',
            description: 'Do not include as a DDx in children ≤2',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Oppositional Defiant Disorder',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Sudden Infant Death Syndrome',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Torsion of testis / Hydatid of Morgagni',
            description: 'The former is much more serious.',
            hx: 'Pain',
            ex: 'Palpate testes',
            ix: 'ØUS',
            mx: 'The latter is self-limited, so surgery is elective; former = emergent surgery'
    },
        {
            name: 'Epididymoorchitis',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Undescended testis',
            description: 'Normal transinguinal migration of the testis is thought to occur between 28-40wks gestation.',
            hx: 'Birth weight & gestation; FHx of same;',
            ex: '20% are unpalpable',
            ix: 'Unilateral w/o hypospadia: no further Ix; bilateral or w/ hypospadia: Ix for intersexuality, hormone testing',
            mx: 'Orchidopexy, recommended at 6-12m'
    },
        {
            name: 'Hypospadias',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Phimosis',
            description: 'Where the foreskin is too tight to retract over the glans.',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Hydrocele / Varicocele',
            description: 'Swelling of testes due to -intraperitoneal fluid / -venous engorgement',
            hx: 'øPain',
            ex: 'Attempt to empty: if empties quickly => hernia w/ omental fat; transillumination; palpate testis',
            ix: 'Clinical Dx',
            mx: 'Hydrocele usually resolves naturally, only operate if no resolution after 2 years'
    },
        {
            name: 'Henloch-Schonlein Purpura',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Infant colic',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },
        {
            name: 'Maternal post-natal depression',
            description: '',
            hx: '',
            ex: '',
            ix: '',
            mx: ''
    },

];


    $scope.showCahConditions = function (x) {
        $scope.info = $scope.cahconditions[x].description;
        $scope.hx = $scope.cahconditions[x].hx;
        $scope.ex = $scope.cahconditions[x].ex;
        $scope.ix = $scope.cahconditions[x].ix;
        $scope.mx = $scope.cahconditions[x].mx;
    };


    //          CAH OSCEs


    $scope.cahosce = [
        {
            name: 'The well child visit',
            description: '',
            structure: '',
            mnemonic: '',
            questions: ''
    },
        {
            name: 'The seriously unwell child',
            description: '',
            structure: '',
            mnemonic: '',
            questions: ''
    },
        {
            name: 'The child with seizures',
            description: '',
            structure: '',
            mnemonic: '',
            questions: ''
    },
        {
            name: 'The child with headache',
            description: '',
            structure: '',
            mnemonic: '',
            questions: ''
    },
        {
            name: 'The child with cough',
            description: '~40% is PBB',
            structure: 'Nature of cough crucial; ?Underlying cause: CF / PCD / immunodef. / foreign body / TB',
            mnemonic: '',
            questions: ''
    },
        {
            name: 'The child with rash',
            description: '',
            structure: '',
            mnemonic: '',
            questions: ''
    },
        {
            name: 'Male genitalia examination',
            description: '',
            structure: '',
            mnemonic: '',
            questions: ''
    },
        {
            name: 'Breath holding spells',
            description: '~25% of children who breath hold do so multiple times per day.',
            structure: 'Characterise spells; ?post-ictal confusion; reassure & encourage parent to treat as normal',
            mnemonic: '',
            questions: 'What is the likelihood of this child holding its breath in order to have its way?'
    },
        {
            name: 'Abdo & inguinoscrotal examination',
            description: '',
            structure: '',
            mnemonic: '',
            questions: ''
    },
        {
            name: 'Asthma',
            description: 'Billy, age 10, is struggling with his asthma. What Mx strategies could you offer to improve control of his condition?',
            structure: '',
            mnemonic: '',
            questions: ''
    },
        {
            name: 'Developmental assessment',
            description: '',
            structure: 'Feeding (intake, solids); Birth (weight, gestation, complications);',
            mnemonic: '',
            questions: ''
    },
        {
            name: 'GI examination',
            description: '',
            structure: '',
            mnemonic: '',
            questions: ''
    },
        {
            name: 'Anxiety',
            description: '',
            structure: '',
            mnemonic: '',
            questions: ''
    },
        {
            name: 'ENT examination',
            description: '3yo Khalid has had a fever for the last two days. Perform a thorough ENT examination & recommend appropriate management.',
            structure: 'Introduce, ++inspection, order ENT (then neck for cervical lymphadenopathy)',
            mnemonic: '',
            questions: 'Describe the treatment & complications of ASOM in children.'
    },
        {
            name: 'Neonatal jaundice',
            description: '',
            structure: '',
            mnemonic: '',
            questions: ''
    },
        {
            name: 'Cardiac examination',
            description: 'Selamat is concerned that her 2yo boy Kamil is not growing normally. Take a short Hx and perform a cardiac examination.',
            structure: 'Major differences from adult CVE: ++inspection, growth, femoral +/- brachial pulse; Adapt according to comfort / anxiety of child',
            mnemonic: 'Look, palpate, auscultate',
            questions: 'What in this examination would make you concerned about failure to thrive?'
    },
        {
            name: 'Wrist fracture',
            description: '',
            structure: 'Take Hx, perform pre-op Ax',
            mnemonic: '',
            questions: ''
    },
        {
            name: 'Respiratory examination',
            description: '',
            structure: '',
            mnemonic: '',
            questions: ''
    },
        {
            name: 'The child with a limp',
            description: '',
            structure: 'Systems review, Xray, bloods if fever',
            mnemonic: 'Neoplastic night, awareness of abuse,',
            questions: ''
    },
];


    $scope.showCahOsces = function (x) {
        $scope.osceinfo = $scope.cahosce[x].description;
        $scope.structure = $scope.cahosce[x].structure;
        $scope.mnemonic = $scope.cahosce[x].mnemonic;
        $scope.questions = $scope.cahosce[x].questions;
    };


});



app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "home.html"
        })
        .when("/ACConditions", {
            templateUrl: "./rotation/ac/acconditions.html"
        })
        .when("/ACOSCEs", {
            templateUrl: "./rotation/ac/acosce.html"
        })
        .when("/GPConditions", {
            templateUrl: "./rotation/gp/gpconditions.html"
        })
        .when("/GPOSCEs", {
            templateUrl: "./rotation/gp/gposce.html"
        })
        .when("/MHConditions", {
            templateUrl: "./rotation/mh/mhconditions.html"
        })
        .when("/MHOSCEs", {
            templateUrl: "./rotation/mh/mhosce.html"
        })
        .when("/OGConditions", {
            templateUrl: "./rotation/og/ogconditions.html"
        })
        .when("/OGOSCEs", {
            templateUrl: "./rotation/og/ogosce.html"
        })
        .when("/CAHConditions", {
            templateUrl: "./rotation/cah/cahconditions.html"
        })
        .when("/CAHOSCEs", {
            templateUrl: "./rotation/cah/cahosce.html"
        })
        .otherwise({
            redirectTo: '/'
        });
});
