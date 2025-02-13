import Image from "next/image";
const data = [
  {
    title: "Allure Dashboard",
    description:
      "Provides clear, detailed test reports with interactive visuals, simplifying result analysis and team collaboration",
  },
  {
    title: "Report Portal",
    description:
      "Centralized platform with AI/ML-enhanced consolidates reports for smarter analysis and team collaboration.",
  },
  {
    title: "Grafana Trends",
    description:
      "Grafana provides real-time test execution trend analysis with interactive dashboards for actionable insights.",
  },
  {
    title: "Debugging",
    description:
      "Seamless integration of Playwright & Cypress debugging dashboards for root cause analysis and flaky test identification",
  },
  {
    title: "Slack Notifier",
    description:
      "Channel-specific notification publisher that delivers results with dynamic project details and templated messages.",
  },
  {
    title: "gRPC Plugin",
    description:
      "Plugin automates test interactions, manages requests, and validates responses, simplifying gRPC service testing.",
  },
  {
    title: "Device Farm Plugin",
    description:
      "Connect to a locally set up static mobile device farm and execute your mobile test cases on real devices.",
  },
  {
    title: "Others",
    description:
      "Explore all available integrations and plugins by visiting this section to learn Refer more plugins they can streamline",
  },
];
const Integrations = () => {
  return (
    <section>
      <div className="container">
        <div className="my-5 wow fadeInUp text-center" data-wow-delay=".5s">
          <h2 className="text-2xl inline-block text-primary-color leading-1.2  mb-15px uppercase">
            INTEGRATIONS & PLUGINS
          </h2>
        </div>
        <div className="mb-16 wow fadeInUp text-center" data-wow-delay=".5s">
          <h1 className="text-size-38 xl:text-4xl 2xl:text-size-40 xl:leading-1.2 mb-15px">
            Connect to the way you code, design, and <br /> integrate
          </h1>
        </div>

        <div className="grid sm:grid-cols-4 sm:grid-rows-2 gap-8">
          {data.map(({ title, description }, id) => (
            <div
              key={id}
              className="bg-gray-color-3 p-8 sm:aspect-[6/5] rounded"
            >
              <Image
                className="mb-2"
                width="45"
                height="28"
                alt="slider"
                src="/img/spartify/pc.png"
              />
              <h2 className="xl:text-lg mb-2">{title}</h2>
              <p className="xl:text-sm">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Integrations;
