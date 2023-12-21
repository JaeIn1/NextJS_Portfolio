import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="bg-primary">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
