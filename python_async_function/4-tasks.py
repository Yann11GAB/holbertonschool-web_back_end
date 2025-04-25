#!/usr/bin/env python3
"""
Python programm
"""
import asyncio
from typing import List

# Import task_wait_random from the same module (adjust import if needed)
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """Executes task_wait_random n times concurrently and returns delays"""
    delays = []
    tasks = [task_wait_random(max_delay) for _ in range(n)]

    # Gather results as they become available (not in creation order)
    for task in asyncio.as_completed(tasks):
        delay = await task
        delays.append(delay)

    return delays
