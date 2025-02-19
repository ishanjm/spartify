import ButtonPrimary from "@/components/shared/spartify/ButtonPrimary";
const PriceGrid = () => {
  return (
    <section className="container">
      <div className="wow fadeInUp text-center mt-20" data-wow-delay=".5s">
        <h1 className="text-size-38 xl:text-4xl 2xl:text-size-40 xl:leading-1.2">
          Choose the plan that’s right for you
        </h1>
      </div>
      <div className="my-5 wow fadeInUp text-center" data-wow-delay=".5s">
        <h2 className="text-2xl inline-block text-primary-color leading-1.2  mb-15px uppercase">
          INTEGRATIONS & PLUGINS
        </h2>
      </div>
      <table
        className="wow fadeInUp border-collapse border border-slate-500 w-full text-center bg-spartifyDark"
        data-wow-delay=".5s"
      >
        <thead>
          <tr>
            <th className="border border-slate-600"></th>
            <th className="border border-slate-600 py-3">
              Starter <br />$ 0 / month
              <br />
              <ButtonPrimary className="mt-2">Get Started</ButtonPrimary>
            </th>
            <th className="border border-slate-600 py-3">
              Team <br />$ 225 / month
              <br />
              <ButtonPrimary className="mt-2">Get Started</ButtonPrimary>
            </th>
            <th className="border border-slate-600 py-3">
              Business <br />$ 300 / month
              <br />
              <ButtonPrimary className="mt-2">Get Started</ButtonPrimary>
            </th>
            <th className="border border-slate-600 py-3">
              Enterprice <br />
              Let's chat
              <br />
              <ButtonPrimary className="mt-2">Get Started</ButtonPrimary>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-slate-700 py-3">Users</td>
            <td className="border border-slate-700 py-3">1</td>
            <td className="border border-slate-700 py-3">50</td>
            <td className="border border-slate-700 py-3">50</td>
            <td className="border border-slate-700 py-3">Custom</td>
          </tr>
          <tr>
            <td className="border border-slate-700 py-3">Teams</td>
            <td className="border border-slate-700 py-3">1</td>
            <td className="border border-slate-700 py-3">50</td>
            <td className="border border-slate-700 py-3">50</td>
            <td className="border border-slate-700 py-3">Custom</td>
          </tr>
          <tr>
            <td className="border border-slate-700 py-3">Projects</td>
            <td className="border border-slate-700 py-3">1</td>
            <td className="border border-slate-700 py-3">50</td>
            <td className="border border-slate-700 py-3">50</td>
            <td className="border border-slate-700 py-3">Custom</td>
          </tr>
          <tr>
            <td className="border border-slate-700 py-3">Customer Support</td>
            <td className="border border-slate-700 py-3">Community</td>
            <td className="border border-slate-700 py-3">Email</td>
            <td className="border border-slate-700 py-3">Preminum</td>
            <td className="border border-slate-700 py-3">Preminum</td>
          </tr>
          <tr>
            <td className="border border-slate-700 py-3">iPaaS + Middleware</td>
            <td className="border border-slate-700 py-3">No</td>
            <td className="border border-slate-700 py-3">Yes</td>
            <td className="border border-slate-700 py-3">Yes</td>
            <td className="border border-slate-700 py-3">Yes</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};
export default PriceGrid;
