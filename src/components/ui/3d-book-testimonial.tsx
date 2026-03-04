import React, { useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { useMediaQuery } from '@react-hook/media-query';

interface Testimonial {
    image?: string;
    text: string;
    name: string;
    jobtitle: string;
    rating: number;
}

interface ComponentProps {
    testimonials: Testimonial[];
}

export const Component = ({ testimonials }: ComponentProps) => {

    const book = useRef<typeof HTMLFlipBook>(null);

    const isSmallScreen = useMediaQuery('(min-width: 640px)');
    const smallerDevice = !isSmallScreen;

    const handleFlip = (pageNum: number) => {
        (book.current as any)?.pageFlip()?.flip(pageNum);
        (book.current as any)?.pageFlip()?.flipNext(false);
    }

    return (
        <div className="w-full text-black h-[500px] md:h-[600px] flex justify-center items-center py-10 scale-[0.8] sm:scale-95 md:scale-100 transition-transform duration-500 overflow-hidden">
            <HTMLFlipBook
                ref={book}
                width={smallerDevice ? 280 : 300}
                height={smallerDevice ? 420 : 450}
                showCover={true}
                usePortrait={smallerDevice}
                className="shadow-2xl"
                style={{}}
                startPage={0}
                size={'fixed'}
                minWidth={0}
                maxWidth={0}
                minHeight={0}
                maxHeight={0}
                drawShadow={true}
                flippingTime={1000}
                startZIndex={0}
                autoSize={false}
                maxShadowOpacity={0.3}
                mobileScrollSupport={true}
                clickEventForward={true}
                useMouseEvents={true}
                swipeDistance={30}
                showPageCorners={true}
                disableFlipByClick={false}>

                {/* --- Cover --- */}
                <div className="relative bg-[#0D0D0D] border border-white/10 rounded-lg p-8 text-white flex flex-col items-center justify-center shadow-2xl cursor-grab h-full">
                    <div className="size-16 bg-primary flex items-center justify-center rounded-2xl mb-8 rotate-12">
                        <span className="material-symbols-outlined text-black text-3xl font-black">groups</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl mb-12 text-center relative z-10 font-black tracking-tighter uppercase">Our Team</h1>
                    <div className="w-full h-1 bg-white/20 mb-6 relative z-10"></div>
                    <div className='text-center'>
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary text-center leading-relaxed">
                            The brilliant minds <br /> behind the work
                        </span>
                    </div>
                </div>

                {/* --- Index --- */}
                <div className="w-full h-full flex flex-col justify-start items-start bg-zinc-100 border border-gray-300 box-border p-8">
                    <div className="text-start text-[#0D0D0D] font-black uppercase text-xs tracking-[0.2em] mb-8 border-b border-black/10 w-full pb-2">Index</div>
                    <div className="w-full">
                        <ol className="flex flex-col gap-4 w-full">
                            {testimonials.map((testimonial, index) => (
                                <React.Fragment key={index}>
                                    <div className="flex justify-between w-full border-b border-black/5 pb-1">
                                        <li onClick={() => handleFlip(index + 2)} className="flex justify-start items-center text-[10px] font-black uppercase tracking-wider cursor-pointer hover:text-primary transition-colors gap-2">
                                            <img src={testimonial.image || ''} alt='image' className='size-5 rounded-full object-cover filter grayscale' />
                                            {testimonial.name}
                                        </li>
                                        <li className="flex justify-end text-[10px] items-center font-mono text-slate-400">{index + 2}</li>
                                    </div>
                                </React.Fragment>
                            ))}
                        </ol>
                    </div>
                </div>

                {/* --- Member Pages --- */}
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-full h-full flex flex-col items-center bg-zinc-50 border border-gray-300 box-border p-8 cursor-grab overflow-hidden">
                        <div className="w-full text-right text-[10px] font-mono text-slate-400 mb-6">0{index + 2}</div>

                        <div className='flex justify-center items-center mb-6'>
                            <img src={testimonial.image || ''} alt='image' className='size-24 rounded-full object-cover shadow-xl border-4 border-white' />
                        </div>

                        <div className='flex flex-col justify-center items-center text-center mb-6'>
                            <span className="font-black text-xl uppercase tracking-tighter text-black">{testimonial.name}</span>
                            <span className='text-primary text-[10px] font-black uppercase tracking-widest mt-1'>{testimonial.jobtitle}</span>
                        </div>

                        <div className='text-xs text-center text-slate-600 font-medium leading-relaxed italic'>
                            "{testimonial.text}"
                        </div>

                        <div className='mt-auto pt-8 flex justify-center items-center gap-1'>
                            {[...Array(5)].map((_, i) => (
                                <span key={i} className="material-symbols-outlined text-[14px] text-primary">star</span>
                            ))}
                        </div>
                    </div>
                ))}

                {/* --- Back Cover --- */}
                <div className="bg-black border border-white/10 p-12 text-white flex flex-col items-center justify-center h-full">
                    <h1 className="text-3xl font-black mb-4 text-center uppercase tracking-tighter">Join Us</h1>
                    <div className="w-12 h-1 bg-primary mb-6"></div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-primary text-center leading-relaxed">
                        We're always looking <br /> for elite talent.
                    </p>
                </div>

            </HTMLFlipBook>
        </div>
    );
}
