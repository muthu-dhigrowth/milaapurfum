

const featuresData = [
  {
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b85c4973-7bbe-4ed2-974d-0af69da12c5d-soapnic-wbs-webflow-io/assets/svgs/656ad8b394bb4d7d863d6c40_icon-22-5.svg?",
    title: "Free returns",
    description: "Free return delivery",
  },
  {
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b85c4973-7bbe-4ed2-974d-0af69da12c5d-soapnic-wbs-webflow-io/assets/svgs/656ad8b2171696c952c94a26_icon-23-6.svg?",
    title: "Fast delivery",
    description: "On every order",
  },
  {
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b85c4973-7bbe-4ed2-974d-0af69da12c5d-soapnic-wbs-webflow-io/assets/svgs/656ad8b382c62b584c7d507b_icon-24-7.svg?",
    title: "Order tracking",
    description: "Delivery Estimates",
  },
];

const Features = () => {
  return (
    <div className="py-[100px] bg-gradient-to-b from-[#ffaeb1] to-[#FFB39A]">
      <div className="container mx-auto max-w-[1200px] px-5">
        <div className="grid grid-cols-1 gap-y-10 text-center md:grid-cols-3 md:gap-x-6 lg:gap-x-80">
          {featuresData.map((feature, index) => (
            <div key={index} className="flex flex-col items-center font-Bitter">
              <div className="mb-4">
                <img
                  src={feature.iconSrc}
                  alt="Feature Icon"
                  width={100}
                  height={100}
                />
              </div>
              <h3 className="mb-[5px] text-lg font-bold text-primary font-Bitter">
                {feature.title}
              </h3>
              <p className="text-base font-normal text-primary font-Lato">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;