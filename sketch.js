/**
This is a derivative work with code from the book Generative Gestaltung Copyright 2018. http://www.generative-gestaltung.de Generative Gestaltung Hermann Schmidt, Mainz, 2018, Benedikt Groß, Hartmut Bohnacker, Julia Laub, Claudius Lazzeroni with contributions by Joey Lee and Niels Poldervaart. Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and
limitations under the License.
**/

/**
 * pixel mapping. each pixel is translated into a new element (letter)
 *
 * KEYS
 * 1                 : toggle font size mode (dynamic/static)
 * 2                 : toggle font color mode (color/b&w)
 * arrow up/down     : maximal fontsize +/-
 * arrow right/left  : minimal fontsize +/-
 * s                 : save png
 */
'use strict';

var inputText = 'Deklarasyon ng kandidatura para sa pagkapangulo ni Kgg. Leni Robredo. Magandang umaga sa inyong lahat. Puno ng taimtim na pagninilay ang mga nakaraang araw. Salamat sa lahat ng nagparating ng suporta, sumabay sa dasal, at umunawa sa pinagdaanan kong discernment process ukol sa halalan ng 2022. Sa prosesong ito, walang naging lugar ang ego o pansarili kong interes. Mabigat na responsibilidad ang pagkapangulo, at hindi ito puwedeng ibase sa ambisyon o sa pag-uudyok ng iba. Pagdating sa pamumuno, iisa lang dapat ang konsiderasyon: Ano ba ang pinakamabuti para sa bansa natin? Lalong matimbang ang tanong na ito dahil sa napakalaking hamon ng pandemya. Ang dami nang namatay. Marami sa atin, ginawa na ang lahat na puwedeng gawin para lang mailigtas ang mahal sa buhay; para makahanap ng pambili ng pagkain; para maitawid ang sarili sa kinabukasan. Mahaba ang daang tinahak natin para makarating sa araw na ito. Hindi ko binalak tumakbo. Iniisip ko nang bumalik na lang sa probinsiya namin, kung saan marami rin ang umaasa sa aking tumulong magpanday ng pagbabago. Nitong mga nakaraang linggo, nakipagpulong tayo sa iba’t ibang mga personalidad. Nilinaw ko sa kanila: Handa akong magbigay-daan at tumulong na lang. May alok din silang sumanib na lang ako bilang kandidato, o bilang bahagi ng kanilang administrasyon sakaling manalo sila. Ang tugon ko, hindi ito tungkol sa posisyon; hindi tayo nakikipag-usap para makipagtransaksiyon. Ang pinakamahalaga, magkaisa kami – sa prinsipyo, sa pangarap para sa bansa, at sa landas na dapat tahakin tungo sa katuparan ng mga ito. Nilinaw ko rin: Buhay at kinabukasan ng Pilipino ang pinag-uusapan natin ngayon. Pinipilahan ang mga ospital, dumadaing ang mga health workers, at nagugutom ang mga nawalan ng trabaho. Samantala, bilyon-bilyong piso ang inilagay sa mga kuwestiyonableng kontrata habang milyon-milyong Pilipino ang naghihikahos. Alam na nating lahat ito: Kaya maraming nagugutom, naghihirap, at namamatay, dahil sariling interes at hindi kapakanan ng Pilipino ang number one priority ng mga nasa poder. Ang kawalan ng maayos na pamamahala ang ugat ng ating maraming mga problema, at ito ang kailangang wakasan. At kung gusto nating tunay na makalaya sa ganitong sitwasyon, hindi lang apelyido ng mga nasa poder ’yung dapat palitan; ’yung korupsiyon, ’yung incompetence, ’yung kawalan ng malasakit, kailangang palitan ng matino at mahusay na pamumuno. Handa dapat tayong iwaksi nang buong-buo ang mga agenda, ang mga interes, ang mismong mga tao at klase ng pulitika na sanhi ng pinagdaraanan ng bansa natin ngayon. Kung hindi ka lilinya nang malinaw, kung makikipagkompromiso ka, kung hindi mo man lang kayang sabihin na mali ang mali – nakaninong panig ka ba talaga? Malinaw kung nasaan ako: Nasa panig tayo ng mga sinasagad ang lahat para iraos ang sarili, ang pamilya, ang kapuwa, mula sa pandemyang ito. Iba-iba man ang konteksto natin, pamilyar sa ating lahat ang pakiramdam ng pagiging nasa laylayan; ang paghahanap ng makakapitan, ’yung handa kang kumatok sa kahit saang pintuan, ’yung halos isigaw mo sa kahit sinong makakarinig: Tulong. Nanay ako hindi lang ng tatlong anak ko, kundi ng buong bansa. At alam ng lahat ng ibang nanay, ng lahat ng ibang magulang, kung ano ang kaya nilang pagdaanan at isakripisyo sa ngalan ng kanilang mga anak. Naaalala ko nga ’yung maraming kaso ng domestic abuse na hinawakan ko noong nag-aabogado pa ako. Kung paanong tiniis ng mga kliyente ko ang pang-aabuso at pananakit ng asawa nila. Kapag tinanong mo kung bakit, iisa ang sagot: Alang-alang sa mga anak nila. At naaalala ko kapag, sa wakas, pinili na nilang lumaya – kapag nahanap nila ang tapang na mag-empake, bitbitin ang mga bata, at gawin ang unang hakbang papalabas ng pinto nila. Dahil natauhan na sila na, kung hindi sila maglalakas ng loob, mamanahin lang ng mga anak nila ang pagdurusa. Ina akong nakikita ang pagdurusa ng minamahal kong bansa. Naniniwala ako: Ang pag-ibig, nasusukat hindi lang sa pagtitiis, kundi sa kahandaang lumaban, kahit gaano kahirap, para matapos na ang pagtitiis. Ang nagmamahal, kailangang ipaglaban ang minamahal.Buong-buo ang loob ko ngayon: Kailangan nating palayain ang sarili mula sa kasalukuyang sitwasyon. Lalaban ako; lalaban tayo. Inihahain ko ang aking sarili bilang kandidato sa pagkapangulo sa halalan ng 2022.Malinaw sa lahat ang hamon na kinakaharap natin. Nakita na nating lahat ang pagsisinungaling at panggigipit na kayang gawin ng iba para maabot ang mga layunin nila. Nasa kanila ang pera, makinarya, isang buong estrukturang kayang magpalaganap ng anumang kuwentong gusto nilang palabasin. Pero hindi kayang tabunan ng kahit na anong ingay ang katotohanan: Kung parehong uri ng pamamahala at pareho ang pagkatao ng mga magwawagi sa araw ng halalan, wala tayong aasahang pagbabago. Dito tayo poposisyon. \’Yung pagod, \’yung pakiramdam na parang wala kang kalaban-laban, na parang nagawa mo na ang lahat pero kulang pa rin, \’yung pagnanasang makaraos ng taumbayan, bibigyan natin ng bago at positibong anyo.Gagawin natin itong paninindigan, gagawin nating enerhiya. Tatalunin natin ang luma at bulok na klase ng pulitika. Ibabalik natin sa kamay ng karaniwang Pilipino ang kakayahang magdala ng pagbabago. Alam kong marami sa inyo ang ilang buwan nang kumikilos nang kusa tungo sa layuning ito. Ramdam na ramdam ko ang tiwalang kaloob ’nyo sa akin. Sinasabi ko ngayon: Buong-buo rin ang tiwala ko sa inyo. Kaya tinatawag ko kayo: Gisingin ang natutulog pang lakas. Tumindig kayo; tinitiyak ko, mayroon ding titindig sa tabi ninyo. Kumausap ng labas sa nakasanayan; palawakin pa ang hanay. Ihayag ang katotohanan na sa kabila ng mga limitasyon, sa kabila ng panggigipit. Sa maliit na tanggapan pa lang natin dito sa Office of the Vice President, napakarami na nating nagawa para makatulong: ang mga pabahay, ang ayuda at medical at livelihood assistance, ang lingap sa mga nasalanta, ang pailaw at classrooms at dorms, ang Vaccine Express, Swab Cab, Bayanihan e-Konsulta, Bayanihan e-Skuwela, TrabaHOPE, Community Marts, free shuttle services, at mga libreng PPE at napakarami pang ibang nagawa gamit ang pinagsanib nating lakas. Kung naipatupad natin ang lahat ng ito; kung nakarating ang tulong natin sa Agutaya, hanggang San Remigio, hanggang sa ground zero ng Marawi kahit ginigipit tayo, imagine kung ano pa ang kaya nating gawin, kung saan pa ang kaya nating marating, kung maitututok ang buong enerhiya ng gobyerno sa tangi nitong dapat iniintindi: ang kapakanan ng taumbayan. Anim na taon ang nakaraan, tinanggap ko ang hamon na tumakbo sa pagka-bise presidente. Ngayon, sasabak tayo sa mas malaking laban. Panata ko ngayon: Ibubuhos ko nang buong-buo ang aking lakas, hindi lang hanggang sa halalan kundi hanggang sa mga natitirang araw ko, para ipaglaban ang Pilipinas ng ating mga pangarap – isang lipunan kung saan, kapag nagbanat ka ng buto, kapag ginawa mo ang lahat ng kaya mo, makaaasa ka sa ginhawa at pag-asenso; kung saan, kapag may nadapa, may sasalo sa iyo, may aakay sa iyo patayo; kung saan ang mga plano para sa edukasyon, transportasyon, pagkain, kalusugan, katarungang panlipunan ay naipapatupad dahil may gobyernong matino at mahusay, gobyernong tapat at may pananagutan, gobyernong tunay na inuuna ang interes ng taumbayan.May landas tungo sa kinabukasang ito. Pero hindi ito maaabot sa pagwawalang-kibo kapag may nangyayaring hindi tama. Hindi ito puwedeng iasa sa iba habang nanonood ka lang; hindi puwedeng pumikit na lang at umasang pagdilat natin nagbago na ang mundo. Ang kinabukasan, pinipili, pinagsisikapan, ipinaglalaban. Kailangan nating piliing humakbang.Heto ako ngayon, humahakbang. Ipaglalaban ko kayo hanggang dulo. Itataya ko ang lahat; ibubuhos ko ang lahat na kayang ibuhos. Sama-sama tayong tumaya sa laban na ito. Buong bansa tayong tumungo sa isang kinabukasang mas patas at mas makatao; kung saan ang bawat Pilipino ay may pagkakataong umasenso; kung saan ang lakas ng bawat isa ay nagiging nagkakaisang lakas ng lahat – lakas na dadaig sa anumang krisis, anumang hamon, lakas na magiging simula ng ating kolektibong pagbangon. Buong-buo ang tiwala ko, magtatagumpay tayo. Buong-buo pa rin ang pananalig ko sa Diyos at sambayanang Pilipino. Maraming salamat. Mabuhay ang Pilipinas.';
var fontSizeMax = 20;
var fontSizeMin = 10;
var spacing = 12; // line height
var kerning = 0.5; // between letters

var fontSizeStatic = false;
var blackAndWhite = false;

var img;

function preload() {
  img = loadImage('data/pic.png');
}

function setup() {
  createCanvas(533, 796);
  textFont('Lato');
  textSize(10);
  textAlign(LEFT, CENTER);
  print(img.width + ' • ' + img.height);
}

function draw() {
  background(255);

  var x = 0;
  var y = 10;
  var counter = 0;

  while (y < height) {
    // translate position (display) to position (image)
    img.loadPixels();
    // get current color
    var imgX = round(map(x, 0, width, 0, img.width));
    var imgY = round(map(y, 0, height, 0, img.height));
    var c = color(img.get(imgX, imgY));
    var greyscale = round(red(c) * 0.222 + green(c) * 0.707 + blue(c) * 0.071);

    push();
    translate(x, y);

    if (fontSizeStatic) {
      textSize(fontSizeMax);
      if (blackAndWhite) {
        fill(greyscale);
      } else {
        fill(c);
      }
    } else {
      // greyscale to fontsize
      var fontSize = map(greyscale, 0, 255, fontSizeMax, fontSizeMin);
      fontSize = max(fontSize, 1);
      textSize(fontSize);
      if (blackAndWhite) {
        fill(0);
      } else {
        fill(c);
      }
    }

    var letter = inputText.charAt(counter);
    text(letter, 0, 0);
    var letterWidth = textWidth(letter) + kerning;
    // for the next letter ... x + letter width
    x += letterWidth;

    pop();

    // linebreaks
    if (x + letterWidth >= width) {
      x = 0;
      y += spacing;
    }

    counter++;
    if (counter >= inputText.length) {
      counter = 0;
    }
  }
  noLoop();
}

function keyReleased() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
  // change render mode
  if (key == '1') fontSizeStatic = !fontSizeStatic;
  // change color style
  if (key == '2') blackAndWhite = !blackAndWhite;
  print('fontSizeMin: ' + fontSizeMin + ', fontSizeMax: ' + fontSizeMax + ', fontSizeStatic: ' + fontSizeStatic + ', blackAndWhite: ' + blackAndWhite);
  loop();
}

function keyPressed() {
  // change fontSizeMax with arrow keys up/down
  if (keyCode == UP_ARROW) fontSizeMax += 2;
  if (keyCode == DOWN_ARROW) fontSizeMax -= 2;
  // change fontSizeMin with arrow keys left/right
  if (keyCode == RIGHT_ARROW) fontSizeMin += 2;
  if (keyCode == LEFT_ARROW) fontSizeMin -= 2;
  loop();
}
