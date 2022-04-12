require('regenerator-runtime/runtime');

export default class Leaderboard {
  async getScores() {
    const scores = await window.contract.getScores();
    return scores.sort((a, b) => {
      a = parseInt(a.timestamp, 10);
      b = parseInt(b.timestamp, 10);
      if (a < b) {
        return 1;
      }
      if (a > b) {
        return -1;
      }
      return 0;
    });
  }

  async postScore(player, score) {
    await window.contract.saveScore(JSON.parse(`{"score": {"value": "${score}", "timestamp" : "${Date.now()/1000}" }}`));
    await window.contract.ft_mint(JSON.parse(`{"account": "${window.walletConnection.getAccountId()}", "amount" : "${score}" }`));
    return this.getScores();
  }
}