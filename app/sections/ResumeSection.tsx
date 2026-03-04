import PixelButton from '@/app/components/ui/PixelButton'

export default function ResumeSection() {
  return (
    <div className="space-y-3 text-[0.55rem]">
      <PixelButton size="sm" className="w-full">
        📥 DOWNLOAD PDF
      </PixelButton>
      <p>or view online: <a href="#" className="text-amber-300">resume.pixel.quest</a></p>
      <p>✦ skills: unity, react, pixelart, game design, typescript, rust</p>
    </div>
  )
}