Webflow.push(function() {
    $("#wf-form-Zip-Form").submit(function() {
        zip = document.getElementById("zip").value;
        $(document).ajaxComplete(function() {
            if (['06230'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/abington-ct';
            } else if (['19001'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/abington-pa';
            } else if (['08201', '08205'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/absecon-nj';
            } else if (['01720', '01718'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/acton';
            } else if (['04001'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/acton-me';
            } else if (['00029', 'L7J 0A1', 'L7J 0A2', 'L7J 0A3', 'L7J 0A4', 'L7J 0A5', 'L7J 0A6', 'L7J 0A7', 'L7J 0A8', 'L7J 1A1', 'L7J 1A2', 'L7J 1A3', 'L7J 1A4', 'L7J 1A5', 'L7J 1A6', 'L7J 1A7', 'L7J 1A8', 'L7J 1A9', 'L7J 1B1', 'L7J 1B2', 'L7J 1B3', 'L7J 1B4', 'L7J 1B5', 'L7J 1B6', 'L7J 1B7', 'L7J 1B8', 'L7J 1B9', 'L7J 1C1', 'L7J 1C2', 'L7J 1C3', 'L7J 1C4', 'L7J 1C5', 'L7J 1C6', 'L7J 1C7', 'L7J 1C8', 'L7J 1C9', 'L7J 1E1', 'L7J 1E2', 'L7J 1E3', 'L7J 1E4', 'L7J 1E5', 'L7J 1E6', 'L7J 1E7', 'L7J 1E8', 'L7J 1E9', 'L7J 1G1', 'L7J 1G2', 'L7J 1G3', 'L7J 1G4', 'L7J 1G5', 'L7J 1G6', 'L7J 1G7', 'L7J 1G8', 'L7J 1G9', 'L7J 1H1', 'L7J 1H2', 'L7J 1H3', 'L7J 1H4', 'L7J 1H5', 'L7J 1H6', 'L7J 1H7', 'L7J 1H8', 'L7J 1H9', 'L7J 1J1', 'L7J 1J3', 'L7J 1J4', 'L7J 1J5', 'L7J 1J6', 'L7J 1J7', 'L7J 1J8', 'L7J 1J9', 'L7J 1K1', 'L7J 1K2', 'L7J 1K3', 'L7J 1K4', 'L7J 1K5', 'L7J 1K6', 'L7J 1K7', 'L7J 1K8', 'L7J 1K9', 'L7J 1L1', 'L7J 1L2', 'L7J 1L3', 'L7J 1L4', 'L7J 1L5', 'L7J 1L6', 'L7J 1L8', 'L7J 1L9', 'L7J 1M1', 'L7J 1M2', 'L7J 1M3', 'L7J 1M4', 'L7J 1M5', 'L7J 1M6', 'L7J 1M7', 'L7J 1M8', 'L7J 1M9', 'L7J 1N1', 'L7J 1N2', 'L7J 1N3', 'L7J 1N4', 'L7J 1N5', 'L7J 1N6', 'L7J 1N7', 'L7J 1N8', 'L7J 1N9', 'L7J 1P1', 'L7J 1P2', 'L7J 1P3', 'L7J 1P4', 'L7J 1P6', 'L7J 1P7', 'L7J 1P8', 'L7J 1P9', 'L7J 1R1', 'L7J 1R2', 'L7J 1R3', 'L7J 1R4', 'L7J 1R5', 'L7J 1R6', 'L7J 1R7', 'L7J 1R8', 'L7J 1R9', 'L7J 1S1', 'L7J 1S2', 'L7J 1S3', 'L7J 1S4', 'L7J 1S5', 'L7J 1S6', 'L7J 1S7', 'L7J 1S8', 'L7J 1S9', 'L7J 1T1', 'L7J 1T2', 'L7J 1T3', 'L7J 1T4', 'L7J 1T5', 'L7J 1T6', 'L7J 1T7', 'L7J 1T8', 'L7J 1T9', 'L7J 1V1', 'L7J 1V2', 'L7J 1V3', 'L7J 1V4', 'L7J 1V5', 'L7J 1V6', 'L7J 1V7', 'L7J 1V8', 'L7J 1V9', 'L7J 1W1', 'L7J 1W2', 'L7J 1W3', 'L7J 1W4', 'L7J 1W5', 'L7J 1W6', 'L7J 1W7', 'L7J 1W8', 'L7J 1W9', 'L7J 1X1', 'L7J 1X2', 'L7J 1X3', 'L7J 1X4', 'L7J 1X5', 'L7J 1X6', 'L7J 1X7', 'L7J 1X8', 'L7J 1X9', 'L7J 1Y1', 'L7J 1Y2', 'L7J 1Y3', 'L7J 1Y4', 'L7J 1Y5', 'L7J 1Y6', 'L7J 1Y7', 'L7J 1Y8', 'L7J 1Y9', 'L7J 1Z1', 'L7J 1Z2', 'L7J 1Z3', 'L7J 1Z4', 'L7J 1Z5', 'L7J 1Z6', 'L7J 1Z7', 'L7J 1Z8', 'L7J 1Z9', 'L7J 2A1', 'L7J 2A2', 'L7J 2A3', 'L7J 2A4', 'L7J 2A5', 'L7J 2A6', 'L7J 2A7', 'L7J 2A8', 'L7J 2A9', 'L7J 2B1', 'L7J 2B2', 'L7J 2B3', 'L7J 2B4', 'L7J 2B5', 'L7J 2B6', 'L7J 2B7', 'L7J 2B8', 'L7J 2B9', 'L7J 2C1', 'L7J 2C3', 'L7J 2C4', 'L7J 2C5', 'L7J 2C6', 'L7J 2C7', 'L7J 2C8', 'L7J 2C9', 'L7J 2E1', 'L7J 2E2', 'L7J 2E3', 'L7J 2E4', 'L7J 2E5', 'L7J 2E6', 'L7J 2E7', 'L7J 2E8', 'L7J 2E9', 'L7J 2G1', 'L7J 2G2', 'L7J 2G3', 'L7J 2G4', 'L7J 2G5', 'L7J 2G6', 'L7J 2G7', 'L7J 2G8', 'L7J 2G9', 'L7J 2H1', 'L7J 2H2', 'L7J 2H3', 'L7J 2H4', 'L7J 2H5', 'L7J 2H6', 'L7J 2H7', 'L7J 2H8', 'L7J 2H9', 'L7J 2J1', 'L7J 2J2', 'L7J 2J3', 'L7J 2J4', 'L7J 2J5', 'L7J 2J6', 'L7J 2J7', 'L7J 2J8', 'L7J 2J9', 'L7J 2K1', 'L7J 2K2', 'L7J 2K3', 'L7J 2K4', 'L7J 2K5', 'L7J 2K6', 'L7J 2K7', 'L7J 2K8', 'L7J 2K9', 'L7J 2L1', 'L7J 2L2', 'L7J 2L3', 'L7J 2L4', 'L7J 2L5', 'L7J 2L6', 'L7J 2L7', 'L7J 2L8', 'L7J 2L9', 'L7J 2M1', 'L7J 2M2', 'L7J 2M3', 'L7J 2M4', 'L7J 2M6', 'L7J 2M8', 'L7J 2N1', 'L7J 2N2', 'L7J 2N3', 'L7J 2N4', 'L7J 2N5', 'L7J 2N6', 'L7J 2N7', 'L7J 2N8', 'L7J 2N9', 'L7J 2P1', 'L7J 2P2', 'L7J 2P3', 'L7J 2P4', 'L7J 2P5', 'L7J 2P6', 'L7J 2P7', 'L7J 2P8', 'L7J 2P9', 'L7J 2R1', 'L7J 2R2', 'L7J 2R3', 'L7J 2R4', 'L7J 2R5', 'L7J 2R6', 'L7J 2R7', 'L7J 2R8', 'L7J 2R9', 'L7J 2S1', 'L7J 2S2', 'L7J 2S3', 'L7J 2S4', 'L7J 2S5', 'L7J 2S6', 'L7J 2S7', 'L7J 2S8', 'L7J 2S9', 'L7J 2T1', 'L7J 2T2', 'L7J 2T3', 'L7J 2T4', 'L7J 2T5', 'L7J 2T6', 'L7J 2T7', 'L7J 2T8', 'L7J 2T9', 'L7J 2V1', 'L7J 2V2', 'L7J 2V3', 'L7J 2V5', 'L7J 2V6', 'L7J 2V7', 'L7J 2V8', 'L7J 2V9', 'L7J 2W2', 'L7J 2W3', 'L7J 2W4', 'L7J 2W5', 'L7J 2W6', 'L7J 2W7', 'L7J 2W8', 'L7J 2W9', 'L7J 2X1', 'L7J 2X2', 'L7J 2X3', 'L7J 2X4', 'L7J 2X5', 'L7J 2X6', 'L7J 2X7', 'L7J 2X8', 'L7J 2X9', 'L7J 2Y1', 'L7J 2Y2', 'L7J 2Y3', 'L7J 2Y4', 'L7J 2Y5', 'L7J 2Y6', 'L7J 2Y7', 'L7J 2Y8', 'L7J 2Y9', 'L7J 2Z1', 'L7J 2Z2', 'L7J 2Z3', 'L7J 2Z4', 'L7J 2Z5', 'L7J 2Z6', 'L7J 2Z7', 'L7J 2Z8', 'L7J 2Z9', 'L7J 3A1', 'L7J 3A2', 'L7J 3A3', 'L7J 3A4', 'L7J 3A5', 'L7J 3A6', 'L7J 3A7', 'L7J 3A8', 'L7J 3A9', 'L7J 3B1', 'L7J 3B2', 'L7J 3B3', 'L7J 3B4', 'L7J 3B5', 'L7J 3B6', 'L7J 3B7'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/acton-on';
            } else if (['02743'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/acushnet-ma';
            } else if (['29426'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/adams-run-sc';
            } else if (['16110'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/adamsville-pa';
            } else if (['02801'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/adamsville-ri';
            } else if (['62214'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/addieville-il';
            } else if (['60101'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/addison-il';
            } else if (['45001'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/addyston-oh';
            } else if (['07710'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/adelphia-nj';
            } else if (['43901'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/adena-oh';
            } else if (['16210'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/adrian-pa';
            } else if (['01001'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/agawam-ma';
            } else if (['97406'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/agness-or';
            } else if (['91301', '91376', '91377'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/agoura-hills-ca';
            } else if (['96701'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/aiea-hi';
            } else if (['62805'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/akin-il';
            } else if (['44301', '44302', '44303', '44304', '44305', '44306', '44307', '44308', '44309', '44310', '44311', '44312', '44313', '44314', '44315', '44316', '44317', '44319', '44320', '44321', '44325', '44326', '44328', '44333', '44372', '44396', '44398'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/akron-oh';
            } else if (['58830'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/alamo-nd';
            } else if (['12201', '12202', '12203', '12204', '12206', '12207', '12208', '12209', '12210', '12211', '12212', '12214', '12220', '12222', '12223', '12224', '12225', '12226', '12227', '12228', '12229', '12230', '12231', '12232', '12233', '12234', '12235', '12236', '12237', '12238', '12239', '12240', '12241', '12242', '12243', '12244', '12245', '12246', '12247', '12248', '12249', '12250', '12252', '12255', '12256', '12257', '12260', '12261', '12288'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/albany';
            } else if (['47320'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/albany-in';
            } else if (['11507'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/albertson-ny';
            } else if (['35950', '35951'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/albertville-al';
            } else if (['16401', '16475'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/albion-pa';
            } else if (['02802'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/albion-ri';
            } else if (['58831'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/alexander-nd';
            } else if (['22303', '22306', '22307', '22308', '22309', '22312', '22313', '22315', '22301', '22302', '22304', '22305', '22311', '22314', '22320', '22331', '22332', '22333', '22334', '22350', '22306', '22307', '22308', '22309', '22310', '22312', '22315'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/alexandria-va';
            } else if (['04002'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/alfred-me';
            } else if (['98001'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/algona-wa';
            } else if (['91801', '91802', '91803', '91804', '91841', '91896', '91899'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/alhambra-ca';
            } else if (['62001'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/alhambra-il';
            } else if (['77083', '77099'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/alief-tx';
            } else if (['15001'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/aliquippa-pa';
            } else if (['92656', '92698'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/aliso-viejo-ca';
            } else if (['07820'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/allamuchy-nj';
            } else if (['S0K 0C0', 'S0K 0C7'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/allan-sk';
            } else if (['43902'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/alledonia-oh';
            } else if (['97407'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/allegany-or';
            } else if (['75002', '75013'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/allen-tx';
            } else if (['07401'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/allendale-nj';
            } else if (['31301'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/allenhurst-ga';
            } else if (['07711'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/allenhurst-nj';
            } else if (['15412'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/allenport-pa';
            } else if (['08501'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/allentown-nj';
            } else if (['08720'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/allenwood-nj';
            } else if (['44601'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/alliance-oh';
            } else if (['15101'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/allison-park-pa';
            } else if (['08001'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/alloway-nj';
            } else if (['02134'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/allston-ma';
            } else if (['66401'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/alma-ks';
            } else if (['00030', 'N0B 1A0'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/alma-on';
            } else if (['58520'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/almont-nd';
            } else if (['07620'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/alpine-nj';
            } else if (['12008'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/alplaus-ny';
            } else if (['03602'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/alstead-nh';
            } else if (['95701'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/alta-ca';
            } else if (['66834'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/alta-vista-ks';
            } else if (['91001', '91003'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/altadena-ca';
            } else if (['12009'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/altamont-ny';
            } else if (['24517'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/altavista-va';
            } else if (['63732'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/altenburg-mo';
            } else if (['62905'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/alto-pass-il';
            } else if (['03810'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/alton-bay-nh';
            } else if (['62002'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/alton-il';
            } else if (['03809'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/alton-nh';
            } else if (['15710'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/alverda-pa';
            } else if (['10501'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/amawalk-ny';
            } else if (['15003'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/ambridge-pa';
            } else if (['58833'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/ambrose-nd';
            } else if (['01913'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/amesbury-ma';
            } else if (['03031'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/amherst-nh';
            } else if (['24521'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/amherst-va';
            } else if (['20106'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/amissville-va';
            } else if (['15311'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/amity-pa';
            } else if (['11701', '11708'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/amityville-ny';
            } else if (['46103'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/amo-in';
            } else if (['12010'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/amsterdam-ny';
            } else if (['43903'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/amsterdam-oh';
            } else if (['06231'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/amston-ct';
            } else if (['92801', '92802', '92803', '92804', '92805', '92806', '92807', '92808', '92809', '92814', '92815', '92816', '92817', '92825', '92850', '92899'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/anaheim-ca';
            } else if (['58710'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/anamoose-nd';
            } else if (['61720'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/anchor-il';
            } else if (['67001'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/andale-ks';
            } else if (['98303'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/anderson-island-wa';
            } else if (['67002'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/andover-ks';
            } else if (['01810', '01812', '01899', '05501', '05544'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/andover-ma';
            } else if (['03216'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/andover-nh';
            } else if (['55304'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/andover-mn';
            } else if (['07821'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/andover-nj';
            } else if (['44003'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/andover-oh';
            } else if (['48103', '48104', '48105', '48106', '48107', '48108', '48109', '48113'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/ann-arbor-mi';
            } else if (['62906'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/anna-il';
            } else if (['34216'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/anna-maria-fl';
            } else if (['55302'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/annandale-mn';
            } else if (['08801'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/annandale-nj';
            } else if (['22033'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/annandale-va';
            } else if (['95412'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/annapolis-ca';
            } else if (['63820'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/anniston-mo';
            } else if (['55303'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/anoka-mn';
            } else if (['95843'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/antelope-ca';
            } else if (['94509', '94531'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/antioch-ca';
            } else if (['58711'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/antler-nd';
            } else if (['03440'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/antrim-nh';
            } else if (['33572'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/apollo-beach-fl';
            } else if (['32703', '32704', '32712'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/apopka-fl';
            } else if (['55124'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/apple-valley-mn';
            } else if (['95703'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/applegate-ca';
            } else if (['24522'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/appomattox-va';
            } else if (['95001'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/aptos-ca';
            } else if (['35016'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/arab-al';
            } else if (['91006', '91007', '91066', '91077'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/arcadia-ca';
            } else if (['18403'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/archbald-pa';
            } else if (['55112'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/arden-hills-mn';
            } else if (['35739'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/ardmore-al';
            } else if (['10502'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/ardsley-ny';
            } else if (['10503'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/ardsley-on-hudson-ny';
            } else if (['34679'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/aripeka-fl';
            } else if (['00032', 'N0B 0A8', 'N0B 1B0', 'N0B 0A8'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/ariss-on';
            } else if (['91334'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/arleta-ca';
            } else if (['42021'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/arlington-ky';
            } else if (['02474', '02475', '02476'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/arlington-ma';
            } else if (['38002'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/arlington-tn';
            } else if (['22201', '22202', '22203', '22204', '22205', '22206', '22207', '22209', '22210', '22211', '22212', '22213', '22214', '22215', '22216', '22217', '22219', '22225', '22226', '22227', '22230', '22240', '22241', '22242', '22243', '22244', '22245', '22246'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/arlington-va';
            } else if (['15920'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/armagh-pa';
            } else if (['61721'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/armington-il';
            } else if (['10504'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/armonk-ny';
            } else if (['58835'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/arnegard-nd';
            } else if (['63010'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/arnold-mo';
            } else if (['22709'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/aroda-va';
            } else if (['61722'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/arrowsmith-il';
            } else if (['00034', 'N0G 0B9', 'N0G 1A0'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/arthur-on';
            } else if (['08802'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/asbury-nj';
            } else if (['07712'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/asbury-park-nj';
            } else if (['28420'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/ash-nc';
            } else if (['02804'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/ashaway-ri';
            } else if (['01430'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/ashburnham-ma';
            } else if (['01431'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/ashby-ma';
            } else if (['06278'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/ashford-ct';
            } else if (['98304'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/ashford-wa';
            } else if (['01721'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/ashland-ma';
            } else if (['03217'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/ashland-nh';
            } else if (['44805'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/ashland-oh';
            } else if (['62808'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/ashley-il';
            } else if (['43003'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/ashley-oh';
            } else if (['44004', '44005'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/ashtabula-oh';
            } else if (['83420'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/ashton-id';
            } else if (['20861'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/ashton-md';
            } else if (['00153', 'K0A 1B0'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/ashton-on';
            } else if (['03441'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/ashuelot-nh';
            } else if (['15215'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/aspinwall-pa';
            } else if (['02339'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/assinippi-ma';
            } else if (['02702'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/assonet-ma';
            } else if (['97103'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/astoria-or';
            } else if (['08004'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/atco-nj';
            } else if (['35611', '35612', '35613', '35614'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/athens-al';
            } else if (['01331'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/athol-ma';
            } else if (['03811'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/atkinson-nh';
            } else if (['11509'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/atlantic-beach-ny';
            } else if (['08401', '08404', '08405'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/atlantic-city-nj';
            } else if (['07716'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/atlantic-highlands-nj';
            } else if (['16111'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/atlantic-pa';
            } else if (['48411'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/atlas-mi';
            } else if (['15004'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/atlasburg-pa';
            } else if (['36502', '36503', '36504'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/atmore-al';
            } else if (['02703'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/attleboro';
            } else if (['02763'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/attleboro-falls-ma';
            } else if (['44201'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/atwater-oh';
            } else if (['92811', '92812'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/atwood-ca';
            } else if (['95602', '95603', '95604'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/auburn-ca';
            } else if (['66402'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/auburn-ks';
            } else if (['01501'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/auburn-ma';
            } else if (['04210', '04211', '04212'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/auburn-me';
            } else if (['03032'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/auburn-nh';
            } else if (['98002', '98071', '98092'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/auburn-wa';
            } else if (['56511'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/audubon-mn';
            } else if (['08106'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/audubon-nj';
            } else if (['67010'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/augusta-ks';
            } else if (['63332'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/augusta-mo';
            } else if (['07822'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/augusta-nj';
            } else if (['24411'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/augusta-springs-va';
            } else if (['15713'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/aultman-pa';
            } else if (['44202'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/aurora-oh';
            } else if (['78752', '78753', '73344', '78701', '78703', '78704', '78705', '78708', '78709', '78710', '78711', '78712', '78714', '78715', '78716', '78718', '78720', '78722', '78735', '78736', '78737', '78738', '78739', '78741', '78742', '78744', '78745', '78747', '78748', '78749', '78755', '78756', '78757', '78758', '78760', '78761', '78762', '78763', '78764', '78765', '78766', '78767', '78768', '78772', '78773', '78774', '78778', '78779', '78780', '78781', '78783', '78785', '78789', '78702', '78717', '78719', '78721', '78723', '78724', '78725', '78726', '78727', '78728', '78729', '78730', '78731', '78732', '78733', '78734', '78750', '78751', '78754', '78759', '78713', '73301', '78769', '78799'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/austin';
            } else if (['81410'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/austin-co';
            } else if (['44010'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/austinburg-oh';
            } else if (['62907'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/ava-il';
            } else if (['08202'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/avalon-nj';
            } else if (['15312'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/avella-pa';
            } else if (['07001'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/avenel-nj';
            } else if (['12018'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/averill-park-ny';
            } else if (['07717'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/avon-by-the-sea-nj';
            } else if (['06001'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/avon-ct';
            } else if (['46123'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/avon-in';
            } else if (['02322'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/avon-ma';
            } else if (['85392', '85323'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/avondale-az';
            } else if (['29429'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/awendaw-sc';
            } else if (['76624'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/axtell-tx';
            } else if (['01432'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/ayer-ma';
            } else if (['29511'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/aynor-sc';
            } else if (['00035', 'N0B 0B7'].indexOf(zip) !== -1) {
                location.href = 'https://rooterman.com/ayr-on';
            } else {
                location.href = 'https://www.google.com/';
            }
        });
    })
});