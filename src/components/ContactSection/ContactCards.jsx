const contactInfo = [
    {
      iconUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d7384c8d-d83a-4f05-b29f-478e1409cb80-soapnic-wbs-webflow-io/assets/svgs/656ade2ca7d01fc94a383945_icon-26-5.svg?",
      alt: "Email Icon",
      title: "Support",
      content: "contact@milaaparfum.com",
      href: "mailto:contact@milaaparfum.com",
      isLink: true,
      TitleComponent: 'h2'
    },
    {
      iconUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d7384c8d-d83a-4f05-b29f-478e1409cb80-soapnic-wbs-webflow-io/assets/svgs/656ade2cf6e786000e378e8f_icon-25-6.svg?",
      alt: "Location Icon",
      title: "Address",
      content: " 601, Tower-1, Godrej Urban Park, Chandivali, Powai, Mumbai-400072",
      isLink: false,
      TitleComponent: 'h2'
    },
    {
      iconUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d7384c8d-d83a-4f05-b29f-478e1409cb80-soapnic-wbs-webflow-io/assets/svgs/656ade2ce9e7fe82b083ffb3_icon-27-7.svg?",
      alt: "Contact Icon",
      title: "Contact Us",
      content: "+91 76669 28596",
      href: "tel:+917666928596",
      isLink: true,
      TitleComponent: 'h3'
    }
  ];
  
  const ContactCard = ({ iconUrl, alt, title, content, href, isLink, TitleComponent }) => (
    <div className="bg-[#f5f7f0] text-card-foreground p-8 rounded-lg shadow-md flex flex-col items-center text-center">
      <img src={iconUrl} alt={alt} className="w-16 h-16 mb-6 text-primary" />
      <TitleComponent className={`font-semibold text-primary mb-4 ${TitleComponent === 'h2' ? 'text-2xl' : 'text-xl'}`}>
        {title}
      </TitleComponent>
      {isLink ? (
        <a href={href} className="text-primary hover:underline text-base">
          {content}
        </a>
      ) : (
        <div className="text-primary whitespace-pre-line text-base leading-relaxed">
          {content}
        </div>
      )}
    </div>
  );
  
  const ContactCards = () => {
    return (
      <section className="bg-transparent py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
            {contactInfo.map((card, index) => (
              <ContactCard key={index} {...card} />
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default ContactCards;