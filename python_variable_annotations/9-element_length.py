#!/usr/bin/env python3
"""
python programm
"""
from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """
    Returns a list of tuples with the length of each element in the input list
    """
    return [(i, len(i)) for i in lst]
