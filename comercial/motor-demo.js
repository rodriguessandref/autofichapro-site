/* ============================================================================
   MOTOR-DEMO — Auto-Ficha PRO · réplica FIEL do motor de textos do produto,
   usada pela landing (venda.html) e pela sala de demonstração (demo.html).
   Textos e regras transcritos VERBATIM do autoficha.js. Nenhum dado real:
   tudo aqui roda 100% no navegador, sobre telas fictícias.
   ============================================================================ */
window.AFMOTOR = (function () {
  "use strict";

  function norm(s) { return (s || "").replace(/\s+/g, " ").trim(); }
  function hojeBR() {
    var d = new Date();
    var p = function (n) { return (n < 10 ? "0" : "") + n; };
    return p(d.getDate()) + "/" + p(d.getMonth() + 1) + "/" + d.getFullYear();
  }

  /* ======================= TEXTOS (verbatim do produto) ======================= */
  var TEXTOS = {
    exameFisico: {
      homem:
"BOM ESTADO GERAL, LÚCIDO E ORIENTADO NO TEMPO E NO ESPAÇO, COOPERATIVO, DEAMBULANDO SEM AUXÍLIO. NORMOCORADO, HIDRATADO, ANICTÉRICO, ACIANÓTICO, AFEBRIL, EUPNEICO EM AR AMBIENTE, COM BOA PCP (MENOR QUE 2 SEGUNDOS). EUCARDICO E HEMODINAMICAMENTE ESTÁVEL, COM BOA SPO2.\n- PELE E MUCOSAS: COLORAÇÃO NORMAL, SEM LESÕES ATIVAS.\n- CABEÇA E PESCOÇO: SEM LINFONODOMEGALIAS, TIREOIDE NÃO PALPÁVEL, SEM ESTASE JUGULAR.\n- OROFARINGE: AMÍGDALAS SEM HIPEREMIA, HIPERTROFIA OU SECREÇÃO PURULENTA.\n- ACV: RCR EM 2T, BNF, SEM SOPROS.\n- AR: MVUA, SEM RUÍDOS ADVENTÍCIOS.\n- ABD: PLANO, FLÁCIDO, INDOLOR À PALPAÇÃO, RHA PRESENTES, SEM VISCEROMEGALIAS, SEM SINAIS DE IRRITAÇÃO PERITONEAL.\n- COLUNA E POSTURA: SEM DESVIOS POSTURAIS, INDOLOR À PALPAÇÃO PARAVERTEBRAL, MOBILIDADE PRESERVADA.\n- MMSS: SIMÉTRICOS, FORÇA E AMPLITUDE DE MOVIMENTO PRESERVADAS, SEM SINAIS FLOGÍSTICOS ARTICULARES.\n- MMII: SEM EDEMAS, PANTURRILHAS SEM SINAIS DE EMPASTAMENTO, SEM SINAIS DE INSUFICIÊNCIA VENOSA, PULSOS POPLÍTEOS, TIBIAIS E PEDIOSOS PALPÁVEIS, AMPLOS E SIMÉTRICOS.\n- NEUROLÓGICO: VIGIL, GLASGOW 15, MARCHA NORMAL, FORÇA E SENSIBILIDADE PRESERVADAS, COORDENAÇÃO NORMAL, SEM SINAIS FOCAIS, PUPILAS ISOCÓRICAS E FOTORREAGENTES.",
      mulher:
"BOM ESTADO GERAL, LÚCIDA E ORIENTADA NO TEMPO E NO ESPAÇO, COOPERATIVA, DEAMBULANDO SEM AUXÍLIO. NORMOCORADA, HIDRATADA, ANICTÉRICA, ACIANÓTICA, AFEBRIL, EUPNEICA EM AR AMBIENTE, COM BOA PCP (MENOR QUE 2 SEGUNDOS). EUCARDICA E HEMODINAMICAMENTE ESTÁVEL, COM BOA SPO2.\n- PELE E MUCOSAS: COLORAÇÃO NORMAL, SEM LESÕES ATIVAS.\n- CABEÇA E PESCOÇO: SEM LINFONODOMEGALIAS, TIREOIDE NÃO PALPÁVEL, SEM ESTASE JUGULAR.\n- OROFARINGE: AMÍGDALAS SEM HIPEREMIA, HIPERTROFIA OU SECREÇÃO PURULENTA.\n- ACV: RCR EM 2T, BNF, SEM SOPROS.\n- AR: MVUA, SEM RUÍDOS ADVENTÍCIOS.\n- ABD: PLANO, FLÁCIDO, INDOLOR À PALPAÇÃO, RHA PRESENTES, SEM VISCEROMEGALIAS, SEM SINAIS DE IRRITAÇÃO PERITONEAL.\n- COLUNA E POSTURA: SEM DESVIOS POSTURAIS, INDOLOR À PALPAÇÃO PARAVERTEBRAL, MOBILIDADE PRESERVADA.\n- MMSS: SIMÉTRICOS, FORÇA E AMPLITUDE DE MOVIMENTO PRESERVADAS, SEM SINAIS FLOGÍSTICOS ARTICULARES.\n- MMII: SEM EDEMAS, PANTURRILHAS SEM SINAIS DE EMPASTAMENTO, SEM SINAIS DE INSUFICIÊNCIA VENOSA, PULSOS POPLÍTEOS, TIBIAIS E PEDIOSOS PALPÁVEIS, AMPLOS E SIMÉTRICOS.\n- NEUROLÓGICO: VIGIL, GLASGOW 15, MARCHA NORMAL, FORÇA E SENSIBILIDADE PRESERVADAS, COORDENAÇÃO NORMAL, SEM SINAIS FOCAIS, PUPILAS ISOCÓRICAS E FOTORREAGENTES."
    },

    nega:
"Nega ansiedade, depressão ou transtornos psiquiátricos\nNega hipertensão\nNega doenças cardiopulmonares\nNega Pneumonias de repetição\nNega doenças neurodegenerativas\nNega doenças relacionadas ao aparelho musculoesquelético\nNega doenças de coluna (artrite, artrose, hérnia de disco, lombalgias refratárias e incapacitantes)\nNega queixas álgicas ou osteomusculares no momento desta avaliação\nNega problemas relacionados à acuidade visual\nNega problemas relacionados à audição\nNega uso de medicações contínuas\nNega internações recentes\nNega cirurgias recentes\nNega fraturas recentes\nNega outras doenças não mencionadas acima\nNega limitações físicas ou funcionais que prejudiquem suas atividades laborais\nNega acidente de trabalho\nNega afastamento pelo INSS",

    negaGravidez: "NEGA GRAVIDEZ",

    atestacao: {
      h: "Atesto que as informações presentes nesta ficha clínica foram descritas com base em anamnese, exame clínico e exame físico, com o consentimento do colaborador.",
      m: "Atesto que as informações presentes nesta ficha clínica foram descritas com base em anamnese, exame clínico e exame físico, com o consentimento da colaboradora."
    },

    condicoes: {
      has: { label: "01 · Pressão alta (HAS)", negaRe: /hipertens/i,
        h: "HIPERTENSÃO ARTERIAL EM TRATAMENTO REGULAR, FAZENDO USO DE MEDICAÇÃO CONTÍNUA, MAS NÃO SOUBE RELATAR O NOME NO MOMENTO",
        m: "HIPERTENSÃO ARTERIAL EM TRATAMENTO REGULAR, FAZENDO USO DE MEDICAÇÃO CONTÍNUA, MAS NÃO SOUBE RELATAR O NOME NO MOMENTO" },
      coracao: { label: "02 · Doença do coração", negaRe: /cardiopulmonares/i,
        h: "CARDIOPATIA EM ACOMPANHAMENTO MÉDICO REGULAR, ASSINTOMÁTICO NO MOMENTO E SEM LIMITAÇÃO FUNCIONAL",
        m: "CARDIOPATIA EM ACOMPANHAMENTO MÉDICO REGULAR, ASSINTOMÁTICA NO MOMENTO E SEM LIMITAÇÃO FUNCIONAL" },
      diabetes: { label: "03 · Diabetes (DM)", negaRe: null,
        h: "DIABETES MELLITUS EM TRATAMENTO E ACOMPANHAMENTO REGULAR, FAZENDO USO DE MEDICAÇÃO CONTÍNUA, MAS NÃO SE RECORDA O NOME, SEM INTERCORRÊNCIAS NO MOMENTO",
        m: "DIABETES MELLITUS EM TRATAMENTO E ACOMPANHAMENTO REGULAR, FAZENDO USO DE MEDICAÇÃO CONTÍNUA, MAS NÃO SE RECORDA O NOME, SEM INTERCORRÊNCIAS NO MOMENTO" },
      tuberculose: { label: "04 · Tuberculose (TB)", negaRe: null,
        h: "TUBERCULOSE PREGRESSA, COM TRATAMENTO COMPLETO E ALTA, SEM SINTOMAS RESPIRATÓRIOS ATUAIS",
        m: "TUBERCULOSE PREGRESSA, COM TRATAMENTO COMPLETO E ALTA, SEM SINTOMAS RESPIRATÓRIOS ATUAIS" },
      resfriados: { label: "05 · Resfriados / sinusites", negaRe: null,
        h: "RESFRIADOS E SINUSITES EVENTUAIS, DE CARÁTER BENIGNO E AUTOLIMITADO, SEM REPERCUSSÃO FUNCIONAL",
        m: "RESFRIADOS E SINUSITES EVENTUAIS, DE CARÁTER BENIGNO E AUTOLIMITADO, SEM REPERCUSSÃO FUNCIONAL" },
      asma: { label: "06 · Asma / bronquite / rinite", negaRe: /cardiopulmonares|pneumonias/i,
        h: "ASMA, BRONQUITE OU RINITE DE CARÁTER ALÉRGICO, EM ACOMPANHAMENTO, ESTÁVEL E SEM CRISES RECENTES",
        m: "ASMA, BRONQUITE OU RINITE DE CARÁTER ALÉRGICO, EM ACOMPANHAMENTO, ESTÁVEL E SEM CRISES RECENTES" },
      audicao: { label: "07 · Problemas na audição", negaRe: /audi..o/i,
        h: "QUEIXA AUDITIVA DE CARÁTER PRÉVIO, ORIENTADO QUANTO AO ACOMPANHAMENTO AUDIOMÉTRICO",
        m: "QUEIXA AUDITIVA DE CARÁTER PRÉVIO, ORIENTADA QUANTO AO ACOMPANHAMENTO AUDIOMÉTRICO" },
      visao: { label: "08 · Problemas na visão", negaRe: /acuidade visual/i,
        h: "REDUÇÃO DA ACUIDADE VISUAL CORRIGIDA COM LENTES, SEM PREJUÍZO PARA AS EXIGÊNCIAS VISUAIS DA FUNÇÃO",
        m: "REDUÇÃO DA ACUIDADE VISUAL CORRIGIDA COM LENTES, SEM PREJUÍZO PARA AS EXIGÊNCIAS VISUAIS DA FUNÇÃO" },
      coluna: { label: "09 · Dores na coluna / costas / membros", negaRe: /coluna|osteomuscular|.lgicas|musculoesquel/i,
        h: "DOR LOMBAR, MUSCULAR OU ARTICULAR DE CARÁTER PRÉVIO, RELACIONADA TAMBÉM ÀS ATIVIDADES FÍSICAS E SOCIAIS DO DIA A DIA, SEM LIMITAÇÃO FUNCIONAL NO MOMENTO DO EXAME",
        m: "DOR LOMBAR, MUSCULAR OU ARTICULAR DE CARÁTER PRÉVIO, RELACIONADA TAMBÉM ÀS ATIVIDADES FÍSICAS E SOCIAIS DO DIA A DIA, SEM LIMITAÇÃO FUNCIONAL NO MOMENTO DO EXAME" },
      internacoes: { label: "10 · Internações", negaRe: /interna..es/i,
        h: "INTERNAÇÃO PRÉVIA, JÁ RESOLVIDA, SEM SEQUELAS OU REPERCUSSÃO FUNCIONAL ATUAL",
        m: "INTERNAÇÃO PRÉVIA, JÁ RESOLVIDA, SEM SEQUELAS OU REPERCUSSÃO FUNCIONAL ATUAL" },
      cirurgias: { label: "11 · Cirurgias", negaRe: /cirurgias/i,
        h: "CIRURGIA PRÉVIA, COM BOA RECUPERAÇÃO, SEM SEQUELAS OU LIMITAÇÃO FUNCIONAL ATUAL",
        m: "CIRURGIA PRÉVIA, COM BOA RECUPERAÇÃO, SEM SEQUELAS OU LIMITAÇÃO FUNCIONAL ATUAL" },
      medicamentos: { label: "12 · Uso regular de medicamentos", negaRe: /medica..es cont/i, oculto: true,
        h: "USO REGULAR DE MEDICAÇÃO CONTÍNUA, EM ACOMPANHAMENTO MÉDICO, SEM REPERCUSSÃO SOBRE A CAPACIDADE LABORAL",
        m: "USO REGULAR DE MEDICAÇÃO CONTÍNUA, EM ACOMPANHAMENTO MÉDICO, SEM REPERCUSSÃO SOBRE A CAPACIDADE LABORAL" },
      limitacao: { label: "13 · Deficiência física / limitações", negaRe: /limita..es f.sicas/i,
        h: "LIMITAÇÃO FÍSICA DE CARÁTER PRÉVIO, SEM PREJUÍZO PARA AS ATIVIDADES ATUAIS",
        m: "LIMITAÇÃO FÍSICA DE CARÁTER PRÉVIO, SEM PREJUÍZO PARA AS ATIVIDADES ATUAIS" },
      outras: { label: "14 · Doenças relevantes não mencionadas", negaRe: /outras doen.as/i,
        h: "OUTRAS CONDIÇÕES DE SAÚDE NÃO ESPECIFICADAS ACIMA, DETALHADAS EM ANAMNESE",
        m: "OUTRAS CONDIÇÕES DE SAÚDE NÃO ESPECIFICADAS ACIMA, DETALHADAS EM ANAMNESE" },
      tabagismo: { label: "15 · Tabagismo", negaRe: null,
        h: "TABAGISMO ATIVO, COM CARGA TABÁGICA APROXIMADA DE X ANOS-MAÇO",
        m: "TABAGISMO ATIVO, COM CARGA TABÁGICA APROXIMADA DE X ANOS-MAÇO" },
      etilismo: { label: "16 · Etilismo", negaRe: null, h: "ETILISMO SOCIAL", m: "ETILISMO SOCIAL" },
      ansiedade: { label: "Ansiedade ou Depressão", negaRe: /ansiedade|depress/i,
        h: "QUADRO DE ANSIEDADE E/OU DEPRESSÃO PRÉVIO, CLINICAMENTE ESTÁVEL",
        m: "QUADRO DE ANSIEDADE E/OU DEPRESSÃO PRÉVIO, CLINICAMENTE ESTÁVEL" }
    },

    historico: {
      acidente: { label: "22 · Acidente de trabalho", negaRe: /acidente de trabalho/i, h: null, m: null },
      inss: { label: "23 · Afastamento pelo INSS", negaRe: /afastamento pelo inss/i,
        h: "AFASTAMENTO PELO INSS EM Y, POR MOTIVOS DE Y, PELO PERÍODO DE Y DIAS",
        m: "AFASTAMENTO PELO INSS EM Y, POR MOTIVOS DE Y, PELO PERÍODO DE Y DIAS" }
    },

    nexoFechamento: {
      h: "CONDIÇÕES DE CARÁTER PRÉVIO, EM ACOMPANHAMENTO E SEM NEXO CAUSAL COM AS ATIVIDADES LABORAIS ATUAIS, SEM INCAPACIDADE LABORAL NO MOMENTO DO EXAME. COLABORADOR ORIENTADO QUANTO AO ACOMPANHAMENTO E À COMUNICAÇÃO DE QUALQUER ALTERAÇÃO AO SESMT.",
      m: "CONDIÇÕES DE CARÁTER PRÉVIO, EM ACOMPANHAMENTO E SEM NEXO CAUSAL COM AS ATIVIDADES LABORAIS ATUAIS, SEM INCAPACIDADE LABORAL NO MOMENTO DO EXAME. COLABORADORA ORIENTADA QUANTO AO ACOMPANHAMENTO E À COMUNICAÇÃO DE QUALQUER ALTERAÇÃO AO SESMT."
    },

    sistemas: {
      pele: "PELE E MUCOSAS COM COLORAÇÃO E HIDRATAÇÃO PRESERVADAS, SEM PALIDEZ, ICTERÍCIA OU CIANOSE. TURGOR E ELASTICIDADE NORMAIS, ENCHIMENTO CAPILAR INFERIOR A 2 SEGUNDOS. AUSÊNCIA DE LESÕES CUTÂNEAS ATIVAS, ÚLCERAS, ECZEMAS OU DERMATOSES SUGESTIVAS DE EXPOSIÇÃO OCUPACIONAL A AGENTES QUÍMICOS, FÍSICOS OU BIOLÓGICOS, E SEM SINAIS DE DERMATITE DE CONTATO. NEGA PRURIDO OU LESÕES DÉRMICAS RELACIONADAS AO TRABALHO.",
      olhos: "EXAME OFTALMOLÓGICO DE TRIAGEM SEM ALTERAÇÕES. CONJUNTIVAS NORMOCORADAS, ESCLERAS ANICTÉRICAS, PUPILAS ISOCÓRICAS E FOTORREAGENTES. ACUIDADE VISUAL APARENTEMENTE PRESERVADA E COMPATÍVEL COM AS EXIGÊNCIAS VISUAIS DA FUNÇÃO, SENSO CROMÁTICO SEM ALTERAÇÕES GROSSEIRAS. AUSÊNCIA DE FADIGA VISUAL, HIPEREMIA OU IRRITAÇÃO OCULAR. NEGA DIPLOPIA, REDUÇÃO SÚBITA DA ACUIDADE OU QUEIXAS VISUAIS RELACIONADAS À ATIVIDADE LABORAL.",
      cabecaPescoco: "CRÂNIO E FACE SEM ABAULAMENTOS OU ASSIMETRIAS. PESCOÇO MÓVEL E INDOLOR, SEM LINFONODOMEGALIAS. TIREOIDE DE VOLUME NORMAL, NÃO PALPÁVEL, SEM NÓDULOS. AUSÊNCIA DE ESTASE JUGULAR OU SOPROS CAROTÍDEOS. OROFARINGE SEM HIPEREMIA OU LESÕES. ACUIDADE AUDITIVA GROSSEIRAMENTE PRESERVADA À VOZ COLOQUIAL, SEM QUEIXAS AUDITIVAS OU OTOLÓGICAS NO MOMENTO. AMPLITUDE DE MOVIMENTO CERVICAL PRESERVADA.",
      respiratorio: "TÓRAX SIMÉTRICO, COM EXPANSIBILIDADE PRESERVADA E SEM USO DE MUSCULATURA ACESSÓRIA. MURMÚRIO VESICULAR UNIVERSALMENTE AUDÍVEL, SEM RUÍDOS ADVENTÍCIOS (RONCOS, SIBILOS OU CREPITAÇÕES). EM EUPNEIA NO AR AMBIENTE, COM BOA SATURAÇÃO PERIFÉRICA DE OXIGÊNIO. NEGA TOSSE CRÔNICA, DISPNEIA AOS ESFORÇOS OU SINTOMAS RESPIRATÓRIOS RELACIONADOS À EXPOSIÇÃO OCUPACIONAL A POEIRAS, FUMOS, VAPORES OU AGENTES IRRITANTES. SEM SINAIS CLÍNICOS SUGESTIVOS DE PNEUMOPATIA OCUPACIONAL.",
      cardiovascular: "RITMO CARDÍACO REGULAR EM DOIS TEMPOS, BULHAS NORMOFONÉTICAS, SEM SOPROS, ESTALIDOS OU ARRITMIAS, E PRECÓRDIO SEM FRÊMITOS. HEMODINAMICAMENTE ESTÁVEL, COM PRESSÃO ARTERIAL E FREQUÊNCIA CARDÍACA DENTRO DA NORMALIDADE NO MOMENTO DO EXAME. PERFUSÃO PERIFÉRICA ADEQUADA, SEM EDEMAS OU SINAIS DE INSUFICIÊNCIA CARDÍACA. NEGA DOR PRECORDIAL, PALPITAÇÕES OU SÍNCOPE. SEM CONTRAINDICAÇÃO CARDIOVASCULAR APARENTE PARA A FUNÇÃO.",
      abdome: "ABDOME FLÁCIDO, INDOLOR À PALPAÇÃO SUPERFICIAL E PROFUNDA, COM RUÍDOS HIDROAÉREOS PRESENTES E NORMAIS. AUSÊNCIA DE VISCEROMEGALIAS, MASSAS, HÉRNIAS OU SINAIS DE IRRITAÇÃO PERITONEAL. NEGA DOR ABDOMINAL, ALTERAÇÃO DO HÁBITO INTESTINAL OU QUEIXAS DIGESTIVAS RELEVANTES.",
      membrosInferiores: "MEMBROS INFERIORES SIMÉTRICOS, SEM EDEMAS, EMPASTAMENTO DE PANTURRILHAS OU SINAIS DE TROMBOSE VENOSA PROFUNDA. AUSÊNCIA DE VARIZES SIGNIFICATIVAS OU DE INSUFICIÊNCIA VENOSA CRÔNICA. PULSOS POPLÍTEOS, TIBIAIS POSTERIORES E PEDIOSOS PALPÁVEIS, AMPLOS E SIMÉTRICOS. ROTAÇÕES DE QUADRIL PRESERVADAS E INDOLORES, AMPLITUDE DE MOVIMENTO COMPLETA, SEM LIMITAÇÃO FUNCIONAL OU CLAUDICAÇÃO. APTO À DEAMBULAÇÃO, BIPEDESTAÇÃO E DESLOCAMENTOS EXIGIDOS PELA FUNÇÃO.",
      ombros: "OMBROS SIMÉTRICOS, COM AMPLITUDE DE MOVIMENTO COMPLETA EM FLEXÃO, EXTENSÃO, ABDUÇÃO E ROTAÇÕES. AUSÊNCIA DE DOR À ABDUÇÃO CONTRARRESISTÊNCIA, ÀS ROTAÇÕES E À PALPAÇÃO DO TENDÃO DO BÍCEPS E DA REGIÃO SUB-ACROMIAL, BILATERALMENTE. SEM SINAIS DE SÍNDROME DO MANGUITO ROTADOR, IMPACTO OU PROCESSO INFLAMATÓRIO ARTICULAR. SEM LIMITAÇÃO PARA ELEVAÇÃO, CARGA OU MOVIMENTOS REPETITIVOS INERENTES À FUNÇÃO.",
      maosPunhos: "MÃOS E PUNHOS SEM DEFORMIDADES, EDEMA OU SINAIS FLOGÍSTICOS. TESTES DE TINEL, PHALEN E FINKELSTEIN NEGATIVOS BILATERALMENTE. CAPACIDADE DE PREENSÃO, PINÇA E FORÇA DE APREENSÃO PRESERVADAS E SIMÉTRICAS, COM SENSIBILIDADE TÁTIL MANTIDA. AUSÊNCIA DE NÓDULOS, CISTOS SINOVIAIS, CREPITAÇÃO OU PARESTESIAS. SEM SINAIS CLÍNICOS SUGESTIVOS DE SÍNDROME DO TÚNEL DO CARPO, TENOSSINOVITE OU LER/DORT RELACIONADAS A MOVIMENTOS REPETITIVOS.",
      cotovelos: "COTOVELOS COM AMPLITUDE DE MOVIMENTO COMPLETA EM FLEXÃO, EXTENSÃO, PRONAÇÃO E SUPINAÇÃO. AUSÊNCIA DE PARESTESIAS NO TERRITÓRIO ULNAR, EDEMA OU DERRAME ARTICULAR. SEM DOR À PALPAÇÃO DOS EPICÔNDILOS MEDIAL E LATERAL, E SINAL DO CHOQUE NEGATIVO, BILATERALMENTE. SEM SINAIS SUGESTIVOS DE EPICONDILITE OU NEUROPATIA COMPRESSIVA RELACIONADAS À ATIVIDADE LABORAL.",
      coluna: "COLUNA VERTEBRAL COM CURVATURAS FISIOLÓGICAS PRESERVADAS, SEM DESVIOS POSTURAIS PATOLÓGICOS (LORDOSE, ESCOLIOSE OU CIFOSE). MOBILIDADE GLOBAL PRESERVADA EM FLEXÃO, EXTENSÃO E LATERALIZAÇÃO, SEM LIMITAÇÃO ANTÁLGICA. MANOBRA DE LASEGUE NEGATIVA BILATERALMENTE, SEM DOR À PALPAÇÃO DOS PROCESSOS ESPINHOSOS OU DA MUSCULATURA PARAVERTEBRAL E SEM CONTRATURAS. AUSÊNCIA DE SINAIS DE RADICULOPATIA OU COMPROMETIMENTO DISCAL. APTO ÀS EXIGÊNCIAS POSTURAIS E DE MANUSEIO DE CARGA INERENTES À FUNÇÃO.",
      aparelhoMuscular: "APARELHO MUSCULOESQUELÉTICO COM TROFISMO E TÔNUS PRESERVADOS, SEM HIPERTROFIAS, HIPOTROFIAS OU ATROFIAS. FORÇA MUSCULAR GRAU V E SIMÉTRICA NOS QUATRO MEMBROS. AUSÊNCIA DE DOR MUSCULAR, CONTRATURAS OU PONTOS-GATILHO, COM AMPLITUDE ARTICULAR GLOBAL PRESERVADA. SEM SINAIS DE FADIGA OU SOBRECARGA MUSCULAR RELACIONADAS À ATIVIDADE LABORAL.",
      snc: "NÍVEL DE CONSCIÊNCIA PRESERVADO (GLASGOW 15), COM ORIENTAÇÃO TÊMPORO-ESPACIAL MANTIDA. SEM SINAIS MENÍNGEOS OU FOCAIS. FORÇA, SENSIBILIDADE E REFLEXOS PRESERVADOS E SIMÉTRICOS. COORDENAÇÃO E EQUILÍBRIO NORMAIS, TESTE DE ROMBERG NEGATIVO E MARCHA SEM ALTERAÇÕES. AUSÊNCIA DE TREMORES, DÉFICITS COGNITIVOS OU SINAIS NEUROLÓGICOS QUE CONTRAINDIQUEM A FUNÇÃO, INCLUSIVE PARA ATIVIDADES QUE EXIJAM ATENÇÃO, EQUILÍBRIO OU OPERAÇÃO DE MÁQUINAS."
    },

    deficienciaObs: "AO EXAME CLÍNICO, NÃO FORAM OBSERVADAS DEFICIÊNCIAS FÍSICAS OU LIMITAÇÕES FUNCIONAIS. O(A) COLABORADOR(A) NEGA DEFICIÊNCIAS, RESTRIÇÕES OU LIMITAÇÕES FÍSICAS PARA O EXERCÍCIO DA FUNÇÃO.",
    antecedentesOutras: "NEGA PROBLEMAS DE SAÚDE PRÉVIOS E DOENÇAS PREEXISTENTES.",
    antecedentesMedicacao: "NEGA USO DE MEDICAÇÕES DE USO CONTÍNUO.",

    tipos: {
      admissional: "Admissional", periodico: "Periódico", retorno: "Retorno ao Trabalho",
      mudanca: "Mudança de Função", demissional: "Demissional"
    },

    admissionalAviso: {
      homem: "O COLABORADOR, EM EXAME ADMISSIONAL, AINDA NÃO FOI CIENTIFICADO PELA EMPRESA A RESPEITO, POR NÃO EXERCER A FUNÇÃO ATÉ A PRESENTE DATA. INFORMAÇÃO A SER PRESTADA PELO EMPREGADOR NA ADMISSÃO (ORDEM DE SERVIÇO, NR-1).",
      mulher: "A COLABORADORA, EM EXAME ADMISSIONAL, AINDA NÃO FOI CIENTIFICADA PELA EMPRESA A RESPEITO, POR NÃO EXERCER A FUNÇÃO ATÉ A PRESENTE DATA. INFORMAÇÃO A SER PRESTADA PELO EMPREGADOR NA ADMISSÃO (ORDEM DE SERVIÇO, NR-1)."
    },

    vitais: { temperatura: "36,2", fr: "16", paSistolica: "130", paDiastolica: "75", fc: "85" }
  };

  /* Ordem canônica dos tópicos do REFERE (a ordem do painel do produto) */
  var ORDEM = ["has","coracao","diabetes","tuberculose","resfriados","asma","audicao","visao","coluna",
               "internacoes","cirurgias","limitacao","outras","tabagismo","etilismo","ansiedade","acidente","inss"];

  /* Item do prontuário SOC que cada condição marca */
  var ITEM_NUM = { has:"01", coracao:"02", diabetes:"03", tuberculose:"04", resfriados:"05", asma:"06",
    audicao:"07", visao:"08", coluna:"09", internacoes:"10", cirurgias:"11", medicamentos:"12",
    limitacao:"13", outras:"14", tabagismo:"15", etilismo:"16", acidente:"22", inss:"23" };

  var SISTEMAS = [
    ["pele","Pele"],["olhos","Olhos"],["cabecaPescoco","Cabeça e Pescoço"],["respiratorio","Aparelho Respiratório"],
    ["cardiovascular","Aparelho Cardiovascular"],["abdome","Abdome"],["membrosInferiores","Membros Inferiores"],
    ["ombros","Ombros"],["maosPunhos","Mãos e Punhos"],["cotovelos","Cotovelos"],["coluna","Coluna"],
    ["aparelhoMuscular","Aparelho Muscular"],["snc","Sistema Neurológico (SNC)"]
  ];

  /* ======================= EPI POR FUNÇÃO (verbatim) ======================= */
  var EPI_ADMIN = /administrativ|^analist|assistente(?! social)|gerente|diretor|coordenador(?!.*(seguran|obra|brigad))|recepc|atendente(?!.*(restaurante|mesa|lanchonete))|caixa|apost|telemarket|teleoperad|secret|financeir|cont.bil|^fiscal\b|recursos humanos|comprador|professor|advogad|jur.dic|porteir|portaria|\bvigia\b|controlador de acesso|balconista|vendedor(?!.*(extern|t.cnic))|designer|programador|desenvolvedor|suporte t.cnic|help ?desk|estagi.ri.*(adm|escrit)|^motorista( cat)? ?b\b/;
  var EPI_GRUPOS = [
    { re:/solda|caldeireir|serralheir/, e:["máscara de solda","respirador p/ fumos metálicos","luva/avental/mangote/perneira de raspa","óculos","protetor auditivo"] },
    { re:/inc.ndio|bombeir|brigad|combate a fogo|florest/, e:["capacete c/ viseira e proteção de nuca","vestimenta resistente a chama (aramida/Nomex)","luvas de combate a incêndio","botas de cano alto","respirador p/ fumaça (PFF3 ou autônomo)","óculos","protetor solar"] },
    { re:/pintor.*(autom|veic)|repintura|funil/, e:["respirador c/ filtro VO + partículas (isocianatos)","luva nitrílica","óculos/máscara facial","macacão impermeável"] },
    { re:/pint(or|ura)|verniz|impermeabiliz/, e:["respirador c/ filtro VO","luva nitrílica","óculos","avental"] },
    { re:/nr.?10|eletricist|eletrot.cnic|linha viva|rede el.tr|subesta/, e:["vestimenta antichama (FR)","luvas isolantes + cobertura","capacete isolante c/ jugular","óculos + protetor facial p/ arco elétrico","calçado isolante"] },
    { re:/altura|andaim|telhad|torre|escalad|cremalheir|alpinis|fachad|sinaleir|antenist|instalador.*(antena|telecom|internet|fibra)/, e:["cinturão paraquedista + trava-quedas","capacete c/ jugular","calçado de segurança"] },
    { re:/espa.o confinad|esgot|silo|po.o|galeria|tanque interno/, e:["conjunto NR-33 (respirador/linha de ar)","cinturão + sistema de resgate","monitor de gases"] },
    { re:/martelet|rompedor|britad|perfuratriz|vibrat/, e:["luva antivibração","proteção auditiva dupla","óculos + protetor facial","respirador PFF2/PFF3 (sílica)"] },
    { re:/qu.mic|saneant|saneament|solvent|.cido|galvan|zincag|tratament.*.gua|laborat|piscin|dedetiz|controle de pragas|farm.cia de manipula|manipula..o de medicamentos/, e:["luva nitrílica/PVC","óculos/protetor facial","avental impermeável","respirador c/ filtro químico"] },
    { re:/poeira|cimento|s.lica|gesso|argamass|cer.mic|pedreir|servent|marcenei|serra|madeir|lixad|esmeril|rebarb|azulejis|ladrilh/, e:["respirador PFF2 (poeira)","óculos","luva","protetor auditivo"] },
    { re:/calor|forno|fundi|caldeir|siderur|metalurg/, e:["luva térmica","óculos com filtro","avental/perneira (fundição)","protetor auditivo"] },
    { re:/c.mara fria|frigor.fic|abate|congelad/, e:["vestimenta térmica","luva de malha de aço/térmica","bota antiderrapante","balaclava"] },
    { re:/sa.de|enferm|hospital|odonto|dentist|laborat.rio cl|coletad|fisioterap|biol.gic|necrot|tanatop|cuidador|creche|asb|tsb/, e:["luva de procedimento","máscara PFF2/cirúrgica","óculos/protetor facial","avental impermeável"] },
    { re:/radiolog|raio.?x|tomograf|radia..o ioniz|medicina nuclear/, e:["avental + protetor de tireoide plumbíferos","óculos plumbíferos","dosímetro individual"] },
    { re:/agr.cola|rural|agrot.xic|aplicad|tratorista|colheitad|lavoura/, e:["macacão impermeável","respirador c/ filtro químico","luva nitrílica","óculos/viseira","bota impermeável","chapéu"] },
    { re:/motoboy|motofret|entregad.*mot|motociclis/, e:["capacete","luva de pilotagem","jaqueta de proteção","joelheira/cotoveleira","calçado fechado","colete refletivo"] },
    { re:/motorist|condutor|carret|caminh|truck|munck|.nibus|\bvan\b/, e:["calçado de segurança","luva (carga)","colete refletivo","protetor auditivo (pátio)"] },
    { re:/cozinh|chef.*cozinha|padeir|confeiteir|a.ougueir/, e:["avental impermeável","luva de malha de aço/térmica","calçado antiderrapante"] },
    { re:/frentist|combust|inflam|posto|abastec/, e:["luva nitrílica","calçado antiderrapante e antiestático","protetor solar","óculos (respingo)"] },
    { re:/mec.nic|borrachei|lubrific|pneu/, e:["luva nitrílica/vaqueta","óculos","calçado de segurança","protetor auditivo"] },
    { re:/limpeza|faxin|\basg\b|servi.os gerais|zelador|higieniz|copeir|lavanderia|lavador|dom.stic|diarist|camareir/, e:["luva nitrílica/borracha","óculos (respingo)","avental/bota impermeável","calçado antiderrapante"] },
    { re:/jardin|capina|ro.ad|paisag/, e:["óculos + protetor facial","protetor auditivo","luva","perneira","calçado de segurança","protetor solar"] },
    { re:/vigilant|seguran.a patrimon/, e:["calçado de segurança","protetor auditivo (treino de tiro)"] },
    { re:/obra|constru|carpinteir|armador|pedreir|gesseir|encarregad.*obra|mestre de obra/, e:["capacete c/ jugular","óculos","luva","calçado de segurança","protetor auditivo","protetor solar"] },
    { re:/ru.do|prensa|torno|fresa|estampar|produ..o|industr|oper.*m.quina/, e:["protetor auditivo","óculos","luva","calçado de segurança"] },
    { re:/coletor|gari|res.duo|reciclag/, e:["luva de raspa/nitrílica","calçado impermeável de segurança","colete refletivo","protetor solar"] },
    { re:/empilhad|estoqu|armaz|conferent|carregad|estivad|port(u.ri|ad)/, e:["calçado de segurança","luva","colete refletivo","capacete (docas/carga)"] },
    { re:/vendedor externo|representante comercial/, e:["protetor solar FPS","óculos de proteção solar"] },
    { re:/vidraceir|vidra.aria|marmorist|granit/, e:["luva anticorte (nível alto)","mangote anticorte","óculos + protetor facial","avental de raspa","calçado de segurança","respirador PFF2 (corte a seco)"] },
    { re:/gr.fic|impress.o|offset|serigraf|flexograf/, e:["luva nitrílica (tintas/solventes)","óculos","protetor auditivo","calçado de segurança"] },
    { re:/costur|textil|t.xtil|confec..o|tecel/, e:["óculos","protetor auditivo (máquinas)","dedeira/luva anticorte (corte e risco)","máscara PFF1/PFF2 (fiapos)"] },
    { re:/cabeleireir|barbeir|manicure|pedicure|estetic|depilad|podolog/, e:["luva de procedimento","máscara PFF2 (químicos de alisamento/esmaltes)","óculos (respingo)","avental"] },
    { re:/refrigera..o|ar.condicionado|climatiza/, e:["luva de proteção","óculos","calçado de segurança","protetor auditivo","luva térmica (fluidos refrigerantes)"] },
    { re:/petr.le|offshore|plataforma mar|sonda|perfura..o de po.o/, e:["capacete c/ jugular","vestimenta antichama (FR)","óculos","protetor auditivo","luva","calçado de segurança","colete salva-vidas (embarque)"] },
    { re:/minera..o|minerad|\bmina\b|\blavras?\b|beneficiament.*min.ri/, e:["capacete c/ jugular","respirador PFF2/PFF3 (sílica)","protetor auditivo","óculos","luva","calçado de segurança","colete refletivo"] },
    { re:/a.ougue|desossa|magaref|corte de carne/, e:["luva de malha de aço","avental de malha de aço/impermeável","calçado antiderrapante","protetor auditivo (serra)"] },
    { re:/gesseir|drywall|forro/, e:["respirador PFF2 (poeira de gesso)","óculos","luva","capacete (obra)"] },
    { re:/telhadist|calheir/, e:["cinturão paraquedista + trava-quedas","capacete c/ jugular","luva anticorte","calçado de segurança"] },
    { re:/gar.om|garcon|barman|atendente de restaurante/, e:["calçado antiderrapante"] },
    { re:/repositor|mercadori|supermercad|almoxarif/, e:["calçado de segurança","luva de proteção (manuseio)","cinta/orientação ergonômica p/ carga"] },
    { re:/instalador de m.veis|montador de m.veis|planejados/, e:["luva de proteção","óculos","calçado de segurança","protetor auditivo (furadeira/serra)"] }
  ];
  var EPI_DEFAULT = ["calçado de segurança", "luva de proteção", "óculos de proteção"];

  function epiPorCargo(cargo) {
    var c = (cargo || "");
    try { c = c.normalize("NFD").replace(/[̀-ͯ]/g, ""); } catch (e) {}
    c = c.toLowerCase().replace(/\s+/g, " ").trim();
    if (!c) return { tipo: "default", epis: EPI_DEFAULT, conferir: true };
    if (EPI_ADMIN.test(c)) return { tipo: "admin", epis: [] };
    var set = [];
    EPI_GRUPOS.forEach(function (g) { if (g.re.test(c)) g.e.forEach(function (x) { if (set.indexOf(x) < 0) set.push(x); }); });
    if (!set.length) return { tipo: "default", epis: EPI_DEFAULT, conferir: true };
    return { tipo: "risco", epis: set };
  }
  function fraseEPI(r) {
    if (r.tipo === "admin") return "FUNÇÃO SEM EXPOSIÇÃO HABITUAL A AGENTES QUE EXIJAM EPI ESPECÍFICO. COLABORADOR ORIENTADO QUANTO À ERGONOMIA (POSTURA, PAUSAS, AJUSTE DO POSTO DE TRABALHO) E AO USO DOS EPIS BÁSICOS FORNECIDOS PELA EMPRESA QUANDO DA EVENTUAL CIRCULAÇÃO EM ÁREAS OPERACIONAIS (NR-6), BEM COMO À COMUNICAÇÃO IMEDIATA AO EMPREGADOR DE QUALQUER SITUAÇÃO DE RISCO PERCEBIDA.";
    var lista = r.epis.join(", ").toUpperCase();
    var s = "COLABORADOR ORIENTADO QUANTO AO USO OBRIGATÓRIO, REGULAR E CORRETO DOS EQUIPAMENTOS DE PROTEÇÃO INDIVIDUAL FORNECIDOS GRATUITAMENTE PELA EMPRESA, CONFORME NR-6, ADEQUADOS AOS RISCOS DA FUNÇÃO: " + lista + ". ORIENTADO AINDA QUE O USO É OBRIGATÓRIO, QUE DEVE ZELAR PELA GUARDA E CONSERVAÇÃO DO EPI E COMUNICAR QUALQUER DANO OU EXTRAVIO, E QUE A RECUSA INJUSTIFICADA AO USO CONSTITUI ATO FALTOSO (ART. 158, PARÁGRAFO ÚNICO, DA CLT; NR-1.4.2). A EMPRESA RESPONDE PELO FORNECIMENTO, TREINAMENTO, HIGIENIZAÇÃO, SUBSTITUIÇÃO E FISCALIZAÇÃO DO USO (NR-1 E NR-6).";
    if (r.conferir) s += " [CONFERIR O EPI ESPECÍFICO DA FUNÇÃO]";
    return s;
  }

  /* ======================= Vitais + textos dinâmicos (verbatim) ======================= */
  function _sorteia(min, max) { return min + Math.floor(Math.random() * (max - min + 1)); }
  function gerarVitais() {
    var pas = 2 * _sorteia(50, 69);
    var pp = 2 * _sorteia(15, 25);
    var pad = pas - pp;
    if (pad < 60) pad = 60;
    if (pad > 88) pad = 88;
    return { temperatura: TEXTOS.vitais.temperatura, fr: String(_sorteia(14, 20)), fc: String(_sorteia(62, 92)),
             paSistolica: String(pas), paDiastolica: String(pad) };
  }
  function _plural(n, sing, plur) { return (String(n).trim() === "1") ? sing : plur; }
  function _fmtMacos(n) {
    var r = Math.round(n * 10) / 10;
    return (r % 1 === 0) ? String(r) : r.toFixed(1).replace(".", ",");
  }
  function textoTabagismo(ex) {
    var cig = parseFloat(String(ex.fumoCig || "").replace(",", "."));
    var anos = parseFloat(String(ex.fumoAnos || "").replace(",", "."));
    if (!isNaN(cig) && cig > 0 && !isNaN(anos) && anos > 0) {
      var c = String(ex.fumoCig).trim(), a = String(ex.fumoAnos).trim();
      return "TABAGISMO ATIVO, COM CARGA TABÁGICA APROXIMADA DE " + _fmtMacos((cig / 20) * anos) +
        " ANOS-MAÇO (" + c + " " + _plural(c, "CIGARRO", "CIGARROS") + " POR DIA HÁ " + a + " " + _plural(a, "ANO", "ANOS") + ")";
    }
    return "TABAGISMO ATIVO, COM CARGA TABÁGICA APROXIMADA DE X ANOS-MAÇO";
  }
  function textoAnsiedade(ex) {
    return ex && ex.ansiedadeMed
      ? "QUADRO DE ANSIEDADE E/OU DEPRESSÃO PRÉVIO, EM ACOMPANHAMENTO REGULAR, FAZENDO USO DE MEDICAÇÃO CONTÍNUA, CLINICAMENTE ESTÁVEL, SEM CRISES RECENTES E SEM PREJUÍZO FUNCIONAL LABORAL NO MOMENTO"
      : "QUADRO DE ANSIEDADE E/OU DEPRESSÃO PRÉVIO, CLINICAMENTE ESTÁVEL, SEM USO DE MEDICAÇÃO CONTÍNUA NO MOMENTO, SEM CRISES RECENTES E SEM PREJUÍZO FUNCIONAL LABORAL";
  }
  function textoInss(ex) {
    var ano = String(ex.inssAno || "").trim();
    var mot = String(ex.inssMotivo || "").trim().toUpperCase();
    var dias = String(ex.inssDias || "").trim();
    var pAno = ano ? ("EM " + ano) : "EM ANO QUE NÃO SE RECORDA";
    var pMot = mot ? ("POR MOTIVO DE " + mot) : "POR MOTIVO QUE NÃO SOUBE INFORMAR";
    var pDias = dias ? ("PELO PERÍODO DE " + dias + " " + _plural(dias, "DIA", "DIAS")) : "POR PERÍODO QUE NÃO SE RECORDA";
    return "AFASTAMENTO PELO INSS " + pAno + ", " + pMot + ", " + pDias;
  }

  var COND_MEDICACAO = ["has", "coracao", "diabetes", "resfriados", "asma", "coluna"];

  /* ======================= Saúde da mulher (verbatim) ======================= */
  function mulherUsada(m) {
    return !!(m && (m.ciclosReg || m.menopausa || m.histerectomia || m.aco || m.amenorreia || (m.dum && m.dum.trim())));
  }
  function diasDesdeDUM(dumStr) {
    var mm = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec((dumStr || "").trim());
    if (!mm) return null;
    var dia = +mm[1], mes = +mm[2], ano = +mm[3], d = new Date(ano, mes - 1, dia);
    if (isNaN(d.getTime()) || d.getDate() !== dia || (d.getMonth() + 1) !== mes) return null;
    var hoje = new Date(); hoje.setHours(0, 0, 0, 0); d.setHours(0, 0, 0, 0);
    return Math.floor((hoje - d) / 86400000);
  }
  function atrasoMenstrual(m) {
    if (!m || m.menopausa || m.histerectomia || m.amenorreia) return false;
    var dias = diasDesdeDUM(m.dum);
    return dias != null && dias > 35;
  }
  function abrevMulher(m) {
    if (!m) return "";
    if (m.menopausa) return "Amenorreia por menop.";
    if (m.histerectomia) return "Amenorreia por hist.";
    if (m.amenorreia) return (norm(m.amenorreiaTxt) ? ("Amenorreia — " + norm(m.amenorreiaTxt)) : "Amenorreia").slice(0, 30);
    if (atrasoMenstrual(m)) return ("Menst. atrasada — DUM " + (m.dum || "").slice(0, 5)).slice(0, 30);
    var base = m.ciclosReg ? "Menst. reg." : "Menst. irreg.";
    return (base + (m.aco ? " c/ ACO" : " s/ ACO")).slice(0, 30);
  }
  function textoMulherLivre(m) {
    if (!m) return "";
    if (m.menopausa) return "REFERE MENOPAUSA, COM AMENORREIA E SEM SANGRAMENTO MENSTRUAL ATUAL; NEGA SANGRAMENTO PÓS-MENOPAUSA";
    if (m.histerectomia) return "AMENORREIA POR HISTERECTOMIA PRÉVIA, SEM INTERCORRÊNCIAS";
    if (m.amenorreia) {
      var esp = norm(m.amenorreiaTxt);
      return "REFERE AMENORREIA" + (esp ? " (" + esp.toUpperCase() + ")" : "") +
        ", JÁ DE SEU CONHECIMENTO, ORIENTADA QUANTO À INVESTIGAÇÃO E AO ACOMPANHAMENTO GINECOLÓGICO REGULAR";
    }
    var p = [m.ciclosReg ? "CICLOS MENSTRUAIS REGULARES" : "CICLOS MENSTRUAIS IRREGULARES",
             m.aco ? "EM USO DE ANTICONCEPCIONAL" : "SEM USO DE ANTICONCEPCIONAL"];
    if (m.dum && m.dum.trim()) p.push("DUM EM " + m.dum.trim());
    var s = p.join(", ");
    if (atrasoMenstrual(m)) {
      s += ", COM ATRASO MENSTRUAL (ÚLTIMA MENSTRUAÇÃO HÁ " + diasDesdeDUM(m.dum) +
        " DIAS), ORIENTADA QUANTO À INVESTIGAÇÃO E ACOMPANHAMENTO GINECOLÓGICO";
    }
    return s;
  }

  function permiteNexo(tipoId) { return tipoId === "periodico" || tipoId === "demissional" || tipoId === "mudanca"; }

  /* ======================= ANALISAR — monta a ficha inteira (fiel a montarTextos) ======================= */
  function analisar(cfg) {
    cfg = cfg || {};
    var sexo = (cfg.sexo === "mulher") ? "mulher" : "homem";
    var k = (sexo === "mulher") ? "m" : "h";
    var tipoId = cfg.tipo || "periodico";
    var palavra = TEXTOS.tipos[tipoId];
    var ids = (cfg.ids || []).slice();
    var extras = cfg.extras || {};
    var outros = (extras.outros || []).filter(function (o) { return o && norm(o.texto); });

    /* medicação (item 12) DEDUZIDA */
    var usaMedicacao = false;
    COND_MEDICACAO.forEach(function (id) { if (ids.indexOf(id) !== -1) usaMedicacao = true; });
    outros.forEach(function (o) { if (o.medica) usaMedicacao = true; });
    var temAnsiedade = ids.indexOf("ansiedade") !== -1;
    if (temAnsiedade && extras.ansiedadeMed) usaMedicacao = true;

    var idsFicha = ids.slice();
    if (usaMedicacao && idsFicha.indexOf("medicamentos") === -1) idsFicha.push("medicamentos");
    if (outros.length && idsFicha.indexOf("outras") === -1) idsFicha.push("outras");
    if (temAnsiedade && idsFicha.indexOf("outras") === -1) idsFicha.push("outras");

    /* REFERE estruturado + regexes de remoção do bloco Nega */
    var refere = [], remover = [];
    ORDEM.forEach(function (id) {
      if (ids.indexOf(id) === -1) return;
      var c = TEXTOS.condicoes[id] || TEXTOS.historico[id];
      if (!c) return;
      var txt = (id === "tabagismo") ? textoTabagismo(extras)
              : (id === "inss") ? textoInss(extras)
              : (id === "ansiedade") ? textoAnsiedade(extras)
              : c[k];
      if (txt) refere.push({ key: id, texto: txt });
      if (c.negaRe) remover.push(c.negaRe);
    });
    outros.forEach(function (o, i) {
      refere.push({ key: "outro" + i, texto: norm(o.texto).toUpperCase() + (o.medica
        ? ", EM ACOMPANHAMENTO, FAZENDO USO DE MEDICAÇÃO CONTÍNUA"
        : ", SEM USO DE MEDICAÇÃO CONTÍNUA PARA A CONDIÇÃO") });
    });
    var m = (sexo === "mulher" && mulherUsada(extras.mulher)) ? extras.mulher : null;
    if (m) { var fm = textoMulherLivre(m); if (fm) refere.push({ key: "mulher", texto: fm }); }
    if (usaMedicacao) remover.push(/medica..es cont/i);
    if (outros.length) remover.push(/outras doen.as/i);
    if (temAnsiedade) remover.push(/outras doen.as/i);

    var negas = TEXTOS.nega.split("\n").map(function (linha) {
      var out = false;
      for (var i = 0; i < remover.length; i++) { if (remover[i].test(linha)) { out = true; break; } }
      return { texto: linha, removida: out };
    });
    var nexo = (refere.length && permiteNexo(tipoId)) ? TEXTOS.nexoFechamento[k] : null;

    /* texto plano do campo Texto Livre (exatamente como o produto escreve) */
    var plano = "";
    if (refere.length) {
      plano = "*" + (sexo === "mulher" ? "COLABORADORA" : "COLABORADOR") + " REFERE:\n";
      refere.forEach(function (r, i) { plano += (i + 1) + ") " + r.texto + "\n"; });
      if (nexo) plano += "\n" + nexo + "\n";
      plano += "\n";
    }
    plano += negas.filter(function (n) { return !n.removida; }).map(function (n) { return n.texto; }).join("\n");

    /* EPI + turnos (regra fiel: EPI em todos os tipos EXCETO demissional; admissional = aviso NR-1) */
    var epiTurno = (tipoId === "admissional") ? TEXTOS.admissionalAviso[sexo] : palavra;
    var er = null, epiQuais = epiTurno;
    if (tipoId !== "demissional") { er = epiPorCargo(cfg.cargo || ""); epiQuais = fraseEPI(er) || epiTurno; }

    var obsMed = palavra + "\n\n" + TEXTOS.atestacao[k];
    var exFis = TEXTOS.exameFisico[sexo];
    var vit = gerarVitais();
    var obsDum = (sexo === "mulher") ? (m ? abrevMulher(m) : TEXTOS.negaGravidez) : null;

    var totalChars = exFis.length + plano.length + obsMed.length + (epiQuais || "").length +
                     (epiTurno || "").length + palavra.length * 2;

    return {
      sexo: sexo, k: k, tipoId: tipoId, palavra: palavra,
      refere: refere, nexo: nexo, negas: negas, fichaTexto: plano,
      idsFicha: idsFicha, usaMedicacao: usaMedicacao, temAnsiedade: temAnsiedade,
      epi: { res: er, quais: epiQuais, turnoDescreva: epiTurno },
      observacoesMedicas: obsMed, exameFisico: exFis, vitais: vit,
      obsDum: obsDum, mulher: m, dataHoje: hojeBR(), totalChars: totalChars
    };
  }

  /* Sugestões de cargo para os campos de demonstração */
  var CARGOS_SUGERIDOS = ["Soldador","Pedreiro","Eletricista (NR-10)","Técnica de enfermagem","Motoboy",
    "Motorista carreteiro","Cozinheira","Frentista","Mecânico de manutenção","Auxiliar de limpeza","Vigilante",
    "Operador de produção","Analista administrativo","Recepcionista","Vendedor externo","Açougueiro",
    "Montador de andaime (trabalho em altura)","Jardineiro","Manicure","Operador de empilhadeira","Pintor industrial"];

  return {
    TEXTOS: TEXTOS, ORDEM: ORDEM, ITEM_NUM: ITEM_NUM, SISTEMAS: SISTEMAS,
    COND_MEDICACAO: COND_MEDICACAO, CARGOS_SUGERIDOS: CARGOS_SUGERIDOS,
    analisar: analisar, epiPorCargo: epiPorCargo, fraseEPI: fraseEPI,
    gerarVitais: gerarVitais, textoTabagismo: textoTabagismo, textoAnsiedade: textoAnsiedade,
    textoInss: textoInss, textoMulherLivre: textoMulherLivre, abrevMulher: abrevMulher,
    diasDesdeDUM: diasDesdeDUM, atrasoMenstrual: atrasoMenstrual, mulherUsada: mulherUsada, hojeBR: hojeBR
  };
})();
