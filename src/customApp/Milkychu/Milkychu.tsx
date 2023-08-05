import React from "react";
import LayoutWrapper from "../components/LayoutWrapper";
import Styled from "./styled";

const BlankPage: React.FC = () => {
  const listUrlImage = [
    "https://olwwoum.iwzhtfycmhou.hath.network/h/4904104a8f4b6070ff39b3758bfc20885aaf0f0a-120496-1280-1280-jpg/keystamp=1691255700-ea477d5901;fileindex=90074990;xres=1280/ENGOFFICE_GIRL_1TH01.jpg",
    "https://ibtqaeo.qgankvrkxxiw.hath.network/h/df60d756681cef6ff911519cc398a13788cad141-155543-1280-1280-jpg/keystamp=1691255700-57b9e0870e;fileindex=90074992;xres=1280/ENGOFFICE_GIRL_1TH02.jpg",
    "https://olwwoum.iwzhtfycmhou.hath.network/h/3949c1ae1f37cea510bd0cd0060f24e31f90babd-107117-1280-1280-jpg/keystamp=1691256000-a178cde470;fileindex=90074995;xres=1280/ENGOFFICE_GIRL_1TH03.jpg",
    "https://gmccxen.raigavepdaba.hath.network:3223/h/0cc6bcffc3f0a1a906c7f2562bd9c1e02a3703af-167804-1280-1280-jpg/keystamp=1691256000-6aa537c439;fileindex=90074998;xres=1280/ENGOFFICE_GIRL_1TH04.jpg",
    "https://yirojrh.xbydcflqqbdh.hath.network:10443/h/6efbc8b81a2aa2f70cfaaedf9ad9cd3188f9130f-188071-1280-1280-jpg/keystamp=1691256000-ecfcdfc43b;fileindex=90075000;xres=1280/ENGOFFICE_GIRL_1TH05.jpg",
    "https://olwwoum.iwzhtfycmhou.hath.network/h/e22771b3fd7b62517647c78fa956902dc9f8dd52-153929-1280-1280-jpg/keystamp=1691256000-d9830fad3e;fileindex=90075002;xres=1280/ENGOFFICE_GIRL_1TH06.jpg",
    "https://jgbvpvr.kqewtlzblpyk.hath.network:1024/h/d97aeadebc9b5511fdf0ee0d95d4d6813fb5b368-178507-1280-1280-jpg/keystamp=1691256000-b296a44f61;fileindex=90075005;xres=1280/ENGOFFICE_GIRL_1TH07.jpg",
    "https://ipwsrac.ftupulhrzazm.hath.network/h/881df4c4e0dc7a1d34c8436007675d037813b469-158684-1280-1280-jpg/keystamp=1691256000-220813865f;fileindex=90075007;xres=1280/ENGOFFICE_GIRL_1TH08.jpg",
    "https://rzlakyt.xghbkxoesimv.hath.network:22333/h/a0e8faee7eb204e445ea0fe4399d47de2bbd6dd9-139175-1280-1280-jpg/keystamp=1691256000-b614317927;fileindex=90075010;xres=1280/ENGOFFICE_GIRL_1TH09.jpg",
    "https://sesobzx.scbvmbacuwkv.hath.network/h/65c307429006c7b4a1ed56b467a56889a977bf04-141381-1280-1280-jpg/keystamp=1691256000-bdf6923b3f;fileindex=90075012;xres=1280/ENGOFFICE_GIRL_1TH10.jpg",
    "https://fvifjyu.fzcliysojrek.hath.network:5673/h/f6a339e19c778dc92c51eb09927bb0f1e418b294-150756-1280-1280-jpg/keystamp=1691256000-000d6f2d16;fileindex=90075013;xres=1280/ENGOFFICE_GIRL_1TH11.jpg",
    "https://bvuzjtm.ynrcdwnjnyjd.hath.network:1024/h/e055fbbddc8e5fbed62f750e92b5ba7cece55101-134047-1280-1280-jpg/keystamp=1691256000-ca0cfb7706;fileindex=90075014;xres=1280/ENGOFFICE_GIRL_1TH12.jpg",
    "https://ohyzxkb.xghbkxoesimv.hath.network:22333/h/ce28ba6d1e2afbc1073032f0073efc764e01c56c-127981-1280-1280-jpg/keystamp=1691256000-cda99b7adf;fileindex=90075015;xres=1280/ENGOFFICE_GIRL_1TH13.jpg",
    "https://olwwoum.iwzhtfycmhou.hath.network/h/219e582fe920f917767761fbed8a58abc4a10fe8-136560-1280-1280-jpg/keystamp=1691256300-7ed5af3af2;fileindex=90075016;xres=1280/ENGOFFICE_GIRL_1TH14.jpg",
    "https://dvrmkrl.bjqxkwckpmcd.hath.network/h/33a69e55f730e25a72411ed43323e1af3e75fb85-133735-1280-1280-jpg/keystamp=1691256300-27f313a251;fileindex=90075017;xres=1280/ENGOFFICE_GIRL_1TH15.jpg",
    "https://wujoukc.czniohlcilts.hath.network:40666/h/02bf2281a64e7884cd555edd1f8522a4c2149582-159119-1280-1280-jpg/keystamp=1691256300-aef1235ca8;fileindex=90075018;xres=1280/ENGOFFICE_GIRL_1TH16.jpg",
    "https://catftqw.tvikprqajuqe.hath.network/h/25e390a1ffb2e0be4cb91e44931a88e4d34d8602-152482-1280-1280-jpg/keystamp=1691256300-68022628ca;fileindex=90075019;xres=1280/ENGOFFICE_GIRL_1TH17.jpg",
    "https://iyvygre.uqnxnkbuuujs.hath.network:7001/h/af23ebc6594ec43b4443398764fc251bcf3b8477-156419-1280-1280-jpg/keystamp=1691256300-fda2c2ce07;fileindex=90075020;xres=1280/ENGOFFICE_GIRL_1TH18.jpg",
    "https://shtemtq.ztshfhpczqrw.hath.network/h/57a8bc7dcff92feb4dbbe07ba6444fbb2cbcd4a2-159430-1280-1280-jpg/keystamp=1691256300-306f7aea5f;fileindex=90075021;xres=1280/ENGOFFICE_GIRL_1TH19.jpg",
    "https://nywfbum.ztshfhpczqrw.hath.network:2020/h/bdea2e8e6903a8b33914b3f5b91632d81f926631-157628-1280-1280-jpg/keystamp=1691256300-f9930646e5;fileindex=90075022;xres=1280/ENGOFFICE_GIRL_1TH20.jpg",
    "https://mgbaxzp.oytrqdordopt.hath.network:61601/h/856cc7150ca0a32a4726d7be445921bdf148063b-157541-1280-1280-jpg/keystamp=1691256300-dcd79f4fc8;fileindex=90075023;xres=1280/ENGOFFICE_GIRL_1TH21.jpg",
    "https://exouprk.xghbkxoesimv.hath.network:22333/h/5042d4ff3e3ca93758696005ef75d5bd18f0b771-157848-1280-1280-jpg/keystamp=1691256300-0f4cd8dc28;fileindex=90075024;xres=1280/ENGOFFICE_GIRL_1TH22.jpg",
    "https://iyhbkkw.yorripowskjx.hath.network:10240/h/f9f5b6abf283d8d773b38d403aa5cd82b5101a1c-128289-1280-1280-jpg/keystamp=1691256300-44eceebb42;fileindex=90075025;xres=1280/ENGOFFICE_GIRL_1TH23.jpg",
    "https://exouprk.xghbkxoesimv.hath.network:22333/h/bc6869d9963ed3cec04583faaae130c140ce58c6-138001-1280-1280-jpg/keystamp=1691256300-53a8b8439f;fileindex=90075026;xres=1280/ENGOFFICE_GIRL_1TH24.jpg",
    "https://irmpshx.dndsydisofud.hath.network/h/ac955981dd7feb49e5df032d7ecf5b36ae83f8e7-145783-1280-1280-jpg/keystamp=1691256300-93419f8ab6;fileindex=90075027;xres=1280/ENGOFFICE_GIRL_1TH25.jpg",
    "https://sesobzx.scbvmbacuwkv.hath.network/h/c1e272aa15940453bdcb1060c49db95d367f5c17-177165-1280-1280-jpg/keystamp=1691256300-321c39eea9;fileindex=90075028;xres=1280/ENGOFFICE_GIRL_1TH26.jpg",
    "https://asmrsqqftvbbqqaocggo.hath.network/om/90075029/150cd43714691e6c958d21045ea7e1be7f7a3fff-2064186-5000-5000-jpg/132eff800b44e5bd65a628de0e49e4ac31a667bb-135613-1280-1280-jpg/1280/kch7vyumufgjmw13qrd/ENGOFFICE_GIRL_1TH27.jpg",
    "https://ftmspnk.xghbkxoesimv.hath.network:22333/h/4f652a5b9b98e32e0645f3612b088767547c4d63-159404-1280-1280-jpg/keystamp=1691256600-967b5c0c7f;fileindex=90075030;xres=1280/ENGOFFICE_GIRL_1TH28.jpg",
    "https://ohyzxkb.xghbkxoesimv.hath.network:22333/h/71be3bed5269433b25dd5f5a28e70c9c52bf83a6-147012-1280-1280-jpg/keystamp=1691256600-81b6d22775;fileindex=90075031;xres=1280/ENGOFFICE_GIRL_1TH29.jpg",
    "https://nsxxdbb.pnywgjfbovss.hath.network/h/5ea8841ddc9ccc0ce3ae3f19ba7410a451e5f00f-129835-1280-1280-jpg/keystamp=1691256600-a807e78fe6;fileindex=90075032;xres=1280/ENGOFFICE_GIRL_1TH30.jpg",
    "https://wujoukc.czniohlcilts.hath.network:40666/h/e5eb271e344ae887779b00e03d50f356765d7740-134755-1280-1280-jpg/keystamp=1691256600-8315adab95;fileindex=90075033;xres=1280/ENGOFFICE_GIRL_1TH31.jpg",
    "https://zpeezmx.gbkrbjypsqkq.hath.network:11419/h/86d2e2e1f48509f693889d7ac2d1d9bd252d9ac4-136467-1280-1280-jpg/keystamp=1691256600-3ef3b11bac;fileindex=90075034;xres=1280/ENGOFFICE_GIRL_1TH32.jpg",
    "https://qauzgbh.pnywgjfbovss.hath.network:8443/h/d30b82251af74d2e062bef22bd89bb652a77250e-117610-1280-1280-jpg/keystamp=1691256600-b5926553b4;fileindex=90075035;xres=1280/ENGOFFICE_GIRL_1TH33.jpg",
    "https://olwwoum.iwzhtfycmhou.hath.network/h/1bf3efd889d6d4fe07746f58a9fc512e42b55a7f-113194-1280-1280-jpg/keystamp=1691256600-d0ce25274b;fileindex=90075036;xres=1280/ENGOFFICE_GIRL_1TH34.jpg",
    "https://olwwoum.iwzhtfycmhou.hath.network/h/625e430a3a0e90d6b8738951f74c035921eee0fb-130304-1280-1280-jpg/keystamp=1691256600-0508ac5bf9;fileindex=90075037;xres=1280/ENGOFFICE_GIRL_1TH35.jpg",
    "https://ylvczjm.yorripowskjx.hath.network:10240/h/2cfc95e0dfe555c7d7bc719fb0fac5dd7cec09ef-119551-1280-1280-jpg/keystamp=1691256600-7bc785c547;fileindex=90075038;xres=1280/ENGOFFICE_GIRL_1TH36.jpg",
    "https://ibtqaeo.qgankvrkxxiw.hath.network/h/f97f120ee175a995979ac34d9c4ed80abcf1b8dd-121174-1280-1280-jpg/keystamp=1691256600-5e5947042d;fileindex=90075039;xres=1280/ENGOFFICE_GIRL_1TH37.jpg",
    "https://wfezpxk.dpqtbgnopnro.hath.network:43210/h/db7018d035e73dacc3379e8f2379d97d232141c9-116550-1280-1280-jpg/keystamp=1691256600-0706e618b2;fileindex=90075040;xres=1280/ENGOFFICE_GIRL_1TH38.jpg",
    "https://uvruodq.scbvmbacuwkv.hath.network/h/9e15c22e9b1f083cedd1c7e72c5e785208e4887e-115760-1280-1280-jpg/keystamp=1691256600-23b60671c5;fileindex=90075041;xres=1280/ENGOFFICE_GIRL_1TH39.jpg",
    "https://mdlxrst.hhqdxjctedzd.hath.network:1024/h/06f2d4e117e7bcd1fce6b85362b25712ccc2b3a6-117188-1280-1280-jpg/keystamp=1691256600-452db37de6;fileindex=90075042;xres=1280/ENGOFFICE_GIRL_1TH40.jpg",
    "https://ufloslu.oytrqdordopt.hath.network:61101/h/06c2302231f4fca4b799a6fde0a27ef30971ac36-119539-1280-1280-jpg/keystamp=1691256600-e277b28302;fileindex=90075043;xres=1280/ENGOFFICE_GIRL_1TH41.jpg",
    "https://gtnjxkn.qgankvrkxxiw.hath.network/h/920a0e496ad2393f95051f7a4f79651d9089ab7b-139246-1280-1280-jpg/keystamp=1691256600-8bb1289d23;fileindex=90075044;xres=1280/ENGOFFICE_GIRL_1TH42.jpg",
    "https://uswgtnt.rjvpoihvvbwx.hath.network:48080/h/169e3066e4cc677c5715503037f7f305e9202b6d-109995-1280-1280-jpg/keystamp=1691256600-86b80b0676;fileindex=90075045;xres=1280/ENGOFFICE_GIRL_1TH43.jpg"
  ]

  return (
    <LayoutWrapper>
      <Styled>
        <div className={"list-image"}>
          {listUrlImage.map(urlImage => (
            <>
              <img src={urlImage} className={"image-single"}/>
            </>
          ))}
        </div>
      </Styled>
    </LayoutWrapper>
  )
};

export default BlankPage;