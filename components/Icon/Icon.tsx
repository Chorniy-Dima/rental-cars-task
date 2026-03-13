type IconProps = {
  id: string;
  className?: string;
};

const SPRITE = "/svg/icons.svg";

export function Icon({ id, className }: IconProps) {
  return (
    <svg className={className} aria-hidden="true">
      <use href={`${SPRITE}#${id}`} />
    </svg>
  );
}
