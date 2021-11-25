const ErrorPage = () => {
  return (
    <section id="catalog-page">
      <img
        src="/images/404.png"
        alt="404"
        style={{
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
          width: '50%',
        }}
      />
      <h3 className="no-articles">Page Not Found!</h3>
    </section>
  );
};

export default ErrorPage;
