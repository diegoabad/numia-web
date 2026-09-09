type IsoMarkProps = {
  className?: string;
};

export function IsoMark({ className = "" }: IsoMarkProps) {
  return (
    <svg
      className={`mk ${className}`.trim()}
      viewBox="0 0 296 320"
      aria-hidden="true"
      focusable="false"
    >
      <path
        className="mk-n"
        pathLength="1"
        d="M14 250V103C14 38.5 53.4 13 103.5 13C153.6 13 193 38.5 193 103V250"
      />
      <path
        className="mk-u"
        pathLength="1"
        d="M103 69V216C103 296.4 163.7 307 192.25 307C220.8 307 281.5 296.4 281.5 216V69"
      />
    </svg>
  );
}
