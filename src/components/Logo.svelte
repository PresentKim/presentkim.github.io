<script>
    export let size = 512;
    export let round = 30;
    export let backgroundColor = "#0000";
    export let primaryColor = "#3eaf7c";
    export let seconderyColor = "#216044";
</script>

<svg xmlns="http://www.w3.org/2000/svg" width="{size}" height="{size}" viewBox="0 0 512 512">
    <rect fill="{backgroundColor}" width="480" height="480" x="16" y="16" rx="{round}" ry="{round}"/>
    <g fill="{seconderyColor}" transform="matrix(-1 0 0 1 635 6)">
        <rect width="60" height="352.8" x="-473" y="114" rx="30" ry="30" transform="matrix(-1 0 0 1 -1 -8)"/>
        <rect width="59.7" height="225" x="-399" y="173" rx="30" ry="30"
              transform="matrix(-.98441 -.17586 -.22304 .9748 -1 -8)"/>
        <rect width="60" height="215" x="-5" y="281" rx="30" ry="30" transform="scale(-1 1) rotate(75 6 -4)"/>
        <rect width="60" height="215.7" x="115" y="312" rx="30" ry="30" transform="scale(-1 1) rotate(75 6 -4)"/>
        <rect width="58.7" height="177.5" x="-322" y="77" rx="30" ry="30" transform="matrix(-1 0 0 1 -1 -8)"/>
    </g>
    <g fill="{primaryColor}" transform="translate(111 -2)">
        <rect width="60" height="352.8" x="40" y="110" rx="30" ry="30" transform="translate(-1 -8)"/>
        <rect width="60" height="215" x="123" y="-216" rx="30" ry="30" transform="rotate(75 5 -5)"/>
        <rect width="60" height="215.7" x="244" y="-185" rx="30" ry="30" transform="rotate(75 5 -5)"/>
        <rect width="58.7" height="177.5" x="191" y="73" rx="30" ry="30" transform="translate(-1 -8)"/>
    </g>
</svg>