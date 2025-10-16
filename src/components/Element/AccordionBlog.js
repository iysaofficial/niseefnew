import React, { useState } from "react";
import { Accordion } from "react-bootstrap";

const defaultAccordion = [
  {
    title:
      "1. Minsa, kapan kami akan mendapatkan LoA kami? Ke mana akan dikirim?",
    text: "Setelah kami menerima pendaftaran Anda, kami akan mengirimkan email konfirmasi dalam waktu 1X24 jam, dan untuk LoA akan kami kirimkan ke alamat email team leader dalam waktu 3X24 jam setelah pendaftaran.",
  },
  {
    title:
      "2. Minsa, saya sudah mendaftar satu minggu yang lalu tapi kenapa saya belum menerima LoA dan Invoice?",
    text: "Coba periksa folder spam di email ketua tim Anda, mungkin email dari tim IYSA masuk ke folder spam.",
  },
  {
    title: "3. Di mana Anda mengunggah file kompetisi, Minsa",
    text: "Tautan drive untuk mengunggah file dan tautan untuk mengunggah bukti pembayaran akan disertakan dalam faktur.",
  },
  {
    title:
      "4. Saya ingin membayar biaya pendaftaran tetapi mengapa saya tidak dapat menemukan fakturnya? dan kemana pembayarannya ditransfer?",
    text: "Ayo, apakah Anda sudah membaca LoA sampai selesai? Karena kami akan mengirimkan invoice bersama LoA tim Anda, pastikan Anda sudah membaca email dari kami sampai selesai ya! Untuk pembayaran, Anda dapat melakukan transfer ke rekening yang tertera pada invoice. Pastikan Anda membayar sesuai dengan nominal yang tertera di invoice, ya!",
  },
  {
    title:
      "5. Minsa, saya sudah membayar biaya pendaftaran. Di mana saya bisa mengunggah bukti pembayaran?",
    text: "Jika Anda telah melakukan pembayaran, Anda dapat mengunggah buktinya ke tautan yang tertera di invoice, dan pastikan Anda mengisi dan mengunggah bukti transfer dengan benar agar panitia dapat mencatatnya dengan benar pula.",
  },
  {
    title: "6. Kapan tanda terima akan dikirimkan kepada kami?",
    text: "Kami akan mengirimkan tanda terima pembayaran dalam waktu maksimal 7 hari kerja ke email ketua tim, setelah Anda mengunggah bukti pembayaran!",
  },
  {
    title:
      "7. 	Minsa, satu minggu lagi untuk penjurian, kenapa saya belum menerima jadwal presentasi tim saya?",
    text: "Jadwal presentasi peserta secara online akan kami kirimkan selambat-lambatnya 2 hari sebelum penjurian berlangsung ke grup whatsapp dan juga email ketua tim. Pastikan Anda rajin mengecek informasi yang kami berikan di grup whatsapp dan juga email ya!",
  },
];

const AccordionBlog = () => {
  const [activeDefault, setActiveDefault] = useState(0);
  return (
    <Accordion
      className="accordion dlab-accordion faq-1 box-sort-in m-b30"
      activeKey={activeDefault}
    >
      {defaultAccordion.map((d, i) => (
        <div className="panel" key={i}>
          <Accordion.Item eventKey={i}>
            <Accordion.Header
              onClick={() => setActiveDefault(activeDefault === i ? -1 : i)}
            >
              {d.title}
            </Accordion.Header>
            <Accordion.Body>
              <div className="acod-content">{d.text}</div>
            </Accordion.Body>
          </Accordion.Item>
        </div>
      ))}
    </Accordion>
  );
};

export { defaultAccordion };
export default AccordionBlog;
