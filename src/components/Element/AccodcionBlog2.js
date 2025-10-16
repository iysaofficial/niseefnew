import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";

const defaultAccordion = [
  {
    title: "1. Kapan jadwal presentasi akan diberikan oleh panitia?",
    text: "Jadwal presentasi akan kami berikan paling lambat 2 hari sebelum penjurian berlangsung atau bisa juga lebih awal, dan akan kami kirimkan melalui grup WA dan juga email ketua tim.",
  },
  {
    title:
      "2. Aplikasi apa yang digunakan untuk presentasi online? Zoom, Google Meet, atau yang lainnya?",
    text: "Untuk penjurian online, kami selalu menggunakan aplikasi Zoom dan pastikan aplikasi Zoom Anda sudah diperbarui.",
  },
  {
    title: "3. Kapan tautan zoom akan diberikan oleh panitia?",
    text: "Kami akan memberikan tautan Zoom pada hari penjurian, dan kami akan mengirimkannya secara berkala ke grup sesuai dengan waktu presentasi tim Anda.",
  },
  {
    title:
      "4. Berapa banyak akun zoom yang dapat bergabung dan apa yang harus saya tetapkan sebagai nama saya",
    text: 'Anda dapat masuk ke Zoom dengan maksimal 5 akun peserta, dan semua akun Zoom harus mengikuti format nama yang telah kami sediakan, yaitu “Nomor Ruangan_Nama Ketua Tim_Nama Institusi',
  },
  {
    title: "5. Berapa lama para peserta akan melakukan presentasi?",
    text: "Anda akan diberikan waktu 15 menit untuk 1 sesi presentasi yang akan dibagi menjadi 2, yaitu 7 menit awal untuk presentasi dan 8 menit akhir untuk sesi tanya jawab dengan dewan juri.",
  },
  {
    title: "6. Berapa banyak juri yang akan datang ke stan peserta offline?",
    text: "Sama seperti penjurian online, akan ada 2 juri yang menilai setiap tim. Dan setelah dinilai kalian akan diberikan stiker sebagai tanda bahwa booth kalian telah dinilai, pastikan kalian mendapatkan 2 stiker",
  },
  {
    title: "7. Dapatkah kami merapikan stan kami setelah dinilai?",
    text: "Anda dapat mulai merapikan stan ketika semua tim telah selesai dinilai, jadi jika Anda telah selesai menilai, Anda dapat mengunjungi stan peserta lain terlebih dahulu.",
  },
];

const AccordionBlog2 = () => {
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
          <Accordion.Body>{d.text}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export { defaultAccordion };
export default AccordionBlog2;
