import clsx from 'clsx';
import { useSelector } from '../hooks/useSelector';
import Container from './container';
import SimpleBar from 'simplebar-react';

const PrivacyPolicy = () => {
  const token = useSelector((store) => store.authentication.token);

  const bodyPara = `<div>
      <style type="text/css">
        @import url("https://themes.googleusercontent.com/fonts/css?kit=fpjTOVmNbO4Lz34iLyptLUXza5VhXqVC6o75Eld_V98");

        ol {
          margin: 0;
          padding: 0
        }
    
        table td,
        table th {
          padding: 0
        }
    
        .c0 {
          color: #000000;
          font-weight: 400;
          text-decoration: none;
          vertical-align: baseline;
          font-size: 12pt;
          font-style: normal
        }
    
        .c9 {
          color: #000000;
          font-weight: 700;
          text-decoration: none;
          vertical-align: baseline;
          font-size: 12pt;
          font-style: normal
        }
    
        .c2 {
          padding-top: 0pt;
          padding-bottom: 0pt;
          line-height: 1.35;
          orphans: 2;
          widows: 2;
          text-align: left;
          height: 10.5pt
        }
    
        .c18 {
          font-weight: 700;
          text-decoration: none;
          vertical-align: baseline;
          font-size: 16pt;
          font-style: normal
        }
    
        .c1 {
          margin-left: 14.2pt;
          padding-top: 0pt;
          padding-bottom: 0pt;
          line-height: 1.35;
          text-align: left
        }
    
        .c11 {
          padding-top: 0pt;
          padding-bottom: 0pt;
          line-height: 1.35;
          text-align: right
        }
    
        .c16 {
          padding-top: 0pt;
          padding-bottom: 0pt;
          line-height: 1.35;
          text-align: justify
        }
    
        .c8 {
          padding-top: 0pt;
          padding-bottom: 0pt;
          line-height: 1.35;
          text-align: center
        }
    
        .c3 {
          padding-top: 0pt;
          padding-bottom: 0pt;
          line-height: 1.35;
          text-align: left
        }
    
        .c17 {
          text-decoration-skip-ink: none;
          -webkit-text-decoration-skip: none;
          text-decoration: underline
        }
    
        .c12 {
          background-color: #ffffff;
        }
    
        .c7 {
          margin-left: 31.3pt;
          padding-left: -3pt
        }
    
        .c10 {
          padding: 0;
          margin: 0
        }
    
        .c13 {
          margin-left: 42.5pt;
          text-indent: -28.5pt
        }
    
        .c14 {
          color: inherit;
          text-decoration: inherit
        }
    
        .c4 {
          margin-left: 42.5pt;
          text-indent: -28.3pt
        }
    
        .c5 {
          margin-left: 32.2pt;
          padding-left: -3.8pt
        }

        .c14 {
          font-size: 12pt;
        }

        .c15 {
          color: #000000;
          font-size: 12pt;
        }
    
        .c6 {
          height: 10.5pt
        }
    
        .title {
          padding-top: 24pt;
          color: #000000;
          font-weight: 700;
          font-size: 36pt;
          padding-bottom: 6pt;
          line-height: 1.0;
          page-break-after: avoid;
          text-align: justify
        }
    
        .subtitle {
          padding-top: 18pt;
          color: #666666;
          font-size: 24pt;
          padding-bottom: 4pt;
          line-height: 1.0;
          page-break-after: avoid;
          font-style: italic;
          text-align: justify
        }
    
        li {
          color: #000000;
          font-size: 12pt;
        }
    
        p {
          margin: 0;
          color: #000000;
          font-size: 12pt;
        }
    
        h1 {
          padding-top: 24pt;
          color: #000000;
          font-weight: 700;
          font-size: 24pt;
          padding-bottom: 6pt;
          line-height: 1.0;
          page-break-after: avoid;
          text-align: justify
        }
    
        h2 {
          padding-top: 18pt;
          color: #000000;
          font-weight: 700;
          font-size: 18pt;
          padding-bottom: 4pt;
          line-height: 1.0;
          page-break-after: avoid;
          text-align: justify
        }
    
        h3 {
          padding-top: 14pt;
          color: #000000;
          font-weight: 700;
          font-size: 14pt;
          padding-bottom: 4pt;
          line-height: 1.0;
          page-break-after: avoid;
          text-align: justify
        }
    
        h4 {
          padding-top: 12pt;
          color: #000000;
          font-weight: 700;
          font-size: 12pt;
          padding-bottom: 2pt;
          line-height: 1.0;
          page-break-after: avoid;
          text-align: justify
        }
    
        h5 {
          padding-top: 11pt;
          color: #000000;
          font-weight: 700;
          font-size: 12pt;
          padding-bottom: 2pt;
          line-height: 1.0;
          page-break-after: avoid;
          text-align: justify
        }
    
        h6 {
          padding-top: 10pt;
          color: #000000;
          font-weight: 700;
          font-size: 12pt;
          padding-bottom: 2pt;
          line-height: 1.0;
          page-break-after: avoid;
          text-align: justify
        }
    </style>

    <div class="c12">
      <p class="c2"><span class="c0"></span></p>
      <p class="c8"><span
          class="c15 c18">&#12373;&#12367;&#12425;JOB&#36865;&#20449;&#12487;&#12540;&#12479;&#21462;&#25201;&#12356;&#12395;&#38306;&#12377;&#12427;&#12509;&#12522;&#12471;&#12540;</span>
      </p>
      <p class="c6 c8"><span class="c0"></span></p>
      <p class="c3"><span
          class="c0">&#12373;&#12367;&#12425;JOB&#21033;&#29992;&#35215;&#32004;&#65288;&#20197;&#19979;&#12300;&#21033;&#29992;&#35215;&#32004;&#12301;&#12392;&#12356;&#12356;&#12414;&#12377;&#65289;&#31532;18&#26465;&#31532;1&#38917;&#12395;&#23450;&#12417;&#12427;&#36865;&#20449;&#12487;&#12540;&#12479;&#12398;&#21462;&#25201;&#12356;&#12395;&#12388;&#12356;&#12390;&#12289;&#20197;&#19979;&#12398;&#12392;&#12362;&#12426;&#12509;&#12522;&#12471;&#12540;&#65288;&#20197;&#19979;&#12300;&#26412;&#12509;&#12522;&#12471;&#12540;&#12301;&#12392;&#12356;&#12356;&#12414;&#12377;&#65289;&#12434;&#23450;&#12417;&#12414;&#12377;&#12290;&#12394;&#12362;&#12289;&#26412;&#12509;&#12522;&#12471;&#12540;&#12391;&#21029;&#27573;&#12398;&#23450;&#12417;&#12398;&#12394;&#12356;&#38480;&#12426;&#12289;&#29992;&#35486;&#12398;&#23450;&#32681;&#12399;&#21033;&#29992;&#35215;&#32004;&#12398;&#23450;&#12417;&#12395;&#24467;&#12358;&#12418;&#12398;&#12392;&#12375;&#12414;&#12377;&#12290;</span>
      </p>
      <p class="c3 c6"><span class="c0"></span></p>
      <p class="c3"><span
          class="c9">&#65297;&#65294;&#21454;&#38598;&#12377;&#12427;&#21033;&#29992;&#32773;&#24773;&#22577;&#12362;&#12424;&#12403;&#21454;&#38598;&#26041;&#27861;</span>
      </p>
      <p class="c3"><span
          class="c0">&#26412;&#12509;&#12522;&#12471;&#12540;&#12395;&#12362;&#12356;&#12390;&#12289;&#12300;&#21033;&#29992;&#32773;&#24773;&#22577;&#12301;&#12392;&#12399;&#12289;&#22865;&#32004;&#32773;&#12414;&#12383;&#12399;&#23550;&#35937;&#29305;&#23450;&#25216;&#33021;&#22806;&#22269;&#20154;&#65288;&#20197;&#19979;&#12300;&#21033;&#29992;&#32773;&#12301;&#12392;&#12356;&#12356;&#12414;&#12377;&#65289;&#12398;&#35672;&#21029;&#12395;&#20418;&#12427;&#24773;&#22577;&#12391;&#12354;&#12387;&#12390;&#12289;&#26412;&#12509;&#12522;&#12471;&#12540;&#12395;&#22522;&#12389;&#12365;&#24403;&#31038;&#12364;&#21454;&#38598;&#12377;&#12427;&#12418;&#12398;&#12434;&#24847;&#21619;&#12377;&#12427;&#12418;&#12398;&#12392;&#12375;&#12414;&#12377;&#12290;</span>
      </p>
      <p class="c3"><span
          class="c0">&#26412;&#12469;&#12540;&#12499;&#12473;&#12395;&#12362;&#12356;&#12390;&#24403;&#31038;&#12364;&#21454;&#38598;&#12377;&#12427;&#21033;&#29992;&#32773;&#24773;&#22577;&#12399;&#12289;&#12381;&#12398;&#21454;&#38598;&#26041;&#27861;&#12395;&#24540;&#12376;&#12390;&#12289;&#20197;&#19979;&#12398;&#12424;&#12358;&#12394;&#12418;&#12398;&#12392;&#12394;&#12426;&#12414;&#12377;&#12290;</span>
      </p>
      <p class="c1"><span
          class="c0">&#65288;&#65297;&#65289;&#22865;&#32004;&#32773;&#12363;&#12425;&#12372;&#25552;&#20379;&#12356;&#12383;&#12384;&#12367;&#24773;&#22577;</span>
      </p>
      <ul class="c10 lst-kix_9dazinrr83m-0 start">
        <li class="c3 c5 li-bullet-0"><span
            class="c0">&#22865;&#32004;&#32773;&#12398;&#26412;&#12469;&#12540;&#12499;&#12473;&#21033;&#29992;&#12395;&#12362;&#12369;&#12427;&#25285;&#24403;&#32773;&#12398;&#27663;&#21517;&#12289;&#24441;&#32887;&#12289;&#37096;&#32626;&#12289;&#38651;&#35441;&#30058;&#21495;&#12289;&#12513;&#12540;&#12523;&#12450;&#12489;&#12524;&#12473;&#31561;&#24403;&#35442;&#25285;&#24403;&#32773;&#12398;&#29305;&#23450;&#12395;&#38306;&#12377;&#12427;&#24773;&#22577;</span>
        </li>
        <li class="c3 c5 li-bullet-0"><span
            class="c0">&#12463;&#12524;&#12472;&#12483;&#12488;&#12459;&#12540;&#12489;&#24773;&#22577;&#12289;&#37504;&#34892;&#21475;&#24231;&#24773;&#22577;&#31561;&#27770;&#28168;&#25163;&#27573;&#12395;&#38306;&#12377;&#12427;&#24773;&#22577;</span>
        </li>
        <li class="c3 c5 li-bullet-0"><span
            class="c0">&#30003;&#36796;&#26360;&#12381;&#12398;&#20182;&#24403;&#31038;&#12364;&#23450;&#12417;&#12427;&#26041;&#27861;&#12434;&#36890;&#12376;&#12390;&#22865;&#32004;&#32773;&#12364;&#20837;&#21147;&#12414;&#12383;&#12399;&#36865;&#20449;&#12377;&#12427;&#26041;&#27861;</span>
        </li>
      </ul>
      <p class="c1"><span
          class="c0">&#65288;&#65298;&#65289;&#21033;&#29992;&#32773;&#12363;&#12425;&#12372;&#25552;&#20379;&#12356;&#12383;&#12384;&#12367;&#24773;&#22577;</span>
      </p>
      <ul class="c10 lst-kix_bdie6wau4ghe-0 start">
        <li class="c3 c7 li-bullet-1"><span
            class="c0">&#21033;&#29992;&#32773;&#12398;&#20303;&#25152;&#12289;&#27663;&#21517;&#12289;&#29983;&#24180;&#26376;&#26085;&#12289;&#38651;&#35441;&#30058;&#21495;&#12289;&#12513;&#12540;&#12523;&#12450;&#12489;&#12524;&#12473;&#65288;&#23550;&#35937;&#29305;&#23450;&#25216;&#33021;&#22806;&#22269;&#20154;&#12395;&#12354;&#12387;&#12390;&#12399;&#32887;&#27508;&#65289;&#31561;&#12398;&#21033;&#29992;&#32773;&#12395;&#38306;&#12377;&#12427;&#24773;&#22577;</span>
        </li>
      </ul>
      <p class="c3 c13"><span
          class="c0">&#65288;&#65299;&#65289;&#22865;&#32004;&#32773;&#12364;&#26412;&#12469;&#12540;&#12499;&#12473;&#12398;&#21033;&#29992;&#12395;&#12362;&#12356;&#12390;&#12289;&#20182;&#12398;&#22806;&#37096;&#12471;&#12473;&#12486;&#12512;&#12414;&#12383;&#12399;&#20182;&#12398;&#12469;&#12540;&#12499;&#12473;&#65288;&#20197;&#19979;&#21512;&#12431;&#12379;&#12390;&#12300;&#20182;&#12398;&#12469;&#12540;&#12499;&#12473;&#31561;&#12301;&#12392;&#12356;&#12356;&#12414;&#12377;&#65289;&#12392;&#36899;&#25658;&#12434;&#35377;&#21487;&#12377;&#12427;&#12371;&#12392;&#12395;&#12424;&#12426;&#12289;&#20182;&#12398;&#12469;&#12540;&#12499;&#12473;&#31561;&#12363;&#12425;&#12372;&#25552;&#20379;&#12356;&#12383;&#12384;&#12367;&#24773;&#22577;</span>
      </p>
      <ul class="c10 lst-kix_ji8crdb0ohp6-0 start">
        <li class="c3 c7 li-bullet-1"><span
            class="c0">&#12381;&#12398;&#20182;&#12289;&#20182;&#12398;&#12469;&#12540;&#12499;&#12473;&#31561;&#12398;&#35373;&#23450;&#12395;&#12424;&#12426;&#22865;&#32004;&#32773;&#12364;&#26412;&#12469;&#12540;&#12499;&#12473;&#12392;&#36899;&#25658;&#12373;&#12379;&#12390;&#21454;&#38598;&#12377;&#12427;&#12371;&#12392;&#12395;&#21516;&#24847;&#12375;&#12383;&#24773;&#22577;</span>
        </li>
      </ul>
      <p class="c3 c6"><span class="c0"></span></p>
      <p class="c3"><span class="c9">&#65298;&#65294;&#21033;&#29992;&#30446;&#30340;</span></p>
      <p class="c3"><span
          class="c0">&#26412;&#12469;&#12540;&#12499;&#12473;&#12398;&#12469;&#12540;&#12499;&#12473;&#25552;&#20379;&#12395;&#12363;&#12363;&#12431;&#12427;&#21033;&#29992;&#32773;&#24773;&#22577;&#12398;&#20855;&#20307;&#30340;&#12394;&#21033;&#29992;&#30446;&#30340;&#12399;&#20197;&#19979;&#12398;&#12392;&#12362;&#12426;&#12391;&#12377;&#12290;</span>
      </p>
      <p class="c3 c4"><span
          class="c0">&#65288;&#65297;&#65289;&#26412;&#12469;&#12540;&#12499;&#12473;&#12395;&#38306;&#12377;&#12427;&#30003;&#36796;&#12398;&#21463;&#20184;&#12362;&#12424;&#12403;&#30331;&#37682;&#12289;&#21033;&#29992;&#26009;&#37329;&#12398;&#27770;&#28168;&#35336;&#31639;&#31561;&#12289;&#21033;&#29992;&#35215;&#32004;&#12395;&#24467;&#12387;&#12383;&#26412;&#12469;&#12540;&#12499;&#12473;&#12398;&#25552;&#20379;&#12289;&#32173;&#25345;&#12289;&#20445;&#35703;&#12362;&#12424;&#12403;&#25913;&#21892;&#12398;&#12383;&#12417;</span>
      </p>
      <p class="c3 c4"><span
          class="c0">&#65288;&#65298;&#65289;&#26412;&#12469;&#12540;&#12499;&#12473;&#12395;&#38306;&#12377;&#12427;&#12372;&#26696;&#20869;&#12289;&#12362;&#21839;&#12356;&#21512;&#12431;&#12379;&#31561;&#12408;&#12398;&#23550;&#24540;&#12398;&#12383;&#12417;</span>
      </p>
      <p class="c3 c4"><span
          class="c0">&#65288;&#65299;&#65289;&#26412;&#12469;&#12540;&#12499;&#12473;&#12395;&#38306;&#12377;&#12427;&#24403;&#31038;&#12398;&#35215;&#32004;&#12289;&#12509;&#12522;&#12471;&#12540;&#31561;&#65288;&#20197;&#19979;&#12300;&#35215;&#32004;&#31561;&#12301;&#12392;&#12356;&#12356;&#12414;&#12377;&#65289;&#12395;&#36949;&#21453;&#12377;&#12427;&#34892;&#28858;&#12395;&#23550;&#24540;&#12377;&#12427;&#23550;&#24540;&#12398;&#12383;&#12417;</span>
      </p>
      <p class="c3 c4"><span
          class="c0">&#65288;&#65300;&#65289;&#26412;&#12469;&#12540;&#12499;&#12473;&#12395;&#38306;&#12377;&#12427;&#35215;&#32004;&#31561;&#12398;&#22793;&#26356;&#31561;&#12434;&#36890;&#30693;&#12377;&#12427;&#12383;&#12417;</span>
      </p>
      <p class="c3 c6"><span class="c0"></span></p>
      <p class="c3"><span class="c9">&#65299;&#65294;&#21033;&#29992;&#34920;&#26126;</span></p>
      <p class="c3 c4"><span
          class="c0">&#65288;&#65297;&#65289;&#22865;&#32004;&#32773;&#12364;&#26412;&#12469;&#12540;&#12499;&#12473;&#12398;&#21033;&#29992;&#12395;&#12354;&#12383;&#12426;&#12289;&#24403;&#31038;&#12395;&#38283;&#31034;&#12377;&#12427;&#20197;&#19979;&#12398;&#20491;&#20154;&#24773;&#22577;&#12395;&#12388;&#12356;&#12390;&#12399;&#12289;&#26412;&#12469;&#12540;&#12499;&#12473;&#12398;&#21033;&#29992;&#12420;&#21839;&#12356;&#21512;&#12431;&#12379;&#31561;&#12398;&#24517;&#35201;&#26368;&#23567;&#38480;&#12398;&#29992;&#36884;&#12395;&#12390;&#21033;&#29992;&#12377;&#12427;&#12418;&#12398;&#12392;&#12375;&#12289;&#30446;&#30340;&#22806;&#21033;&#29992;&#12399;&#34892;&#12356;&#12414;&#12379;&#12435;&#12290;</span>
      </p>
      <ul class="c10 lst-kix_w0yc6mtxbl3p-0 start">
        <li class="c3 c7 li-bullet-1"><span
            class="c0">&#22865;&#32004;&#32773;&#12395;&#25152;&#23646;&#12377;&#12427;&#23455;&#21209;&#25285;&#24403;&#32773;&#12395;&#38306;&#12377;&#12427;&#20491;&#20154;&#24773;&#22577;</span>
        </li>
        <li class="c3 c7 li-bullet-1"><span
            class="c0">&#22865;&#32004;&#32773;&#12364;&#22996;&#35351;&#12377;&#12427;&#23455;&#21209;&#25285;&#24403;&#32773;&#12395;&#38306;&#12377;&#12427;&#20491;&#20154;&#24773;&#22577;</span>
        </li>
        <li class="c3 c7 li-bullet-2"><span
            class="c0">&#12381;&#12398;&#20182;&#22865;&#32004;&#32773;&#12398;&#25351;&#31034;&#12539;&#21629;&#20196;&#12398;&#19979;&#12391;&#26412;&#12469;&#12540;&#12499;&#12473;&#12434;&#25201;&#12358;&#32773;&#12398;&#20491;&#20154;&#24773;&#22577;</span>
        </li>
      </ul>
      <p class="c3 c4"><span
          class="c0">&#65288;&#65298;&#65289;&#22865;&#32004;&#32773;&#12364;&#26412;&#12469;&#12540;&#12499;&#12473;&#12398;&#21033;&#29992;&#12434;&#36890;&#12376;&#12390;&#26412;&#12469;&#12540;&#12499;&#12473;&#12395;&#36865;&#20449;&#12373;&#12428;&#12383;&#23550;&#35937;&#29305;&#23450;&#25216;&#33021;&#22806;&#22269;&#20154;&#12398;&#20491;&#20154;&#24773;&#22577;&#12395;&#12388;&#12356;&#12390;&#12399;&#12289;&#26412;&#12469;&#12540;&#12499;&#12473;&#12398;&#21033;&#29992;&#12420;&#21839;&#12356;&#21512;&#12431;&#12379;&#31561;&#12398;&#24517;&#35201;&#26368;&#23567;&#38480;&#12398;&#29992;&#36884;&#12395;&#12390;&#21033;&#29992;&#12377;&#12427;&#12418;&#12398;&#12392;&#12375;&#12289;&#30446;&#30340;&#22806;&#21033;&#29992;&#12399;&#34892;&#12356;&#12414;&#12379;&#12435;&#12290;</span>
      </p>
      <p class="c3 c6"><span class="c0"></span></p>
      <p class="c3"><span class="c9">&#65300;&#65294;&#26412;&#12509;&#12522;&#12471;&#12540;&#12398;&#22793;&#26356;</span>
      </p>
      <p class="c3"><span
          class="c0">&#24403;&#31038;&#12399;&#12289;&#21033;&#29992;&#32773;&#24773;&#22577;&#12398;&#21462;&#25201;&#12356;&#12395;&#38306;&#12377;&#12427;&#36939;&#29992;&#29366;&#27841;&#12434;&#36969;&#23452;&#35211;&#30452;&#12375;&#12289;&#32153;&#32154;&#30340;&#12394;&#25913;&#21892;&#12395;&#21162;&#12417;&#12427;&#12418;&#12398;&#12392;&#12375;&#12289;&#24517;&#35201;&#12395;&#24540;&#12376;&#12390;&#12289;&#26412;&#12509;&#12522;&#12471;&#12540;&#12434;&#22793;&#26356;&#12377;&#12427;&#12371;&#12392;&#12364;&#12354;&#12426;&#12414;&#12377;&#12290;&#22793;&#26356;&#12375;&#12383;&#22580;&#21512;&#12395;&#12399;&#12289;&#24403;&#31038;&#12398;&#12454;&#12455;&#12502;&#12469;&#12452;&#12488;&#19978;&#12391;&#12398;&#34920;&#31034;&#12381;&#12398;&#20182;&#12398;&#36969;&#20999;&#12394;&#26041;&#27861;&#12395;&#12424;&#12426;&#21608;&#30693;&#12375;&#12289;&#12414;&#12383;&#12399;&#22865;&#32004;&#32773;&#12395;&#36890;&#30693;&#12356;&#12383;&#12375;&#12414;&#12377;&#12290;&#12383;&#12384;&#12375;&#12289;&#27861;&#20196;&#19978;&#22865;&#32004;&#32773;&#12398;&#21516;&#24847;&#12364;&#24517;&#35201;&#12392;&#12394;&#12427;&#12424;&#12358;&#12394;&#20869;&#23481;&#12398;&#22793;&#26356;&#12398;&#22580;&#21512;&#12399;&#12289;&#24403;&#31038;&#25152;&#23450;&#12398;&#26041;&#27861;&#12391;&#22865;&#32004;&#32773;&#12398;&#21516;&#24847;&#12434;&#24471;&#12427;&#12418;&#12398;&#12392;&#12375;&#12414;&#12377;&#12290;</span>
      </p>
      <p class="c3 c6"><span class="c0"></span></p>
      <p class="c3"><span class="c9">&#65301;&#65294;&#12381;&#12398;&#20182;</span></p>
      <p class="c3"><span
          class="c15">&#12381;&#12398;&#20182;&#26412;&#12509;&#12522;&#12471;&#12540;&#12395;&#23450;&#12417;&#12398;&#12394;&#12356;&#20107;&#38917;&#12399;&#12289;&#24403;&#31038;&#12503;&#12521;&#12452;&#12496;&#12471;&#12540;&#12509;&#12522;&#12471;&#12540;&#65288;</span><span
          class="c15 c17"><a class="c14"
            href="https://www.google.com/url?q=https://www.deltamarketing.co.jp/policy&amp;sa=D&amp;source=editors&amp;ust=1654502650290401&amp;usg=AOvVaw0OdQ7zeKU5CnsS_CfESb8Y">https://www.deltamarketing.co.jp/policy</a></span><span
          class="c0">&#65289;&#12362;&#12424;&#12403;&#20491;&#20154;&#24773;&#22577;&#20445;&#35703;&#12395;&#38306;&#12377;&#12427;&#27861;&#20196;&#12395;&#24467;&#12358;&#12418;&#12398;&#12392;&#12375;&#12414;&#12377;&#12290;</span>
      </p>
      <p class="c11"><span class="c0">&#20197;&#19978;</span></p>
      <p class="c3"><span class="c0">2022&#24180;3&#26376;31&#26085;&#21046;&#23450;</span></p>
      <p class="c6 c16"><span class="c0"></span></p>
    </div>
  
  </div>`;

  return (
    <Container title="プライバシーポリシー" className={clsx('max-w-[1334px] h-full pb-24', { 'pt-[104px]': !token })}>
      <div className="bg-white rounded-md border border-solid border-[#CCCCCC] p-14 mt-12 h-full overflow-hidden flex flex-col">
        <div className="flex-1 max-h-full pb-10 relative flex">
          <SimpleBar className="absolute inset-0 pr-5" autoHide={false}>
            <div dangerouslySetInnerHTML={{ __html: bodyPara }} className="" />
          </SimpleBar>
        </div>
      </div>
    </Container>
  );
};

export default PrivacyPolicy;