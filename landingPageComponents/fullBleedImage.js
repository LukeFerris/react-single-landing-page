export default function FullBleedImage({ imageSrcWidth1600pxHeight900px }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: "80px",
        overflow: "hidden",
      }}
    >
      <img
        className="full-bleed"
        style={{
          maxHeight: "60vh",
          objectFit: "cover",
        }}
        alt="[Alt tag for 4K photo shoot of product being used in real life]"
        src={imageSrcWidth1600pxHeight900px}
        width="1600px"
        height="900px"
      />
    </div>
  );
}
