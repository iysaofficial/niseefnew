import React, { useState } from "react";
import Link from "next/link";
import Accordion from "react-bootstrap/Accordion";

const defaultAccordion = [
  {
    title: "1. Kapan pemenang akan diumumkan?",
    text: "Pengumuman pemenang diadakan pada hari terakhir setiap acara, Anda dapat mengecek tanggalnya pada jadwal yang tertera di Buku Panduan.",
  },
  {
    title: "2. Di mana kita bisa melihat hasil kemenangan?",
    text: "Anda dapat memeriksa hasil akhir di situs web resmi acara yang Anda ikuti.",
  },
  {
    title: "3. Kapan sertifikat elektronik akan dikirimkan?",
    text: "IYSA TIDAK mengirimkan E-Certificate kepada peserta Nasional atau Peserta Indonesia yang mengikuti event online. Peserta Nasional Online hanya akan menerima sertifikat dalam bentuk cetak/hardcopy yang nantinya akan dikirimkan bersama medali melalui ekspedisi JNE.",
  },
  {
    title: "4. Kapan pengiriman sertifikat peserta secara online?",
    text: "Sertifikat akan dikirimkan selambat-lambatnya satu bulan setelah pengumuman pemenang. Anda dapat mengecek secara berkala resi pengiriman yang kami kirimkan di grup Whatsapp apakah sertifikat Anda sudah terkirim atau belum.",
  },
  {
    title: "5. Di mana kami bisa mendapatkan sertifikat supervisor?",
    text: "Anda dapat melihat dan mengunduh sertifikat supervisor di situs web resmi acara yang Anda ikuti.",
  },
  {
    title: "6. Bagaimana cara melakukan penggandaan medali?",
    text: "Untuk peserta offline, Anda bisa langsung menduplikat medali di tempat setelah pengumuman pemenang berlangsung. Dan untuk peserta online, Anda dapat menduplikat medali melalui link yang kami kirimkan di grup Whatsapp, informasi duplikat medali akan kami kirimkan di grup Whatsapp paling lambat 2 hari setelah pengumuman pemenang.",
  },
];

const AccordionBlog3 = () => {
  const [activeDefault, setActiveDefault] = useState(0);

  return (
    <Accordion
      className="accordion dlab-accordion faq-1 box-sort-in m-b30"
      defaultActiveKey="0"
    >
      {defaultAccordion.map((d, i) => (
        <Accordion.Item eventKey={`${i}`} key={i}>
          <Accordion.Header
            onClick={() => setActiveDefault(activeDefault === i ? -1 : i)}
            className={` ${activeDefault === i ? "" : "collapsed"}`}
          >
            {d.title}
          </Accordion.Header>
          <Accordion.Body>
            <div className="acod-content">{d.text}</div>
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export { defaultAccordion };
export default AccordionBlog3;
