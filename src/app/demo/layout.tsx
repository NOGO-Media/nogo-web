export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            nav.fixed.z-50 { display: none !important; }
            footer.bg-gray-950 { display: none !important; }
          `,
        }}
      />
      {children}
    </>
  );
}
