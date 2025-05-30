#!/usr/bin/env python3
"""
Python programm
"""
from typing import List, Union
"""
Define and annotate a function sum!_list that takes a list
"""


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """
    Returns the sum of a mixed list of integers and floats.
    """
    return sum(mxd_lst)
