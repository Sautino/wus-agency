import FooterContactInformation from './footer-contact-information/FooterContactInformation';
import FooterVisitorAmount from './footer-visitior-amount/FooterVisitorAmount';

export default async function Footer() {
  return (
    <div className="lg:m-0 mt-8 h-24 flex justify-between text-gray-500">
      <FooterContactInformation />
      <FooterVisitorAmount />
    </div>
  );
}
