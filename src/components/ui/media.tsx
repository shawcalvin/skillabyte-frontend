interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    size?: string | number;
    center?: boolean;
}

export function Image({ size, center, ...props }: ImageProps) {
    const element = (
        <img {...props}
            alt={props.alt}
            className={props.className}
            style={{
                ...(size && { maxWidth: size }),
                width: "100%",
                height: "auto",
            }}
        />
    )

    if (center) {
        return (
            <div className="flex justify-center">
                {element}
            </div>
        )
    }

    return element;
}

interface VideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
    size?: string | number;
    center?: boolean;
}

export function Video({ size, center, ...props }: VideoProps) {
    const element = (
        <video
            className="rounded-md overflow-hidden"
            controls
            style={{
                ...(size && { maxWidth: size }),
                width: "100%",
                height: "auto",
            }}
            {...props}
        >
        </video>
    )

    if (center) {
        return (
            <div className="flex justify-center">
                {element}
            </div>
        );
    }

    return element;
}