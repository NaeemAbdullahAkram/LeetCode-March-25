import pandas as pd

def getDataframeSize(players: pd.DataFrame) -> List[int]:
    result = [players.shape[0], players.shape[1]]
    return result