import Link from 'next/link';

const FooterWidget = ({list,url}) => {
  return (
    <>
      <li><Link href={`${url}`}>{list.text}</Link></li>
    </>
  );
};

export default FooterWidget;