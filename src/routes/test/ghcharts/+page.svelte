<script lang="ts">
  import { onMount } from 'svelte';

  let totalCount: number = -1;
  let accColspan = 0;
  let months: { label: string; margin: number }[] = Array(12)
    .fill(0)
    .map(() => {
      return {
        label: 'Loading...',
        margin: 0
      };
    });
  let weeks: { level: number; date: string; count: number }[][] = Array(7)
    .fill(0)
    .map(() =>
      Array(52)
        .fill(0)
        .map(() => ({ level: 0, date: '1997-01-01', count: 0 }))
    );

  function getTags(body: string, tagName: string): string[] {
    const matches = body.matchAll(
      new RegExp(`<${tagName}[\\w\\W]*?>[\\w\\W]*?<\/${tagName}>`, 'ig')
    );
    return [...matches].map((match) => match[0]);
  }

  onMount(async () => {
    let accCount = 0;
    const response = await fetch(
      'https://api.allorigins.win/raw?url=https://github.com/users/PresentKim/contributions'
    );
    const html = (await response.text()).replaceAll(/[\r\n]/g, '');
    const thead = getTags(html, 'thead')[0];
    const tbody = getTags(html, 'tbody')[0];

    getTags(thead, 'td')
      .slice(1) //Remove empty first box
      .forEach((td, index) => {
        /** Example td data
         * "<td class="ContributionCalendar-label" colspan="4" style="position: relative">
         *    <span class="sr-only">September</span>
         *    <span aria-hidden="true" style="position: absolute; top: 0">Sep</span>
         * </td>"
         */
        const labelMatch = td.match(/>([a-z]{3})</i);
        const colspanMatch = td.match(/colspan="([0-9])"/i);
        if (labelMatch && colspanMatch) {
          months[index] = { label: labelMatch[1], margin: accColspan };
          accColspan += Number(colspanMatch[1]);
        }
      });
    getTags(tbody, 'tr').forEach((tr, y) =>
      getTags(tr, 'td')
        .slice(1)
        .forEach((td, x) => {
          /** Example td data
           * "<td tabindex="0" data-ix="0" aria-selected="false"
           *    style="width: 10px" class="ContributionCalendar-day"
           *    data-date="2022-08-28" data-level="0">
           *    <span class="sr-only">No contributions on Sunday, August 28, 2022</span>
           * </td>"
           */
          const levelMatch = td.match(/data-level="([0-9])"/i);
          const dateMatch = td.match(/data-date="([0-9\-]+)"/i);
          const countMatch = td.match(/([0-9]+)? contribution/i);
          if (levelMatch && dateMatch && countMatch) {
            weeks[y][x] = {
              level: Number(levelMatch[1]),
              date: dateMatch[1],
              count: Number(countMatch[1] ?? 0)
            };
            weeks[y][x].count;
          } else if (weeks[y][x]) {
            weeks[y][x].level = -1;
          }
        })
    );
    totalCount = accCount;
  });
</script>

<div id="gh-charts" class="self-center">
  <p>{totalCount} contributions in the last year</p>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1065 175"
    class="w-[200%] border-2 border-mono-500"
  >
    <g class="fill-mono-500" style="font-size:14px">
      {#each months as { label, margin }, x}
        <text xmlns="http://www.w3.org/2000/svg" x={5 + margin * 20} y={15}
          >{label}
        </text>
      {/each}
    </g>
    <g class="rounded-xl" rx="10">
      {#each weeks as days, y}
        {#each days as { level, date, count }, x}
          <rect
            data-level={level}
            data-date={date}
            data-count={count}
            x={5 + x * 20}
            y={30 + y * 20}
            width="15"
            height="15"
          />
        {/each}
      {/each}
    </g>
  </svg>
</div>

<style lang="scss" global>
  #gh-charts {
    rect {
      fill: transparent;
    }
    rect[data-level='0'] {
      fill: #eeeeee;
    }
    rect[data-level='1'] {
      fill: #c6e48b;
    }
    rect[data-level='2'] {
      fill: #7bc96f;
    }
    rect[data-level='3'] {
      fill: #c6e48b;
    }
    rect[data-level='4'] {
      fill: #239a3b;
    }

    .dark {
      rect[data-level='0'] {
        fill: #161b22;
      }
      rect[data-level='1'] {
        fill: #0e4429;
      }
      rect[data-level='2'] {
        fill: #006d32;
      }
      rect[data-level='3'] {
        fill: #26a641;
      }
      rect[data-level='4'] {
        fill: #39d353;
      }
    }
  }
</style>
