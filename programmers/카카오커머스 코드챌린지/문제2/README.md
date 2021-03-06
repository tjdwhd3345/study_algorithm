## 문제2

### 문제 설명

미니 테트리스는 테트리스와 유사한 게임으로, 규칙이 약간 다릅니다. 이 게임에서 등장하는 모든 블록은 높이가 1인 가로 일자형 블록이며, 회전할 수 없습니다. 블록은 위에서부터 아래로 내려오며 보드 공간의 가장 낮은 층부터 쌓입니다. 주어진 블록을 모두 쌓았을 때 그 높이를 최대한 낮추는 것이 게임의 목표입니다. 단, 미니 테트리스는 보드 공간의 한층이 블록으로 꽉 차더라도 그 층을 지우지는 않습니다.

당신은 게임에서 승리하기 위해 다음과 같은 간단한 알고리즘을 사용합니다.

- 보드 공간의 가장 낮은 층의 왼쪽부터 블록을 쌓습니다.
- 내려오는 블록의 길이보다 보드 공간의 어떤 층 오른쪽에 남은 공간이 더 작아서 통과할 수 없다면, 그 층위에 블록을 쌓습니다.

보드의 가로길이 m과 내려올 블록의 길이가 순서대로 들어 있는 배열 v가 매개변수로 주어집니다. 위의 알고리즘을 따라 블록을 쌓았을 때, 쌓인 블록의 층 수를 return 하도록 solution 함수를 완성해주세요.

### 제한 조건

- m은 1 이상 1,000 이하인 자연수입니다.
- 배열 v의 길이는 1 이상 100,000 이하입니다.
- 배열 v의 원소는 1 이상 m 이하인 자연수입니다.

### 입출력 예

| m   | v         | result |
| --- | --------- | ------ |
| 4   | [2,3,1]   | 2      |
| 4   | [3,2,3,1] | 3      |

### 입출력 예 설명

**입출력 예 1**  
보드의 가로길이가 4이고, 길이가 2, 3, 1인 블록이 차례로 내려옵니다. 첫 번째 블록은 1층에 쌓입니다(가장 낮은 층이 1층입니다). 두 번째 블록은 길이가 3이고 1층의 남은 공간이 2이기 때문에 1층에 쌓이지 못하고 2층에 쌓입니다. 세 번째 블록은 길이가 1이기 때문에 2층을 통과하고 1층으로 내려가서 왼쪽으로 이동합니다.아래 그림은 블록을 쌓는 과정을 나타냅니다.

![https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/370c3496-ed8c-424b-b807-399db86b694b/tetris1.png](https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/370c3496-ed8c-424b-b807-399db86b694b/tetris1.png)

총 2개 층이 쌓였기 때문에 2를 return 합니다.

**입출력 예 2**  
보드의 가로길이가 4이고, 길이가 3, 2, 3, 1인 블록이 차례로 내려옵니다. 첫 번째 블록이 1층에 쌓입니다. 두 번째 블록은 길이가 2이고 1층의 남은 공간이 1이기 때문에 1층에 쌓이지 못하고 2층에 쌓입니다. 세 번째 블록은 길이가 3이기 때문에 2층을 통과하지 못하고 3층에 쌓입니다. 네 번째 블록은 길이가 1이므로 3층과 2층을 통과하여 1층에 쌓입니다. 1층이 꽉 찼지만, 블록을 지우지 않습니다.아래 그림은 블록을 쌓는 과정을 나타냅니다.

![https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/455354aa-a19e-4138-a919-8deca8e25517/tetris2.png](https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/455354aa-a19e-4138-a919-8deca8e25517/tetris2.png)

총 3개 층이 쌓였기 때문에 3을 return 합니다.
