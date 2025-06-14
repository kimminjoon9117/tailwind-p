export default function Content({ content }) {
  return (
    <div className="flex flex-col items-start gap-[5px] ">
      <img className= "w-[300px] rounded-[10px] mb-[3px]"src={content.img} alt={content.title} />
      <span className="text-xs text-[#4166cc] border divide-solid > * + * border-[#4166cc] px-1 py-[5px] rounded-[3px]">모집중</span>
      <div className="text-[18px] font-semibold	">{content.title}</div>
      <p className="text-[12px] text-[#a0a0a0]	">{content.subtitle}</p>
    </div>
  );
}
